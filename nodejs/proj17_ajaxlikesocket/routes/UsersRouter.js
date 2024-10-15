const express = require('express');
const router = express.Router();

//get user 처리 - 사용자 전체 목록
router.route("/").get(function (req, res) {
    console.log("get /user 처리");
    res.end("get /user");
});

router.route("/").post((req, res) => {
    console.log("post /user 처리 사용자 입력");
    res.end("post /user");
});



module.exports = router;