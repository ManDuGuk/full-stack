//생성된 계좌의 입금,출금등
// console.log(module);

// 이름,비번,계좌번호,초기화 액수

class Account {

    constructor(name, password, number, balance) {

        this.name = name;
        this.password = password;
        this.number = number;
        this.balance = balance;
    }

    get name() {
        return this._name;
    }
    get password() {
        return this._password;
    }
    get number() {
        return this._number;
    }
    get balance() {
        return this._balance;
    }

    set name(name) {
        this._name = name;
    }
    set password(password) {
        this._password = password;
    }
    set number(number) {
        this._number = number;
    }
    set balance(balance) {
        this._balance = balance;
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

// console.log(module);

//이렇게 하면 아예 교체가 된다
module.exports = Account;

// console.log(module);
