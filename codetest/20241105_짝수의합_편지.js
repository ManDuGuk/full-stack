// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
    var answer = 0;
    for (i = 1; i <= n; i++) i % 2 == 0 ? answer += i : answer;
    return answer;
}

console.log(solution(10));
console.log(solution(4));

//편지
function solution(message) {
    let inputString = message.toString();
    var answer = inputString.split("").length * 2;
    return answer;
}


console.log(solution("happy birthday!"));
console.log(solution("I love you~"));