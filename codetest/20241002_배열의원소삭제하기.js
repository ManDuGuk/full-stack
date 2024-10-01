function solution(arr, delete_list) {
    //필터를 사용해서 arr값을 돌린다.
    //콜백에서 각 item값이 delete값이 있는지 확인한다.
    //delte값에 없다면 return을 시켜준다.

    let answer = arr.filter((item) => {
        return !(delete_list.includes(item));
    })

    return answer;
}

let arr = [293, 1000, 395, 678, 94];
let delarr = [94, 777, 104, 1000, 1, 12];

let result = solution(arr, delarr);
console.log(result);

