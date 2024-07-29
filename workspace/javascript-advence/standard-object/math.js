// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.abs(-10));
// console.log(Math.round(50.5));
// console.log(Math.max(50, 3, 45, 200));
// console.log(Math.ceil(50.5));
// console.log(Math.floor(50.5));
// console.log(Math.pow(10, 2));


//로또번호(1~45)
// console.log(Math.random());

const randomLott = function () {
    let randomNums = [];

    for (i = 0; ;) {
        let randoms = Math.trunc((Math.random() * 100));
        if (randoms < 46 && randoms > 0) {
            //중복검사
            if (!randomNums.includes(randoms)) {

                randomNums.push(randoms);
                i++;
            }
        }
        if (i > 6) {
            break;
        }
    }
    return randomNums;
}

const nums = randomLott();
nums.forEach(randomNums => {
    console.log(randomNums);
});

for (i = 0; i < nums.length; i++) {
    setTimeout(() => {
        process.stdout.write(nums[i]);
    }, 1000 * i);
}