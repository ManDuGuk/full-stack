/**
 * 계좌 관리 객체
 * 어떤함수를 호출해서 값을 가져올때는 내가 형식을 정해서 주는게 아니라 나온그대로 돌려주는게 맞다.
 * 출력하는 기능같은거는 해당 함수를 호출한 곳에서 만들어서 해주는것이 좋다.
 * 어카운트 js에 있는 함수의 기능을 활용해서또 쓰면좋다.
 */

class AccountRepository {
    constructor(account) {
        // 빈배열을 하나 만들어 줘서
        this.accounts = [];
    }

    get accounts() {
        return [this._accounts];
    }
    set accounts(newAccount) {
        this._accounts = newAccount;
    }

    addAccount(account) {

        // 이렇게 짜니까 처음몇번은 괜찮은데 이후로 점점 중복등록되는 버그가 생김
        // let exist;
        // if (this.accounts.length === 0) {
        //     this.accounts.push(account);
        //     exist = "성공"
        // } else {

        //     this.accounts.forEach(innerAccount => {
        //         if (innerAccount.number === account.number) {
        //             exist = "실패";
        //             return;
        //         }
        //         this.accounts.push(account)
        //         exist = "성공";
        //     });
        // }

        //나중에 확인해보니 여기는 some 함수로 하는게 더 좋아보인다

        let exist;
        // Returns the value of the first element in the array where predicate is true, and undefined
        const result = this.accounts.find((innerAccount) => {
            return innerAccount.number === account.number;
        })
        //콜백함수에서 리턴된 account 객체 존재하는지 검사
        if (!result) {
            this.accounts.push(account);
            exist = "성공"
        } else {
            exist = "실패"
        }
        return exist;

    }

    //전체계좌 목록 반환
    findByAll() {
        // 복사된 객체배열을 반환해줌
        return [...this.accounts];
    }

    //계좌번호로 조회하여 반환 --> 계좌의 중복은 허용안됨 //객체리턴
    findByNumber(number) {
        // Returns the value of the first element in the array where predicate is true, and undefined
        const result = this.accounts.find((account) => {
            return account.number === number;
        })
        //콜백함수에서 리턴된 account 객체 리턴해줌
        return result;
    }

    // 예금주명으로 조회하여 반환 -->이름의 중복이 허용되야됨 //객체 배열 리턴
    findByName(name) {
        //Returns the elements of an array that meet the condition specified in a callback function.
        const result = this.accounts.filter((account) => {
            return account.name === name;
        })
        return result
    }

    // 모든 계좌의 총금액 반환--1개 //값리턴
    totalBalance(name) {

        const searchedByname = this.findByName(name); //객체 배열로 리턴
        // Calls the specified callback function for all the elements in an array.
        // The return value of the callback function is the accumulated result,
        // and is provided as an argument in the next call to the callback function.
        const result = searchedByname.reduce((pre, now) => {
            return pre + now.balance;
        }, 0)
        return { name: name, balance: result }
    }

    // 계좌 잔액중에서 최대값 반환 --1개
    // 계좌 잔액중에서 최소값 반환 --1개
    sortBalance(name) {

        const searchedByname = this.findByName(name); //객체 배열로 리턴
        /*
        * Sorts an array in place.
        * This method mutates the array and returns a reference to the same array.
        * @param compareFn Function used to determine the order of the elements. It is expected to return
        * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
        * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
        * ```ts
        * [11,2,22,1].sort((a, b) => a - b)
        * ```
        */
        const decendedArray = searchedByname.sort((first, second) => {
            return first.balance - second.balance;
        })

        return { name: name, decendedArray };
    }

    // 특정 범위의 잔액조회 --> 이름을 받고 , 특정 범위의 잔액을 가진 계정을 리턴하기 //중복허용됨
    rangeBalance(name, lownum, maxnum) {
        const searchedByname = this.findByName(name); //객체 배열로 리턴
        const result = searchedByname.filter((account) => {
            return account.balance >= lownum && account.balance <= maxnum
        })
        return result
    }

    // 계좌번호를 입력받아 해당 계좌 삭제
    deleteAccount(number) {

        // Returns the index of the first element in the array where predicate is true, and - 1
        const result = this.accounts.findIndex((account) => {
            return account.number === number;
        })

        //예외처리해줘야됨
        if (result != -1) {

            this.accounts.splice(result, 1);
        }


        return { log: "삭제되었습니다.", accounts: this.findByAll() };
    }
}

module.exports = AccountRepository;