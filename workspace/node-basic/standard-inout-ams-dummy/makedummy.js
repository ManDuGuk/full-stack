// 랜덤인트
function getRandomInt() {
    //0~9까지 나옴
    return Math.floor(Math.random() * 10);
};

//랜덤네임(10개,동명이인허용)
function getRandomName() {
    const name = ["남윤호", "서윤호", "동윤호", "북윤호", "최윤호", "김윤호", "극윤호", "느그윤호", "부산윤호", "경기윤호"];
    return name[getRandomInt()];
}

//랜던비번(4자리)
function getRandomPassword() {
    //0~9까지 나옴
    return Math.floor(Math.random() * 10000);
};

//랜덤잔액(4자리)
function getRandomBanlace() {
    //0~9까지 나옴
    return Math.floor(Math.random() * 10000);
};




//생성된 계좌를 저장한다. (중복된 계좌는 저장안됨)
const generatedAccounts = new Set();

// //랜덤계좌(중복고려?)
// function getRandomNumber() {

//     let accountnum;
//     do {
//         accountnum = `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`;
//     } while (generatedAccounts.has(accountnum));

//     generatedAccounts.add(accountnum);

//     return generatedAccounts;
// }

function getRandomNumber() {
    return `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`;
}

//랜덤 데이터 생성
function makedummy(num) {
    const dummy = [];
    for (i = 0; i < num; i++) {
        const account = {
            _name: getRandomName(),
            _password: getRandomPassword(),
            _balance: getRandomBanlace(),
            _number: getRandomNumber(),
        }
        dummy.push(account);
    }
    return dummy;
}


console.log(Array.from(makedummy(10)));

console.log(JSON.stringify(Array.from(makedummy(10))));


