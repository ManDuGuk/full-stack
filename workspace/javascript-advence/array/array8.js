
//some --> 특정 조건을 요소가 있으면 true,없음 false
let students = [
    { name: "adams", score: 90 },
    { name: "bdams", score: 70 },
    { name: "홍기정", score: 60 },
    { name: "남윤호", score: 60 },
    { name: "김길동", score: 50 },

];


let exist = students.some((student) => {
    // if (student.score === 100) {
    //     return true;
    // }
    // return false;

    return student.score === 90;
});

console.log(exist);

//요소 모두가 조건을 만족해야 true 리턴
exist = students.every((student) => {
    // if (student.score === 100) {
    //     return true;
    // }
    // return false;

    return student.score > 40;
});

console.log(exist);