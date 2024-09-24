const express = require('express')
const router = express.Router();
const bookController =require('../controllers/bookController')
const multer =require('multer');
//npm i multer --s

const storage=multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'public/images/')//업로드 디렉토리 설정
    },
    filename: function(req, file, cb){
        let fname=Date.now()+'_'+file.originalname;
        cb(null, fname);//파일명 설정
    }
})

const upmulter =multer({storage});

//정적 파일 설정///////////////////
router.use('/images', express.static('images'))
//////////////////////////////////

//모든 도서정보 가져오기  /api/books
router.get('/', bookController.listBook)
//도서제목 키워드로 검색하기
router.get('/search', bookController.findBook)

//도서정보 등록
router.post('/',upmulter.single('image'),bookController.createBook );
//upmulter.single('input name') ====> 알아서 업로드 처리함.

//특정 도서정보 가져오기  GET /api/books/:isbn
router.get('/:isbn', bookController.getBook);

//특정 도서정보 삭제
router.delete('/:isbn', bookController.deleteBook);

//특정 도서정보 수정 처리
router.put('/:isbn', bookController.updateBook)

module.exports=router;