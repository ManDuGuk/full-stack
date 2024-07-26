//some --> 특정 조건을 요소가 있으면 true,없음 false
let students = [
    { name: "adams", score: 90 },
    { name: "bdams", score: 70 },
    { name: "홍기정", score: 60 },
    { name: "남윤호", score: 60 },
    { name: "김길동", score: 50 },


];

let total = 0;
students.forEach((student) => {
    total += student.score;
});

console.log(total);

let results = students.reduce((accumulator, student) => {
    return accumulator + student.score; //리턴된 값이 accumultor에 할당되고, 다음for문을 돌때 할당되었던 accumultor가 불러와진다.
}, 0);

console.log(results);


//배열에 숫자만 들어가 있으면 초기화를 안해줘도 알아서배열을 처음 요소로 accumulator를 초기화 해준다.

// 최대값 구하기
results = students.reduce((accumulator, student) => {
    // if (student.score > accumulator) {
    //     return accumulator = student.score;
    // }
    // return accumulator; 

    //삼항조건연산을 써봄
    return student.score >= accumulator ? accumulator = student.score : accumulator;
}, 0);

console.log(results);

// 최저값 구하기
results = students.reduce((accumulator, student) => {
    // if (student.score > accumulator) {
    //     return accumulator = student.score;
    // }
    // return accumulator; 

    return student.score <= accumulator ? accumulator = student.score : accumulator;
}, students[0].score);

console.log(results);