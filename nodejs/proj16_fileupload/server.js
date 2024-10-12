const http = require('http');
const shopApp = require('./app');
const express = require('express');

const mainApp = express();
mainApp.use('/shop', shopApp);
// app.js와  server.js로 분리 되었을 경우 최상위 모듈에 적용.
mainApp.use('/', express.static('public'));
mainApp.use('/uploads', express.static('uploads'));

// bodyParser 미들웨어 추가
mainApp.use(express.json());
mainApp.use(express.urlencoded({extends:false}));

mainApp.set('views', __dirname + "/views");
mainApp.set('view engine', "ejs");

const server = http.createServer(mainApp);
server.listen(3000, ()=>{
    console.log(`서버 실행 중 http://localhost:${3000}`);
});