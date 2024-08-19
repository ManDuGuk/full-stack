// const fs = require("fs");
const fs = require("fs").promises;

// 
// const copy = function (src, dest) {

//     const readStream = fs.createReadStream(src);
//     const writeStream = fs.createWriteStream(dest);
//     readStream.pipe(writeStream);
// }

// copy("./readme.txt", "./readme_copy.txt");
// console.log("복사 완료");


//프로미스로반환됨 -->data로 반환되는 자료는 없음
fs.copyFile("./readme.txt", "./readme_copy.txt")
    .then((data) => {
        console.log("복사완료");
        console.log(data);
    })
    .catch(console.log);
