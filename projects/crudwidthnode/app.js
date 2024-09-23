//npm express설치후 모듈가져옴
const express = require('express');

//익스프레스 객체 생성
const app = express();

//get처리 --> 전체값 불러오기 (미들웨어 설정)
app.use("/", (req, res, next) => {
    //전체 불러오기
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    res.end("<h1>응답함</h1>");
})

//get처리 --> 특정값 불러오기
app.get("/", (req, res) => {

})

//post처리
app.post("/", (req, res) => {

})

//put처리
app.put("/", (req, res) => {

})

//delete처리
app.put("/", (req, res) => {

})

//기본포트를 app 객체에 속성으로 설정
app.set("port", process.env.PORT || 3000);

//express 서버 시작 익스프레스 객체를 서버 생성시 인자로 사용
app.listen(app.get('port'), function () {
    console.log('서버를 시작했음 포트:' + app.get('port'));
})