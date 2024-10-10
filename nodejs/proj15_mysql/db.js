const mysql = require('mysql2');

// 접속
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'test1',
    password: '1234'
});

connection.connect((err) => {
    if (err) {
        console.log('db 접속에러' + err.stack);
        return;
    }
    console.log('db connect 성공');

});

// export.module 이거 아니다!!!!!!!!!
module.exports = connection;