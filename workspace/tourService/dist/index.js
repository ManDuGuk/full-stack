"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("hellow");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const tourroutes_1 = __importDefault(require("./routes/tourroutes"));
dotenv_1.default.config(); //.env 파일에서 환경 변수 로딩
const PORT = process.env.PORT || 3333;
const app = (0, express_1.default)();
//미들웨어 설정
app.use(express_1.default.json()); //json 요청을 파싱
app.use((0, morgan_1.default)('dev')); //로깅
app.use(express_1.default.static(path_1.default.join(__dirname, "..", 'public')));
//__dirname
console.log(__dirname); //src까지의 경로 출력됨
//diname:==>C:/full-statck/workspace/tourSevice/src
//기본라우트
app.get('/', (req, res) => {
    //public/index.html 내용이 출력된다. -->landing page
    res.send(`<h1>Tour API 실행중...</h1>`);
});
//관광정보 관련 라우트
app.use('/api/tours', tourroutes_1.default);
//서버가동
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
