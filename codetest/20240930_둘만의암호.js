function solution(s, skip, index) {
    var answer = '';

    //유니코드의 한계를 정해주기 소문자 알파벳으로
    const startCharCode = 'a'.charCodeAt(0);
    const endCharCode = 'z'.charCodeAt(0);

    // 유니코드로만들기
    let stringArray = s.split("");
    let unicodeArray = stringArray.map((char) => {
        return char.charCodeAt();
    })

    let skipArray = skip.split("");
    let skipUnicodeArray = skipArray.map((char) => {
        return char.charCodeAt();
    })

    // 연산 작업
    for (let i = 0; i < unicodeArray.length; i++) {
        // 이동한 횟수
        let go = 0;

        while (go < index) {
            unicodeArray[i] += 1;

            // 알파벳 z를 넘어가면 다시 a로
            if (unicodeArray[i] > endCharCode) {
                unicodeArray[i] = startCharCode;
            }

            // skip 배열에 포함된 문자가 아닐경우에만 지나감
            if (!skipUnicodeArray.includes(unicodeArray[i])) {
                go++;
            }
        }
    }

    //유니코드를 문자열로 변환
    unicodeArray.map((item) => {
        answer += String.fromCharCode(item); // 유니코드를 문자로 변환
    });

    return answer;
}

//먼저 필터링할 문자열 인덱스 배열을 만들고 시작하자.
//유니코드를 이용해보기

let s = "aukks";
let skip = "wbqd";
let index = 5;
let exresult = "happy";

let result = solution(s, skip, index);
console.log(result);


