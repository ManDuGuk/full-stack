// console.log("hellow");
import express,{Request,Response,NextFunction} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import tourRoutes from './routes/tourroutes';

dotenv.config(); //.env 파일에서 환경 변수 로딩
const PORT=process.env.PORT ||3333;
const app = express();

//미들웨어 설정
app.use(express.json());//json 요청을 파싱
app.use(morgan('dev')); //로깅
app.use(express.static(path.join(__dirname,"..",'public')))

//__dirname
console.log(__dirname);//src까지의 경로 출력됨
//diname:==>C:/full-statck/workspace/tourSevice/src

//기본라우트
app.get('/',(req:Request,res:Response)=>{
    //public/index.html 내용이 출력된다. -->landing page
    res.send(`<h1>Tour API 실행중...</h1>`)
})

//관광정보 관련 라우트
app.use('/api/tours',tourRoutes);

//서버가동
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`); 
})