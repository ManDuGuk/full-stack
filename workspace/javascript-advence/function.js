//함수 리터럴 표현식을 이요한 함수 정의
//받는 변수가 사실상 함수의 이름임
//함수에 이름을 부여할수도 있는데 그건 디버깅할때 쓰려고 그러는거
let sum = function (x, y) {
    return x + y;
}

//참조변수==레퍼런스 변수 = sum
console.log(sum);
//식별자호출(함수호출)
let result = sum(5, 10);
console.log(result);

