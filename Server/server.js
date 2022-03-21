const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/database_connection");
const sql_keywords = require("./config/sql_keywords");
const tables = require("./config/tables");

dotenv.config({path:'../.env'});
const app = express();
const port = process.env.PORT || 5000;
console.log(process.env.PORT);
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

// added these line of codes in case of server error
app.use((err, req, res, text) => {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500).send('Internal server error 500');
});

//testing database connection
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
// These variables store their corresponding values as sql keywords
const {select, insertInto, values, from, where, update, set} = sql_keywords;
// These variables store their corresponding values as column names in the visitors table
const {idCol, fullNameCol, companyCol, phoneNumberCol, emailCol, hostCol, positionCol, signIn, signOut} = tables.visitors.colums;

//route for rendering employees name in the select option of the form
app.get("/employeeName", (req, res) => {
    const {fullNameCol} = tables.employees.colums;
    const selectEmployeesNameQuery = `${select} ${fullNameCol} ${from} ${employeesTable}`;
    db.query(selectEmployeesNameQuery, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for retrieving the list of visitors in the host page
app.get("/host", (req, res) => {
    const selectVisitorListQuery = `${select} ${id}, ${fullNameCol}, ${emailCol}, ${companyCol}, ${hostCol}, ${signIn}, ${signOut} ${from} ${visitorsTable}`;
    db.query(selectVisitorListQuery, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for retrieving the list of visitors in the admin page
app.get("/adminPage", (req, res) =>{
    const selectVisitorListQuery = `${select} ${id}, ${fullNameCol}, ${emailCol}, ${companyCol}, ${hostCol}, ${signIn}, ${signOut} ${from} ${visitorsTable}`;
    db.query(selectVisitorListQuery, (err, rows) =>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
});

//route for get the visitor data in the edit page
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

app.get("/dashboardPage", (req, res) =>{
    
});

app.put("/edit/:id", (req, res) =>{
    const {id} = req.params;
    const updateVisitorQuery = ``;
});

//route for adding visitors
app.post("/", (req, res) => {
    const {name, company, tel, email, position, host} = req.body;
    const insertVisitorQuery = `${insertInto} ${visitorsTable} (${fullNameCol}, ${companyCol}, ${phoneNumberCol}, ${emailCol}, ${hostCol}, ${positionCol}) ${values} (?,?,?,?,?,?)`;

    db.query(insertVisitorQuery, [name, company, tel, email, host, position], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            console.log("visitor added.");
            res.status(201).send(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});