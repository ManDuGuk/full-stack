const http = require('http');
const server = http.createServer();//서버 생성

//서버 연결시
server.on('connection', function (socket) {
    console.log("커넥션됨");

    //서버의 ip주소
    const serverIP = socket.address();
    console.log(serverIP); //:: ==> ipv6의 루프백 주소를 나타내는 것으로 로컬호스트를 의미 127.0.0.1을 의미한다.
    console.log("========================================================");


    //클라이언트의 ip주소
    const clientIP = socket.remoteAddress;
    console.log(`${clientIP}님이 ${serverIP}에 접속했어요`);
    console.log("========================================================");

})

//웹서버 종료시 발생
server.on('close', function () {
    console.log("서버 종료됨");

})

//클라이언트가 요청을 보내면 request이벤트 발생
//핸들러 함수에 request/response가 매개변수로 들어온다.
server.on('request', function (req, res) {
    console.log("request on : 클라이언트 요청들어옴");
    //res : 응답과 관련된 객체 ==>브라우저와 연결되있다.
    res.writeHead(200, { "Content-Type": "text/html ;charset=UTF-8" });//헤더에 쓰기
    res.write('<h1>hello node server...</h1>'); //바디에 쓰기
    res.write('<h2>hihi하잉</h2>'); //바디에 쓰기
    res.end() //응답을 모두 보냈다는 의미, end() 호출될때 브라우저에 응답을 전송한다.

})

server.listen(3333, function () {
    console.log("172.30.1.57:3333에서 서버가 시작됨");

})

//3초후에 서버 종료 ==> close이벤트 확인차
// setTimeout(() => {
//     server.close(() => {
//         console.log("서버 셧다운됨");

//     });
// }, 3000)
