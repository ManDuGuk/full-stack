const modules = require('./settings');

//메뉴 출력
const menu = new modules.Menu;
// 계좌 관리 프로그램 생성
const accountRepository = new modules.AccountRepository;

// 키보드 입력을 위한 인터페이스 생성
const consoleInterface = modules.createInterface({
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

    // 시작시 파일 불러와서 배열 만들주기
    (function parsJson() {

        modules.fs.readFile('./customer.json')
            .then((data) => {
                let readjson = JSON.parse(data.toString());

                readjson.forEach(accountData => {
                    const account = new Account(accountData._name, accountData._password, accountData._number, accountData._balance);
                    accountRepository.addAccount(account);
                });

                console.log("제이슨 파싱 완료");

            })
            .catch(console.log)


        const allCounts = function () {
            const allList = accountRepository.findByAll();
            return allList
        }
    })();


module.exports = {
    menu,
    accountRepository,
    consoleInterface,
    readLine

}