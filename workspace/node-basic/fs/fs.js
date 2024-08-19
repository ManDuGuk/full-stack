//fs 모듈을 이용한 파일 읽기
//파일 입출력은 동시성으로 돌아간다. --> 콜스택에서 실행되는게 아니고 멀티쓰레드로 돌아간다.
const fs = require("fs");
fs.readFile("./readme.txt", (error, data) => {
    if (error) throw error;
    //그냥 data만 출력하면 버퍼가 출력되서 , toString으로 디코딩해준다.
    console.log(data.toString());
    //위에 "reatme.txt" 다음에 , 파라미터를 "utf-8" 로 줘서 변환해서 읽어오게 할수 있다.
    // console.log(data); --> 그러면 굳이 toString을 안해도 된다.
});

//pdf도 아래와 같은 방식으로 읽을수 있다.
// fs.readFile("./readme.pdf", (error, data) => {
//     if (error) throw error;
//     //그냥 data만 출력하면 버퍼가 출력되서 , toString으로 디코딩해준다.
//     console.log(data.toString());
//     //위에 "reatme.txt" 다음에 , 파라미터를 "utf-8" 로 줘서 변환해서 읽어오게 할수 있다.
//     // console.log(data); --> 그러면 굳이 toString을 안해도 된다.
// });

//동기로 파일을 읽고자 할때 
const data = fs.readFileSync("./readme.txt")
console.log(data.toJSON());