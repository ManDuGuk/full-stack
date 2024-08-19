/**
 * 은행 직원용 계좌 관리 애플리케이션
 * 작성자 : 최규호
 */
const Account = require("./Account")
const MinusAccount = require("./MinusAccount")
const AccountRepository = require("./AccountRepository")

const printHeader = function () {
    let header = `계좌종류\t\t계좌번호\t\t예금주명\t\t비밀번호\t\t현재잔액
        ================================================\n`;
    console.log(header);
}

console.log("[ KOSTA BANK 계좌 관리 프로그램 ]");
const accountRepository = new AccountRepository;

// 신규 계좌 등록
const account1 = new Account("123-456-7890", "홍길동", 1234, 10000);
const account2 = new Account("234-567-8901", "김철수", 1234, 1000000);
const account3 = new MinusAccount("345-678-9012", "박춘배", 1234, 10000, 50000);

accountRepository.addAccount(account1)
accountRepository.addAccount(account2)
accountRepository.addAccount(account3)
const result = accountRepository.addAccount(new MinusAccount("456-789-0123", "박춘배", 1234, 1000000, 500000))
if (result) {
    console.log(`신규 계좌 등록 완료!`);
} else {
    console.log("기존에 등록되어 있는 계좌입니다.");
}

// 전체목록 출력 테스트
// console.log(accountRepository.findByAll());
const allList = accountRepository.findByAll();
printHeader();
allList.forEach((account) => {
    if(account instanceof MinusAccount){
        console.log("마이너스계좌");
    }else{
        console.log("입출금계좌");
    }

    console.log(account.toString());
});

// // 계좌번호로 검색
console.log("[계좌번호 검색]");
printHeader();
const findAccount = accountRepository.findByNumber("234-567-8901");
if(findAccount){
    console.log(findAccount.toString());
}else{
    console.log("없시유~~~");
}
console.log();

// // 이름으로 검색
console.log("[이름으로 검색]");
console.log(accountRepository.findByName("박춘배"));
console.log();

// // 전체 금액 합계(마이너스 잔고 포함)
console.log("[전체 금액 합계]");
console.log(accountRepository.findTotalMoney());
console.log();

// // 전체 계좌 금액 중 최고 금액
// console.log("[최고 금액]");
// console.log(accountRepository.findHighMoney());
// console.log();

// // 전체 계좌 금액 중 최소 금액
console.log("[최소 금액]");
console.log(accountRepository.findLowMoney());
console.log();

// // 특정 범위 잔고 목록
console.log("[잔고 목록]");
console.log(accountRepository.findSomeMoney(5000, 50000));
console.log();

// // 이름 수정
console.log("[이름 수정]");
// console.log(accountRepository.updateName("김철수", "김철민"));
console.log(accountRepository.updateName(new Account("234-567-8901", "김철민", 1234, 1000000)));
console.log();

// // 계좌 삭제
console.log("[계좌 삭제]");
const account = accountRepository.deleteAccount("123-456-7890");
if(account){
    console.log(account.toString());
}else{
    console.log("삭제하고자 하는 계좌가 존재하지 않습니다..");
}
console.log();

// console.log("[ KOSTA BANK 계좌 관리 프로그램 종료 ]");