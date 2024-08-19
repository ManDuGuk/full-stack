const printLetter = function () {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        throw new Error("네트워크 장애");

        setTimeout(() => {
            console.log("C");

            setTimeout(() => {
                console.log("D");
            }, 1000)
        }, 2000)
    }, 3000)


}

printLetter();