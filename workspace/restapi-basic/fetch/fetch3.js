const url = 'https://reqres.in/';
const bt1 = document.getElementById('btn1');
const result = document.querySelector("#result");



bt1.onclick = function () {
    const pageNo = prompt('조회할 페이지 번호를 입력하세요');
    if (!pageNo) {
        return;
    }
    const newUrl = url + `api/users?page=${pageNo}`;
    getUserInfo(newUrl);
}

const getUserInfo = (url) => {
    //fetch()이용해서 데이터 받아서 #result에 출력하세요.
    fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error("데이터 없거나 네트워크 에러");
            return response.json();
        })
        .then((data) => {
            const { data: userList } = data;
            // console.log(page, per_page, total, total_pages);
            // console.log(userList);
            if (userList.length === 0) {
                result.innerHTML = `<h2 style="color:red">요청한 페이지에 데이터가 없습니다.</h2>`
            } else {
                renderUI(data);
            }

        })
        .catch((err) => {
            alert(err);
        })
}

const renderUI = (data) => {
    // alert(JSON.stringify(data)); //data --> 제이슨 객체
    const { page, per_page, total, total_pages, data: userList } = data;
    let str =
        `<table class="usertable">
        <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>email</th>
        </tr>
    `;

    //반복문
    userList.forEach(user => {
        str += `
        <tr>
            <td>${user.id}</td>
            <td><img src="${user.avatar}" alt="회원이미지"></td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
        </tr>
        `;
    });

    str += '</table>'
    result.innerHTML = str;


    // result.innerHTML = `
    // <h2>회원정보</h2>
    // <img src="${avatar}">
    // <h3>id: ${id}</h3>
    // <h3>first_name: ${first_name}</h3>
    // <h3>last_name: ${last_name}</h3>
    // <h3>email: ${email}</h3>
    // `;


}