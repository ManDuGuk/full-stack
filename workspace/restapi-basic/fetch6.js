const url = 'https://reqres.in/';
const bt1 = document.getElementById('btn1');
const result = document.querySelector("#result");
const paging = document.querySelector("#paging");


const find = () => {
    const idVal = document.querySelector('#id').value;
    const divFrm = document.querySelector('#divFrm');//div ==> display:none
    if (!idVal) {
        alert('id를 입력해야 해요');
        document.querySelector('#id').focus();
        return;
    }
    // isNaN(값) :값이 숫자가 아니면 true를 반환
    if (isNaN(idVal)) {
        alert('id는 숫자입력');
        document.querySelector('#id').select();
        return;
    }

    //get으로 사용자 정보 조회해서 보낸데이터를 form안에 넣어줌
    getUserInfo(idVal);
}

const getUserInfo = async (id) => {
    try {
        let newUrl = url + `api/users/${id}`;
        const response = await fetch(newUrl)
        const data = await response.json();
        console.log(data);

        // alert(data);
        if (!data.data) alert(`${id}번 회원은 없다`);
        const { id: userId, first_name, last_name } = data.data;
        frm.name.value = first_name + " " + last_name;
        divFrm.style.display = 'block';
    } catch (error) {
        alert(error);
    }

}

//수정처리 하는 메서드
const updateUser = async (id) => {
    event.preventDefault();
    try {
        let newUrl = url + `api/users/${id}`;
        //수정할 회원의 id값 받기
        let updateid = document.getElementById('id').value;
        //수정한 정보 name,job받기
        let updatename = document.getElementById('name').value;
        let updatejob = document.getElementById('job').value;

        //유효성 체크(옵션)
        if (!updateid || !updatename || !updatejob) {
            alert('빠트린게 있다.');
            return;
        }
        else {
            let data = {
                name: updatename,
                job: updatejob
            }
            //put메서드로 요청보내기
            const response = await fetch(newUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) //post 방식으로 전송할 데이터를 json객체가 아니라 json형태의 문자열로 만들어 보낸다.
            })//post방식일때는 옵션을 기술하자
            const responseData = await response.json();
            console.log(responseData);
            const { name, job, updatedAt } = responseData;
            const result = document.querySelector('#result');
            result.innerHTML = `
                <h2>수정된 회원 정보</h2>
                <h3>${updateid}</h3>
                <h3>${name}</h3>
                <h3>${job}</h3>
                <h3>${updatedAt}</h3>
            `;

        }



    } catch (error) {
        alert(error);
    }
}


