const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'andreews',
    database: 'vilog_db'
});

module.exports = db;