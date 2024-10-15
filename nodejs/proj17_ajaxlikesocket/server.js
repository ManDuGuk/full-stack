const http = require('http');
const express = require('express');
const cors = require('cors');
const countRouter = require('./routes/CountRouter');
const userRouter = require('./routes/UsersRouter');
const cookeRouter = require('./routes/CookieRouter');
const sessionRouter = require('./routes/SessionRouter')
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');


const mainApp = express();

// JSON 형식의 요청 본문을 파싱하는 미들웨어
mainApp.use(express.json());

// URL-encoded 형식의 요청 본문을 파싱하는 미들웨어
mainApp.use(express.urlencoded({ extended: true }));


mainApp.set('views', 'views');
mainApp.set('view engine', 'ejs');


mainApp.use(cookieParser());
mainApp.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}))

const app = express();

const expressErrorHandelr = require('express-error-handler');



const countApp = require('./app');


// app.use(countRouter);
// app.use(userRouter);

mainApp.use('/count', countRouter);
mainApp.use('/user', userRouter)
mainApp.use('/cooke', cookeRouter)
mainApp.use('/session', sessionRouter)


mainApp.use("/", express.static('public'));
mainApp.use(cors());

//설정 되지 않은  path에 대한 오류 응답
// app.all('*', function (req, res) {
//     res.status(404).send(`<h1>404 에러</h1>`);
// })

// 설정되지 않은 경로에 대한 404 처리
mainApp.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

// 오류 처리 미들웨어
mainApp.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// mainApp.use(expressErrorHandelr.httpError(404))
// mainApp.set(errorHandler);

const server = http.createServer(mainApp);
server.listen(3000, function () {
    console.log(`running on server with http://localhost:${3000}`);
});
