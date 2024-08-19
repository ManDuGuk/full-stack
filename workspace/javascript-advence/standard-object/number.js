const number = 1004.3234;
console.log(number.toString().length);
//2진수로 변환해줌
console.log(number.toString(2));
//16진수로 변환해줌
console.log(number.toString(16));

//소수점 자르기(반올림)
console.log(number.toFixed());
console.log(number.toFixed(2));


const numberObj = new Number(number);
const str = "5454545";

//parsInt와 같이 작동
const n = Number(str);