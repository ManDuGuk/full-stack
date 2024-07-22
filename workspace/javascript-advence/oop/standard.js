//자바스크립트 표준 내장 객체(생성자 함수)
//String,Number,Boolean ,Date,Array,....

//기본타입에 뭔가 기능이 있는걸 쓰고싶으면 렙퍼객체를 쓰면된다. 
const str = new String("김기정");
console.log(str.length);

let num2 = 232332;
const numObj = new Number(num2);
console.log(numObj);

let input = "324234";
let result = Number(input);
console.log(typeof result);

const today = new Date();
console.log(today.toString()); 