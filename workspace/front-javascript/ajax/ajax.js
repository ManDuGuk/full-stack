//메세지를 받아오는 역할만 해야한다. dom 처리는 해주면 안됨
//dom 처리는 app에서 해준다.

//콜백기반의 비동기 통신함수
export const get = function (url, sucess, fail) {
    //1.XMLHttpRequest 객체생성
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    // console.log(xhr.readyState);


    //2.요청 초기화
    xhr.open("GET", url);
    // console.log(xhr.readyState);

    // 옛날방식 인라인 이벤트 처리
    //3.xhr 객체에 이벤트 핸들러 등록
    // xhr.onreadystatechange = function (e) {
    //     // 서버로 데이터를 잘 받은경우
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         //수신한 데이터 처리
    //         console.log(xhr.responseText);
    //         let message = document.querySelector("#message")
    //         message.innerHTML = "";
    //         let respons = JSON.parse(xhr.responseText)
    //         document.querySelector("#message").innerHTML = respons.message;
    //     }
    // }

    //표준이벤트 처리 모델
    // xhr.addEventListener("readystatechange", (e) => {
    //     // 서버로 데이터를 잘 받은경우
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         //수신한 데이터 처리
    //         console.log(xhr.responseText);
    //         let message = document.querySelector("#message")
    //         message.innerHTML = "";
    //         let respons = JSON.parse(xhr.responseText)
    //         document.querySelector("#message").innerHTML = respons.message;

    //         //응답 헤더 정보들
    //         const headers = xhr.getAllResponseHeaders();
    //         console.log(headers);

    //     } else {
    //         console.log(xhr.status, xhr.statusText);

    //     }
    // })

    //이벤트 처리방식을 load로 바꿔주면 xhr.readyState === 4 체크를 빼줄수도 있다.
    xhr.addEventListener("load", (event) => {
        if (xhr.status === 200) {
            sucess(JSON.parse(xhr.responseText))
        } else {
            fail(xhr.status)
        }
    });

    //4.http요청
    // send에서 넘긴 파라미터는 브라우저 주소창에는 표시되지 않는다. 내부적으로 보낸는거라...
    xhr.send();

}

