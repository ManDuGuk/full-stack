const baseUrl=`http://localhost:7777`;
const url=baseUrl+'/books';
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

const findBook=async (keyword)=>{
    //alert(keyword);
    const url2=url+`/search?keyword=${keyword}`;
    try{
        const response = await fetch(url2);
        const data = await response.json();
        renderBooks(data);
    }catch(error){
        alert(error)
    }
}//findBook------------------

const addBook = async (newBook)=>{
    try{
        //fetch()이용해서 백엔드에 요청보내기. post방식으로
        const response = await fetch(url,{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newBook)
        })
        //받은 응답 => 새로 등록된 도서정보 들어옴
        const data = await response.json();
        //alert(JSON.stringify(data))

        //모든 도서정보 가져오기
        getAllBook();
        clearInput();//입력 필드값 초기화
    }catch(error){
        console.error('Error: ', error);
        alert(error)
    }
}//addBook()----------------------
const clearInput =()=>{
    document.getElementById('isbn').value='';
    document.getElementById('title').value='';
    document.getElementById('publish').value='';
    document.getElementById('price').value='';
    document.getElementById('title').focus();//입력 포커스 주기
}//-------------------------------
const getAllBook= async ()=>{
    try {
        const response = await fetch(url);
        //alert(response.status)
        const data = await response.json();
        //데이터 확인후 id가 result 인 곳에 데이터 출력하기
        console.dir(data)
        renderBooks(data);
    } catch (error) {
        alert('Error: '+error)
        console.dir(error)
    }

}//getAllBook()---------------

const renderBooks=(data)=>{
    const result=document.querySelector('#result');
        result.innerHTML=``
        console.log('===============')
        console.log(data)
        console.log('===============')
        //for(const book of data){
        data.forEach((book)=>{
            const str=`<tr>
                <td>${book.title}</td>
                <td>${book.publish}</td>
                <td>${book.price}</td>
                <td>${book.isbn}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="getBook('${book.isbn}')">수정</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteBook('${book.isbn}')">삭제</button>
                </td>
            </tr>`;
            result.innerHTML+=str;
        })//for------
}//renderBooks()--------------------------------

const getBook = async (isbn)=>{
    console.log('getBook() isbn: ',isbn);
    try {
        //GET '/books/1111'
        const url2=url+`/${isbn}`;
        const response = await fetch(url2)
        const data = await response.json();
        console.log(data);
        setFormData(data);//조회한 도서정보 form에 출력하기
    } catch (error) {
        alert(error);
    }
}//----------------------------
const setFormData=(book)=>{
    if(!book){
        alert('해당 도서는 없습니다')
        return;
    }
    document.getElementById('isbn').value=book.isbn;
    document.getElementById('title').value=book.title;
    document.getElementById('publish').value=book.publish;
    document.getElementById('price').value=book.price;
    //도서 이미지
    let str=``;
    if(book.image){ //이미지가 있을 경우
        str+=`<img src="images/${book.image}" alt="${book.title}"  class="img-thumbnail">`;
    }else{//없을 경우 noimage.jpg
        str+=`<img src="images/noimage.jpg" alt="Noimage" class="img-thumbnail">`;
    }
    //id="bookImage"인 곳에 넣자
    document.getElementById('bookImage').innerHTML=str;
    //수정 버튼 활성화
    const btnUpdate =document.querySelector('#btnUpdate');//초기에는 비활성화
    btnUpdate.removeAttribute("disabled");//수정버튼 활성화
}//-----------------------------

const deleteBook= async (isbn)=>{
    // alert(isbn)
    const yn = confirm(`${isbn}번 도서를 정말 삭제할까요?`);
    if(!yn) return;
    //DELETE  '/books/1111'
    //fetch()이용해서 요청보내고 삭제된 도서데이터 잘 오는지 확인하세요
    const deleteUrl=url+'/'+isbn;
    console.log(deleteUrl);
    try {
        const response = await fetch(deleteUrl,{
            method:'delete'
        })
        const data = await response.json();
       // alert(JSON.stringify(data))
        getAllBook(); //모든 도서 가져오기
    } catch (error) {
        alert(error);
        console.error(error);
    }
}//deleteBook---------------
//PUT /books/1111
//응답 바디: 수정할 도서정보
const updateBook= async (newBook)=>{
    const url2=url+`/${newBook.isbn}`;
    try{
        //fetch()    
        const response =await fetch(url2,{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newBook)
        })
        //응답이 잘 오면 모든 도서 정보 가져오기
        const data = await response.json();
        console.log(data);
        if(data){
            getAllBook();
            clearInput();//clearInput()호출해서 초기화
            document.getElementById('btnUpdate').setAttribute("disabled","disabled")
            //수정버튼 비활성화
        }
    }catch(error){
        alert(error);
    }
}//updateBook----------------


document.addEventListener('DOMContentLoaded', init)
