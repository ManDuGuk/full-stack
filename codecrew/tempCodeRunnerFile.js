/**
 * 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

예를 들어, 서로 다른 9개의 자연수

3, 29, 38, 12, 57, 74, 40, 85, 61

이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
 */



const { createInterface } = require("readline");

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

const main = async function () {

    const array = [];

    for (let index = 0; index < 9; index++) {
        let inputNums = parseInt(await readLine(""));
        array.push(inputNums);
    }

    let result = [...array].sort((a, b) => b - a);

    //최댓값 
    let max = result[0];
    console.log(max);

    let count = 1;
    array.forEach(element => {
        if (max === element) {
            console.log(count);

        }
        else count++;
    });


};

main();


