let x = 10;
switch (x) {
    case 10:
        console.log(10 + "이야");
        break;
    case 9:
        console.log(9 + "이야");
        break;
    case 8:
        console.log(8 + "이야");
        break;
    case 7:
        console.log(7 + "이야");
        break;
    case 6:
        console.log(6 + "이야");
        break;

    default:
        console.log("일치하는 숫자가 없음");
        break;
}


//형변환
let score = 88;
let toInt = parseInt(score / 10);
switch (toInt) {
    case 10:
        console.log("A학점");
        break;
    case 9:
        console.log("B학점");
        break;
    case 8:
        console.log("C학점");
        break;
    case 7:
        console.log("D학점");
        break;

    default:
        console.log("F학점");
        break;
}