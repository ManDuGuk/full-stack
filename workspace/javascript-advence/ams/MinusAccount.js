//여기다가 exports.Account = Account; 이렇게 담았다면 아래와 같이 해주어야한다.
// const { Account } = require("./Account");

//여기다가 module.exports = Account; 이렇게 담았다면 아래와 같이 해주어야한다.
const Account = require("./Account");
console.log(Account);

class MinusAccount extends Account {

    //대출금액 프로퍼티 추가
    constructor(name, password, number, money, loan) {
        super(name, password, number, money);
        this.loan = loan;
    }

    set loan(minus) {
        this._loan = minus;

    }

    get loan() {
        return this._loan;
    }

    //toString 오버라이딩
    toString() {
        return console.log(`${super.toString()}\t${this.loan}`);;
    }

    //잔액조회--> 대출금액을 차감한 잔액을 보여줄것 -잔액이 표시되도록 오버라이딩

    //입금
    pulseMoney(money) {
        if (this.balance < 0) {
            this.balance += money;
            this.loan = 0;
            console.log(`님 잔액: ${this.balance}, 님 대출금: ${this.loan}`);
        }
        this.balance += money;
        return console.log("잔액: " + this.balance);
    }
    //출금
    minusMoney(money) {
        if (this.balance < money) {
            console.log("님 돈없어요, 근데 마이너스 대출 해줌");
            this.balance -= money;
            this.loan = -(this.balance);

            console.log(`님 잔액: ${this.balance}, 님 대출금: ${this.loan}`);
        } else {
            this.balance -= money;
            return console.log("잔액: " + this.balance);
        }
    }
}

module.exports = MinusAccount;