/**
 * 은행 직원용 계좌 관리 애플리케이션
 * 작성자 : 남윤호
 */

const Account = require("./Account");
const MinusAccount = require("./MinusAccount");
const AccountRepository = require("./AccountRepository");


const generateAccountNumber = function () {
    let number = 100;
    return function () {
        number = ++number;
        return number;
    }
}

const closure = generateAccountNumber();
const number = closure();
console.log(number);



//일단은 사용자 계정을 추가하는것이 힘드니까 추가했다고 치고 임시로 배열을 만들어서 테스트 해보자
let userTable = [
    { name: "남윤호", password: 1111, number: `111-${number}`, balance: 1000 },
    { name: "서윤호", password: 2222, number: "222-222", balance: 2000 },
    { name: "북윤호", password: 3333, number: "222-222", balance: 3000 },
    { name: "동윤호", password: 4444, number: "444-444", balance: 4000 },
];


console.log("[KOSTA BANK 계좌 관리 프로그램 시작]");

// 계좌 관리 프로그램 생성
const accountRepository = new AccountRepository();
// 신규계좌 등록
// 남윤호의 계좌 등록 요청

//안될것 같은데 실행컨텐스트가 두개 이상 실행될것 같다.--> 원래는 되는게 맞다.콘솔로 찍었을대는 둘이서 완전 동일한 모습으로 보였지만 비교해보면 다르다.  Account를 다시 수정하자. 
let account = new Account("남윤호", 1111, "111-111", 1000); //임의적인 데이터넣어서 //클래스로 되어있으
// if (ok) {
//     console.log("정상 등록되었지롱....");
// } else {
//     console.log("기존에 있지롱.....");
// }

// 더미
accountRepository.addAccount(account);
accountRepository.addAccount(new Account("감윤호", 1111, "111-111", 1000));
accountRepository.addAccount(new Account("감윤호", 1111, "111-111", 1000));
accountRepository.addAccount(new Account("감윤호", 1111, "111-111", 1000));
accountRepository.addAccount(new Account("감윤호", 1111, "111-111", 1000));
accountRepository.addAccount(new Account("감윤호", 1111, "111-111", 1000));
accountRepository.addAccount(new Account("감윤호", 1111, "111-111", 1000));
accountRepository.addAccount(new MinusAccount("김기정", 1111, "111-111", 1000, 100000));
accountRepository.addAccount(new MinusAccount("김기정", 1111, "111-111", 1000, 100000));
accountRepository.addAccount(new MinusAccount("김기정", 1111, "111-111", 1000, 100000));
accountRepository.addAccount(new MinusAccount("김기정", 1111, "111-111", 1000, 100000));


const allList = accountRepository.findByAll();
allList.forEach(account => {
    // console.log(account);

    // if(accont instanceof MinusAccount){
    //     console.log("마이너스 계좌");
    // }else{
    //     console.log("입출금 계좌");
    // }

    // 이런식으로 toString을 이용해서 한번에 처리한는것도 좋다.
    // console.log(account.toString(account));
    console.log(`이름: ${account.name}, 비번: ${account.password}, 계좌: ${account.number}, 잔액:${account.balance}`);
});


// // 거지남윤호의 계좌 등록 요청
// // const maccount = new MinusAccount("거지남윤호", 1111, "222-222", -1000); //임의적인 데이터넣어서

// //전체계좌 출력
// console.log("-------------------------전체계좌 출력------------");
// accountRepository.findByAll(userTable);

// console.log("-------------------------계좌번호로 조회하여 반환------------");
// //계좌번호로 조회하여 반환
// accountRepository.findByNumber(userTable, "222-222");

// console.log("-------------------------예금주명으로 조회------------");
// //예금주 명으로 조회하여 반환
// accountRepository.findByName(userTable, "서윤호");

// console.log("-------------------------계좌 잔액중에서 총금액 반환------------");
// // 계좌 잔액중에서 총금액 반환 --1개
// accountRepository.totalBalance(userTable);

// console.log("-------------------------계좌 잔액중에서 최대값 반환 ------------");
// // 계좌 잔액중에서 최대값 반환 --1개
// accountRepository.maxBalance(userTable);

// // 계좌 잔액중에서 최소값 반환 --1개
// // accountRepository.minBalance(userTable);


// console.log("-------------------------계좌를 받아 계좌의 예금주명 수정 ------------");
// // 계좌를 받아 계좌의 예금주명 수정
// accountRepository.rewriteUser(userTable, "111-111", "똥멍청이윤호");

// console.log("-------------------------계좌를 받아 계좌를 삭제 ------------");
// // 계좌를 받아 계좌를 삭제
// accountRepository.deleteUser(userTable, "111-111");

// // //계좌종류 계좌번호 예금주명 비밀번호 현재잔액
// // ==============================================
// // //나올때 정렬해서
// // //입출금계좌 --------------------------------
// // //마이너스계좌-------------------------------

// // console.log("[KOSTA BANK 계좌 관리 프로그램 종료]");