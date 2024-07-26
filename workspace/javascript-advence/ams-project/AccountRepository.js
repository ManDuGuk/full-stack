/**
 * 계좌 관리 객체
 */
// 마이너스 계좌도 한다
// 계좌의 CRUD
// 객체로 넘어온 값을 받아서 배열로 관리해야 한다.
// 클로저랑,콜백함수를 써서 생성한 account에 계속 값을 불러올수 있도록 만들어줘야한다.

// 유저넣기가 되면
// 객체로 받아서 만든 유저 정보를 테이블로 변환한다.

class AccountRepository {
    constructor(account) {
        // 빈배열을 하나 만들어 줘서
        this.accounts = [];
    }

    //배열로 받게 되었을때 this.accounts =[{},{},{}] -->이런식으로 이루어지는


    //계좌를 관리하는 주요기능들 --> 여기서 배열을 만들어주면 좋을듯? 그리고 리턴으로 배열을 넘겨주면 좋을듯?
    //신규 계좌 등록(중복시 등록안되게하라)
    addAccount(account) {

        if (this.accounts.indexOf(account) == -1) {
            this.accounts.push(account);
            return true;
        }
        return false;

        // let 사용자테이블 = this.account;


        // //처음 등록한 계좌는 중복 체크를 건너뛴다.
        // if (사용자테이블.length === 0) {
        //     사용자테이블.push(info)
        //     return console.log(`계좌등록 완료\n${사용자테이블}`);
        // } else {
        //     //처음이 아닐시
        //     //마지막으로 넣은 계좌의 계좌번호
        //     let 검사할계좌번호 = 사용자테이블[사용자테이블.length - 1].number;
        //     //계좌는 배열에 객체들이 담겨있다.
        //     //마지막 계좌를 제외한 계좌들을 돌면서 계좌번호를 불러온다.
        //     for (let i = 0; i < 사용자테이블.length - 1; i++) {
        //         if (검사할계좌번호 === 사용자테이블[i].number) {
        //             // return console.log("중복된 계좌가 있습니다.");
        //             return console.log(`중복된 계좌가 있습니다.\n${사용자테이블}`);
        //         } else {
        //             사용자테이블.push(info);
        //             return console.log(`계좌등록 완료\n${사용자테이블}`);
        //         }

        //     }

        // }


    }

    //전체계좌 목록 반환
    findByAll() {
        // return this.accounts; ==> 이렇게 보내면 안되는 이유가 호출하였을때 참조값을 보내준것이 되어서 원본배열을 수정가능하게 하기때문에 이렇게 보내주면 안된다.
        // [...this.accounts] ==> 이걸하면 구조분해 할당이 자동으로 되면서 모든 요소를 복사해서 새로운 배열을 보내준다. (깊은복사)
        // 아래의 기능들을 조회할때는일단 해당구문을 for문으로 돌면서 ...으로 객체를 구조분해 할당해주면서 배열로 만들어주면된다. 그럼 아래에서 하고자 했던 모든 배열을 이용한 기능의 구현이 가능할것이다. 
        return [...this.accounts];
    }

    //계좌번호로 조회하여 반환
    findByNumber(userTable, number) {
        let 조회테이블 = []

        userTable.forEach(사용자객체 => {

            if (사용자객체.number === number) {
                조회테이블.push(사용자객체);
            }

        });
        return console.log(조회테이블);
    }

    // 예금주명으로 조회하여 반환
    findByName(userTable, name) {
        let 조회테이블 = []
        userTable.forEach(사용자객체 => {

            if (사용자객체.name === name) {
                조회테이블.push(사용자객체);
            }

        });
        return console.log(조회테이블);
    }

    // 모든 계좌의 총금액 반환--1개
    totalBalance(userTable) {
        let total = 0;
        userTable.forEach(사용자객체 => {

            total += 사용자객체.balance;

        });
        return console.log(total);

    }

    // 계좌 잔액중에서 최대값 반환 --1개
    maxBalance(userTable) {
        let max = 0;
        userTable.forEach(사용자객체 => {

            if (사용자객체.balance > max) {
                max = 사용자객체.balance;
            }
        });
        return console.log(max);
    }
    // 계좌 잔액중에서 최소값 반환 --1개
    // 이걸 이렇게 하면 안되는데...
    minBalance(userTable) {
        let min = 0;
        let pre = 0;
        userTable.forEach(사용자객체 => {
            pre = 사용자객체.balance;
            if (사용자객체.balance <= pre) {
                min = 사용자객체.balance;
            }
        });
        return console.log(min);
    }

    // 특정 범위의 잔액조회
    // 이름을 받아? 계좌의 예금주명 수정
    // 계좌를 받아 계좌의 예금주명 수정 아님?
    rewriteUser(userTable, number, name) {
        userTable.forEach(사용자객체 => {
            if (사용자객체.number === number)
                사용자객체.name = name;
        });
        return console.log(userTable);
    }
    // 계좌번호를 입력받아 해당 계좌 삭제
    // 삭제가 아니라 오히려 그것만 나오는데? 제거된걸 배열로 리턴해주는것 아니였나?
    deleteUser(userTable, number) {
        let deletedUser;
        userTable.forEach((사용자객체, index) => {
            if (사용자객체.number === number) {
                deletedUser = userTable.splice(index, index + 1);
                console.log(deletedUser);
            }

        });
        return console.log(deletedUser);
    }
}

module.exports = AccountRepository;