console.log("start");

//커피 주문
const order = function (coffe) {
    console.log(`${coffe} 주문 접수 완료`);

    //여기서 return new Promise
    return new Promise((resolve, reject) => {
        //그냥초뒤 실행
        setTimeout(() => {
            resolve(coffe);
            display(coffe);
        }, 3000)
    })

}

//커피 준비 완료 메세지 출력
const display = function (result) {
    console.log(`${result}가 준비됨`);
}

//고객이 카푸치노를 시켜야 함 --> 여기서 프로미스 호출( order를 호출하면 promise를 리턴해주니까)
const promise = order("카푸치노");
promise
    .then();

console.log("end");


// //고객이 커피주문 --> order를 호출
// const promise = new Promise((resolve, reject) => {

//     console.log("안녕하세요. 커피점입니다.");

//     //커피주문
//     let coffe = "아메리카노";

//     if (coffe) {
//         //백그라운로 보내버림
//         resolve(coffe);
//     } else {
//         reject(new Error("주문이 없어요"))
//     }

//     //프로미스 자체도 절차시행이니 해당 로그가 먼저 시행된다.
//     console.log("테스트");
// });

// //소비자
// promise.then((order) => {
//     console.log(order + " 주문접수");
//     return order
// })
//     .then((order) => {

//         console.log(order + " 완료되었습니다.");
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
//     .finally(() => {
//         console.log("영업이 끝났습니다. 집에 가세요");
//     })




