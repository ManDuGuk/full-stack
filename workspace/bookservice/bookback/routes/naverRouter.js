//npm i axios --s

const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config(); //왜 이친구를 받아와야지 되는거?

const client_id = process.env.Naver_id;
const client_secret = process.env.Naver_secret;

router.get('/', (req, res) => {
    res.send(`<a href='/naver/search/books'>네이버 도서 검색 테스트(Node)</a>`)
})


router.get('/search/books', async (req, res) => {

    //쿼리가 없을경우 query='NODE'를 붙여줌
    let { query, display, start } = req.query;
    if (!query) {
        query = 'Node';//기본검색어를 Node로 설정
    }
    if (!start) {//페이지 시작값
        start = 1;
    }
    if (!display) {
        display = 20; //한페이지에 20개씩 보여주도록 기본 설정
    }

    var api_url = 'https://openapi.naver.com/v1/search/book.json?query=' + encodeURI(query) + `&start=${start}&display=${display}`; // JSON 결과 --> 파라미터값을 제대로 넘기지 않았다.
    console.log(api_url);
    console.log(client_id);
    console.log(client_secret);
    try {
        const response = await axios.get(api_url, {
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret
            }
        });
        //응답데이터 받긱
        const data = await response.data;
        res.status(200).json(data);


    } catch (error) {
        // console.log(error)
        res.status(500).send(error.message);
    }

})

module.exports = router;