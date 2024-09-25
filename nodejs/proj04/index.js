const http = require('http');
const express = require('express');
app = express();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

app.set('port', 3333);

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>어 작동해</h1>")
})

app.get('/axios', (req, res) => {

    const getUrlVal = "https://n.news.naver.com/article/newspaper/009/0005369442?date=20240925";
    axios.get(getUrlVal, { responseType: "arraybuffer" }).then((response) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        // console.log(response);
        // console.log(response.data);
        let htmlCMD = iconv.decode(response.data, "UTF-8").toString();
        // console.log(htmlCMD);
        let $ = cheerio.load(htmlCMD);
        // console.log($);

        // let downLoadData = $('#dic_area > span:nth-child(1) > strong').text();
        let downLoadData = $('#img1')[0].attribs['data-src'];
        console.log($('img').length);
        console.log(downLoadData);

        const file = "test.txt";
        const data = downLoadData;

        fs.writeFile(file, data, (err) => console.log(err));
        fs.readFile("test.txt", "utf8", (err, data) => {
            if (err) {
                console.error(err);
                res.end("없다")
            } else {
                console.log(data);
                res.end(`<img src=${data}>`);
            }
        });

    })
})

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`서버실행됨": ${app.get('port')}`);
})