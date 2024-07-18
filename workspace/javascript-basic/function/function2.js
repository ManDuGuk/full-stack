// 함수 선언(함수 정의) --매개변수 1개
function printSum(num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += i;
    }
    console.log("1부터" + num + "까지의 합: " + sum);
}

function max(num1, num2, num3) {
    let result = 0;
    if (num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }
    if (result < num3) {
        result = num3;
    }

    return result;
}



console.log("프로그램 시작됨: ");

//함수 실행(호출)
// 놀랍게도 매개변수를 넘겨주지 않고 호출해도 에러가 뜨지 않고 실행이 된다. 
// 인자가 매개변수보다 부족하면, 나머지 매개변수에 대해서 암묵적으로 undefined 로 처리된다. 
printSum();
printSum(100);

let x = 3, y = 15, z = 7;
let result = max(x, y, z);
console.log(result);

//이렇게 하면 참조변수를 출력한다는 개념이 된다. 
// 결과도 웃기다. -->  Funtion :  max 이런식으로 뭔지 알려줌
console.log(max);

// max라는 함수를 가르키는 참조변수를 이런식으로 전달도 가능하다.
let xyz = max;

// 기존에 max(x,y,z) 를 아래와 같이 호출할수도 있다.
xyz(x, y, z);

console.log(xyz(x, y, z));


//자바스크립트는 return 이 없으면 void 가 아니라 무조건  undefined를 리턴한다. 즉 무조건 뭔가 리턴한다.
console.log(xyz());

console.log("프로그램 종료됨; ");