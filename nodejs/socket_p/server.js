import express from "express";
import { createServer } from "node:http"

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);


const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
    // res.send(`<h1>hello world</h1>`);
    res.sendFile(join(__dirname, 'index.html'))
});

io.on('connection', (socket) => {
    console.log("유저 연결됨");
    socket.on("disconnect", () => {
        console.log("유저 연결해제됨");
    })

    // 메세지 처리
    // chat message라는 이름으로 된 메세지를 받아서 
    // 다시 클라에게 동일 이름으로 emit 해줌
    socket.on("chat message", (msg) => {
        console.log("message: " + msg);

        // 보낸 사라믈 포함한 모든 사람에게 메세지를 보냄
        io.emit("chat message", msg);
    })
})



server.listen(3000, () => {
    console.log("서버 시작됨");

})