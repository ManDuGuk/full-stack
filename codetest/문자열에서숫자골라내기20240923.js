function solution(my_string) {
    let answer = [];

    // 숫자만 추출하는 정규표현식 객체 생성
    // 숫자 0~9까지 1개이상인 것을 모두 찾는것을 의미
    // 뒤에 g?
    let pattern = /[0-9]+/g; //리터럴
    let pattern2 = RegExp(/ [0 - 9] +/g); //정규표현식 객체 생성
    let numbers = my_string.match(pattern); //name546jqklrj23 이렇게 있으면 ['546','23'] 이렇게 반환됨
    let numArray = numbers[0].split('');
    console.log(numArray);

    numArray.sort((a, b) => {
        Number(b) - Number(a)
    })

    console.log(numArray);

    // return numArray;
}

let stringtest = "name987654321";

let result = solution(stringtest);
// console.log(result);
