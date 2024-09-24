import {getAllBook,addBook,getBook,findBook,deleteBook,updateBook } from './bookApi.js'
const init=()=>{
    const btnAll =document.querySelector('#btnAll');
    const btnCreate =document.querySelector('#btnCreate');
    const btnUpdate =document.querySelector('#btnUpdate');

    btnAll.onclick= async ()=>{//모두 보기
        getAllBook();
    }//btnAll------------------

    btnCreate.onclick =()=>{//등록 버튼
        const title=document.getElementById('title').value;
        const publish =document.getElementById('publish').value;
        const price =document.getElementById('price').value;
        if(!title ||!publish || !price){
            alert('모든 값을 입력해야 해요')
            return;
        }
        const book={title,publish,price};
        addBook(book);
    }//btnCreate--------------------

    btnUpdate.onclick=()=>{
        //수정한 도서정보 얻어오기
        const isbn = document.getElementById('isbn').value;
        const title = document.getElementById('title').value;
        const publish = document.getElementById('publish').value;
        const price = document.getElementById('price').value;
        if(!isbn || !title || !publish || !price){
            alert("모든 값을 입력해야 해요");
            return;
        }
        if(isNaN(price)){
            alert('가격은 숫자여야 해요')
            return;
        }
        const tmpBook={isbn,title,publish,price};
        updateBook(tmpBook);
    }//btnUpdate------------------

    const btnSearch=document.querySelector('#btnSearch');//검색 버튼
    btnSearch.onclick =()=>{
        let keyword=document.getElementById('keyword').value;
        if(!keyword){
            alert('검색할 도서명을 입력하세요');
            document.getElementById('keyword').focus();
            return;
        }
        findBook(keyword);
    }//btnSearch-------------------
    getAllBook();
}//init----------------
window.getBook =getBook;
window.deleteBook = deleteBook;
//모듈에서 정의된 변수나 함수는 해당 모듈에서만 접근 가능
//모듈에서 export하면 다른 모듈에서 import할 수 있다.
//모듈화한 함수를 HTML에서 사용하려면 window 객체에
//속성으로 등록해줘야 한다
//아니면 DOM이용해서 처리

document.addEventListener('DOMContentLoaded', init)