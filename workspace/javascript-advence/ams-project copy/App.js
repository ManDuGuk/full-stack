/**
 * 은행 직원용 계좌 관리 애플리케이션
 * 작성자 : 남윤호
 */

const Account = require("./Account");
const MinusAccount = require("./MinusAccount");
const AccountRepository = require("./AccountRepository");

console.log("[KOSTA BANK 계좌 관리 프로그램 시작]");

// 계좌 관리 프로그램 생성
const accountRepository = new AccountRepository();


let account = new Account("남윤호", 1111, "111-111", 1000);
console.log(accountRepository.addAccount(account));

account = new Account("남윤호", 1111, "111-111", 1000); //중복계좌
console.log(accountRepository.addAccount(account));

account = new Account("서윤호", 1111, "222-222", 1000);
console.log(accountRepository.addAccount(account));

account = new Account("남윤호", 1111, "333-333", 2000); //이름중복
console.log(accountRepository.addAccount(account));


console.log("----------------------------모든 계좌---------------------------");
//모든 계좌 가져오기
const allList = accountRepository.findByAll();
allList.forEach(account => {
    // console.log(account);
    console.log(`이름: ${account.name}, 비번: ${account.password}, 계좌: ${account.number}, 잔액:${account.balance}`);
});

console.log("----------------------------계좌 검색---------------------------");
//계좌번호로 찾기 --객체로 반환됨
const numList = accountRepository.findByNumber("222-222");
console.log(`이름: ${numList.name}, 비번: ${numList.password}, 계좌: ${numList.number}, 잔액:${numList.balance}`);


console.log("----------------------------이름 검색---------------------------");
//이름으로 찾기 --배열로 반환됨
const nameList = accountRepository.findByName("남윤호");
nameList.forEach(account => {
    console.log(`이름: ${account.name}, 비번: ${account.password}, 계좌: ${account.number}, 잔액:${account.balance}`);
});

console.log("----------------------------계좌 잔액 총합---------------------------");
//--객체로 반환
const totalBalance = accountRepository.totalBalance("남윤호");
console.log(`예금주: ${totalBalance.name}, 계좌 총합: ${totalBalance.result}`);

console.log("----------------------------계좌 최대값---------------------------");
//--객체로 반환됨
const topBalance = accountRepository.sortBalance("남윤호");
console.log(`예금주:${topBalance.name}, 최대값 : ${topBalance.decendedArray[topBalance.decendedArray.length - 1].balance}`);

console.log("----------------------------계좌 최소값---------------------------");
//--객체로 반환
const bottomBalance = accountRepository.sortBalance("남윤호");
console.log(`예금주:${bottomBalance.name}, 최소값 : ${bottomBalance.decendedArray[0].balance}`);

console.log("----------------------------특정범위 잔액 계좌조회---------------------------");
//--객체 배열로 반환
const rangeBalance = accountRepository.rangeBalance("남윤호", 1500, 2000);
rangeBalance.forEach(account => {
    console.log(`이름: ${account.name}, 비번: ${account.password}, 계좌: ${account.number}, 잔액:${account.balance}`);
});

console.log("----------------------------계좌 삭제---------------------------");
//--객체 배열로 반환
const deleteAccount = accountRepository.deleteAccount("111-111");
console.log(deleteAccount.log);
console.log("[남은 계좌]");
deleteAccount.accounts.forEach(account => {
    console.log(`이름: ${account.name}, 비번: ${account.password}, 계좌: ${account.number}, 잔액:${account.balance}`);
});





console.log("[KOSTA BANK 계좌 관리 프로그램 종료]");