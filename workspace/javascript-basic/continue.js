for (let i = 0; i < 10; i++) {
    console.log(i + "AAAAA");
    console.log(i + "BBBBB");

    if (i === 5) {
        continue;
    }
    console.log(i + "CCCCC");
}