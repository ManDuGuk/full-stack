//npm init ==>package.json
//npm i express dotenv morgan --s
//npm i nodemon -g //매번 서버 재시작할필요없는 코드 수정하면 알아서 재실행시킴

const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 3333;

const app = express();

//미들웨어 설정
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
// corse관련 설정 미들웨어:npm i cors --s
app.use(cors()) //모든 도메인 허용

//라우터를 require
//만약 /routers라고 되어있다면 router 폴더를 먼저 찾는다. 
//그안에 index.js가 있으면 그걸 찾는다. 
//index.js가 없다면 routers.js 파일을 찾는다.

const bookRouter = require('./routes/booksRouter');

//bookRouter폴더를 먼저 찾기 / 그 안에 index.js를 찾는다. 
//폴더가 없으면 bookRouter.js 파일을 찾는다.
const userRouter = require('./routes/userRouter');
const naverRouter = require('./routes/naverRouter');

//아래는 분산처리를 위한 미들웨어 설정일뿐 어떤 순서는 상관없다.  /book으로 요청이 오면 bookRouter에서 처리, /users요청이 오면 userRouter에서 처리 /naver요청이 오면 naverRouter에서 처리를 한다. 
app.use('/books', bookRouter)
app.use('/users', userRouter)
app.use('/naver', naverRouter)


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})