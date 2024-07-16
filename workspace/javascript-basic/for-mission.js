
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

console.log(" 구구단 과제----------------")

//구구단 과제

//열반복
for (let i = 1; i <= 9; i++) {
    //행반복
    for (let j = 2; j <= 9; j++) {
        process.stdout.write(j + "*" + i + "=" + i * j + "  ");
    }
    console.log();
}

console.log(" 별모양01----------------")

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


console.log(" 별모양02----------------")

//별모양02
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

        if (j - i >= 0) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ")
        }

    }

    console.log();
}

