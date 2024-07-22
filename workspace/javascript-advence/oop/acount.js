const account = {
    number: "5555-5555",
    owner: "남윤호",
    password: 11111,
    balance: 9999999,
    deposit: function (inputMoney) {
        let result = this.balance + inputMoney;
        this.balance = result;
        return result;
    },
    withdraw: function (outMoney) {
        if (outMoney > this.balance) {
            return -1;
        } else {
            let result = this.balance - outMoney;
            this.balance = result;
            return result;
        }
    },
    getBalance: function () {
        return this.balance;
    },
    checkPassword: function (inputPassword) {
        return this.password === inputPassword;
    },
    showYou: function () {
        console.log(`${this.number}\t${this.owner}\t${this.password}\t${this.balance}`);
    },
    showResult: function (result) {
        return console.log(result);
    }

}


//객체화 안시킨것
// console.log(accout.getBalance());
// console.log(accout.checkPassword());
// console.log(accout.deposit(500));
// console.log(accout.withdraw(500));


let inputPassword = 1234;
account.checkPassword(inputPassword);

//객체화 시킨것
account.showYou();
account.showResult(account.deposit(500));
account.showResult(account.withdraw(500));
account.showResult(account.withdraw(500));
account.showResult(account.withdraw(99999999999));
account.showResult(account.checkPassword());
account.showResult(account.getBalance());



//call by balue  테스트
//얉은 복사(공유)
const account2 = account;
account2.owner = "남준스기";
console.log(account2);