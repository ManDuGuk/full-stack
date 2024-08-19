// require()없이 바로 사용할수 있다.  --global
console.log(global);


//global 노드의 내장 객체이고, 브라우저로 넘어가면 window를 씀
//원래 콘솔은 클로벌 객체 있는 메소드임
global.console.log("로그기록")
//글로벌 객체 안에 있는 객체는 global을 빼고 사용 가능함
console.log("로그기록");

// global.setTimeout()
// global.module.exports
// global.require('');

//globalThis --> 노드와 브라우저 겸용
console.log(globalThis);

console.error("에러요");

const user = {
    name: "김기정",
    age: 10,
};

console.log(user);
console.dir(user); // 상세하게 보고싶다면 브라우저에서 찍어보면 잘나옴

console.clear();
const array = [
    { a: "b", c: "d" },
    { a: "b", c: "d" },
    { a: "b", c: "d" },
    { a: "b", c: "d" },
];

console.table(array);

// setTimeout();
// setInterval();
// setImmediate(); --> 교재 114 -->setTimeout의 타임을 0을 준것


// console.time("start");
// for (let index = 0; index < 1000000; index++) {

// }
// console.timeEnd("start");

console.log(__dirname);
console.log(__filename);


