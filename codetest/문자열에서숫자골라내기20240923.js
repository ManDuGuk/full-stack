// function solution(my_string) {
//     // 숫자만 추출하는 정규표현식 객체 생성
//     // 숫자 0~9까지 1개이상인 것을 모두 찾는것을 의미
//     // 뒤에 g?

//     let pattern = /[0-9]+/g; //리터럴
//     // let pattern2 = RegExp(/ [0 - 9] +/g); //정규표현식 객체 생성
//     let numbers = my_string.match(pattern); //name546jqklrj23 이렇게 있으면 ['546','23'] 이렇게 반환됨

//     let result = '';
//     numbers.forEach(element => {
//         result += element;
//     });

//     let stringArray = result.split('');
//     stringArray.sort((a, b) => {
//         return Number(a) - Number(b);
//     })

//     return stringArray;
// }

// let stringtest = "name987654321asdf2132";

// let result = solution(stringtest);
// // console.log(result);


// function solution(my_string) {

//     // 숫자만 추출하는 정규표현식 객체 생성
//     // 숫자 0~9까지 1개이상인 것을 모두 찾는것을 의미
//     // 뒤에 g?

//     let pattern = /[0-9]+/g; //리터럴
//     // let pattern2 = RegExp(/ [0 - 9] +/g); //정규표현식 객체 생성
//     let numbers = my_string.match(pattern); //name546jqklrj23 이렇게 있으면 ['546','23'] 이렇게 반환됨

//     let result = '';
//     numbers.forEach(element => {
//         result += element;
//     });

//     let stringArray = result.split('');
//     stringArray.sort((a, b) => {
//         return Number(a) - Number(b);
//     })

//     let numArray = stringArray.map(Number);

//     return numArray;

// }

function solution(n, t) {
    let total = n;
    for (let i = 1; i <= t; i++) {
        total = total * 2;
    }
    return total
}


let result = solution(2, 10);
console.log(result);
