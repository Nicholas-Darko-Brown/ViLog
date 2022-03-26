const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    host: '34.121.5.11',
    user: 'root',
    password: '1234',
    database: 'vilog_db',
    multipleStatements: true
});

module.exports = db;