//고차함수
function print(name, message, callback) {
    let chat = `[${name}] : ${message}`;

    //해당 코드를 콜백함수로 기능을 확장시킬거다.
    //console.log(chat);
    callback(chat);
}

//선언형 함수
function printConsole(chat) {
    console.log("콘솔창: ");
    console.log(chat);
}
print("남윤호", "안녕하세요", printConsole);

//익명형 함수
print("남윤호02", "안녕하세요02", function
    (chat) {
    console.log("윈도우: ");
    console.log(chat);
});

//화살표 함수
print("남윤호03", "안녕하세요03", chat => {
    console.log("모바일: ");
    console.log(chat);
});


// 다른 예시
//익명형 함수(고차)
const calculate = function (x, y, fn) {
    return fn(x, y);
}

//람다식 
let x = 10, y = 5;
let result;
result = calculate(x, y, (x, y) => x * y);
console.log(result);
result = calculate(x, y, (x, y) => x + y);
console.log(result);
