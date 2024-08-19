// 입출금 계좌
class Account {
    constructor(number, name, password, balance) {
        this.number = number;
        this.name = name;
        this.password = password;
        this.balance = balance;
    }

    set password(password) {
        this._password = password;
    }

    get password() {
        return this._password;
    }

    toString() {
        return `[사용자 정보] 성함 : ${this.name}\t| 계좌번호 : ${this.number}\t| 잔고 : ${this.balance}`
    }

    deposit(money) {
        this.balance += money;
        return `[입금] : ${money}원이 입금되었습니다. 현재 잔액은 ${this.balance}원입니다.`;
    }

    withdraw(money, password) {

        if (password !== this.password) {
            throw new Error("[로그인 실패] : 비밀번호를 다시 확인해주세요.");

        }

        if (this.balance <= money) {
            throw new Error("[잔액 부족] : 계좌의 잔액이 부족합니다.");

        }
        return this.balance -= money;

    }

    getBalance = function () {
        return this.balance;
    }
}


const account = new Account("111-111", "남윤호", 111, 1000);
try {
    account.withdraw(10000, 111);
} catch (error) {
    console.log(error.message);
}

module.exports = Account;