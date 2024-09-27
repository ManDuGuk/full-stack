function solution(a, b) {
    let attach = Number(String(a) + String(b));
    let ope = 2 * a * b;


    var answer = attach >= ope ? attach : ope;
    return answer;
}