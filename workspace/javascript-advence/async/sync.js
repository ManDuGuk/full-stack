console.log("[start]");

const someTask = function () {
    let delayTime = Date.now() + 3000;
    while (Date.now() < delayTime) {

    }
    console.log("네트워크 통신 완료");
}

someTask();


console.log("[end]");
