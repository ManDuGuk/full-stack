
const increamentCount = function () {
    let count = 0;

    // const increament = function () {
    //     return ++count;
    // }
    // return increament;

    //클로저 반환
    return function () {
        return ++count;
    }
}

let increament = increamentCount();

let updateCount = increament();

console.log(`현제 카운트: ${updateCount}`);
console.log(increament());
console.log(increament());
console.log(increament());
console.log(increament());
console.log(increament());
console.log(increament());


// console.log(increamentCount()());

//전역변수로 선언하면 직접 접근해서 값을 수정해버릴수도 있다. 지양여된다.
// count = 1000; 