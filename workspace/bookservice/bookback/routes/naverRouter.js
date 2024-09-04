//해당 북라우터의 모든 요청은 앞에 /book이 온것을 전체로 하는것이다. 

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>naver 관련</h1>`)
})

module.exports = router