//npm init ===>package.json
//npm i express dotenv morgan --s
//npm i nodemon -g
const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
//라우터를 require
const bookRouter = require('./routes/bookRouter')
//bookRouter폴더를 먼저 찾고/ 그 안에 index.js를 찾는다
//폴더가 없으면 bookRouter.js파일을 찾는다
const userRouter = require('./routes/userRouter')
const naverRouter = require('./routes/naverRouter')
const indexRouter = require('./routes/indexRouter')
const bookDBRouter = require('./routes/bookDBRouter')
const testRouter = require('./routes/testRouter')

const port = process.env.PORT ||3333;

const app=express();
//미들웨어 설정
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
//cors 관련 설정 미들웨어 : npm i cors --s
app.use(cors()) //모든 도메인 허용

app.use('/',indexRouter)
app.use('/books', bookRouter)//배열 사용
app.use('/api/books', bookDBRouter)//DB연동
app.use('/users', userRouter)
app.use('/naver', naverRouter)
app.use('/test',testRouter)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
