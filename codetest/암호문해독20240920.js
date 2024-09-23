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

