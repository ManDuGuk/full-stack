//String
//기본타입
const message = "javaScript";

//스트링객체
const messageObj = new String(message);

console.log(messageObj.length);

console.log(messageObj.substring(0, 4));
console.log(messageObj.slice(0, 4));

//AutoBoxing --> 자동객체화,다이나믹타이핑 객체
//오토박싱이 끝나고 나면 다시 기본타입으로 돌아간다.
console.log(message.substring(0, 4));

const ssn = "546545-6545646";

// 주민번호를 구분해서 어떤 함수로 구분값을 출력한다고 할때 
// 그냥 매직 넘버를 넣어버리는것은 좋지 않다.
// 예로 - 가 들어있는걸 indexOf로 검색해서 매직넘버를 넘기지 말자
console.log(ssn.charAt(7));

console.log(message.includes("Script"));
console.log(message.includes("script"));

console.log(message.toLowerCase().includes("script"));

console.log(Number("10".valueOf()) + 10);

console.log("                   야~                  ".trim());