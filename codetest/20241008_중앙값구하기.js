// function solution(array) {
//     console.log(Math.floor(array.length / 2 + 1));
//     console.log(array.sort((pre, next) => { return pre - next }));

//     var answer = array.sort((pre, next) => { return pre - next })[Math.floor(array.length / 2)];
//     // sort 함수는 그냥쓰면 1,10,11,2,7 이런식으로 정렬함

//     return answer;
// }

function solution(my_string) {
    var answer = my_string.split("").reverse().join("");
    return answer;
}

// let array = [1, 2, 7, 10, 11];
// let array2 = [9, -1, 0];
let array = "jaron";
let array2 = "bread";


console.log(solution(array));
console.log(solution(array2));

