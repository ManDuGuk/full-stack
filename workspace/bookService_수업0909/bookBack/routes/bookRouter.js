const express = require('express');
const router =express.Router()
//express.Router() ==> 독립적인 라우터 객체를 생성하는 역할을 함
//미니 앱처럼 동작하여 경로 및 미들웨어를 정의할 수 있다


//더미 데이터===>향후 데이터베이스와 연동
const books=[
    {isbn:1111, title:'Node교과서', publish:'길벗', price:40000, image:'a.jpg'},
    {isbn:1112, title:'JavaScript교과서', publish:'한빛', price:30000, image:'b.jpg'},
    {isbn:1113, title:'Node.js로 서버 만들기', publish:'로드북', price:20000, image:'c.jpg'}
]
//-------------

//Read: 모든 도서정보 조회
router.get('/', (req,res)=>{
    res.json(books);//브라우저에 json데이터 쓰기
})
//GET  /search?keyword=node
router.get('/search',(req, res)=>{
    const {keyword}=req.query;
    console.log(keyword);
    let lower_key=keyword.toLowerCase();//소문자로 변경
    const findBooks=books.filter(b=> b.title.toLowerCase().includes(lower_key))
    console.log(findBooks);
    
    if(!findBooks|| findBooks.length==0){
        res.status(404).send()
    }else{
        res.json(findBooks)
    }
})//--------------------------


//Create: 새로운 도서정보 등록
//isbn :일련번호  title:'MySQL데이터베이스', publish:'에이스출판사', price:25000,'d.jpg'
router.post('/',(req,res)=>{
    let isbn=1111+books.length;
    console.log(`isbn: ${isbn}`);
    //post방식일 때 데이터 얻기 : req.body
    const {title,publish, price,image}=req.body;
    console.log(title,publish,price,image);
    // 배열에 추가
    const newBook={
        isbn, //isbn:isbn 과 동일
        title, //title:title
        publish,
        price,
        image
    }
    books.push(newBook);
    res.status(201).json(newBook) //200번대 성공
})

//READ: 특정 isbn의 도서 검색  GET /1111
router.get('/:isbn',(req,res)=>{
    //req.params.isbn 
    const {isbn}=req.params;
    console.log('isbn: ',isbn, 'typeof: ', typeof(isbn));
    //isbn과 동일한 도서가 있는지 books에서 검색해서
    //있으면 해당 도서정보를 json형태로 브라우저에 출력
    //없으면 404상태코드 전송
    //for루프/for of 루프/ forEach()
    /*
    books.forEach((item,index)=>{
        //item: 도서객체
        if(item.isbn === parseInt(isbn)){    //item.isbn:number타입, isbn :string 타입
            return res.json(item);
        }
    })
    */
   //배열.find(콜백함수)  함수 활용해서 검색
   //배열.findIndex( ) : 검색한 인덱스번호를 반환
  /* const findBook=books.find((item)=>{
        return item.isbn ===parseInt(isbn);//조건을 충족하는 첫번째 만난 요소를 반환
   })*/
  const findBook = books.find(b=> b.isbn ===Number(isbn));

   if(findBook){//검색했다면
        res.json(findBook)
   }else{
        res.status(404).send();
   }    
})//----------------------
//DELETE 삭제처리  : DELETE /1111
router.delete('/:isbn', (req,res)=>{
    const isbn=req.params.isbn;
    //배열에서 동일한 isbn을 갖는 도서가 있는지 알아내자 ==>findIndex()함수 활용
    //검색했는데 없으면 -1 반환
    const deleteIdx =books.findIndex((b)=>b.isbn === Number(isbn));
    console.log('deleteIdx: ',deleteIdx);
    if(deleteIdx!= -1){
        const delBook=books.splice(deleteIdx,1);
        res.json(delBook[0])
    }else{
        res.status(404).send();
    }
    //splice(index, count): 삭제한 도서정보를 갖는 배열반환
    //삭제한 도서정보를 json형태로 출력
})//------------------------

router.put('/:isbn',(req, res)=>{
    const { isbn }=req.params //수정할 도서의 isbn
    //수정할 도서정보 추출
    const { title, publish,price}=req.body; //put,post==>req.body추출

    const findIndex =books.findIndex(b=> b.isbn === Number(isbn));
    if(findIndex!= -1){
        const updatedBook ={ ... books[findIndex],title,publish,price }
        //전개 연산자로 검색한 도서를 나열. 수정할 속성값을 넣어주면, 동일한 속성명을 가진
        //것이 있으면 덮어쓰기 한다

        books[findIndex]=updatedBook;
        res.json(updatedBook);

        // books[findIndex].title = title;
        // books[findIndex].publish =publish;    
        // books[findIndex].price =price;
    //수정할 도서가 있는지 검색해서 
    //있으면 해당 도서의 title,publish,price값을 변경
    //수정된 도서정보를 json으로 반환
        // res.json(books[findIndex])
    }else{
        //없을때는 404
        res.status(404).send();
    }
})//-------------------------

//----------------
module.exports = router;
//exports.add=function(){}
//exports.num