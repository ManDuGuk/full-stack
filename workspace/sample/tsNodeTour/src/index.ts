import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import tourRoutes from './routes/tourRoutes'; // 경로는 프로젝트 구조에 맞게 조정하세요
import morgan from 'morgan'; // HTTP 요청 로깅을 위한 미들웨어 (선택)
import path from 'path';
dotenv.config(); // .env 파일에서 환경 변수를 불러옴

const app = express();
const PORT = process.env.PORT || 3000; 

// 미들웨어 설정
app.use(express.json()); // JSON 요청을 파싱
app.use(morgan('dev')); // HTTP 요청 로깅 (선택)
app.use(express.static(path.join(__dirname,'..','public')))

// 기본 라우트
app.get('/', (req: Request, res: Response) => {
  console.log(path.join(__dirname,"..","public/index.html"));
  res.send('Tour API is running')
  //res.sendFile(path.join(__dirname,"..","public/index.html"))
});

// 관광 정보 관련 라우트 연결
app.use('/api/tours', tourRoutes);

// 404 처리
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Route not found' });
});

// 에러 처리 미들웨어
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






// let sayHello: (name: string)=>string;
// sayHello =(name:string):string=>{
//     return `Hello ${name}!!`
// }
// console.log(sayHello("World"))  