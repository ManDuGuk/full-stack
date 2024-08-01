// const fs = require("fs");
const fs = require("fs").promises;

const filePath = "./writeme.txt"
const message = "오늘은 즐거운 목요일";

//콜백기반
// fs.writeFile(filePath, message, (error) => {
//     if (error) {
//         console.log(error.message);
//     }
// })


//프로미스기반
fs.writeFile(filePath, message)
    .then(() => console.log("파일 입력완료"))
    .catch((e) => console.log(e.message));

console.log("파일쓰기 완료");