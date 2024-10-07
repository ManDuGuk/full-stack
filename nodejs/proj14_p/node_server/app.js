const express = require("express");
const app = express();
const cors = require("cors");
const carListRouter = require('./router/carListRouter') //미구현, 과제임

//미들웨어 처리 -->어떤한 요청에도 먼저 선행되는 필터와도 같다.

app.use(cors()); //다른 포트에서도 해당 포트를 통해 접속할수 있도록 해준다.
app.use(express.json()); //bodyparser
app.use(express.urlencoded({ extended: false })); //단순데이터 처리
app.set('port', 3035);


//라우터 설정
app.use(carListRouter);



module.exports = app;
