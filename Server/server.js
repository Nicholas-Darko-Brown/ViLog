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
    password: '',
    database: 'vilog_db'
});

//  const port = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log("Server listening on port 3001");
});