function solution(my_string) {
    let wordFilter = ['a', 'e', 'i', 'o', 'u'];
    var answer = '';
    let strArr = my_string.split("");

    answer = strArr.filter((string) => {
        return !wordFilter.some(item => item == string);
    }).join("");


    return answer;
}

console.log(solution("bus"));


function solution2(num_list) {
    var answer = [];
    let odd = 0, even = 0;
    num_list.forEach(item => item % 2 == 0 ? even++ : odd++)
    answer.push(even, odd);
    return answer;
}

console.log(solution2([1, 2, 3, 4, 5]));



