//일반 입출금 계좌
class Account {

    constructor(name, password, number, money) {
        // 이렇게 하면 은닉화가 아니다. 왜???
        //위에 처럼 하면 프로퍼티의 이름을 바꾼것 밖에 되지 않고, 직접호출해서 덮어써버릴수가 있어져버린다.
        //만약 이렇게 한다면 은닉화를 위해서 겟터와 셋터의 이름을 set _name(name){}, get _name(){}이런식으로 바꿔줘야한다.
        // this._name = name;
        // this._password = password;
        // this._number = number;
        // //초기 입금 == 잔액
        // this._balance = money;


        this.name = name;
        this.password = password;
        this.number = number;
        //초기 입금 == 잔액
        this.balance = money;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set password(password) {
        this._password = password;
    }

    get password() {
        return this._password;
    }

    set number(number) {
        this._number = number;
    }

    get number() {
        return this._number;
    }

    // //잔액조회
    get balance() {
        return this._balance;
    }
    set balance(money) {
        this._balance = money;
    }

    //입금
    pulseMoney(money) {
        this.balance += money;
        return this.balance;
    }

    //출금
    minusMoney(money) {
        if (this.balance < money) {
            console.log("님 돈없어요");
        } else {
            this.balance -= money;
            return this.balance;
        }
    }

    //toString
    toString() {
        return `${this.name}\t${this.password}\t${this.number}\t${this.balance}`;
    }
}

const account = new Account("111", "1111", 1234, 100);
console.log(account);

// account.name = 겟터와 셋터가 없다면 직접접근이 된다.

account.name = "3333" // setter가 작동됨
console.log(account);
console.log(account.name); //getter가 작동됨




//마이너스 계좌 --> 대출 금액 프로퍼티 추가
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


const test = new MinusAccount("남윤호", 1111, "1111-1111", 5000, 0);
test.toString();
test.minusMoney(6000);
test.toString();
test.pulseMoney(8000);
test.minusMoney(10000);
test.minusMoney(10000);

test.toString();

console.log("-----------------------");
console.log(test);
console.log(test.name);