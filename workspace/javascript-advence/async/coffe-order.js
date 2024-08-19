
console.log("start");

//커피 주문
const order = function (coffee, fn) {
    console.log(`${coffee} 주문 접수 완료`);
    setTimeout(() => {
        fn(coffee);
    }, 3000)

}

//커피 준비 완료 메세지 출력
const display = function (result) {
    console.log(`${result}가 준비됨`);
}

order("카푸치노", display);

console.log("end");