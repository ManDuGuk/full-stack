const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const { Socket } = require('dgram');

app.set('port', 3000);
app.use(cors());

//__dirname이 현재 경로를 말함으로 public 경로는 상대경로를 잘 설정해줄것
app.use(express.static(path.join(__dirname, "public")))

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log("서버실행중");
});

//socketio와 server가 같은 포트를 사용
// const io = socketio(server);
// console.dir(io);
// console.log(io);

// app.get('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


const io = socketio(server, {
    cors: {
        methods: ['GET', "POST"]
    }
})

io.on('connection', (socket) => {
    console.log("클라이언트가 접속함");
    // console.dir(socket);
    // console.log(socket.client.nsps);
    socket.emit("message", '한곳에 보낸 메세지:서버에요');
    io.sockets.emit("message", '전체 메세지: 하잉 서버에요');

    //1대1 통신 socket.on()
    //io.sockets.emit() 모든 접속 소켓에 전달
    socket.on('message', (msg) => {
        console.log('클라이언트에서 보낸 메세지 확인-->', msg);
    })
})
