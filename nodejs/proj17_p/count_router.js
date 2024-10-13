const express = require('express');
const router = express.Router();

let cnt = 0;
let responseData = {};
let char = [];




//http://localhost:3000/count로 보낸진 요청처리-------------------------------
router.route('/').get(function (req, res) {

    cnt++;
    var date = new Date();
    responseData = {
        "dateStr": date.getFullYear() + "-" +
            (date.getMonth() + 1) + "-" +
            (date.getDate()) + " " +
            (date.getHours()) + ":" +
            (date.getMinutes()) + ":" +
            (date.getSeconds()),
        "count": cnt,
        "char": char
    }
    //제이슨 객체로 전달
    res.end(JSON.stringify(responseData));
});

//http://localhost:3000/count로 보낸진 요청처리-------------------------------



//0.5초마다 http://localhost:3000/count/param으로 보내진 요청을 처리하는 ---------------
router.route('/:localCount').get(function (req, res) {
    if (cnt > Number(req.params.localCount)) {
        console.log(req.params.localCount);
        res.end(JSON.stringify(responseData));
    } else {
        res.end("");
    }
});

//채팅요청

router.route('/chat/:log').get(function (req, res) {
    console.log(req.params.log);
    char.push(req.params.log);
    res.end(JSON.stringify(responseData));
});


//0.5초마다 http://localhost:3000/count/param으로 보내진 요청을 처리하는 ---------------

module.exports = router;
