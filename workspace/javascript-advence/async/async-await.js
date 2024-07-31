async function getHello() {
    //...
    return "안녕하세요";
}

// 1번 방식
// const promise = getHello();
// promise.then((message) => { console.log(message); });
// console.log(result);

//2번방식
async function xxx() {
    const message = await getHello();
    console.log(message);
}

xxx();