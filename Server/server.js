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
app.use((err, req, res, text) => {
    console.log(err.stack);
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
const {select, insertInto, values, from, where, update, set, as, group, by, and, union, DELETE} = sql_keywords;
// These variables store their corresponding values as column names in the tables
const {idCol, fullNameCol, companyCol, phoneNumberCol, emailCol, hostCol, positionCol, signIn, signOut, day, month, year, Status} = tables.visitors.colums;
const {idCol1, fullNameCol1, emailCol1, positionCol1, phoneNumberCol1, passwordCol1} = tables.employees.colums;
const {emailCol2, passwordCol2} = tables.administrators.colums;

//route for rendering employees name in the select option of the form
app.get("/employeeName", (req, res) => {
    const {fullNameCol} = tables.employees.colums;
    const selectEmployeesNameQuery = `${select} ${fullNameCol1} ${from} ${employeesTable}`;
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
    const selectVisitorListQuery = `${select} ${idCol}, ${fullNameCol}, ${emailCol}, ${companyCol}, ${hostCol}, ${signIn}, ${signOut} ${from} ${visitorsTable}`;
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
    const selectVisitorListQuery = `${select} ${idCol}, ${fullNameCol}, ${emailCol}, ${phoneNumberCol}, ${companyCol}, ${positionCol}, ${hostCol}, ${signIn}, ${signOut} ${from} ${visitorsTable}`;
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
app.get("/edit/:id", (req, res) =>{
    const {id} = req.params;
    const selectVisitorQuery = `${select} ${fullNameCol}, ${positionCol}, ${emailCol}, ${phoneNumberCol} ${from} ${visitorsTable} ${where} ${idCol} = ${id}`;
    db.query(selectVisitorQuery, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            const visitorData = rows[0];
            console.log(visitorData);
            res.status(200).send(visitorData);
        }
    });
});

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
    const {name, company, tel, email, position, host, timestamp,status} = req.body;
    const timeIn = new Date(timestamp);
    const DAY = moment(timestamp,"YYYY/MM/DD").date();
    const MONTH = moment(timestamp,"YYYY/MM/DD").format("MMMM");
    const YEAR = moment(timestamp,"YYYY/MM/DD").format("YYYY");
    const insertVisitorQuery = `${insertInto} ${visitorsTable} (${fullNameCol}, ${companyCol}, ${phoneNumberCol}, ${emailCol}, ${hostCol}, ${positionCol}, ${signIn}, ${day}, ${month}, ${year}, ${Status}) ${values} (?,?,?,?,?,?,?,?,?,?,?)`;

    db.query(insertVisitorQuery, [name, company, tel, email, host, position, timeIn.toLocaleTimeString(), DAY, MONTH, YEAR, status], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            console.log("visitor added.");
            res.status(201).send(result);

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'vilogtext@gmail.com',
                    pass: 'vilog2022'
                }
            });

            const mailOptions = {
                from: 'vilogtext@gmail.com',
                to: email,
                subject: "Message from vilogtext@gmail.com: ViLog checkIn",
                text: "This is the message"
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

//route for Employee's authentication
app.post("/dashboard", (req, res) =>{
    const {userEmail, password} = req.body;
    const selectQuery = `${select} ${emailCol2}, ${passwordCol2} ${from} ${administratorsTable} ${where} ${emailCol2} = ? ${and} ${passwordCol2} = ?
            ${union} ${select} ${emailCol1}, ${passwordCol1} ${from} ${employeesTable} ${where} ${emailCol1} = ? ${and} ${passwordCol1} = ?`;

    if(userEmail && password){
        db.query(selectQuery, [userEmail, password], (err, result, fields) =>{
            if(err) throw err;
            if(result.length > 0 && result){
                req.session.loggedIn = true;
                req.session.useremail = userEmail;
                res.status(200).send("Logged in");
            }else{
                throw new Error("Invalid username and password");
            }
            res.end();
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
                throw new Error("Invalid username and password");
            }
            res.end();
        });
    }else{
        res.send("Please enter your username and password");
    }
});

// route for adding an employee
app.post("/adminPage/addEmployee", (req, res) => {
    const {name, email, tel, position, password} = req.body;
    const insertEmployeeQuery = `${insertInto} ${employeesTable} (${fullNameCol1}, ${emailCol1}, ${phoneNumberCol1}, ${positionCol1}, ${passwordCol1}) ${values} (?,?,?,?,?)`;
    db.query(insertEmployeeQuery, [name, email, tel, position, password], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Employee added.");
            res.status(201).send(result);
        }
    });
});

//route for updating an employee's details
app.put("/adminPage/updateEmployee", (req, res) => {
    const {id, name, email, tel, position, password} = req.body;
    const updateEmployeeQuery = `${update} ${employeesTable} ${set} ${fullNameCol1} = ?, ${emailCol1} = ?, ${phoneNumberCol1} = ?, ${positionCol1} = ?, ${passwordCol1} = ? ${where} ${idCol1} = ?`;
    db.query(updateEmployeeQuery, [name, email, tel, position, password, id], (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Employee updated.");
            res.status(200).send(result);
        }
    });
});

// route for editting the visitor
app.put("/updateVisit", (req, res) =>{
    const {id} = req.params;
    const updateVisitorQuery = ``;
});

//route for deleting an employee
app.delete("/adminPage/deleteEmployee", (req, res)=>{
    const {id} = req.body;
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
app.delete("/deleteVisit", (req, res) =>{
    const {id} = req.body;
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