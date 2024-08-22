import { Student } from "./student.js";
import { StudentRepository } from "./student-repository.js";
import { EventHandler } from "./event-handler.js";
import { LocalStorage } from "./storage.js";

// 스튜던트 데이터 처리 클래스
let studentRepository = new StudentRepository();
// 이벤트 핸들러 클래스
let eventHandler = new EventHandler();
// 로컬 스토리지
let localStorage = new LocalStorage();

// 파일읽기 ==>객체 배열로 잘 읽어와짐 이젠 제이슨 파싱해야됨
// console.log(localStorage.readStudents());
// 바보같이 계속 readjson을 읽고 파싱이 안됐다고 하고 있었다.
let readjson = localStorage.readStudents();

readjson.forEach(objects => {
    const student = new Student(objects._num, objects._name, objects._kor, objects._en, objects._math);
    studentRepository.addStudent(student);
});

//전체 랜더링
console.log(studentRepository.students);

eventHandler.readStudent(studentRepository.students);



// 버튼클릭이벤트-->데이터 배열에 등록
eventHandler.eventRegist((studentData) => {
    let newStudent = new Student(studentData.sno, studentData.sname, studentData.kor, studentData.eng, studentData.math);
    console.log(newStudent);

    studentRepository.addStudent(newStudent);

    // 로컬객체에 저장 findeall 작동확인함 객체배열 형태
    // console.log("findall" + studentRepository.findAllStudent()[0].name);

    //전체를 찾은 값을 넘김
    localStorage.saveStudent(studentRepository.findAllStudent());
})
//버튼클릭이벤트2-->배열데이터 렌더링
eventHandler.displayStudentAll(studentRepository.students)

//정렬 셀렉트이벤트
eventHandler.selectSort(studentRepository);

//검색버튼 클릭이벤트
eventHandler.searchEvent(studentRepository.students);

//삭제버튼 클릭이벤트
eventHandler.deletStudent(studentRepository, localStorage.saveStudent);

//삭제하고 다시렌더링

export { studentRepository }