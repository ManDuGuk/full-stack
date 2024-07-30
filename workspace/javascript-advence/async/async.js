
console.log("start");
// 비동기 프로그래밍
const transferData = function () {
    console.log("미국 서버와 통신 수행");
}

const generalFunction = function () {
    console.log("일반 기능 수행");
}

setTimeout(transferData, 3000);

setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}, 0);
generalFunction();

console.log("end");