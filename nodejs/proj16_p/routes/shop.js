const express = require('express');
const router = express.Router();
const fs = require('fs');
const upload = require('./multerStorage')

router.route('/list').get((req, res) => {
    //db에서 목록 가져오기
    //가져온 목록을 뷰엔진으로 전달

    if (connection) {
        connection.query(QUERY_SELECT, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            console.log(results);
            req.app.render('list', { photoList: results }, (error, html) => {
                if (error) return res.status(500).json({ error: err });
                console.log("리스트 불러와짐");
                res.end(html);
            })
        });
    } else {
        console.log("디비 접속 안됨");
        res.end("디비 접속 안됨");
    }

});


// 디비연동---------------------------------------------------------
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test1'
});


connection.connect((err, handshake) => {
    if (err) {
        console.log('DB 접속 Error: ', err);
        return;
    }
    //console.log('DB Connect 성공!', handshake);
    console.log('DB Connection 성공!');
});


const QUERY_SELECT = 'SELECT * FROM photo ORDER BY originalname DESC';
const QUERY_UPDATE = 'UPDATE USERS SET NAME=?, EMAIL=?, PASSWORD=? WHERE ID=?;';
const QUERY_INSERT = 'INSERT INTO photo (originalname, mimetype,size,filename,writer,comment ) VALUES (?,?,?,?,?,?)';
const QUERY_DELETE = 'DELETE FROM USERS WHERE ID=?';




// 디비연동---------------------------------------------------------

// 코드 최적화
router.route('/input').post(upload.array('photo', 1), (req, res) => {
    console.log('/process/photo 호출됨.');
    console.log(req.body);

    try {
        const files = req.files;

        if (!files || files.length === 0) {
            res.status(400).send('파일이 업로드되지 않았습니다.');
            return;
        }

        const file = files[0]; // 첫 번째 파일만 처리 (업로드된 파일은 최대 1개)

        // 파일 정보
        const originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
        const filename = file.filename;
        const mimetype = file.mimetype;
        const size = file.size;
        const writer = req.body.writer;
        const comment = req.body.comment;



        console.log(`업로드된 파일: 원본 파일명 - ${originalname})}
        ,저장 파일명 - ${filename}
         , MIME TYPE - ${mimetype}
          , write - ${writer}
          , comment - ${comment}
         , 파일 크기 - ${size}`);


        // // 클라이언트에 응답 전송
        // res.status(200).contentType('text/html;charset=utf8').send(`
        //     <h3>파일 업로드 성공</h3>
        //     <hr/>
        //     <p>원본 파일명: ${Buffer.from(originalname, 'latin1').toString('utf8')} -> 저장 파일명: ${filename}</p>
        //     <p>MIME TYPE: ${mimetype}</p>
        //     <p>파일 크기: ${size}</p>
        //     <p>작성자: ${req.body.writer}</p>
        //     <p>설명: ${req.body.comment}</p>
        // `);


        //데이터 베이스에 저장
        //1.mysql에 저장될 테이블 준비
        //2.mysql2 모듈을 이용해서 db에 저장
        //3.db에 저장된 데이터를 해당 정보를 다시 불러오낟.
        //4.불러온 데이터를 resultData로 만들어서 뷰엔진에 전달
        //5.실제 저장된 파일의 경로와 저장 파일명을 이용해서 화면 출력,
        const inputData = {
            originalname: originalname,
            filename: filename,
            mimetype: mimetype,
            size: size,
            writer: writer,
            comment: comment
        }

        const dataArr = [
            inputData.originalname,
            inputData.mimetype,
            inputData.size,
            inputData.filename,
            inputData.writer,
            inputData.comment
        ];

        // const QUERY_INSERT = 'INSERT INTO photo (originalname, mimetype,size,filename,write,comment ) VALUES (?,?,?,?,?,?)';
        if (connection) {
            connection.query(QUERY_INSERT, dataArr, function (err, results) {
                if (err) return res.status(500).json({ error: err });
                // // ejs모듈 설치. views와 view engine을 server.js에 셋팅.
                // req.app.render('FileUploadResult', { result: resultData }, (err, html) => {
                //     res.end(html);
                // });

                //업로드 처리가 끝나면 목록 페이지로 새로고침
                console.log("데이터 넣기 성공");
                res.redirect('/shop/list');
            });
        } else {
            console.log('DB 연결 안됨!');
        }
    } catch (err) {
        console.error('파일 처리 중 오류 발생:', err);
        res.status(500).send('서버 오류로 파일 업로드에 실패했습니다.');
    }
});

module.exports = router;