const mysql = require('mysql2');

const http = require('http');
const express = require('express');
const app = express();


// 디비 접속 시퀄라이즈 ORM 이용법
const { Sequelize } = require('sequelize');


//시퀄라이즈 데이터 타입(정해져 있음)
const DataTypes = require('sequelize').DataTypes;


const db = "test1";
const user = 'root';
const password = '1234';
const option = {
    host: 'localhost',
    dialect: 'mysql'
};

const sequelize = new Sequelize(db, user, password, option);

// console.log(sequelize); //연동되었다면 연동된 객체가 보일것

// -----------------------------------------여기까지 시퀄

//시퀄 인증처리(시퀄이 되는지 확인하는 과정)
sequelize.authenticate()
    .then(() => {
        return console.log("sequelize orm connected!");
    })
    .catch((err) => {
        return console.log("sequelize orm err: ", err);
    })


//모델 만들기
// id 는 오토인크리먼트니까 안만듬
const options = {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING }
};

const User = sequelize.define('User', options);

//모델을 이용한 생성
const newUser = {
    name: 'kkk',
    email: 'kkk@kkk.com',
    password: 'kkkk2222'
}
User.create(newUser).then(() => console.log("생성성공")).catch(() => console.log("생성 실패"));

//모델을 이용한 데이터 조회
User.findAll().then().catch();


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