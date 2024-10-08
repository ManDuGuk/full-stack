//npm i morgan --s
//미들웨어: 로그를 남기는 미들웨어. 서버를 모니터링하고 디버깅하는 용도로 사용

const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const port = process.env.PORT || 3333;
const app = express();

//미들웨어 설정
// 'combined': Apache combined 로그 형식
// 'common': Apache common 로그 형식
// 'dev': 개발 중 사용하기 좋은 형식
// 'short': 짧은 로그 형식
// 'tiny': 더 간단한 로그 형식
// 
morgan.format('myformat', ':method :url :status :response-time ms')
// app.use(morgan("dev"))
// 위에처럼 포맷을 설정해서 줄수도 잇다. //사용자 정의 로그 형식을 설정하고자 할때 format('포맷이름','포맷들')
// 주요 morgan 포맷 토큰
// : method: HTTP 메소드(예: GET, POST)
// : url: 요청된 URL(예: /home)
// : status: HTTP 응답 상태 코드(예: 200, 404)
// : response - time: 요청 처리에 걸린 시간(밀리초 단위)
// : res[content - length]: 응답의 콘텐츠 길이(바이트 단위)
app.use(morgan("myformat"))

//'/' ==>hello
app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.get('/post', (req, res) => {
    res.send('<h1>post</h1>')
})

app.get('/mypage', (req, res) => {
    res.send('<h1>mypage</h1>')
})

//서버 동작
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})