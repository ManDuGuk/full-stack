function solution(n, k) {
    let freeCount = Math.floor(n / 10);
    var answer = 12000 * n + 2000 * (k - freeCount);
    return answer;
}

console.log(solution(10, 3));
console.log(solution(64, 6));

