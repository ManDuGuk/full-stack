import { get } from "./ajax-promise.js"

console.log("프로그램 시작됨");


// 서버로부터 수신한 메세지 처리
// const handleResponse = function (result) {

//     // 서버로 부터 수신한 정상 메세지 처리
//     let message = document.querySelector("#message")
//     message.innerHTML = result;

//     // 1.result를 맵으로 받아오기

// }

// const handleError = function (status) {
//     console.log(`오류코드:${status}`);

// }


// get("./message.json", handleResponse, handleError);
// 제이스 플레이스 홀더에서 더비 데이터를 이용함

let promise = get("https://jsonplaceholder.typicode.com/posts");
promise
    .then((array) => {
        console.log("넘어옴");
        let table = document.querySelector("table");
        table.innerHTML =
            `${array.map(function (element) {
                return `
            <tr>
                <td>${element.userId}</td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
            </tr>
            `;

            }).join("")
            }`;
    })
    .chatch




console.log("프로그램 종료됨");
