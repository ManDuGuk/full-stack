const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'kosta',
    password: '1234',
    database: 'studydb',
    connectionLimit: 10,
    waitForConnections: true
})

module.exports = pool;