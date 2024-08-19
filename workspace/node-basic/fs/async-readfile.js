const { rejects } = require("assert");
const { resolve } = require("path");

//promise 활용하여 읽기
const fs = require("fs").promises;

console.log("start");

(async () => {

    try {

        let data = await fs.readFile("./readme.txt")
        console.log(data.toString());
        data = await fs.readFile("./readme2.txt")
        console.log(data.toString());
        data = await fs.readFile("./readme3.txt")
        console.log(data.toString());
    } catch (e) {
        console.log(e.message);
    }
})();

console.log("end");

