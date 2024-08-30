const url = 'https://reqres.in/';
const bt1 = document.getElementById('btn1');
const result = document.querySelector("#result");
const paging = document.querySelector("#paging");


const getAllUser = (page, perPage) => {
    //page:페이지번호,perPage:한 페이지에 보여줄 목록 개수
    const newUrl = url + `api/users?page=${page}&per_page=${perPage}`;
    // console.log(newUrl);
    fetch(newUrl)
        .then(response => {
            if (!response.ok) throw new Error('데이터가 없거나 네트워크 에러');
            return response.json();
        })
        .then((data) => {
            if (data.data.length === 0) {
                alert('데이터가 없음');
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
    console.log('tatal:', total); //게시글수
    console.log('per_page:', per_page); //한페이지에 보여줄 목록 개수
    console.log('total_pages:', total_pages); //총페이지수 //지금 api불로는 곳에서는 다 계산을 해서 주는데 다른상황에서는 게시글수 나누기 목록개수로 해서 올림처리해주어야..

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

    //페이지 네비게이션 문자열 만들기
    //페이지 번호 클릭할때마다 해당 페이지 데이터 가져오도록
    let pageStr = '';
    for (let p = 1; p <= total_pages; p++) {
        pageStr += `
        <button onclick="getAllUser(${p},${per_page})">${p}</button>
        `;

    }

    result.innerHTML = str;
    paging.innerHTML = pageStr;


}

