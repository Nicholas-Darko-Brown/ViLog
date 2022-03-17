const express = require("express");
//const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/database_connection");
const sql_keywords = require("./config/sql_keywords");
const tables = require("./config/tables");
const app = express();


//app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

db.connect((err) => {
    if(err){
        console.log(`Database connection failed.\n Error: ${JSON.stringify(err)}`);
    }else{
        console.log("Database connection succeded");
    }
});

const visitorsTable = tables.visitors.name; 
const employeesTable = tables.employees.name;
// These variables store their corresponding values as sql keywords
const {select, insertInto, values, from} = sql_keywords;
// These variables store their corresponding values as column names in the visitors table
const {fullNameCol, companyCol, phoneNumberCol, emailCol, hostCol, positionCol} = tables.visitors.colums;

app.get("/", (req, res) => {
    const {fullNameCol} = tables.employees.colums;
    const selectEmployeesQuery = `${select} ${fullNameCol} ${from} ${employeesTable}`;
    db.query(selectEmployeesQuery, (err, rows, fields) =>{
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

//  const port = process.env.PORT || 3001;
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});