const pool = require('../models/dbPool.js');

exports.createBook = async (req, res) => {
    const { title, publish, price } = req.body;
    console.log(title, publish, price);
    if (!title || !publish || !price) {
        return res.status(400).json({
            message: '제목,출판사,가격값이 들어오지 않았어요'
        })
    }

    try {

        const sql = `insert into book(title,publish,price) values(?,?,?)`; //?: in parameter
        //query 메소드가 sql문을 실행하면서 ?들에 배열로 보낸 정보를 파시아여 넣어준다.
        const [result] = await pool.query(sql, [title, publish, price]);
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
        const [data] = await pool.query(sql, [isbn]);
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