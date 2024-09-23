function solution(num_list, n) {
    let answer = [];
    let arrayLength = num_list.length;
    let index = 0;
    answer.push(num_list[0]);

    num_list.forEach((item) => {  // 'forEach'로 수정
        index += n;
        if (index <= (arrayLength - 1)) {
            answer.push(num_list[index]);
        } else {
            return;
        }
    });

    return answer;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = solution(array, 3);
console.log(result);
