const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/database_connection");
const sql_keywords = require("./config/sql_keywords");
const tables = require("./config/tables");
const path = require("path");
const session = require("express-session");
const moment = require("moment");
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

dotenv.config({path:'../.env'});
const app = express();
const port = process.env.PORT || 5000;
console.log(process.env.PORT);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// added these line of codes in case of server error
app.use((err, req, res, text, next) => {
    console.log(err.stack);
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
    res.type('text/plain');
    res.status(500).send('Internal server error 500');
});

//checking database connection
db.getConnection((err, connection) => {
    if(err){
        console.log(`Database connection failed.\n Error: ${JSON.stringify(err)}`);
    }else{
        console.log("Database connection succeded");
    }
    if(connection) connection.release();
    return;
});  

const visitorsTable = tables.visitors.name; 
const employeesTable = tables.employees.name;
const administratorsTable = tables.administrators.name;
// These variables store their corresponding values as sql keywords
const {select, insertInto, values, from, where, update, set, as, group, by, and, union, DELETE, InnerJoin, on} = sql_keywords;
// These variables store their corresponding values as column names in the tables
const {idCol, fullNameCol, companyCol, phoneNumberCol, emailCol, hostCol, positionCol, signIn, signOut, day, month, year, passwordCol} = tables.visitors.colums;
const {idCol1, fullNameCol1, emailCol1, positionCol1, phoneNumberCol1, passwordCol1} = tables.employees.colums;
const {emailCol2, passwordCol2} = tables.administrators.colums;

//route for rendering employees name in the select option of the form
app.get("/employeeName", (req, res) => {
    const {fullNameCol} = tables.employees.colums;
    const selectEmployeesNameQuery = `${select} ${idCol1}, ${fullNameCol1} ${from} ${employeesTable}`;
    db.query(selectEmployeesNameQuery, (err, rows) =>{
        if(err){
            console.log(err); 
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for retrieving the visitors log in the host page
app.get("/host", (req, res) => {
    const selectVisitorListQuery = `${select} v.${idCol}, v.${fullNameCol}, v.${emailCol}, v.${phoneNumberCol}, v.${companyCol}, v.${positionCol}, e.${fullNameCol1}, v.${signIn}, v.${signOut} ${from} ${visitorsTable} v ${InnerJoin} ${employeesTable} e ${on} v.${hostCol} = e.${idCol1}`;
    db.query(selectVisitorListQuery, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for retrieving the visitors log in the admin page
app.get("/adminPage/visitorsLog", (req, res) =>{
    const selectVisitorListQuery = `${select} v.${idCol}, v.${fullNameCol}, v.${emailCol}, v.${phoneNumberCol}, v.${companyCol}, v.${positionCol}, e.${fullNameCol1}, v.${signIn}, v.${signOut} ${from} ${visitorsTable} v ${InnerJoin} ${employeesTable} e ${on} v.${hostCol} = e.${idCol1}`;
    const y = db.query(selectVisitorListQuery, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for retrieving the employees data in the admin page
app.get("/adminPage/employeeList", (req, res) =>{
    const selectEmployeesQuery = `${select} * ${from} ${employeesTable}`;
    db.query(selectEmployeesQuery, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for getting the visitor data in the edit page
// app.get("/edit/:id", (req, res) =>{
//     const {id} = req.params;
//     const selectVisitorQuery = `${select} ${fullNameCol}, ${positionCol}, ${emailCol}, ${phoneNumberCol} ${from} ${visitorsTable} ${where} ${idCol} = ${id}`;
//     db.query(selectVisitorQuery, (err, rows) =>{
//         if(err){
//             console.log(err);
//         }else{
//             const visitorData = rows[0];
//             console.log(visitorData);
//             res.status(200).send(visitorData);
//         }
//     });
// });

// route for the graph
app.get("/dashboardPage/graph", (req, res) =>{
    const selectQuery = `${select} ${month}, COUNT(${idCol}) ${as} Visit ${from} ${visitorsTable} ${group} ${by} ${month}`;
    db.query(selectQuery, (err, rows) => {
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for adding visitors
app.post("/", (req, res) => {
    const {name, company, tel, email, position, host, timestamp, password} = req.body;
    const timeIn = new Date(timestamp);
    const DAY = moment(timestamp,"YYYY/MM/DD").date();
    const MONTH = moment(timestamp,"YYYY/MM/DD").format("MMMM");
    const YEAR = moment(timestamp,"YYYY/MM/DD").format("YYYY");
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const insertVisitorQuery = `${insertInto} ${visitorsTable} (${fullNameCol}, ${companyCol}, ${phoneNumberCol}, ${emailCol}, ${hostCol}, ${positionCol}, ${signIn}, ${day}, ${month}, ${year}, ${passwordCol}) ${values} (?,?,?,?,?,?,?,?,?,?,?)`;
    const selectEmployeeEmailQuery = `${select} ${fullNameCol1}, ${emailCol1} ${from} ${employeesTable} ${where} ${idCol1} = ?`;
    db.query(insertVisitorQuery, [name, company, tel, email, host, position, `checked in on ${timeIn.toLocaleDateString()} at ${timeIn.toLocaleTimeString()}`, DAY, MONTH, YEAR, hash], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            console.log("visitor added.");
            res.status(201).send(result);
        }
    });

    db.query(selectEmployeeEmailQuery, [host], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result[0]);

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'vilogtext@gmail.com',
                    pass: 'vilog2022'
                }
            });

            const mailOptions = {
                from: 'vilogtext@gmail.com',
                to: result[0].Email,
                subject: "Message from vilogtext@gmail.com: ViLog checkIn",
                text: `Hello ${result[0].Full_Name}. Your visitor ${name} is waiting for you.`
            };
            
            transporter.sendMail(mailOptions, (err, info)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(`Email sent: ${info.response}`);
                }
            });
        }
    });
});

app.post("/visitorLogin", (req, res)=>{
    const{email, password, position, host, timestamp} = req.body;
    const SelectQuery = `${select} * ${from} ${visitorsTable} ${where} ${emailCol} = "${email}"`;
    if(email){
        db.query(SelectQuery, async(err, result)=>{
            const e = await bcrypt.compare(password, result[0].Password);
            if(err){
                console.log(err);
            }else{
               if(e){
                   console.log(result[0]);
                   const DAY = moment(timestamp,"YYYY/MM/DD").date();
                   const MONTH = moment(timestamp,"YYYY/MM/DD").format("MMMM");
                   const YEAR = moment(timestamp,"YYYY/MM/DD").format("YYYY");
                   const salt = bcrypt.genSaltSync(saltRounds);
                   const hash = bcrypt.hashSync(password, salt);
                   const timeIn = new Date(timestamp);
                   const insert = `${insertInto} ${visitorsTable} (${fullNameCol}, ${companyCol}, ${phoneNumberCol}, ${emailCol}, ${hostCol}, ${positionCol}, ${signIn}, ${day}, ${month}, ${year}, ${passwordCol}) ${values} (?,?,?,?,?,?,?,?,?,?,?)`;
                   db.query(insert, [result[0].Full_name, result[0].Company, result[0].Phone_Number, email, host, position, `checked in on ${timeIn.toLocaleDateString()} at ${timeIn.toLocaleTimeString()}`, DAY, MONTH, YEAR, hash], (err, rslt)=>{
                       if(err){
                           console.log(err);
                       }else{
                           console.log("Visitors added.");
                           res.send(rslt);
                       }
                   });
               }else{
                   console.log("Wrong password");
               }
            }
        })
    }else{
        console.log("Invalid username");
    }
});

//route for Employee's authentication
app.post("/dashboard", (req, res) =>{
    const {userEmail, password} = req.body;
    const selectQuery = `${select} ${emailCol2}, ${passwordCol2} ${from} ${administratorsTable} ${where} ${emailCol2} = "${userEmail}" ${and} ${passwordCol2} = "${password}" ${union} ${select} ${emailCol1}, ${passwordCol1} ${from} ${employeesTable} ${where} ${emailCol1} = "${userEmail}" ${and} ${passwordCol1} = "${password}"`;

    if(userEmail && password){
        db.query(selectQuery, (err, result, fields) =>{
            if(err) console.log(err);
            if(result.length > 0 && result){
                req.session.loggedIn = true;
                req.session.useremail = userEmail;
                res.status(200).send("Logged in");
            }else{
                console.log("Invalid username and password");
            }
            console.log(result);
        });
    }else{
        res.send("Please enter your username and password");
    }
});

//route for administrators authentication
app.post("/admin", (req, res) =>{
    const {userEmail, password} = req.body;
    const selectQuery = `${select} * ${from} ${administratorsTable} ${where} ${emailCol2} = ? ${and} ${passwordCol2} = ?`;
    if(userEmail && password){
        db.query(selectQuery, [userEmail, password], (err, result, fields) =>{
            if(err) throw err;
            if(result.length > 0){
                req.session.loggedIn = true;
                req.session.useremail = userEmail;
                res.status(200).send("Logged in");
            }else{
                console.log("Invalid username and password");
            }
            res.end();
        });
    }else{
        res.send("Please enter your username and password");
    }
});

// route for adding an employee
app.post("/adminPage/addEmployee", (req, res) => {
    const {Full_Name, Email, Phone_Number, Position, Password} = req.body;
    
    const insertEmployeeQuery = `${insertInto} ${employeesTable} (${fullNameCol1}, ${emailCol1}, ${phoneNumberCol1}, ${positionCol1}, ${passwordCol1}) ${values} (?,?,?,?,?)`;
    db.query(insertEmployeeQuery, [Full_Name, Email, Phone_Number, Position, Password], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Employee added.");
            res.status(201).send(result);
        }
    });
});

//route for updating an employee's details
app.put("/adminPage/updateEmployee/:id", (req, res) => {

    const {id} = req.params;
    console.log(id);
    const {Full_Name, Email, Phone_Number, Position, Password} = req.body;
    console.log(req.body)
    const updateEmployeeQuery = `${update} ${employeesTable} ${set} ${fullNameCol1} = ?, ${emailCol1} = ?, ${phoneNumberCol1} = ?, ${positionCol1} = ?, ${passwordCol1} = ? ${where} ${idCol1} = ?`;
    db.query(updateEmployeeQuery, [Full_Name, Email, Phone_Number, Position, Password, id], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Employee updated.");
            res.status(200).send(result);
        }
    });
});

// route for editting the visitor
app.put("/updateVisit/:id", (req, res) =>{
    const {id} = req.params;
    const {Full_name, Email, Time_In, Time_Out, Phone_Number, Company, Position, Full_Name} = req.body;
    const updateVisitorQuery = `${update} ${visitorsTable} ${set} ${fullNameCol} = ?, ${emailCol} = ?, ${signIn} = ?, ${signOut} = ?, ${phoneNumberCol} = ?, ${companyCol} = ?, ${positionCol} = ? ${where} ${idCol} = ?`;
    db.query(updateVisitorQuery, [Full_Name, Email, Time_In, Time_Out, Phone_Number, Company, Position, id], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            console.log("Visitor's log updated.");
            res.status(200).send(result);
        }
    });
});

//route for deleting an employee
app.delete("/adminPage/deleteEmployee/:id", (req, res)=>{
    const {id} = req.params;
    const deleteEmployeeQuery = `${DELETE} ${from} ${employeesTable} ${where} ${idCol1} = ?`;
    db.query(deleteEmployeeQuery, [id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log("Employee deleted");
            res.status(200).send(result)
        }
    });
});

//route for deleting
app.delete("/deleteVisit/:id", (req, res) =>{
    const {id} = req.params;
    const deleteVisitQuery = `${DELETE} ${from} ${visitorsTable} ${where} ${idCol} = ?`;
    db.query(deleteVisitQuery, [id], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Visitor deleted");
            res.status(200).send(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});