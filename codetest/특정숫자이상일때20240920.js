function solution(numbers, n) {
    let plus = 0;
    numbers.forEach((item) => {
        if (plus <= n) {
            plus += item;
        } else {
            return plus;
        }
    })
    return plus;
}

let nums = [58, 44, 27, 10, 100];
solution(nums, 10);
console.log(solution(nums, 139));


function solution1(numbers, n) {
    return numbers.reduce((acc, num) => {
        if (acc <= n) {
            return acc += num
        } else {
            return acc;
        }

    })
}

let nums2 = [58, 44, 27, 10, 100];
console.log(solution1(nums2, 139));