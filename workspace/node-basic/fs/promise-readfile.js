const { rejects } = require("assert");
const { resolve } = require("path");

//promise 활용하여 읽기
const fs = require("fs").promises;

console.log("start");

fs.readFile("./readme.txt")
    .then((data) => {
        console.log(data.toString());
        return fs.readFile("./readme2.txt")
    })
    .then((data2) => {
        console.log(data2.toString());
        return fs.readFile("./readme3.txt")
    })
    .then((data3) => {
        console.log(data3.toString());

    })
    .catch(console.log)

console.log("end");

