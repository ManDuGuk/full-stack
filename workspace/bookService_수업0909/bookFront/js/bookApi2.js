const baseUrl=`http://localhost:7777`;
const url=baseUrl+'/api/books';

const showError =(error)=>{
    let msg=document.getElementById('resultMessage');
    msg.innerHTML=`<h3>${error}</h3>`;
    msg.style.display='block';
}//-----------------
const findBook=async (keyword)=>{
    //alert(keyword);
    const url2=url+`/search?keyword=${keyword}`;
    try{
        const response = await fetch(url2);
        const data = await response.json();
        renderBooks(data);
    }catch(error){
        //alert(error)
        showError(error)
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
        //alert(error)
        showError(error)
    }
}//addBook()----------------------

const addBookFileUp=async (formData)=>{
    try{
        const response = await fetch(url,{
            method:'post',
            body:formData 
        })
        //FormData객체를 사용하면 브라우저가 자동으로 Content-Type 헤더를 설정하면서
        //적절한 boundary를 추가한다 ===> multipart/form-data형식으로 알아서 전송
        const data = await response.json();
        getAllBook();
        clearInput();
    }catch(error){
        showError(error);
    }
}//addBookFileUp()------------------

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
        showError(error)
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
        showError(error)
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
        str+=`<img src="http://localhost:7777/images/${book.image}" alt="${book.title}"  class="img-thumbnail">`;
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
        showError(error)
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
        if(data.message==='success'){
            getAllBook();
            clearInput();//clearInput()호출해서 초기화
            document.getElementById('btnUpdate').setAttribute("disabled","disabled")
            //수정버튼 비활성화
            document.getElementById('resultMessage').style.display='none';
        }else{
            document.getElementById('resultMessage').innerHTML=`<h3>${data.message}</h3>`
            document.getElementById('resultMessage').style.display='block';
        }
    }catch(error){
        showError(error)
    }
}//updateBook----------------

export {getAllBook,addBook,addBookFileUp,getBook,findBook,deleteBook,updateBook };
