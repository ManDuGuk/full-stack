function solution(my_string, num1, num2) {
    let first = my_string[num1];
    console.log(first);

    let second = my_string[num2];
    console.log(second);

    let splitedString = my_string.split("");
    splitedString[num1] = second;
    splitedString[num2] = first;

    let joindString = splitedString.join('');
    return joindString;
}

let string = "hello";
let num1 = 1;
let num2 = 2;

let result = solution(string, num1, num2);
console.log(result);
