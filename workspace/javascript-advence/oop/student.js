const student = {
    name: "남윤호",
    grade: 1,
    number: 10,
    score: {
        //동적으로 추가될수도 있기때문에 마지막 프로퍼티에 콤마를 찍어도 된다.(문법에러 안남)
        kor: 70,
        eng: 90,
        math: 50,
        sum: function () {
            return this.kor + this.eng + this.math;
        },
        average: function () {
            return this.sum() / 3;
        },
    },
    //객체 지향적 요소 -->
    printInfo: function () {
        console.log(`${this.name}\t${this.grade}\t${this.number}\t${this.score.sum()}\t${this.score.average()}`);
    }
}

const student2 = {
    name: "남윤허이",
    grade: 1,
    number: 20,
    score: {
        //동적으로 추가될수도 있기때문에 마지막 프로퍼티에 콤마를 찍어도 된다.(문법에러 안남)
        kor: 70,
        eng: 90,
        math: 50,
        sum: function () {
            return this.kor + this.eng + this.math;
        },
        average: function () {
            return this.sum() / 3;
        },
    },
    //객체 지향적 요소 -->
    printInfo: function () {
        console.log(`${this.name}\t${this.grade}\t${this.number}\t${this.score.sum()}\t${this.score.average()}`);
    }
}


//아래와 같은 단순출력은 객체 지향이 아니다.
//자신의 요소를 출력할수 있는 요소도 포함해주는게 좋다.
// console.log(student.name);
// console.log(student.score.sum());
// console.log(student.score.average());

student.printInfo();
student2.printInfo();


const accout = {
    number: "5555-5555",
}


//in연산자
console.log("grade" in student);

if ("printInfo" in student) {
    student.printInfo();
}

//호출하는게 아니라 프로퍼티가 있는지 확인하는것
if (student.printInfo !== undefined) {
    student.printInfo();
}


//forin문
for (const key in student) {
    console.log(key);
}

//forin문
for (const key in student) {

    //key는 문자열로 불러오니까 (참고로 student.key 이런건 프로퍼티에 특수문자가 들어가 있다면 오류를 내개 된다 undefined가 되버림)
    if (typeof student[key] === "function") {
        continue;
    }
    console.log(key);
}
