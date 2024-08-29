const url = 'https://reqres.in/';
const bt1 = document.getElementById('btn1');
const result = document.querySelector("#result");
const paging = document.querySelector("#paging");


// function createUser() {
//     //서버에 submit하지 목하도록 기본동작을 막자
//     event.preventDefault();
//     //사용자가 입력한 값 받기. name,job
//     let name = document.getElementById('name').value;
//     alert(name);

//     //form네임.input네임.value
//     const data = {
//         name: frm.name.value,
//         job: frm.job.value
//     }

//     //유효성 체크
//     if (!data.name) {
//         alert("이름을 입력하세요");
//         frm.name.focus();//입력 포커스 주기
//         return;
//     }
//     if (!data.job) {
//         alert("직업을 입력하세요");
//         frm.job.focus();//입력 포커스 주기
//         return;
//     }


// }


const createUser = function () {
    //서버에 submit하지 목하도록 기본동작을 막자
    event.preventDefault();
    //사용자가 입력한 값 받기. name,job
    // let name = document.getElementById('name').value;
    // alert(name);

    //form네임.input네임.value
    const data = {
        name: frm.name.value,
        job: frm.job.value
    }

    //유효성 체크
    if (!data.name) {
        alert("이름을 입력하세요");
        frm.name.focus();//입력 포커스 주기
        return;
    }
    if (!data.job) {
        alert("직업을 입력하세요");
        frm.job.focus();//입력 포커스 주기
        return;
    }

    reguisterUser(data)

}

//await
async function reguisterUser(data) {
    const newUrl = url + `api/users`;

    try {
        const response = await fetch(newUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) //post 방식으로 전송할 데이터를 json객체가 아니라 json형태의 문자열로 만들어 보낸다.
        })//post방식일때는 옵션을 기술하자
        const responseData = await response.json();
        console.log(responseData);
        const { name, job, id, createdAt } = responseData;
        const result = document.querySelector('#result');
        result.innerHTML = `
            <h2>등록된 회원 정보</h2>
            <h3>${id}</h3>
            <h3>${name}</h3>
            <h3>${job}</h3>
            <h3>${createdAt}</h3>
        `;

    } catch (error) {
        alert(error);
    }
}

