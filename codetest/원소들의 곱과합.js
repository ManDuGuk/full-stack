function solution(num_list) {
    let sum = num_list.reduce((acc, curr) => {
        acc * curr
    });
    let sqsum = Math.pow(sum, 2)

    var answer = sum < sqsum ? 1 : 0;
    return answer;
}

function solution(num_list) {
    // 모든 원소들의 합 계산
    let sum = num_list.reduce((acc, curr) => acc + curr, 0);

    // 모든 원소들의 곱 계산
    let product = num_list.reduce((acc, curr) => acc * curr, 1);

    // 합의 제곱 계산
    let sqsum = Math.pow(sum, 2);

    // 곱이 합의 제곱보다 작으면 1, 크면 0 반환
    var answer = product < sqsum ? 1 : 0;
    return answer;
}
