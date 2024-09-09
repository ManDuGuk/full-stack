const express = require('express');
const router = express.Router();
const multer = require('multer'); //파일 업로드처리 


//업로드 파일을 저장할 정보를 갖는 스토리지객체 할당
const storage = multer.diskStorage({
    destination: function (req, file, callback) { //업로드할 디렉토리를 설정
        callback(null, 'public/upload/') //public/upload폴더에 업로드하자
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '_' + file.originalname); //업로드할 파일명 설정
    }
})

const upmulter = multer({ storage });
router.use('/upload', express.static('upload'))

router.post('/fileUp', upmulter.single("myfile"), (req, res) => {

    console.log('fileup 함수 실행');

    //업로드한 파일 정보를 추출하여 브라우저에 출력해보자
    let fname = req.file; //첨부파일명
    console.log('fname:' + fname);

    let name = req.body.name; //올린사람
    console.log('name' + name);

    res.json({ filename: req.file, name: req.body.name });

    // req.send(`파일 업로드 잘 들어옴<br>
    //     <h2>첨부파일: ${fname}</h2>
    //     <h2>올린이: ${name}</h2>
    //     `);
});

module.exports = router;