const express = require("express");
//const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/database_connection");
const sql_keywords = require("./config/sql_keywords");
const tables = require("./config/tables");

const app = express();
const port = process.env.PORT || 3000;
//app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json())

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
const {select, insertInto, values, from} = sql_keywords;
// These variables store their corresponding values as column names in the visitors table
const {fullNameCol, companyCol, phoneNumberCol, emailCol, hostCol, positionCol} = tables.visitors.colums;

app.get("/", (req, res) => {
    const {fullNameCol} = tables.employees.colums;
    const selectEmployeesNameQuery = `${select} ${fullNameCol} ${from} ${employeesTable}`;
    db.query(selectEmployeesNameQuery, (err, rows, fields) =>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.status(200).send(rows);
        }
    });
})

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