// 1. 배열의 합 계산하기

// 배열이 주어졌을 때 배열 안의 모든 요소의 합을 계산하는 함수를 작성하세요.
function sumArray(arr) {

    // 코드 작성
    let result = arr.reduce((pre, curr) => {
        return pre + curr;
    })

    return result;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([-1, 2, -3, 4]));  // 2


// 2. 중복 문자 제거하기
// 문자열이 주어지면 중복된 문자를 제거하고, 남은 문자들을 하나의 문자열로 반환하는 함수를 작성하세요.
function removeDuplicates(str) {
    // 코드 작성
    let stringArr = str.split("");
    const setArr = new Set(stringArr);
    let newArr = [...setArr];
    let result = newArr.join("");
    return result;

}

console.log(removeDuplicates("hello"));    // "helo"
console.log(removeDuplicates("javascript"));// "javscript"


// 3.가장 긴 단어 찾기
// 문자열이 주어지면 각 단어를 분리하고 가장 긴 단어를 반환하는 함수를 작성하세요. (단어는 공백을 기준으로 구분됩니다.)
function findLongestWord(sentence) {
    // 코드 작성
    let stringArr = sentence.split(" ");

    let result = stringArr.reduce((pre, cur, currentIdx) => {
        return pre.length >= cur.length ? pre : cur;
    }, "");

    return result;

}

console.log(findLongestWord("I love learning JavaScript")); // "JavaScript"
console.log(findLongestWord("front end development"));      // "development"


// 4.괄호 짝 검사
// 문자열이 주어지면 모든 괄호가 짝을 이루고 있는지 검사하는 함수를 작성하세요. (괄호는() 형태로 주어지며, 여는 괄호와 닫는 괄호가 알맞게 짝을 이뤄야 합니다.)
function isValidParentheses(str) {
    // 코드 작성

    // 두가지 조건을 충족해야할것
    //1. ( 로 시작해서 )로 끝날것
    //2. ( 과 )의 갯수가 일치할것

    const regex = /^\(.*\)$/;

    let first = regex.test(str);

    let start = 0;
    let last = 0;

    let stringArr = str.split("");
    stringArr.forEach(element => {
        if (element == "(") { start++ }
        if (element == ")") { last++ }
    });


    let second = start == last ? true : false;

    return first && second;

}

console.log(isValidParentheses("()()"));   // true
console.log(isValidParentheses("(())"));   // true
console.log(isValidParentheses("(()"));    // false
console.log(isValidParentheses(")("));     // false



// 5.배열에서 고유한 값만 남기기
// 배열이 주어지면 배열 내 고유한 값만 남기고 중복되는 값들은 제거하는 함수를 작성하세요.
function uniqueValues(arr) {
    // 코드 작성

    const setArr = new Set(arr);

    return returnArr = [...setArr];

}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueValues([7, 8, 8, 9, 10]));       // [7, 8, 9, 10]
