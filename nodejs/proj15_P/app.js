const mysql = require('mysql2');

const http = require('http');
const express = require('express');
const app = express();
// const connection = require('./db.js');




// 디비 접속 ( 오리지널 )
// 원래는 de.js에 있는건데 모듈이 잘 안불러와 져서 그냥 여기다 박아놨다. --> 원인은 모듈 내보내기 잘못함
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
// ---------------------------------------여기까지  디비접속


const router = express.Router();

app.set('port', 3000);

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

const QUERY_SELECT_ALL = 'SELECT * FROM USERS ORDER BY ID DESC';
const QUERY_CREATE = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
const QUERY_UPDATE = 'UPDATE USERS SET NAME=?, EMAIL=?, PASSWORD=? WHERE ID=?;';
const QUERY_DELETE = 'DELETE FROM USERS WHERE ID=?';


// users 전체 목록 불러오기
router.route('/users').get((req, res) => {
    function callback(err, results) {
        if (err) return res.status(500).json({ error: err });
        res.send(results);
    };
    if (connection) {
        connection.query(QUERY_SELECT_ALL, callback);
    } else {
        console.log('DB 연결 안됨!');
    }
});

router.route('/users').post((req, res) => {
    const { name, email, password } = req.body;
    function callback(err, results) {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'insert successfuly!' });
    };
    if (connection) {
        connection.query(QUERY_CREATE, [name, email, password], callback);
    } else {
        console.log('DB 연결 안됨!');
    }
});

router.route('/users').put((req, res) => {
    const { id, name, email, password } = req.body;
    function callback(err, results) {
        if (err) return res.status(500).json({ error: err });
        res.redirect('/users');
    };
    if (connection) {
        connection.query(QUERY_UPDATE, [name, email, password, id], callback);
    } else {
        console.log('DB 연결 안됨!');
    }
});

router.route('/users').delete((req, res) => {
    const { id } = req.body;

    function callback(err, results) {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'insert successfuly!' });
    };
    if (connection) {
        connection.query(QUERY_DELETE, [id], callback);
    } else {
        console.log('DB 연결 안됨!');
    }
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`서버 실행 중 http://localhost:${app.get('port')}`);
})