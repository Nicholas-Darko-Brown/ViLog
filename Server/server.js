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


app.post("/", (req, res) => {
    
});

//  const port = process.env.PORT || 3001;
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});