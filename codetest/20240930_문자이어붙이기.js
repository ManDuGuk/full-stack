function solution(my_string, index_list) {

    var answer = '';
    index_list.map((index) => {
        answer += my_string[index];
    })
    return answer;
}



let string1 = "cvsgiorszzzmrpaqpe";
let string2 = "zpiaz";

let list1 = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];
let list2 = [1, 2, 0, 0, 3];

let result = solution(string1, list1);
let result2 = solution(string2, list2);
console.log(result);
console.log(result2);
