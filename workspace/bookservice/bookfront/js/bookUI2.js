import { getAllBook, addBook, getBook, findBook, deleteBook, updateBook, addBookFileup } from './bookAPI2.js'


const init = () => {
    const btnAll = document.querySelector("#btnAll");
    const btnCreate = document.querySelector('#btnCreate');
    const btnUpdate = document.querySelector('#btnUpdate');
    btnAll.onclick = () => { //모두보기
        getAllBook();
    }
    btnCreate.onclick = () => { //등록버튼
        const title = document.getElementById('title').value;
        const publish = document.getElementById('publish').value;
        const price = document.getElementById('price').value;

        //도서 이미지 첨부파일값 받기
        const image = document.getElementById('image').files[0]; //files[0]로 받음

        if (!title || !publish || !price) {
            alert('마저 입력하세요');
            return;
        }

        //파일 업로드 안할경우 --> json 데이터로 보낸다.
        //const book = { title, publish, price };
        //addBook(book);


        //파일 업로드를 할경우 --> FromData에 담아서 보낸다.
        let formData = new FormData();
        formData.append("title", title);
        formData.append("publish", publish);
        formData.append("price", price);

        if (image) {
            //첨부파일이 있다면 
            formData.append('image', image);
        }

        //로그로 폼데이터 확인
        console.log(Array.from(formData.entries()));

        addBookFileup(formData); //업로드 할 경우 호출
    }

    btnUpdate.onclick = () => {
        //수정한 도서 정보 얻어오기
        const isbn = document.getElementById('isbn').value;
        const title = document.getElementById('title').value;
        const publish = document.getElementById('publish').value;
        const price = document.getElementById('price').value;

        if (!isbn || !title || !publish || !price) { alert('모든값을 입력해랴'); return; };
        if (isNaN(price)) {
            alert('가격은 숫자여야 해요')
            return;
        };
        const temBook = { isbn, title, publish, price };

        updateBook(temBook);
    }


    const btnSearch = document.querySelector('#btnSearch');//검색 버튼
    btnSearch.onclick = () => {
        let keyword = document.getElementById('keyword').value;
        if (!keyword) {
            alert('검색할 도서명을 입력하세요');
            document.getElementById('keyword').focus();
            return;
        }
        findBook(keyword);
    }

    getAllBook();
}


//그럼 이거 import에서 불러올때 사용되지 않은 함수는 전부 이렇게 처리해줘야하는거?

/* renderBooks에서 아래 부분에 onclick부분에서 해당 함수를 호출하고 있으므로 html의 전역에 해당 함수를 매칭시켜줘야 함
id나 class로 찾는다면 굳이 할필요가 없는 작업이다. 
<button class="btn btn-warning btn-sm" onclick="getBook('${element.isbn}')">수정</button>
<button class="btn btn-danger btn-sm" onclick="deleteBook('${element.isbn}')">삭제</button>
*/

window.getBook = getBook;
window.deleteBook = deleteBook;
//모듈에서 정의된 변수나 함수는 해당 모듈에서만 접근가능
//모듈에서 export하면 다른 모듈에서 imort할수 있다.
//모듈화한 함수를 html에서 사용하려면 window 객체에 속성으로 등록해줘야 한다.
//아니면 DOM 이용해서 처리

document.addEventListener('DOMContentLoaded', init());