const execute = require("child_process").exec;
const spawn = require("child_process").spawn;
// const {exec} = require("child_process"); -->  R구조분해 할당으로도 가능

const result = execute("dir");
console.log(result);

// 이벤트 기반의 데이터 처리
result.stdout.on("data", (data) => {
    console.log(data);
});

spawn("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")
