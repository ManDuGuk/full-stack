
/*
const Account = function (name, passwd, number, money) {
    this.name = name;
    this.passwd = passwd;
    this.number = number;
    this.balance = money;
};

// Account 프로토타입격체의 메소드로 추가
Account.prototype.checkPassword = function (password) {
    return this.password === password;
};

Account.prototype.deposit = (input) => {
    // let result = this.balance + input;
    // console.log(`입금후 잔액: ${result}`);
    return this.balance += input;
};
Account.prototype.withdraw = (output) => {
    // let result = this.balance - output;
    return this.balance += output;
};
Account.prototype.toString = () => {
    console.log(`이름:${this.name}\t비번:${this.passwd}\t계좌:${this.number}\t잔액:${this.balance}`);
}

//인연산자와 같은 기능의 메소드 재사용
//ojbect의 프로토타입 객체가 제공하는 기능 재사용
const account = new Account("1111-222", "남윤호", 132132, 50000);
const exit = account.hasOwnProperty();
console.log(exit);


const accountTest = new Account("1111-222", "남윤호", 132132, 50000);
console.log(accountTest.deposit(30000));
accountTest.withdraw(30000);
*/


//생성자 함수 정의
const Student = function (ssn, name, korean, english, math) {
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;

}

//프로토타입 객체에 메소드 추가
Student.prototype.getSum = function () {
    return this.korean + this.english;
}

Student.prototype.getAverage = function () {
    return this.getSum() / 2;
}

const student1 = new Student(10, "김철수", 90, 80, 50);
const student2 = new Student(10, "김철수", 90, 80, 50);

console.log(student1.getSum());
console.log(student1.getAverage());
