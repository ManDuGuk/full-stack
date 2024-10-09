const express = require('express');
const router = express.Router();

//컨트롤러에서 정의된 메소드들 라우터로 가져와서 관리
const { getAllCar, getCarById, createCar, deleteCarById, modifyCarById, test } = require('../controllers/CarListController')

//라우터 메소드 체이닝
router.route('/carList')
    .get(getAllCar)
    .post(createCar);

router.route('/carList/:id')
    .get(getCarById)
    .post(modifyCarById)
    .delete(deleteCarById);
// .delete((req, res) => {
//     res.send("삭제요청됨");
// });

// nodejs 모듈로 등록 (app.js에서 미들웨어로 사용)
module.exports = router;