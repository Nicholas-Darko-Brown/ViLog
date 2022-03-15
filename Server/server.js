const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

app.use(cors());
app.use(bodyParser.json());

//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'andreews',
    database: 'vilog_db'
});

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO vilog_db.hosts (Full_Name, Email, Position, Phone_number) VALUES ('Ben','ben@gmail.com','Guitarist','024345569')";
    db.query(sqlInsert, (err, result)=>{
        res.send("hello");
    });
});

app.get("/insert", (req, res) => {
    const sqlInsert = "INSERT INTO vilog_db.hosts (Full_Name, Email, Position, Phone_number) VALUES ('Benoit','benoit@gmail.com','Guitarist','02434439')";
    db.query(sqlInsert, (err, result)=>{
        res.send("helloin");
    });
});

//  const port = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log("Server listening on port 3001");
});