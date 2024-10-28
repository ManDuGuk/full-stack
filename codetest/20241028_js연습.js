// import { log } from "console";

// // 주어진 배열에서 가장 큰 수를 반환하는 함수를 작성하세요.
// function findMaxNumber(arr) {
//     // 코드 작성
//     console.log(arr);


//     arr.sort((pre, now) => {
//         return pre - now;
//     })
//     console.log(arr);
//     console.log(arr.length);

//     return arr[arr.length - 1];

// }

// console.log(findMaxNumber([3, 5, 7, 1, 9])); // 9


// // 문자열 역순으로 만들기
// // 입력된 문자열을 역순으로 반환하는 함수를 작성하세요.
// function reverseString(str) {
//     // 코드 작성
//     console.log(str);

//     // str.split("");

//     let newString = Array.from(str)
//     console.log(newString);
//     // console.log(typeof (str));

//     newString.reverse();
//     console.log(newString);

//     let newString2 = newString.join("");
//     console.log(newString2);


//     return newString2;
// }

// console.log(reverseString("hello")); // "olleh"


// // 팩토리얼 계산하기
// // 주어진 숫자의 팩토리얼을 계산하는 함수를 작성하세요.팩토리얼은 주어진 수의 모든 양의 정수를 곱한 값입니다.
// function factorial(n) {

//     // 코드 작성
//     console.log(n);
//     let numArray = [];
//     let num = n;
//     for (let i = 0; i < num; i++) {
//         numArray.push(n)
//         n--;
//     }
//     console.log(numArray);

//     let total = numArray.reduce((acc, cur) => {
//         return acc * cur
//     })
//     console.log(total);
//     return total
// }

// console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)


// // // 주어진 숫자 배열에서 짝수만 필터링해서 반환하는 함수를 작성하세요.
// function filterEvens(arr) {
//     // 코드 작성
//     console.log(arr);
//     let filteredArr = arr.filter((item) => {
//         return item % 2 == 0
//     })
//     console.log(filteredArr);
//     return filteredArr;
// }

// console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// 특정 문자 개수 세기
// 문자열과 문자가 주어졌을 때, 해당 문자가 문자열에서 몇 번 나타나는지 세는 함수를 작성하세요.
function countCharacter(str, char) {
    // 코드 작성
    console.log(str);

    let stringArray = str.split("");
    console.log(stringArray);

    let count = 0;
    stringArray.forEach(element => {
        element == char ? count++ : count;
    });

    console.log(count);
    return count;
}

console.log(countCharacter("javascript", "a")); // 2
