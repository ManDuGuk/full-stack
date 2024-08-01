//스트림 기반 파일 입력받기
//  { highWaterMark: 16 }를 생략하면 자동으로  { highWaterMark: 64 } 64바이트로 받아진다.
const fs = require("fs");
const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 });

console.log("start");
// 이벤트 방식(비동기)의 입력
const data = [];
readStream.on("data", (chunk) => {
    console.log(chunk);
    console.log(chunk.length);
    data.push(chunk);
});

readStream.on("end", () => {
    const buffer = Buffer.concat(data);
    console.log(buffer.toString());
})

readStream.on("error", (e) => {
    console.log(e.message);
})

console.log("end");