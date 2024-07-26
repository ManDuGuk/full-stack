
//필요에 따라서 증가와 감소를 시키는 기능, 콜백함수와 클로저를 모두 이용한다.
const counter = function () {

    //함수를 정의할때 여기 영역에 있는 요소를 아래 함수에서 사용 가능하다.
    //왜 여기다가 콜백함수를 넣어서 연산하면 안되었던 걸까???
    //카운터 함수를 실행하면 아래 연산함수가 반환된다.
    //그런데 여기서 콜백함수를 넣어서 실행해버리면
    let count = 0;

    // 이게 클로저
    const 연산 = function (fn) {

        //증감연산과 감소 연산을 콜백함수를 통해 해준다.
        count = fn(count);
        return count;
    }

    return 연산;
}

// 어제 문제가 되었던 코드가 이거였을것임
// const counter = function (fn) {
//
//     let count = 0;
//
//     return function () {
//         //증감연산과 감소 연산을 콜백함수를 통해 해준다.
//         count = fn(count);
//         return count;
//     }
// }

//증가함수
const plusCount = function (number) {
    return ++number;
}
//감소함수
const minusCount = function (number) {
    return --number;
}


//어제 하면 문제가 되었던 현상이 counter(증가연산콜백함수); --> 이거하면 값은 쌓이는데 , counter(감소연산콜백함수); 이거하면 다시 값이 0부터 시작하는 현상이 문제였다.
//counter함수를 두번 호출했기 때문에 두개가 다른 상태값이 되버리는 문제가 생긴것-->counter 한번 호출하면 실행컨텍스트가 실행되기때문에 그 실행 영역에서 작업이 되는거고
//다시한번 counter를 또 호출하면 또 다른 실행컨텍스트가 만들어지기 때문에 범위의 영역이 달라는것, 

//따로 호출하면 다른 컨텍스트 값이 되버림
//증가 -->호출시 실행컨텍스트 생성됨
// let plusCount = counter(plusCount);
// 이렇게하면 count 값은 ++이 되엇겠지 근데 원래는 뭘리턴해줬지?? 리턴은 클로저로 해줬었나>

//감소 -->호출시 실행컨텍스트 생성됨
// let minusCount = counter(minusCount);

// console.log(`현제 카운트: ${increament()}`);
// console.log(`현제 카운트: ${increament()}`);
// console.log(`현제 카운트: ${decreament()}`);


//하나의 호출이 되어야됨
// const closure = (counter())();
// closure(plusCount);

//아래의 내가 성공한 이유는 counter가 한번호출되고 나서 실행컨텍스트가 끝나지 않았기 때문에 하나의 범위가 유지가 되서 내부의 count값이 유지가 되는것이다.

//카운트를 호출해보자
//에러가 나지 않는다.
const test = counter();
//예상대로라면 리턴된 연산 함수가 들어있을것이다.
//들어있다.
console.log(test);

//새로운 함수를 파자
const 연산공장 = counter();

//연산공장에 콜백함수를 콜백함수는 해당 코드에서 코드를 실행만 한다.
//연산공장을 돌고나면 count값이 1이 증가했을것이라 예상한다. 리턴도 타운트 값을 리턴해줌으로 변수로 받자
//에러없이 실행된다.
let 카운트값 = 연산공장(plusCount);

//로그를 찍어보자
//1로 찍힌다.
console.log(카운트값);

//한번 더 돌려보자
//제대로 2로 찍힌다. 증감이 되었다.
카운트값 = 연산공장(plusCount);
console.log(카운트값);

//한번 더 돌려보자
//제대로 3로 찍힌다. 증감이 되었다.
카운트값 = 연산공장(plusCount);
console.log(카운트값);


//이번에는 마이너스 값을 줘보자
//2로 찍힐것을 예상한다.
카운트값 = 연산공장(minusCount);
console.log(카운트값);

//다시 찍어보자 1로 찍힐것으로 예상한다.
카운트값 = 연산공장(minusCount);
console.log(카운트값);

//다시 찍어보자 0로 찍힐것으로 예상한다.
카운트값 = 연산공장(minusCount);
console.log(카운트값);

//다시 찍어보자 -1로 찍힐것으로 예상한다.
카운트값 = 연산공장(minusCount);
console.log(카운트값);









