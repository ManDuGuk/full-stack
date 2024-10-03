const express = require("express");
const app = express();
const cors = require("cors");
const productsRouter = require("./router/products");
const todoRouter = require('./router/todolist') //미구현, 과제임

//미들웨어 처리 -->어떤한 요청에도 먼저 선행되는 필터와도 같다.

app.use(cors()); //다른 포트에서도 해당 포트를 통해 접속할수 있도록 해준다.
app.use(express.json()); //bodyparser
app.use(express.urlencoded({ extended: false })); //단순데이터 처리
app.set('port', 3035);

// 한글 처리 필터 미들웨어
// res.send() 사용시 필요 없음.
// app.use((req, res, next)=> {
//     res.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
//     next();
// });

//라우터 설정
app.use(productsRouter);
app.use(todoRouter);



module.exports = app;