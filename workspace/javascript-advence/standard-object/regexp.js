const phone = "010-3702-819한";

let regexp = /^\d{3}-\d{4}-\d{4}$/;
// console.log(regexp);
// console.log(typeof regexp); //객체임
// const match = regexp.test(phone);
// console.log(match);

// const str = "THIS Is a pen"
// regexp = /is/;
// console.log(regexp.test(str));
// regexp = /is/i; //대소문자 구분 ignore
// console.log(regexp.test(str));

// console.log(str.match(regexp));
// regexp = /is/ig; //대소문자 구분 ignore
// console.log(str.match(regexp));

// console.log(phone.split(/-/));


//임의의 문자 한개 표현
let targetStr = 'AA BB Aa Bb';
regexp = /...../g;
console.log(targetStr.match(regexp));

//1개 이상의 문자가 반복함을 표현
targetStr = 'AA AAA BB Aa Bb'; regexp = /B+/g; console.log(targetStr.match(regexp));

//문자의 반복되는 회수 표현 -->A가 2번 반복되는 문자열을 전역 검색
targetStr = 'A AA BB Aa Bb AAA'; regexp = /A{2}/g; console.log(targetStr.match(regexp));

//문자의 반복되는 회수 표현 -->A가 최소1번 최대2번 반복되는 문자열을 전역 검색
targetStr = 'A AA BB Aa Bb AAA'; regexp = /A{1,2}/g; console.log(targetStr.match(regexp));

//문자의 반복되는 회수 표현 -->A가 최소2번 이상 반복되는 문자열을 전역 검색
targetStr = 'A AA BB Aa Bb AAA'; regexp = /A{2,}/g; console.log(targetStr.match(regexp));

//or 표현
targetStr = 'A AA BB Aa Bb AAA'; regexp = /A|B/g; console.log(targetStr.match(regexp));

//분해되지 않는 단어 레벨로 추출하기 위해 +를 같이 사용 -->A 또는 B가 한번 이상 반복되는 문자열을 전역검색
targetStr = 'A AA BB Aa Bb AAA'; regexp = /A+|B+/g; console.log(targetStr.match(regexp));


// []내의 문자는 or로 동작, 뒤에 +를 사용하여 앞선 패턴들이 한번이상  반복됨을 표현
targetStr = 'A AA BB Aa Bb AAA'; regexp = /[AB]+/g; console.log(targetStr.match(regexp));


//범위 지정을 위해 []내에 '-'  사용 -->A ~Z가 한번이상 반복되는 문자열을 전역검색
targetStr = 'A AA BB Aa Bb ZZZ'; regexp = /[A-Z]+/g; console.log(targetStr.match(regexp));

//대소문자를 구별하지 않고 알파벳을 추출 -->대문자 소문자 A~z가 한번이상 반복되는 문자열으 전역검색
//[A-Z]+/gi와 동일 표현
targetStr = 'A AA BB Aa Bb ZZZ zzz'; regexp = /[A-Za-z]+/g; console.log(targetStr.match(regexp));

//숫자 추출 -->0~9가 한번이상 반복되는 문자열을 전역 검색
targetStr = 'A AA BB Aa Bb 24,000'; regexp = /[0-9]+/g; console.log(targetStr.match(regexp));

//숫자 추출 -->0~9가 한번이상 반복되는 문자열을 전역 검색 + 식별자|, 도 포함하는 문자검색일듯?
targetStr = '3000 24,000 4564,565 555,     ,'; regexp = /[0-9,]+/g; console.log(targetStr.match(regexp));

//문자열의 시작을 표현 -->http로 시작하는지를 검사
targetStr = 'http://www.smile.com'; regexp = /^http/; console.log(targetStr.match(regexp));

//문자열의 마지막을 표현 -->com으로 끝나는지 검사
targetStr = 'http://www.smile.com'; regexp = /com$/; console.log(targetStr.match(regexp));

//[] 안에서의 not표현--> 숫자를 제외한 문자열 전역 검색
targetStr = 'A AA BB Aa Bb 24,000'; regexp = /[^0-9]+/g; console.log(targetStr.match(regexp));