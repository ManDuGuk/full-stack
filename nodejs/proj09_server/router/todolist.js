const express = require('express');
const router = express.Router();

//컨트롤러에서 정의된 메소드들 라우터로 가져와서 관리
const { getAllTodo, getTodoById, createTodo, deleteTodoById, modifyTodoById } = require('../controllers/todolistController')

//라우터 메소드 체이닝
router.route('/todo').get(getAllTodo).post(createTodo);

router.route('/todo/:id').get((req, res) => {
    res.end('특정 할일 조회');
}).post((req, res) => {
    res.end('특정 할일 수정');
});

// nodejs 모듈로 등록 (app.js에서 미들웨어로 사용)
module.exports = router;