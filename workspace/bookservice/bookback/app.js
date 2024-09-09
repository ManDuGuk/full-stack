//npm init ==>package.json
//npm i express dotenv morgan --s
//npm i nodemon -g //매번 서버 재시작할필요없는 코드 수정하면 알아서 재실행시킴

//라우터를 require
//만약 /routers라고 되어있다면 router 폴더를 먼저 찾는다. 
//그안에 index.js가 있으면 그걸 찾는다. 
//index.js가 없다면 routers.js 파일을 찾는다.

const bookRouter = require('./routes/booksRouter'); //내가 만든모듈은 .으로 시작한다. 

//bookRouter폴더를 먼저 찾기 / 그 안에 index.js를 찾는다. 
//폴더가 없으면 bookRouter.js 파일을 찾는다.
const userRouter = require('./routes/userRouter');
const naverRouter = require('./routes/naverRouter');
const indexRouter = require('./routes/indexRouter');
const bookDBRouter = require('./routes/bookDBRouter');
const testRouter = require('./routes/testRouter');

const express = require('express'); //외장 모듈은 이름만으로 불러온다. //웹관련 세팅 라이브러리
require('dotenv').config(); //환경설정 이미 여기서 해줬는데 왜 안되지?????????/
const morgan = require('morgan'); //로그남기는
const path = require('path'); //경로처리
const cors = require('cors'); //cors처리

const port = process.env.PORT || 3333;

const app = express();

//전역 미들웨어 설정
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
// corse관련 설정 미들웨어:npm i cors --s
app.use(cors()) //모든 도메인 허용



//아래는 분산처리를 위한 미들웨어 설정일뿐 어떤 순서는 상관없다.  /book으로 요청이 오면 bookRouter에서 처리, /users요청이 오면 userRouter에서 처리 /naver요청이 오면 naverRouter에서 처리를 한다. 
app.use('/', indexRouter);
app.use('/books', bookRouter) ///배열 사용
app.use('/api/books', bookDBRouter) //DB연동
app.use('/users', userRouter)
app.use('/naver', naverRouter)
app.use('/test', testRouter)


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})