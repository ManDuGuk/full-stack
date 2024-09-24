const pool = require('../models/dbPool.js')

//도서정보 등록 처리
exports.createBook = async (req, res)=>{
    
    const {title, publish, price} = req.body;
    //첨부파일
    const image = req.file? req.file.filename: 'noimage.jpg';
    console.log('image: ',image);
    

    console.log(title, publish, price);
    if(!title || !publish || !price){
        return res.status(400).json({
            message:'제목, 출판사, 가격값이 들어오지 않았어요'
        })
    }//if------
    const sql=`insert into book(title,publish,price, image)
    values(?,?,?,?)
    `;
    try{
        //? : in parameter
        const [result] = await pool.query(sql,[title, publish, price, image])
        console.log('result: ', result);
        res.json(result)
    }catch(error){
        console.log(error);
        res.status(500).json({message:'DB 에러 발생 '+error.message})
    }
}//-------------------------------

exports.listBook=async (req, res)=>{
    const sql=`select * from book order by isbn desc`;
    try{
        const [data] = await pool.query(sql);
        res.json(data);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}//---------------------------------
//get /api/books/1 ==> select * from book where isbn=?
//getBook
exports.getBook = async (req, res)=>{
    const {isbn} =req.params;
    console.log('isbn: ',isbn);
    const sql=`select isbn, title, publish, 
    price, image,indate from book where isbn=?`;
    try {
        const  [data]=await pool.query(sql,[isbn]);
        //isbn이 PK이므로 데이터가 있다면 1개 온다
        if(data.length>0){
            res.json(data[0])
        }else{
            res.json({})
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}//---------------------------------

//deleteBook()함수 구성해서 내보내기
//delete문 수행
exports.deleteBook=async (req,res)=>{
    const {isbn}=req.params;
    if(!isbn){
        return res.status(400).json({message:'도서번호가 필요해요'})
    }
    const sql=`delete from book where isbn=?`;
    try{
        const [result] = await pool.query(sql, [isbn]);
        if(result.affectedRows===0){
            return res.json({message:'삭제할 도서상품이 존재하지 않아요'});
        }
        res.json({message:`${isbn}번 도서상품을 삭제했습니다`})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}//----------------------

exports.updateBook= async (req, res)=>{
    //isbn값 받기==>req.params
    const {isbn}=req.params
    //수정한 도서정보 데이터 받기=> req.body
    let {title,publish, price}=req.body;
    
    title=title.trim();// 앞뒤 공백문자 제거
    publish=publish.trim();

    if(!isbn || !title || !publish || !price){
        return res.status(400).json({message:'제목, 출판사, 가격 모두 입력해야 해요'});
    }
    const sql=`update book set title=?, publish=?, price=? where isbn=?`;
    try {
        const [result] = await pool.query(sql,[title, publish,price, isbn]);
        console.log('result: ',result);
        if(result.affectedRows===0){
            return res.status(404).json({message:'해당 도서는 존재하지 않아요'})
        }
        res.json({message:'success'})
    } catch (error) {
        console.error(error);
        res.status(500).json({message:error.message})
    }
}//-----------------------
//도서 제목으로 검색  /api/books/search?keyword=Node
exports.findBook= async (req, res)=>{
    let {keyword} = req.query;
    console.log(keyword);
    keyword=keyword.trim();//앞뒤 공백문자 제거    
    if(!keyword){
        return res.json({message:'검색어를 입력해야 해요'});
    }
    try {
        const sql=`select * from book where title like ? order by isbn desc`;
        const [data]=await pool.query(sql,[`%${keyword}%`]);
        res.json(data);
    } catch (error) {
        console.log(error);        
        res.json({message:error.message})        
    }    
}//-------------------------
