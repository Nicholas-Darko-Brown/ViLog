const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/database_connection");
const sql_keywords = require("./config/sql_keywords");
const tables = require("./config/tables");
const app = express();


app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    const sqlInsert = `${sql_keywords.insertInto} ${tables.hosts.name} 
        (${tables.hosts.colums.fullName}, ${tables.hosts.colums.email}, ${tables.hosts.colums.position}, ${tables.hosts.colums.phoneNumber}) 
        ${sql_keywords.values} ('Ben','ben@gmail.com','Guitarist','024345569')`;

    db.query(sqlInsert, (err, result)=>{
        res.status(201).send("hello");
    });
});

//  const port = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log("Server listening on port 3001");
});