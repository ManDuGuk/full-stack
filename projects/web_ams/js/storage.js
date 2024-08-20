export class LocalStorage {
    constructor() { }

    // 학생 정보 저장
    saveStudent = function (student) {
        let students;
        if (localStorage.getItem("students")) {
            students = JSON.parse(localStorage.getItem("students"));
        } else {
            students = [];
        }
        students.push(student);
        //제이슨 배열로 잘 저장되는걸 확인함
        localStorage.setItem("students", JSON.stringify(student));
    }

    // 학생정보 읽기
    readStudents = function () {
        let students;
        if (localStorage.getItem("students")) {
            students = JSON.parse(localStorage.getItem("students"));
        } else {
            students = [];
        }
        //객체 배열로 잘 불러와짐
        return students;
    }

}
