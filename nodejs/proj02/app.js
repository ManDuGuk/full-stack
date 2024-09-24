const http = require('http'); //노드 기본 내장모듈 
const express = require('express');
const app = express();
const path = require('path');

const title = "자동차 목록"

//port 환경 변수 등록
app.set('port', 3333);
//뷰엔진 설정
app.set('view engine', 'ejs');
//경로 설정
// app.set('views', 'views'); //폴더명,경로
app.set('views', path.join(__dirname, 'views')); //이렇게도 된다. 절대경로로 알아서 찾아주는법
console.log(app.get('views'));


//static 폴더 설정 -->스테틱 미들웨어 설정됨
app.use(express.static(path.join(__dirname, 'public')))

//테이버 베이스에서 가져온 데이터로 대체될 임시목록
const carList = [
    { _id: 1001, name: "GRANDEUR", price: 3500, company: "HYUNDAI", year: 2019 },
    { _id: 1002, name: "SONATA2", price: 2500, company: "HYUNDAI", year: 2022 },
    { _id: 1003, name: "BMW222", price: 5500, company: "BMW", year: 2018 },
    { _id: 1004, name: "S80", price: 4500, company: "VOLVO", year: 2023 }];

app.get('/car/list', (req, res) => {

    //nodejs 콜백함수의 첫번째 인자는 error 객체
    req.app.render('car/list', { carList }, (err, html) => {
        if (err) throw err;
        res.end(html);
    });
})

const server = http.createServer(app);


server.listen(app.get('port'), () => {
    console.log(`서버 실행중 -->http:localhost:${app.get('port')}`);
})
