//전역변수를 막아주기 위해서는 클로저나 클래스를 이용한다.

//학생 목록(객체) 저장을 위한 배열
const students = [];

//학생 등록 
students.push({ name: "김기정", score: 88 });
students.push({ name: "김정현", score: 98 });
students.push({ name: "남윤호", score: 75 });
students.push({ name: "히오스", score: 100 });

console.log(students);
console.log(typeof students); //object(배열의 타입을 물었는데 object라고 뜨네?)



//함수화 시키기
const printStudents = function (students) {

    //아래와 같은 식으로 전달할때 뭔가 값이 섞여 들어가버릴수도 있다. 지금은 예시로
    // students.push({ name: "강도", score: 100 });

    //우리반 학생 목록 출력하기
    for (const iterator of students) {
        console.log(`학생이름:${iterator.name} 점수:${iterator.score}`);
    }
    // for ( student of students) {
    //     console.log(`학생이름:${student.name} 점수:${student.score}`);
    // }
}

// //만약에 해당 함수를 다른곳에서 전달해서 공유해서 쓰게된다. --> 이러면 원본배열에 접근해서 값의 변경이 가능해져버린다.
// //원본자체를 복사해서 복사값을 가지고 수정할수 있도록 해주는 처리가 필요하다.
printStudents(students);
// /*
// //복사본 배열만들기(자바스크립트는 이렇게 안해도됨)-->옛날에는 이방식으로함
// let copyStudents = [];
// for (const student of students) {
//     copyStudents.push(student);
// }
// //복사본 배열을 보냄
// printStudents(copyStudents);
// */
// //위의 과정을 한번에 줄여버리는 방법은 스프레드 연산자이다.
console.log("...연산자");
console.log(...students);

let 복사본 = [...students];
let 복사본2 = { ...students };

console.log(typeof 복사본);
console.log(typeof 복사본2);

printStudents(복사본);

// //학생들 성적 총점
// let sum = 0;
// for (const student of students) {
//     sum += student.score;
// }
// console.log(`성적 총점: ${sum}`);

// const searchByName = function (name) {
//     for (const student of students) {
//         if (student.name === name) {
//             return student;
//         }
//     }
//     return undefined;
// }

// let inputName = "김기정";
// const searchStudent = searchByName(inputName);
// if (searchStudent) {
//     console.log(`학생이름:${searchStudent.name} 점수:${searchStudent.score}`);
// } else {
//     console.log("해당학생은 없습니다.");
// }