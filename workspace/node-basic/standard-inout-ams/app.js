const { createInterface } = require("readline");

const Account = require("./ams-project-myver/Account");
const MinusAccount = require("./ams-project-myver/MinusAccount");
const AccountRepository = require("./ams-project-myver/AccountRepository");

// 계좌 관리 프로그램 생성
const accountRepository = new AccountRepository();


// 키보드 입력을 위한 인터페이스 생성
const consoleInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 키보드 입력 받기
const readLine = function (message) {
    return new Promise((resolve) => {
        consoleInterface.question(message, (userInput) => {
            resolve(userInput);
        });
    });
}



// 메뉴 출력
const createMessage = function () {
    console.log("--------------------------------------------------------------------");
    console.log("1.계좌생성 | 2.재입력 | 7.종료");
    console.log("--------------------------------------------------------------------");
}

// 메뉴 출력
const printMenu = function () {
    console.log("--------------------------------------------------------------------");
    console.log("1.계좌등록 | 2.계좌목록 | 3.예금 | 4.출금 | 5.검색 | 6.삭제 | 7.종료");
    console.log("--------------------------------------------------------------------");
}

const app = async function () {
    console.log(`====================================================================`);
    console.log(`--------------     KOSTA 은행 계좌 관리 프로그램     ---------------`);
    console.log(`====================================================================`);

    //원래는 키보드의 on 이벤트를 받을때 작동하게 해야된다. 편의를 위해 while문을 돌린것
    let running = true;
    while (running) {
        printMenu();
        let menuNum = parseInt(await readLine("> "));
        switch (menuNum) {
            case 1:
                // createAccount();
                console.log("■ 등록 계좌 종류 선택");
                const header =
                    "--------------------------------\n" +
                    "1. 입출금계좌 | 2. 마이너스 계좌\n" +
                    "--------------------------------";
                console.log(header);
                let account = null;
                let no = parseInt(await readLine("> "));
                let accountNum = await readLine("- 계좌번호 : ");
                let accountOwner = await readLine("- 예금주명 : ");
                let password = parseInt(await readLine("- 비밀번호 : "));
                let initMoney = parseInt(await readLine("- 입금액 : "));
                let rentMoney = 0;
                if (no === 1) {
                    // account = new account(account, accountOwner, password, initMoney);
                } else {
                    rentMoney = parseInt(await readLine("- 대출금액 : "));
                    // account = new MinusAccount(account, accountOwner, password, initMoney, rentMoney);
                }

                // 입력한 정보 출력
                console.log("입력한 정보는 아래와 같습니다. -->\n");
                console.log(accountNum, accountOwner, password, initMoney, rentMoney);

                // 입력한대로 계좌생성할것인지 물음
                createMessage();
                let createOk = parseInt(await readLine("> "));
                if (createOk === 1) {
                    //계좌 생성
                    account = new Account(accountOwner, password, accountNum, initMoney);
                    accountRepository.addAccount(account);

                    console.log("신규 계좌 등록 완료");
                } else {
                    //일단 최상위 메뉴로 올려보내자
                    break;
                }
                // 신규 계좌 등록
                break;
            case 2: // 전체계좌 목록 출력
                console.log("-------------------------------------------------------");
                console.log("계좌구분 \t 계좌번호 \t 예금주 \t 잔액");
                console.log("-------------------------------------------------------");

                const allList = accountRepository.findByAll();

                allList.forEach(account => {

                    console.log(`이름: ${account.name}, 비번: ${account.password}, 계좌: ${account.number}, 잔액:${account.balance}`);
                });
                break;
            case 3: // 입금
                // 계좌번호와 입금액 입력 받아 입금 처리
                let inputNo = await readLine("- 계좌번호 : ");
                let inputMoney = parseInt(await readLine("- 입금액 : "));
                console.log(inputNo, inputMoney);

                accountRepository.updateAccount(inputNo, inputMoney, Account.prototype.pulseMoney)
                console.log("입금완료");
                break;
            case 4: // 출금
                // 계좌번호와 출금액 입력 받아 출금 처리
                let outputNo = await readLine("- 계좌번호 : ");
                let outputMoney = parseInt(await readLine("- 출금액 : "));
                console.log(outputNo, outputMoney);
                console.log("출금 완료");
                accountRepository.updateAccount(outputNo, outputMoney, Account.prototype.minusMoney)
                break;
            case 5: // 계좌번호로 검색
                // 계좌 번호 입력 받아 계좌 정보 출력
                let searchNum = await readLine("- 계좌번호 : ");
                console.log(searchNum);

                console.log("검색된 계좌\n");
                const numList = accountRepository.findByNumber(searchNum);
                console.log(`이름: ${numList.name}, 비번: ${numList.password}, 계좌: ${numList.number}, 잔액:${numList.balance}`);

                break;
            case 6:
                console.log("계좌 삭제");
                // 계좌 번호 입력 받아 계좌 해당 계좌 삭제
                let deleteNum = await readLine("- 계좌번호 : ");
                console.log(deleteNum);
                const deleteAccount = accountRepository.deleteAccount(deleteNum);
                console.log("삭제후 남은 계좌\n");
                deleteAccount.accounts.forEach(account => {
                    console.log(`이름: ${account.name}, 비번: ${account.password}, 계좌: ${account.number}, 잔액:${account.balance}`);
                });

                break;
            case 7:
                console.log(">>> 프로그램을 종료합니다.");
                consoleInterface.close();
                running = false;
                break;
            default: console.log("잘못 선택하셨습니다.");
        }
    }
}

app();