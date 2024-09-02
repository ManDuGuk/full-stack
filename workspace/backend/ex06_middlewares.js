const express = require('express');
const app = express();
const http = require('http');
/*
미들웨어는 여러개 사용해보는 예제
*/

app.use((req, res, next) => {
    console.log('1.미들웨어 요청 처리...', req.url);
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.write("<h1>hellow express middleware</h1>")
    next(); //다음 미들웨어로 가도록 호출
})

app.use((req, res, next) => {
    console.log('2.미들웨어 요청 처리...', req.url);
    req.user = 'king'; //req.키 = 값 //미들웨어를 거쳐서 나오는 거라 안나온다? 원래는 페이로드를 조회하면 나온다
    next();
})
app.use((req, res, next) => {
    console.log('3.미들웨어 요청 처리...', req.url);
    res.write(`<h2>${req.user}</h2>`);
    next();
})


app.get('/', (req, res) => {
    res.write(`<h1>get방식으로 / 요청들어옴</h1>`);
    res.end();
})

app.get('/bye', (req, res) => {
    res.end(`<h1>잘가라</h1>`);
})

http.createServer(app)
    .listen(7777, () => {
        console.log('http://localhost:7777');
    })

