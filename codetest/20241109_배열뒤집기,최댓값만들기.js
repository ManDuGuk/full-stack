//배열뒤집기
function solution1(num_list) {

    var answer = [];
    num_list.forEach((item, index, arr) => {
        answer.push(arr[num_list.length - 1 - index])
    });
    return answer;
}


console.log(solution1([1, 2, 3, 4, 5]));
console.log(solution1([1, 1, 1, 1, 1, 2]));
console.log(solution1([1, 0, 1, 1, 1, 3, 5]));

//최댓값 만들기
function solution2(numbers) {
    var answer = 0;
    answer = numbers.sort((a, b) => b - a).splice(0, 2);
    answer = answer.reduce((acc, curr) => { return acc * curr })
    return answer;
}

console.log(solution2([1, 2, 3, 4, 5]));