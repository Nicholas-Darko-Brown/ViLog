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

const visitorsTable = tables.visitors.name;
const {select, insertInto, values} = sql_keywords;
const {fullNameCol, companyCol, phoneNumberCol, emailCol, hostCol, positionCol} = tables.visitors.colums;


app.post("/", (req, res) => {
    const {name, company, tel, email, position, host} = req.body;
    const insertVisitorQuery = `${insertInto} ${visitorsTable} (${fullNameCol}, ${companyCol}, ${phoneNumberCol}, ${emailCol}, ${hostCol}, ${positionCol}) ${values} (?,?,?,?,?,?)`;

    db.query(insertVisitorQuery, [name, company, tel, email, host, position], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            console.log("visitor added.");
            res.status(201).send();
        }
    });
});

//  const port = process.env.PORT || 3001;
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});