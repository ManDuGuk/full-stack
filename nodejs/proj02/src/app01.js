const http = require('http'); //노드 기본 내장모듈 

const PORT = 3333;
const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<!DOCTYPE html");
    res.write("<html>");
    res.write("    <head>");
    res.write("        <title>응답 페이지</title>");
    res.write("    </head>");
    res.write("    <body>");
    res.write("        <h1>안녕!</h1>");
    res.write("    </body>");
    res.write("</html>");
    res.end();

});
server.listen(PORT, () => {
    console.log(`서버 실행중 -->http:localhost:${PORT}`);
})
