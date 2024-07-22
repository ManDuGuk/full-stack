//Function 생성자 함수
//선언형함수, 표현식함수, 화살표 함수 , function 생성자 함수(동적생성)

// 정적생성
// function sum(x, y) {
//     return x + y;
// }

//동적 함수 생성(위험하기 때문에 거의 쓰이지 않는다.)
const sum = new Function("x", "y", "return x+y;");
const result = sum(10, 20);
console.log(result);

