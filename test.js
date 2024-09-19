// function solution(numbers, n) {
//     let plus = 0;
//     numbers.forEach((item) => {
//         if (plus <= n) {
//             plus += item;
//         } else {
//             return plus;
//         }
//     })
//     return plus;
// }

// let nums = [58, 44, 27, 10, 100];
// solution(nums, 10);
// console.log(solution(nums, 139));


// function solution1(numbers, n) {
//     return numbers.reduce((acc, num) => {
//         if (acc <= n) {
//             return acc += num
//         } else {
//             return acc;
//         }

//     })
// }

// let nums2 = [58, 44, 27, 10, 100];
// console.log(solution1(nums2, 139));



function solution(cipher, code) {
    let answer = '';
    // answer = console.log(cipher.length);

    for (let i = 1; i <= cipher.length; i++) {
        answer += cipher.charAt((i * code) - 1);
    }

    return answer;
}


let strings = "dfjardstddetckdaccccdegk";
console.log(solution(strings, 4));



// function solution(cipher, code) {
//     let answer = '';

//     // i는 code 배수로 증가해야 함 (code, 2 * code, 3 * code, ...)
//     for (let i = code; i <= cipher.length; i += code) {
//         answer += cipher.charAt(i - 1);  // 인덱스는 0부터 시작하므로 i - 1
//     }

//     return answer;
// }

// let strings = "dfjardstddetckdaccccdegk";
// let result = solution(strings, 4);
// console.log(result); 