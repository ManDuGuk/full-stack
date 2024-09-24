//npm i mysql2 --s

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
//mysql2의 promise API 사용
require('dotenv').config()

const app= express();
const port = process.env.PORT || 3333;

//미들웨어
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.get('/',(req,res)=>{
//     res.redirect('/dbtest');//redirect(url): 페이지를 이동시키는 함수
// })
//
let db;
(async()=>{
    try {
        db= await mysql.createConnection({
            host:'localhost',
            user:'kosta',
            password:'1234',
            database:'studydb',
            port: 3306
        })
        console.log('DB접속 성공');
        const sql=`select idx, name, userid, tel, indate from user where idx=1`;
        const [data] = await db.query(sql);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})();

app.get('/', (req, res)=>{
    res.redirect('/dbtest');// 페이지 이동
})

app.get('/dbtest',async (req,res)=>{
    try {
        const sql=`select * from user order by idx desc`;
        const [data]= await db.query(sql)
        console.log(data);
        db.end();//db 연결 끊기
        res.send(data);
    } catch (error) {
        res.status(500).send(err.message)
    }
    
})

app.listen(port,()=>{
    console.log(`http:localhost:${port}`);
    
})
