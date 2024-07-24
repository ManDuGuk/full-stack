var globalMessage1 = "전역 메세지1";
let globalMessage2 = "전역 메시지2";

function printMessage() {

    console.log(`printMessage this--> ${this}`);
    let localMessage = "지역메시지"
    console.log(globalMessage1);
    console.log(globalMessage2);
    console.log(localMessage);

    const innerFuntion = function () {
        console.log(`innerFuntion this--> ${this}`);
        let some = "썸";
        console.log(some);
        console.log(localMessage);
    }

    innerFuntion();
}

console.log(globalMessage1);
console.log(globalMessage2);

printMessage();

const user = {
    name: "김기정",
    sayHello: function () {
        console.log(this.name);
    }
}

user.sayHello();