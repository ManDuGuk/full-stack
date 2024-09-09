const pool = require('../models/dbPool.js');

exports.createBook = async (req, res) => {
    const { title, publish, price } = req.body;

    //첨부파일
    const image = req.file ? req.file.filename : 'noimage.jpg';
    console.log('image: ', image);



    console.log(title, publish, price);
    if (!title || !publish || !price) {
        return res.status(400).json({
            message: '제목,출판사,가격값이 들어오지 않았어요'
        })
    }

    try {

        const sql = `insert into book(title,publish,price,image) values(?,?,?,?)`; //?: in parameter
        //query 메소드가 sql문을 실행하면서 ?들에 배열로 보낸 정보를 파시아여 넣어준다.
        const [result] = await pool.query(sql, [title, publish, price, image]);
        console.log('result', result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'DB 에러 발생' + error.message })

    }

}

exports.listBook = async (req, res) => {
    const sql = 'select * from book order by isbn desc';
    try {
        const [data] = await pool.query(sql);
        res.json(data);
    } catch (error) {
        res.status(500).json('message:' + error.message)
    }
}

exports.getBook = async (req, res) => {
    const { isbn } = req.params;
    console.log('isbn' + isbn);
    const sql = `select isbn,title,publish,price,image,indate from book where isbn=?`;

    try {
        const [data] = await pool.query(sql, [isbn]); //원래는 2가지 종류의 2차 배열로 리턴되는데 두번째 값은 필요없어서 첫번째 값만 구조분해 할당으로 받아온다.
        //isbn이 pk 이므로 데이터가 있다면 1개 온다.

        if (data.length > 0) {
            res.json(data[0])
        } else {
            res.json({});
        }


    } catch (error) {
        res.status(500).json('message:' + error.message)
    }
}


//deleteBook()함수 구성해서 내보내기
//delete문 수행
exports.deleteBook = async (req, res) => {
    const { isbn } = req.params;
    console.log('isbn' + isbn);
    if (!isbn) {
        res.status(400).json({ message: '도서번호가 필요해요' })
    }
    const sql = `delete from book where isbn=?`;

    try {
        const [data] = await pool.query(sql, [isbn]);
        //isbn이 pk 이므로 데이터가 있다면 1개 온다.

        if (data.affectedRows === 0) {
            res.json({ message: '삭제할 도서가 없어요' });
        }

        res.json({ message: `${isbn}번 도서상품을 삭제했습니다.` })

    } catch (error) {
        res.status(500).json('message:' + error.message)
    }
}

exports.updateBook = async (req, res) => {
    //isbn값 받기 ==>req.params
    const { isbn } = req.params;

    //수정한 정보 데이터 받기 ==> req.body
    let { title, publish, price } = req.body;

    title = title.trim(); //앞뒤 공백문자 제거
    publish = publish.trim();
    // price = price.trim();

    if (!isbn || !title || !publish || !price) {
        return res.status(400).json({ message: '제목,출판사,가격 모두 입력해' })
    }

    const sql = 'update book set title=?, publish=? ,price =? where isbn=?';
    try {
        const [result] = await pool.query(sql, [title, publish, price, isbn]);
        console.log('result: ', result);
        if (result.affectedRows === 0) { //그냥 아래 캐치에서 잡으면 뭐가 잘못된건지 알기힘드니까 좀더 범위를 쫍힌거
            return res.status(404).json({ message: '해당도서는 존재하지 않아요' });
        }

        res.json({ message: 'success' })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

//도서 제목으로 검색 /api/books/search?keyword =Node
//getBook보다 아랭 있으면 해당 요청을 getbook이 받는다. 
exports.findBook = async (req, res) => {
    let { keyword } = req.query;
    console.log(keyword);
    keyword = keyword.trim(); //앞뒤 공백문자 제거
    if (!keyword) {
        return res.json({ message: '검색어를 입력해야되요' });
    }

    try {
        const sql = `select * from book where title like ? order by isbn desc`; //'%?%' 이렇게 말고 통채로 ? 처리할것
        const [data] = await pool.query(sql, [`%${keyword}%`]);
        res.json(data);

    } catch (error) {

        res.json({ message: error.message });
    }

}

