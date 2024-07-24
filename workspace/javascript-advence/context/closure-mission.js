
//필요에 따라서 증가와 감소를 시키는 기능, 콜백함수와 클로저를 모두 이용한다.
const counter = function () {

    //count()를 호출하면 function(){reuturn callback(count)}을 리턴한다.

    //카운트
    let count = 0;

    //클로저 반환필요?
    //아래 함수 안에대가 콜백함수를 줘야한다.
    //클로저를 호출하면서 클로저한테 콜백기능을 줘야한다. 


    return function (callback = function () { }) {
        count = callback(count);
        return count;
    }
}

//증가함수
const plusCount = function (count) {
    return ++count;
}
//감소함수
const minusCount = function (count) {
    return --count;
}

//따로 호출하면 다른 컨텍스트 값이 되버림
//증가 -->호출시 실행컨텍스트 생성됨
// let increament = counter(plusCount);

//감소 -->호출시 실행컨텍스트 생성됨
// let decreament = counter(minusCount);

// console.log(`현제 카운트: ${increament()}`);
// console.log(`현제 카운트: ${increament()}`);
// console.log(`현제 카운트: ${decreament()}`);


//하나의 호출이 되어야됨
const closure = (counter())();
closure(plusCount);






