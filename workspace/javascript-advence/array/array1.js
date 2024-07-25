//배열 선언,생성,초기화
//자바스크립트에서의 배열은 생성자여서 이렇게 선언,생성한다. //빈배열을 만드었다.
const array = new Array();

array[0] = 10;
array[1] = 20;
array[2] = 30;

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//이렇게 하면10개의 배열을 생성하고 값을 전부 undefined로 초기화 해준다.
const array2 = new Array(10);
console.log(array2.length);
console.log(array2);

const array3 = new Array(10, 20, "김기정", true, { name: "홍길동", age: 10 });
console.log(array3);

const array4 = [10]
console.log(array4);

//배열의 빈값을 넣게 되면 undefined로 초기화 해준다.
const array5 = [10, 20, "김기정", , , true, { name: "홍길동", age: 10 }];
console.log(array5);

//배열의 목록 출력(for 템플릿있음)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

//배열을 내부적으로 맵 형태로 저장되기 때문에 인덱스를 문자열로줘도 잘 작동한다.
console.log(array["0"]);

//놀랍게도 length의 값0을 주면 배열의 내용을 전부 삭제해버린다. 다른 숫자를 주면 숫자값만큼만 남긴다. 
array.length = 1;
console.log(array);


//push가 없다면 
array[array.length] = "바보";
console.log(array);


//배열의 맨 마지막에 뭔가를 담고자 한다면  push, length길이도 늘리고, 
array.push("바보2")
console.log(array);

//unshift --> 맨 앞에 원소를 추가해주고, lengh길이도 늘이고 lengh프로퍼티를 반환한다.
let count = array.unshift("남윤호");
console.log(count);
console.log(array);

//pop --> 맨 뒤에 뭔소를 제거 engh길이도 줄이고 lengh프로퍼티를 반환한다.
count = array.pop();
console.log(count);
console.log(array);

//shift -->맨 앞의 원소를 제거, lengh길이도 줄인다.
array.shift();
console.log(array);
