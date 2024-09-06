const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')

//모든 도서정보 가져오기
router.get('/', bookController.listBook);

//도서정보 등록
router.post('/', bookController.createBook);

//특정 도서 정보 가져오기
router.get('/:isbn', bookController.getBook);

//특정 도서 삭제하기
router.delete('/:isbn', bookController.deleteBook);

module.exports = router;