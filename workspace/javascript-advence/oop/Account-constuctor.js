//은행 계좌 생성자 함수
/*
const Account = function (number, owner, password, balance) {
    this.number = number;
    this.owner = owner;
    this.password = password;
    this.balance = balance;

    this.deposit = (inputMoney) => {
        return this.balance = this.balance + inputMoney;
    };
    this.withdraw = (outMoney) => {
        if (outMoney > this.balance) {
            return -1;
        } else {

            return this.balance = this.balance - outMoney;
        }
    };
    this.toString = () => {
        console.log(`${this.number}\t${this.owner}\t${this.password}\t${this.balance}`);
    };
};


const myAccount = new Account("55555-5555", "남윤호", 1111, 10000);

myAccount.deposit(50000);
myAccount.withdraw(20000);

//결과값 출력
myAccount.toString();

//구조분해 할당을 써보자
const { balance, owner } = myAccount;

console.log(`소유자: ${owner}, 잔고: ${balance}`);
*/


//과제 --> 생성자 함수를 이용해서 만들기

const Account = function (name, passwd, number, money) {
    this.name = name;
    this.passwd = passwd;
    this.number = number;
    this.balance = money;
    this.deposit = (input) => {
        let result = this.balance += input;
        console.log(`입금후 잔액: ${result}`);
        return result;
    };
    this.withdraw = (output) => {
        let result = this.balance -= output;
        console.log(`출금후 잔액: ${result}`);
        return result;
    };
    this.toString = () => {
        console.log(`이름:${this.name}\t비번:${this.passwd}\t계좌:${this.number}\t잔액:${this.balance}`);
    }
    this.checkPassword = (inputPassword) => {
        return inputPassword === this.passwd;
    }
};

//고객으로부터 입력받은 고객 정보
let name = "김기정";
let passwd = 1234;
let number = "1111-2222";
let money = 1000;
const account = new Account(name, passwd, number, money);

const ok = account.checkPassword(1234);
if (ok) {
    let balance = account.deposit(1000);
    // console.log(`입금 후 잔액: ${balance}`);
    balance = account.withdraw(1000);
    // console.log(`출금 후 잔액: ${balance}`);
    //계좌 모든 정보 출력
    account.toString();
} else {
    console.log(`비밀번호가 일치하지 않습니다.`);
}


//객체 리터럴 생성은 내부적으론 오프젝트 빈객체를 생성하고 프로퍼티를 추가한것과 동일하다.
const teacher = new Object(); // 빈객체 생성됨{}
teacher.name = "남윤호";
teacher.age = 30;
teacher.doTeaching = function () {
    console.log("강의를 한다.");
}

