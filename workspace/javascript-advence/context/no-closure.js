
const increamentCount = function () {
    let count = 0;
    return ++count;
}

let updateCount = increamentCount();
console.log(`현제 카운트: ${updateCount}`);
console.log(increamentCount());
console.log(increamentCount());
console.log(increamentCount());
console.log(increamentCount());
console.log(increamentCount());
console.log(increamentCount());

//전역변수로 선언하면 직접 접근해서 값을 수정해버릴수도 있다. 지양여된다.
count = 1000; //