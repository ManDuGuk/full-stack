function solution(angle) {
    var answer = 0;

    angle == 90 ? answer = 2 : angle == 180 ? answer = 4 : angle > 90 ? answer = 3 : answer = 1;
    return answer;
}

console.log(solution(70));
console.log(solution(91));
console.log(solution(180));
