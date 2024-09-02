const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => { //서버생성
    if (req.url == '/') {
        //publick/index.html파일을 읽어서 브라우저에 출력
        //fs의  readfile()이용해서 읽은 내용을 브라우저에 출력
        const filePath = path.join('public', 'index.html');
        console.log('filePath', filePath); //public/index.html
        console.log(path.resolve(filePath)); //절대경로
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.log("파일이 없다.", err);
                throw err;
            }
            res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
            res.write(data);
            res.end();
        })

    } else if (req.url == '/login') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
        res.write(`<h1>login page</h1>`);
        res.write(`<h1><a href="/">인덱스 페이지로 가기</a></h1>`);
        res.end();
    } else if (req.url == "/board") {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
        res.write(`<h1><h1>borad page</h1>`);
        res.write(`<h1><a href="/">인덱스 페이지로 가기</a></h1>`);
        res.end();
    }
}).listen(3333, () => {
    console.log('http://localhost:3333');

})