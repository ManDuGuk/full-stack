//피자 주문받는 함수
const orderPizza = function () {
    return new Promise((resolve, rejects) => {
        resolve("피자가 주문되었음");
    });
}

//도우 만들기
const makeDough = function (message) {
    console.log(message);
    return new Promise((resolve, rejects) => {
        resolve("피자 도우 만듬");
    });
}

//토핑 만들기
const setTopping = function (message) {
    console.log(message);
    return new Promise((resolve, rejects) => {
        resolve("토핑 만듬");
    });
}


//굽기
const bakePizza = function (message) {
    console.log(message);
    return new Promise((resolve, rejects) => {
        resolve("피자 구움");
    });
}

//프로미스 체이닝이란 하나의 체인이 끝나고 다른 체인이 실행되는것을 말하는것 같다. --> 당장 비동기가 순차적으로 처리가 되지 않는다면 프로미스를 쓸 이유가 없으니까
orderPizza()
    // .then(message => console.log(message))
    .then(makeDough)
    .then(setTopping)
    .then(bakePizza)
    .then(console.log);

//아래처럼도 호출 가능함 --> 위에는 콜백함수를 만들어 준것이고, 아래는 then 소괄호에 콜백함수자체를 넣어준것으로 원래는 콜백함수를 만들어주는것인데, then에 그냥 콜백함수를 넣어줬다고 이해하면된다.
// .then(console.log)