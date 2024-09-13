"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const tourRoutes_1 = __importDefault(require("./routes/tourRoutes")); // 경로는 프로젝트 구조에 맞게 조정하세요
const morgan_1 = __importDefault(require("morgan")); // HTTP 요청 로깅을 위한 미들웨어 (선택)
dotenv_1.default.config(); // .env 파일에서 환경 변수를 불러옴
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// 미들웨어 설정
app.use(express_1.default.json()); // JSON 요청을 파싱
app.use((0, morgan_1.default)('dev')); // HTTP 요청 로깅 (선택)
// 기본 라우트
app.get('/', (req, res) => {
    res.send('API is running...');
});
// 관광 정보 관련 라우트 연결
app.use('/api/tours', tourRoutes_1.default);
// 404 처리
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});
// 에러 처리 미들웨어
app.use((err, req, res, next) => {
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
