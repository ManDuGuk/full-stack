
let count = 0;
while (count < 5) {
    console.log("출력!");
    count++;
}

count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

count = 0;
sum = 0;
while (count < 100) {
    sum += count;
    count++;
}
console.log(sum);

count = 1;
sum = 0;
let 홀수합 = 0;
let 짝수합 = 0;
while (count <= 100) {

    //if문 이용
    /*
     if (count % 2 === 0) {
        짝수합 += count;
    } else {
        홀수합 += count;
    }
    */

    //조건 삼향 연산자 이용
    count % 2 === 0 ? 짝수합 += count : 홀수합 += count;
    sum += count;
    count++;
}

console.log("총합" + sum);
console.log("짝수합" + 짝수합);
console.log("홀수합" + 홀수합);

//별찍기

let starts = 5;
do {
    //아래 문법은 노드에 있는 기능임, print이 자체 함수로 없어서 그럼 
    process.stdout.write("*");
    starts--;
} while (starts > 0);