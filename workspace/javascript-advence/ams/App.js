//애플리케이션의 엔트리 포인트 역할 파일


const Account = require("./Account");
const MinusAccount = require("./MinusAccount");

console.log(Account);
console.log(MinusAccount);


const account = new Account("남윤호", 1111, "111-111", 1000);
console.log(account.toString());

const minusAccount = new MinusAccount("남윤호2", 2222, "2222-2222", 2000, 0);
minusAccount.toString();

//노드 표준 내장 모듈
const os = require("os");
console.log(os.arch());
console.log(os.homedir());

