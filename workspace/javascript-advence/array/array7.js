
//필터
let student = [
    { name: "adams", score: 90 },
    { name: "bdams", score: 70 },
    { name: "홍기정", score: 60 },
    { name: "남윤호", score: 60 },
    { name: "김길동", score: 50 },

];

let results = student.filter((student) => {
    //필터링 조건
    if (student.score >= 90) {
        return true;
    }
    return false;
});

console.log(results);

//find --> 조건에 맞는 값을 찾는순간 딱 멈춤, 즉 앞전 인덱스에 조건에 맞는 값이 도출되면 이후 인덱스는 검색안함
//조건에 맞는게 없으면 undefined을 리턴함(객체로 담아놓은 경우)
//findIndex라는 함수도 있다. --> 조건에 맞는 인덱스를 리턴한다. 값이 없으면 -1을 리턴한다.
results = student.find((student) => {
    //필터링 조건
    if (student.score <= 60) {
        return true;
    }
    return false;
});

console.log(results);

//map
const mappingStudent = student.map((student) => {
    return `학생이름(${student.name}), 성적(${student.score})`
});

console.log(mappingStudent);