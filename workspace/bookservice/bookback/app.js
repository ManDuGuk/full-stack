//npm init ==>package.json
//npm i express dotenv morgan --s

const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3333;

const app = express();

//미들웨어 설정
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
// corse관련 설정 미들웨어
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //*: 모든 도메인 허용 'http://www.naver.com': 네이버만 허용
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE') //허용할 메서드 설정
    next();
})

//더미 데이터==>향후 데이터베이스와 연동
const books = [
    { isbn: 1111, title: 'node교과서', publish: '길벗', price: 40000, image: 'a.jpg' },
    { isbn: 1112, title: '자바스크립트 교과서', publish: '한빛', price: 30000, image: 'b.jpg' },
    { isbn: 1113, title: 'node.js로 서버 만들기', publish: '로드북', price: 20000, image: 'c.jpg' },
];

//read: 모든 도서 정보 조회
app.get('/books', (req, res) => {
    res.json(books); //브라우저에 json데이터 쓰기
})
//create: 새로운 도서정보 등록
//isbn:일련번호 title:mySQL publish:에이스 출판사 price:25000, imgae:d.jpg
app.post('/books', (req, res) => {
    let isbn = 1111 + books.length;
    console.log(`isbn:${isbn}`);
    //post 방식일때 데이터 얻기:req.body
    const { title, publish, price, image } = req.body;
    console.log(title, publish, price, image);
    //books 배열에 추가 
    const newBook = {
        isbn, //isbn:isbn과 동일
        title,
        publish,
        price,
        image
    }
    books.push(newBook);
    res.status(201).json(newBook); //200번대 성공, 자기가 스테이터스를 임의로 줄수도 있다. 이렇게
})

//read:특정 isbn의 도서 검색 get /books/1111
app.get('/books/:isbn', (req, res) => {
    //req.params.isbn
    const { isbn } = req.params;
    console.log("isbn", isbn, 'typeof: ', typeof isbn);
    //isbn과 동일한 도서가 있는지 books에서 검색해서 
    //있으면 해당 도서정보를 json 형태로 브라우저에 출력
    //없으면 404상태코드 전송
    //for루프/ for of 루프 / forEach()

    /* 좀더 줄일수도 있다.
    books.forEach((element, index) => {
        if (element.isbn === parseInt(isbn)) { //등호 세개로 비교하면 데이터 형도 값이야 해서 찾지 못할것, 세개로 비교하려면 형변환 시켜줘서..
            return res.json(element);
        } else {
            res.status(404);
        }
    });
    */
    //배열의 find(콜백)함수를 쓰면 더 간단하게도 가능
    //배열의 findIndex() :검색한 인텍스 번호를 번환
    /*
    const findBook = books.find((item) => {
        return item.isbn === parseInt(isbn); //조건을 충족하는 첫번째 만난 요소를 반환
    })
    */
    const findBook = books.find(b => b.isbn === Number(isbn));
    if (findBook) {
        res.json(findBook);
    } else {
        res.status(404).send();
    }
})

//delete 삭제처리: delete /books/1111
app.delete('/books/delete/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    //배열에서 동일한 isbn을 갖는 도서가 있는지 알아내자 ==>findeindex()함수 활용
    //검색했는데 없으면 -1반환
    const findedIndex = books.findIndex(element => element.isbn === Number(isbn));

    //splice(index,count): 삭제한 도서정보를 갖는 배열반환
    if (findedIndex !== -1) {
        const deletedBooks = books.splice(findedIndex, 1);
        // console.log(deletedBooks);
        res.json(deletedBooks[0]);
    } else {
        res.status(404).send();
    }


})

app.put('/books/put/:isbn', (req, res) => {
    const { isbn } = req.params; //수정할 도서의 isbn

    //수정할 도서정보 추출
    const { title, publish, price } = req.body; //put,post ==>req.body 추출
    //수정할 도서가 있는지 검색해서 
    //있으면 해당 도서의 title,publish,price값을 변경
    //수정된 도서정보를 json으로 반환
    const findedIndex = books.findIndex(element => element.isbn === Number(isbn));
    console.log(findedIndex);

    if (findedIndex !== -1) {
        /* 아래에서는 구조분해 할당을 이용해서 좀더 간단히 고침
        books[findedIndex].title = '몰라'
        books[findedIndex].publish = '몰라'
        books[findedIndex].price = 0

        console.log(books[findedIndex]);
        res.json(books[findedIndex]);
        */
        //전개 연산자로 검색한 도서를 나열, 수정할 속성값을 넣어주면 동리한 속성명을 가진 것이 있으면 덮어쓰기 한다.     
        const updatedBook = { ...books[findedIndex], title, publish, price }; //해당 문법은 위에서 req.body로 가져왔던 값들을 title:"title" 이런식으로 덮어쓴다. 
        books[findedIndex] = updatedBook;
        res.json(updatedBook);

    } else {
        res.status(404).send();
    }


    //없을때는 404
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})