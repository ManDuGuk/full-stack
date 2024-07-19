//함수를 선언할때 주소값을 받는 변수는  const 를 줘서 함수를 가르키는 주소를 변경하지 못하게 자주 처리한다.
const sum = function (...nums) {

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        result += num;

    }
    return result;
}


let result = sum(2, 3, 4, 5, 56, 7, 89, 100);
console.log(result);
