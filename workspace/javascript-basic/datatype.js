// 숫자형
console.log(50 + 7);
console.log(50 - 7);
console.log(50 * 7);
console.log(50 / 7);
console.log(50 % 7);
console.log(78.56);

// 문자열 데이터 타입
// 콘솔 로그를 쉽게 찍으려면 자동완성으로 log에서 만들면 된다.
console.log("저는 남윤호 입니다.");

//컨트롤 엔터를 치면 문장 중간에서 다음줄로 줄바꿈이 가능하다.

console.log("1000");
console.log(1000);

//터미널도 단축키로 사용하면 편하다. 메뉴에 단축키가 표시되있다.

// + 연산자 사용 예시
console.log("나는" + "행복합니다");

//제어문자와 이스케이프 문자 처리
console.log("줄바꿈이 일어날 지어다\n줄바꿈이 되었도다");
console.log("줄바꿈이 일어날 지어다\r줄바꿈이 되었도다");
console.log("줄바꿈이 일어날 지어다\b\b줄바꿈이 되었도다");
console.log("줄바꿈이 일어날 지어다\t줄바꿈이 되었도다");

console.log("줄바꿈이 일어날 지어다\"줄바꿈\"이 되었도다");

// 쉬프트 +  del 키, 알트+ 쉬프트 아래 방향키 --> 복사

// 논리형 false
console.log("" == false); //true
console.log(0 == false);  //true
console.log(undefined == false); //false --> undefined는 평가는 false지만  undefined끼리를 비교할때만 true가 된다
console.log(undefined == undefined); //true --> undefined는 평가는 false지만  undefined끼리를 비교할때만 true가 된다
console.log(NaN == false); //false
console.log(NaN == NaN); //false --> NaN은 ==연산자로 비교하면 안됨 값은 값인데 서로 다른 값이여서 그렇다.
console.log(Number.isNaN(NaN)); //true --> NaN은 ==연산자로 비교하면 안됨 값은 값인데 서로 다른 값이여서 그렇다.
console.log(null == false); //false
console.log(null == null); //true
