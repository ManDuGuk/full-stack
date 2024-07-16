
let sum = 0;

for (let i = 1; i < 5; i++) {
    console.log(i);
    sum += i;
}

console.log(sum);

// for문의 초기화는 한번에 여러개도 가능하고, 조건식은 오로지 하나 여야만 한다. 증감식은 여러개도 가능하다. 
// 어찌보면 이중포문으로 할꺼를 단축시켜서 사용한다는 느낌
for (let i = 1, j = 1; i < 10; i++, j += 5) {
    console.log(i, j);
}

//    console.log(); -->라인바꾸기

//과제 별찍기