const express = require('express');
const app = express();



var router = express.Router();
router.route('/showCookie').get(function (req, res) {
    console.log('/showCookie 호출.');
    // console.log(req.cookies);
    // console.log(req.rawHeaders.findIndex((item) => {
    //     return item.indexOf('cooke') != -1
    // }));
    console.log(req.cookies['user'].id);
    console.log(req.cookies['user'].name);
    res.send(req.cookies);
});

router.route('/setUserCookie').get(function (req, res) {
    // 쿠키 설정 클라이언트의 local에 저장됨
    res.cookie('user', {
        id: 'KIM',
        name: '방탄소년단',
        authorized: true
    });

    // redirect로 응답
    res.redirect('/cooke/showCookie')
});


module.exports = router;