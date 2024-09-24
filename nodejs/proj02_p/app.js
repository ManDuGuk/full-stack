const express = require('express');
const app = express();
const path = require('path');
//뷰엔진은 따로 받지 않아도 됨
const title = "제목제목";
//환경설정 먼저해주기
//포트번호
app.set('port', 3333);
//뷰엔진 설정
app.set('view engine', 'ejs');
//경로 설정
app.set('views', path.join(__dirname, 'views'))
console.log(app.get('views'));

//static 폴더 설정 -->스테틱 미들웨어 설정됨
app.use(express.static(path.join(__dirname, 'public')))


const cars = [
    { num: 1, name: "소나타" },
    { num: 2, name: "아반데" },
    { num: 3, name: "현기차" },
    { num: 4, name: "볼보" },
    { num: 5, name: "미스비시" },
]

//get 요청 보내기
app.get('/car/list', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    //ejs렌덩링하기 여러개를 넘길수도 있다. 
    req.app.render('car/list', { cars, title }, (err, html) => {
        if (err) throw err;
        res.end(html);
    })
})

//서버 생성하기
app.listen(app.get('port'), () => {
    console.log("서버실행하기");
})

//서버 실행하기
