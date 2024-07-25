// 고차함수들

//forEach()
const nums = [32, 234, 34, 5, 623, 123];
nums.forEach((num) => {
    console.log(num * 2);
});

nums.forEach((num, index, array) => {
    array[index] = num * 2;
});

console.log(nums);

//정렬
//전달인자를 비워놓으면 문자 유니코드값으로 정렬한다.
console.log(nums.sort());

nums.sort((x, y) => {
    //오름차순 정렬
    return x - y;
    //내림차순 정렬
    // return x - y;
});

console.log(nums);


let student = [
    { name: "adams", score: 90 },
    { name: "bdams", score: 70 },
    { name: "홍기정", score: 60 },
    { name: "김길동", score: 50 },

];

// 문자열이 들어있으면 정렬되는데 객체가 들어있으니 콜백으로 처리해줘야 한다.
// 내림차순 정렬
student.sort((student1, student2) => {
    return student2.name.charCodeAt(0) - student1.name.charCodeAt(0)
});

console.log(student);