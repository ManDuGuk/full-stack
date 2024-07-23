const Student = function (ssn, name, kor, en, ma) {

    //생성자 함수는 자동적으로 빈객체 생성됨
    //this = {};
    console.log(this);

    this.ssn = ssn;
    this.name = name;
    this.kor = kor;
    this.en = en;
    this.ma = ma;
    this.getSum = function () {
        return this.kor + this.en + this.ma;
    };
    this.getAverage = function () {
        return this.getSum() / 3;
    };


    //toString
    this.toString = function () {
        return `${this.ssn}\t${this.name}\t${this.kor}\t${this.en}\t${this.ma}\t${this.getSum()}\t${this.getAverage()}`;
    }


    //생성자 함수는 자동적으로 반환됨
    //return this;

}

// 생성자 함수는 그냥 호출을 할수는 없다. 그냥 호출하면 묵시적으로 생성되던 this객체 생성이 되지 않음
// 그리고 return 이 안써있으면 모든 함수는 자동을 undefined를 리턴한다.
const student = new Student(10, "남윤호", 100, 90, 80);
// console.log(student.name);

// //구조분해 할당을 써보자
// const { ssn, ma } = student;
// console.log(ssn, ma);

// // new로 쓰지 않으면 글로로별 변수로 들어가는것을 볼수 있다.
// const student2 = Student(20, "남윤호2", 200, 210, 205);
// console.log(global.name);


// // 메소드를 넣고 호출
// student3 = new Student(30, "남윤호3", 300, 310, 350)
// console.log(student3.getSum());
// console.log(student3.getAverage());

// //toString 호출
// console.log(student3.toString());


// //공통프로퍼티(생성자 함수 객체에 프로퍼트 추가--> 정적변수(static))
// //전역변수로 굳이 쓰지 않는 이유는 스코프의 범위를 줄여서 변별력이 좋아지게
// Student.schoolName = "Kosta"
// Student.sum = function (x, y) {
//     return x = y;
// }


// console.log(`객체의 값 호출 ${student["name"]}`);
// //계산된 프로퍼티 이름 --> 추가하고 여러 방법을 사용해보자
// //새로운 프로퍼티를 추가하는 방법 
// /*
// 지정한 프로퍼티 이름이 있을경우 기존의 값을 새로운 값으로 수정하고 , 
// 새로운 프로퍼티 이름을 사용하면 프로퍼티가 추가된다.
// user.grade = "gold";
// user["user-point"] = 10000;

// 삭제할때는 아래와 같다.
// delete user.grade;
// delete user["user-point"];
// */
// const PROPERTY_NAME = "pName1";
// function getPropertyName() {
//     return "pName2";
// }

// student[PROPERTY_NAME] = 10
// student[getPropertyName()] = 20
// student["pName" + 3] = 30


// console.log(student);

// //객체의 프로퍼티 이름으로 함드 코딩된 실별자가 아니라, 변수, 계산식, 함수의 반환값들이 가능하다.



// console.log(Student.schoolName);
// console.log(Student.sum(10, 20));


console.log(student.constructor);

// constructor 프로퍼티의 쓰임
// 인스턴스를 생성할때 측정 생성자만 사용해서 생성했는지를 확인할때 타입체크용으로 자주 쓰인다.
if (student.constructor === Student) {
    console.log("Student에서 생성된 함수");
}



