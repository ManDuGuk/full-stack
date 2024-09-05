//해당 북라우터의 모든 요청은 앞에 /book이 온것을 전체로 하는것이다. 

const express = require('express')
const router = express.Router();
//npm i request --s

//https://openapi.naver.com/v1/search/book.json
router.get('/', (req, res) => {
    const str = `
        <h1>Naver API 도서 검색 테스트</h1>
        <a href="/naver/search/books?query=node"><h2>Naver API 도서 검색 테스트</h2></a>
    `;
    res.send(str);
})

//-------------------------------

// 네이버 검색 API 예제 - 블로그 검색
var client_id = process.env.Naver_id;
var client_secret = process.env.Naver_secret;


router.get('/test/books', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/book.json?query=' + encodeURI(req.query.query); // JSON 결과
    //   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // XML 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});



//-------------------------------

module.exports = router