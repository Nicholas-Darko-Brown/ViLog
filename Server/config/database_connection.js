const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'bcab69a91a46bf',
    password: '808e9084',
    database: 'heroku_0ce75785aa78e7b',
    multipleStatements: true,
    ssl: true
});

module.exports = db;
