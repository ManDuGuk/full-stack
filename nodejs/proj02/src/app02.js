const http = require('http'); //노드 기본 내장모듈 

const PORT = 3333;

const title = "express 템플릿이용"

const server = http.createServer((req, res) => {

    res.end(htmlTmp);

});
server.listen(PORT, () => {
    console.log(`서버 실행중 -->http:localhost:${PORT}`);
})
