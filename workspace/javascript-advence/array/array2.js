//조건삼항 연산자로도 만들어보자
max = max < score ? score : max;
min = min > score ? score : min;

let scores = [90, 75, , , 98, 78, 54];



//for of (템플릿있음)

let total = 0;
let now = 0
let max = 0;
let min = 0;
for (const score of scores) {
    //undefined 가 들어갈경우 걸러버리기
    if (!score) {
        continue;
    }
    console.log(score);
    now = score;
    min = score;

    if (score >= max) {
        max = score;
    }
    if (score <= min) {
        min = score;
    } else {
        min = score;
    }
    total += score;


}
console.log(total);
console.log(total / scores.length);

console.log(max);
console.log(min);