//화살표 함수(람다식)를 이용한 함수 정의

//화살표 함수 표현법01
let sum = (x, y) => {
    return x + y;
}
//식별자호출(함수호출)
let result = sum(5, 10);
console.log(result);

//화살표 함수 표현법02
//한줄짜리에 return이 하나일경우
//중괄호, return 생략가능
let sum2 = (x, y) => x + y;

let result2 = sum2(10, 10);
console.log(result2);

//화살표 함수 표현법03
//한줄짜리에 return이 하나일경우
//매개 변수가 하나일경우 소괄호 생략가능
let sum3 = x => x * x;

let result3 = sum3(10, 10);
console.log(result3);

//화살표 함수 표현법04
//매개 변수가 없다면 반드시 괄호를 쳐줘야 한다.
let sum4 = () => "안녕하신가요?";

let result4 = sum4();
console.log(result4);

//즉시 실행함수(셀프콜)
(function () {
    console.log("즉시실행함수....");
})();


//중첩함수
let hypotenuse = function (width, height) {
    //제곱값을 반환하는 중첩함수
    //화살표함수
    //() =>{}
    let sum = ((width, height) => {
        return (width * width) + (height * height);
    })(2, 3);

    return Math.sqrt(sum);

}

result = hypotenuse(2, 4);
console.log(result);


//기본 매개변수 활용1
// function add(x = 0, y = 0) {
//     return x + y;
// }

//함수리터럴 표현식
// let add = function (x = 0, y = 0) {
//     return x + y;

// }

//람다 표현식
let add = (x = 0, y = 0) => x + y;

console.log(add(1, 2));
console.log(add(2));
console.log(add());

//기본 매개변수 활용2
let multiply = function (x, y = x * 2) {
    return x * y;
}

console.log(multiply(2));
console.log(multiply(2, 3));

//기본 매개변수 활용3(함수의 반환값)
let getDefaultNum = () => 1;
let square = (num = getDefaultNum()) => num * num

console.log(square());
console.log(square(10));

//기본 매개변수 활용4(함수를 사용)
let greeting = (name, greetFunc = defaultGreeting) => greetFunc(name);
let defaultGreeting = name => console.log(`hello. ${name}`);

greeting("남윤호");
greeting("남윤호", (name) => console.log(`안녕하세요. ${name}님`));


//나머지 매개변수 
let sumNums = function (...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(sumNums(10));
console.log(sumNums(10, 20));
console.log(sumNums(10, 20, 30));