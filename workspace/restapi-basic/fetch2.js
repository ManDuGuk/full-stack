const url = 'https://reqres.in/';
const bt1 = document.getElementById('btn1');
const result = document.querySelector("#result");



bt1.onclick = function () {
    const findId = prompt('검색할 회원의 Id 번호를 입력하세요');
    if (!findId) {
        return;
    }
    const newUrl = url + `api/users/${findId}`;
    getUserInfo(newUrl);
}

const getUserInfo = (url) => {
    //fetch()이용해서 데이터 받아서 #result에 출력하세요.
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderUI(data);
        })
        .catch((err) => {
            alert(err);
        })
}

const renderUI = (data) => {
    // alert(JSON.stringify(data)); //data --> 제이슨 객체
    const { id, first_name, last_name, email, avatar } = data.data;
    result.innerHTML = `
    <h2>회원정보</h2>
    <img src="${avatar}">
    <h3>id: ${id}</h3>
    <h3>first_name: ${first_name}</h3>
    <h3>last_name: ${last_name}</h3>
    <h3>email: ${email}</h3>
    `;


}