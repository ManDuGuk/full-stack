const http = require("http"); //내장 모듈
const express = require("express")// npm 설치 모듈
const router = express.Router; //express에서 라우터
const bodyparser = require('body-parser'); //post 요청시 body에서 찾아올려고

//express 객체 생성
const app = express();

//로컬서버의 환경설정 1.포트 번호
app.set('port', 3333);

//아래와 같은 자료가 디비에서 불러진다고 가정
const carList = [
    { _id: 1001, name: "GRANDEUR", price: 3500, company: "HYUNDAI", year: 2019 },
    { _id: 1002, name: "SONATA2", price: 2500, company: "HYUNDAI", year: 2022 },
    { _id: 1003, name: "BMW", price: 5500, company: "BMW", year: 2018 },
    { _id: 1004, name: "S80", price: 4500, company: "VOLVO", year: 2023 }
];

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("연결!");
})

router.route("/car/input")
    .get((req, res) => {
        req.app.render()
    })

//서버켜기
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log("서버 실행됨");
})