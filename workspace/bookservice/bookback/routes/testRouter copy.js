const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({ //여기 왜 이렇게 사용?
    destination: function (req, file, fn) {
        fn(null, 'public/upload/');
    },
    filename: function (req, file, fn) {
        fn(null, Date.now() + '_' + file.originalname);
    }
})

const upmulter = multer({ storage }); //이건왜한거?
router.use('/upload', express.static('upload')); //이것도 왜한거?

router.post('/fileUp', upmulter.single("myfile"), (req, res) => {

    let fname = req.file;
    let name = req.body.name; //이건 어떻게 조회한거?

})

