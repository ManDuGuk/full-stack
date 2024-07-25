
//다중배열
//자바스크립트의 다중배열은 행과 열의 단위가 아니기때문에 2번째 배열의 수는 일정하지 않을수도 있다.
const classes = new Array(10);
// classes[0] = new Array(20);
// classes[1] = new Array(25);

// classes[0][0] = 50;
// classes[0][1] = 60;


// classes[0][classes[0].length] = 100;

//가상의 점수 등록
for (let index = 0; index < classes.length; index++) {
    classes[index] = new Array(20);

}

console.log(classes);


//배열의 길이
console.log(classes.length);
console.log(classes[0].length);


//목록출력
let total = 0;
for (let i = 0; i < classes.length; i++) {
    for (let j = 0; j < classes[i].length; j++) {
        process.stdout.write(classes[i][j] + ",")
        // console.log(classes[i][j]);
        ++total;
    }

}
console.log(total);


// for in for of 이용해서 해봄
total = 0;
console.log("forin,forof이용");

for (const key in classes) {
    for (const iterator of classes[key]) {
        process.stdout.write(iterator + ",");
        ++total;
    }
}

console.log(total);


//과제 반별 평균과 총점내기
const myClass = [
    [90, 67, 88, 56, 90],
    [90, 67, 88, 56, 90],
    [100, 100, 100, 100, 100],
    [90, 67, 88, 56, 90]
];

//총합 ,평균내기
//전역변수로 초기화해줄 필요는 없지 안에 for문에 넣어주면된다.
let 총합 = 0;
let 평균 = 0;
for (const key in myClass) {
    for (const iterator of myClass[key]) {
        총합 += iterator;
        평균 = 총합 / myClass[key].length;
    }
    console.log(`총점: ${총합} 평균: ${평균}`);
    총합 = 0;
    평균 = 0;
}
