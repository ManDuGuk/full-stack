// 기본매개변수
let multiply = function (x = 1, y = 1) {
    return x * y;
}

let result = multiply(7, 2);
console.log(`결과: ${result}`);

result = multiply();
console.log(`결과: ${result}`);



let greeting = function (name, fn = defaultGreeting) {
    // console.log(`안녕: ${name}`);
    //여기서 함수가 실행된다.
    // defultGreeting(name);  과 같다.==> defaultGreeting 은 매개 변수 명이다.
    fn(name);
}

let defaultGreeting = function (name) {
    console.log(`${name}. 누구세요?.`);
}


greeting("김기정", (name) => {
    console.log(`${name}. 반갑습니다.`);
});

greeting("bangry");

//3초후 로그 출력
setTimeout(() => {
    console.log("오늘은 즐거운 금요일입니다.");
}, 3000);


//1초 주기로 로그 출력

let count = 0;
let timer = setInterval(() => {
    console.log(count++);
}, 100);

clearInterval(timer);

