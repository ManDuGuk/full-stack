// 자바스크립트에서 변수 선언 및 할당

//변수 선언
let age;
console.log(age); //undefinde
// 변수에 값(리터럴) 저장
age = 20;
//  변수의 값 사용
console.log(age);

//  선언과 할당을 동시에
let name = "남윤호";

//  할당을 하긴 하는데 결정안된값을 일단 넣어놓음
let unknown = null;

//  undefinded 연산 때문에 NaN 이 나오는 경우
 let weight;
 weight = weight + 10;
 console.log(weight);

// null 로  초기화 한 경우
weight = null
weight = weight + 10;
console.log(weight);


// 변수 사용 예제 따라하기
let americano;
let latte = 4200;
let moch = 4200;
americano  = 3000;

console.log(americano*2);
console.log(latte*4 + moch*2);

