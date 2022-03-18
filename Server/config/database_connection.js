const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'andreews',
    database: 'vilog_db'
});

module.exports = db;