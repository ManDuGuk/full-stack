let x = 18;
if (x >= 10 && x <= 20) {
    console.log("x의 값은 10과 20사이 입니다.");
} else {
    console.log("10과 20사이가 아닙니다.")
}

if (!"") {
    console.log("falsy 예시");
}
if (!null) {
    console.log("falsy 예시");
}
if (!NaN) {
    console.log("falsy 예시");
}
if (!0) {
    console.log("falsy 예시");
}

//if문 쓸대 코드 템플릿 쓰면 조건문 끝에서 탭키누르면 자동으로 실행문으로 점프해줌!!!

// 포펫터 --> art+shift+f

//다중if문
let score = 60;
if (score >= 90) {
    console.log("A학점");
} else if (score >= 80) {
    console.log("B학점");

} else if (score >= 70) {

    console.log("C학점");
} else {
    console.log("과락");

}