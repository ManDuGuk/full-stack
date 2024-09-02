const bt1 = document.querySelector("#btn1");
const result = document.querySelector("#result");
const url = "singleUser.json";

bt1.onclick = () => {
    getUserInfo(url);
}

const getUserInfo = (url) => {
    fetch(url)
        .then((response) => {
            // alert(response.ok)
            if (!response.ok) throw new Error('요청이 잘못되었거나 네트워크 문제');
            console.log('response:' + response); //response오브젝트
            console.log('response:' + response);
            console.log('response.json():' + response.json()); //프로미스 오브젝트

            return response.json(); //JSON.parse(xhr.responseText)
        })
        .then((data) => {

            renderUI(data)
        })
        .catch((error) => {
            alert(error);
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