/** 
 * 데이터 유효성 검증 관련 메소드 
 */

// 빈문자열인지 검증
const isEmpty = function (input) {
    if (input && input.trim() !== "") {
        return false;
    }
    return true;
}

// 숫자 형식 검증
const isNumber = function (input) {
    return /^\d+$/.test(input);
}

// 아이디 형식 검증
const isId = function (input) {
    return /^\w{6,10}$/.test(input);
}

// 검증 테스트
// let inputMessage = undefined; // null
// inputMessage = "  ";
// console.log(isEmpty(inputMessage));

// let number = "145-3";
// console.log(isNumber(number));

// let id = "bangry3한6";
// console.log(isId(id));

module.exports = {
    isEmpty, isNumber, isId
};