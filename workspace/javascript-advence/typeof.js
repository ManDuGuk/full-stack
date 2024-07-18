let x = 10;
console.log(typeof x);
x = "남윤호";
console.log(typeof x);

x = function () {
    console.log("abc");
}
console.log(typeof x);

//객체임(객체 리터럴 표현식)
x = {}
console.log(typeof x);

//단축평가를 사용한 인자전달 확인
function add(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}

let result = add(10, 20);
console.log(result);
result = add(10);
console.log(result);
result = add();
console.log(result);

// 기본 매개변수 사용
function add2(x = 0, y = 0) {
    return x + y;
}

result = add2(10, 20);
console.log(result);
result = add2(10);
console.log(result);
result = add2();
console.log(result);