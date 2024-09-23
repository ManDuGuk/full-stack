//express 기본 모듈 불러오기
//이것 http모듈도 express에 내장 되어있기때문에 쓸필요가없다.
//아래 createServer부분도 http빼고, express 객체로 listen하면된다.
const http = require('http');
const express = require('express');
//이건 노트 스테틱이고 express에 내장되어 있어서 쓸필요가 없다. 
const static = require('serve-static');
const path = require('path');

//익스프레스 객체 생성
const app = express();

//특정 폴더의 파일들을 특정패스로 접근가능하게 설정
//노드 스태틱을 쓸수 있고 express 스태틱도 가능함
// app.use('/', static(path.join(__dirname, 'public')));

app.use('/', express.static(path.join(__dirname, 'public')));

//C:\full-stack\projects\crudwidthnode\public
console.log(path.join(__dirname, 'public'));


//미들웨어 설정
app.use(function (req, res, next) {
    console.log("첫번째 미들웨어 요청처리:한글처리");

    // res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    //응답을 종료, 종료해야지만 응답이 넘어감
    //응답을 종료하면 다음 미들웨어로 넘어가지 않음
    // res.end('<h1>서버에서 응답한 결과입니다.</h1>');

    // req.user = 'mike';
    // res.json({ "name": '남윤호', "age": "25" });

    // next()메소드를 호출하여 다음 미들웨어로 처리결과를 넘김
    let userAget = req.header('User-Agent');
    let paramName = req.query.name;

    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>User-Agent: ' + userAget + '</p></div>');
    res.write('<div><p>Param name: ' + paramName + '</p></div>');
    res.write("<img src='/images/잼민이 배경 완성.jpg' >");
    res.end();


    // next();
})

/*
//유사라우터다
app.use("/", (req, res, next) => {
    console.log("두번째 미들웨어 요청처리: / 처리");
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
    res.end(`<h1>express서버에서 ${req.user}가 응답한 결과이다.</h1>`);

    //이미end로 응답을 마쳤다면 다시 next요청시 이미응답이 끝났기에 뭔가 또 요청하면 서버가 뻣는다
    // next();
})

app.get("/", (req, res) => {
    console.log("get 요청처리: / 처리");
    res.end("<h1>왔니?</h1>");
})
*/

//기본포트를 app 객체에 속성으로 설정
app.set("port", process.env.PORT || 3000);

//express 서버 시작 익스프레스 객체를 서버 생성시 인자로 사용
http.createServer(app).listen(app.get('port'), function () {
    console.log('서버를 시작했음 포트:' + app.get('port'));
})