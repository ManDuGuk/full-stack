const http = require('http');
const shopApp = require('./app');
const express = require('express');
const path = require('path');

const mainApp = express();
mainApp.use('/shop', shopApp);

//스테틱설정, path설정 app.js와 server.js로 분리되었을 경우 최상위 모듈에 적용.
mainApp.use('/', express.static(path.join(__dirname, 'public')));
mainApp.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// multer를 이용한 파일 업로드 자체에는 바디 파서를 할필요는 없지만 일단 해주기로
// body-parser 미들웨어 추가
mainApp.use(express.json()); // JSON 형식의 요청 본문을 파싱
mainApp.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 요청 본문을 파싱

mainApp.set('views', __dirname + "/views");
mainApp.set('view engine', 'ejs');


const server = http.createServer(mainApp);
server.listen(3000, () => {
    console.log('서버 실행중');
})