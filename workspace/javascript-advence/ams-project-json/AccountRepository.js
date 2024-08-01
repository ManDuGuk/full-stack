/**
 * 계좌 관리 객체
 * 최규호(원본)-->제이슨으로 수정(남윤호)
 */

const fs = require('fs').promises;
const constants = require('fs').constants;

class AccountRepository {
    constructor() {
        this.accounts = [];
    }

    set accounts(accounts) {
        this._accounts = accounts;
    }

    get accounts() {
        return this._accounts;
    }

    // 계좌 추가
    addAccount(account) {
        //일단 폴더 생성하고, 파일 생성하고, 파일안에 들어있는 제이슨들을 읽어옴
        //일어온 제이슨들을 객체화 시키면서 배열에 넣음
        //읽어온 제이슨이 

        (async () => {
            //폴더생성
            try {
                //성공시 promiss는 값없이 리턴됨,실패시 오류 리턴
                await fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
                console.log("폴더 존재함");
            } catch (error) {
                if (error.code === "ENOENT") {
                    //폴더생성해라
                    await fs.mkdir("./folder");
                } else {
                    console.error("폴더가 없는것 이외의 오류가 발생함", error);
                }
            }
            //파일생성
            try {
                let fileCreate = await fs.open("./folder/accounts.js", "w") //파일 id가 리턴됨
                console.log("파일이 생성되었음" + fileCreate.fd);
            } catch (error2) {
                console.log(error2);
            }

            //파일에 내용넣기

        })();

        // fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
        //     .then(() => {
        //         return Promise.reject("이미 폴더 있음");
        //     })
        //     .catch((e) => {
        //         //파일을 찾을수가 없다면 해당 코드 에러가 발생
        //         if (e.code === "ENOENT") {
        //             console.log("폴더없음");
        //             //폴더 만들어주기 근데 왜 리턴?--> 리턴하면 다시 프로미스로 반환 --> 케치문을 아예나가게 된다.
        //             return fs.mkdir("./folder");
        //         }
        //         //에러로그를 다시 reject에 담아서 반환해줌
        //         return Promise.reject(e);
        //     })
        //     .then(() => {
        //         console.log("폴더만들기 성공");
        //         return fs.open("./folder/file.js", "w") //파일 아이디를 리턴
        //     })
        //     .then((fid) => {
        //         console.log("빈 파일 만들기 성공", fid);
        //         return fs.rename("./folder/file.js", "./folder/newfile.js")
        //     })
        //     .then(() => {
        //         console.log("이름 바꾸기 성공");
        //     })
        //     //에러를 다시 던저줄때는 예상치 못한 참조가 이루어 지지 않도록 매개변수의 이름을 바꿔주는 편이 좋다고 한다. 
        //     .catch((err) => {
        //         console.error(err);
        //     })


        // if (this.accounts.indexOf(account) === -1) {
        //     this.accounts.push(account)
        //     return true;
        // } else {
        //     return false;
        // }

    }

    findByAll() {
        return [...this.accounts];
    }

    // 계좌번호로 찾기
    findByNumber(number) {
        return this.accounts.find(account => account.number === number)
    }

    // 이름으로 찾기
    findByName(name) {
        return this.accounts.filter(account => account.name === name)
    }

    // 전체 금액 합계
    findTotalMoney() {
        // return this.accounts.reduce((acc, account) => acc + account.balance, 0);
        return this.accounts.reduce((acc, account) => acc + account.getBalance(), 0);
    }

    // 최고 예금액 찾기
    findHighMoney() {
        return this.accounts.reduce((acc, account) => acc > account.balance ? acc : account.balance, 0)
    }

    // 최저 예금액 찾기
    findLowMoney() {
        return this.accounts.reduce((acc, account) => acc < account.balance ? acc : account.balance, this.accounts[0].balance)
    }

    // 특정 범위의 금액 찾기
    findSomeMoney(num1, num2) {
        return this.accounts.filter((account) => num1 <= account.balance && account.balance <= num2);
    }

    // 이름 변경하기
    // updateName(beforeName, afterName) {
    //     let index = this.accounts.findIndex((account) => account.name === beforeName)
    //     if (index > -1) {
    //         this.accounts[index].name = afterName
    //         return true;
    //     }
    //     return false;
    // }

    updateName(updateAccount) {
        let findAccount = this.accounts.find((account) => account.number === updateAccount.number)
        console.log(findAccount);
        if (findAccount) {
            findAccount.name = updateAccount.name;
            return true;
        }
        return false;
    }

    // 계좌 삭제하기
    deleteAccount(number) {
        let index = this.accounts.findIndex((account) => account.number === number)
        if (index != -1) {
            return this.accounts.splice(index, 1);
        }
        return null;

    }
}

module.exports = AccountRepository;