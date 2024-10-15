const express = require('express');
const app = express();
const countRouter = require('./routes/CountRouter');
const userRouter = require('./routes/UsersRouter');




// JSON 형식의 요청 본문을 파싱하는 미들웨어
app.use(express.json());

// URL-encoded 형식의 요청 본문을 파싱하는 미들웨어
app.use(express.urlencoded({ extended: true }));


// app.use(countRouter);
// app.use(userRouter);



module.exports = app;