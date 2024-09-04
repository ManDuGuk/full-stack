const baseUrl = `http://localhost:7777`
const url = baseUrl + `/books`;


const findBook = async (keyword) => {
    const url2 = url + `/search?keyword=${keyword}`;
    try {
        const response = await fetch(url2);
        const data = await response.json(); // await을 빼먹으면 어떨뗀 배열로 들어왔다가 어떨뗀 또 promise로 들어온다. 
        renderBooks(data);

    } catch (error) {
        alert(error);
    }

}

const addBook = async (newBook) => {

    try { //fetch() 이용해서 백엔드에 요청보내기 post방식으로
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })

        //받은 응답 => 새로 등록된 도서정보 들어옴
        const data = await response.json();
        // alert(JSON.stringify(data));
        getAllBook();
        clearInput(); //입력필드값 초기화
    } catch (error) {
        console.error('Error: ', error);
        alert(error);
    }


}

const clearInput = () => {
    document.getElementById('isbn').value = '';
    document.getElementById('title').value = '';
    document.getElementById('publish').value = '';
    document.getElementById('price').value = '';
    document.getElementById('title').focus(); //입력 포커스 주기
}


const getAllBook = async () => {

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('getallbookdata' + data);

        renderBooks(data);

    } catch (error) {
        alert(error.message)
    }
}

const renderBooks = (data) => {

    let result = document.querySelector("#result");
    const renderData = data.map((element) => {
        return `
                    <tr>
                        <td>${element.isbn}</td>
                        <td>${element.title}</td>
                        <td>${element.publish}</td>
                        <td>${element.price}</td>
                        <td>
                        <button class="btn btn-warning btn-sm" onclick="getBook('${element.isbn}')">수정</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteBook('${element.isbn}')">삭제</button>
                        </td>
                    </tr>
                `
    }).join("");

    result.innerHTML = renderData;
}

const getBook = async (isbn) => {
    console.log('getBook() isbn:', isbn);
    try {
        // get books/1111
        const url2 = url + `/${isbn}`;
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data);
        setFormData(data); //조회한 도서 정보 form에 출력하기

    } catch (error) {
        alert(error);
    }
}
const setFormData = (book) => {
    if (!book) {
        alert('해당 도서는 없어요')
        return;
    }
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('title').value = book.title;
    document.getElementById('publish').value = book.publish;
    document.getElementById('price').value = book.price;


    //도서 이미지
    let str = ``;
    if (book.image) { //이미지가 있을경우
        str += `<img src="images/${book.image}" alt="${book.title}" class="img-thumbnail">`;
    } else {//없을경우 noimgae.jpg
        str += `<img src="images/noimage.jpg"  alt="noimage" class="img-thumbnail">`;
    }

    //id 는 bookimgae인 곳에 넣자
    document.getElementById('bookImage').innerHTML = str;

    //수정버튼 활성화
    const btnUpdate = document.querySelector('#btnUpdate'); //초기에는 비활성화
    btnUpdate.removeAttribute('disabled'); //수정버튼 활성화

}

const deleteBook = async (isbn) => {
    alert(isbn);
    const yn = confirm(`${isbn}번 도서를 정말 삭제할까요?`);
    if (!yn) return;
    //delete '/book/1111'
    //fetch()이용해서 요청보내고 삭제된 도서데이터 잘 오는지 확인하세요

    const deleteUrl = url + '/' + isbn;

    try { //fetch() 이용해서 백엔드에 요청보내기 post방식으로
        const response = await fetch(deleteUrl, {
            method: 'DELETE'
        })
        const data = await response.json();
        alert(JSON.stringify(data));

        // if (response.status == 200) alert('삭제됨');

        //모든 도서 가져오기
        getAllBook();

    } catch (error) {
        alert(error);
        console.error(error);

    }



}

//put /books/1111
//응답바디: 수정할 도서정보
const updateBook = async (newBook) => {
    const url2 = url + `/${newBook.isbn}`;

    try {
        //fetch()
        const response = await fetch(url2, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        //응답이 잘 오면 모든 도서정보 가져오기
        const data = await response.json();
        console.log(data);

        if (data) {
            getAllBook();
            clearInput();
            document.getElementById('btnUpdate').setAttribute("disabled", "disabled")
        }


    } catch (error) {
        alert(error);
    }

    //clearInput() 호출해서 초기화

    //수정버튼 비활성화
}

export { getAllBook, addBook, getBook, findBook, deleteBook, updateBook }