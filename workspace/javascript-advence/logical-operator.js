//and or를의 논리적 연산 방식 --> 자바스크립트 자체의 특수성
console.log("java" && "javascript"); //javascript
console.log(0 && "javascript"); //javascript

//단축평가 표현(==조건삼항과 비슷함)
function print(message) {
    let value = message || "값없음";
    console.log(value);
}

print("남윤호");
print();