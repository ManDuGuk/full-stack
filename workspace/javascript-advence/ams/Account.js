
console.log(module);

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

//이렇게 하면 export 안에 하나의 객체가 더 생기게된다.
// exports.Account = Account;

console.log(module);

//이렇게 하면 아예 교체가 된다
module.exports = Account;

console.log(module);
