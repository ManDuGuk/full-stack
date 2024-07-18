
//행반복
for (let i = 0; i < 5; i++) {
    //열반복
    for (let j = 0; j < 5; j++) {
        process.stdout.write('*');
    }
    console.log();
}

//구구단
for (let i = 2; i <= 9; i++) {
    //열반복
    for (let j = 1; j <= 9; j++) {
        process.stdout.write(i + "*" + j + "=" + i * j + "  ");
    }
    console.log();
}

console.log("구구단 과제----------------")

//구구단 과제

//열반복
for (let i = 1; i <= 9; i++) {
    //행반복
    for (let j = 2; j <= 9; j++) {
        process.stdout.write(j + "*" + i + "=" + i * j + "  ");
    }
    console.log();
}

console.log("별모양01----------------")

//별모양01
for (let i = 1; i <= 5; i++) {
    //별을 i갯수만큼 찍고 나머진 공백으로
    //넘기고 나서 두번찍혀야 되는데 

    //일단 첫 for문은 줄넘김을 하는 역할이고

    //여기서 별을 그려주는데
    //결국 5번을 찍을것이고
    for (let j = 1; j <= 5; j++) {

        if (i - j >= 0) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ");
        }

    }

    console.log();
}


console.log("별모양02----------------")

//별모양02

// 카운트를 세주자(별표용)
let count = 5;

// 1차 반복문은 그냥 줄바꿈용
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

        //5번,4번... 순차적으로 * 찍고 나머지는 공백찍게
        if (j <= count) {
            process.stdout.write("*");

        } else {
            process.stdout.write(" ")
        }


    }

    count--;

    console.log();
}


console.log("별모양03----------------")

//별모양03

// 카운트를 세주자(빈공간용)
// 빈공간은 처음에 4개만 찍으면됨
count = 4;

// 1차 반복문은 그냥 줄바꿈용
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

        //5번,4번... 순차적으로 공백 찍고 나머지는 별표찍게
        if (j <= count) {
            process.stdout.write(" ");

        } else {
            process.stdout.write("*")
        }


    }

    count--;

    console.log();
}


console.log("별모양04----------------")

//별모양04

// 카운트를 세주자(별표용)
count = 1;
//숫자 카운트를 세주자(숫자용)
let numCount = 0;

// 1차 반복문은 그냥 줄바꿈용
for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= 5; j++) {

        if (j <= count) {
            //오류내역을 보니까 문자열 아니면 타입배열이나,버퍼여야한다고 한다. 그냥 문자열로 출력해주자
            process.stdout.write(numCount.toString());

            //여기서 numCount를 증가시킨다
            numCount++;

        } else {
            process.stdout.write(" ")
        }


    }

    count++;

    console.log();
}
