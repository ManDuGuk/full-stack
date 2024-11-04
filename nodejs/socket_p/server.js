import express from "express";
import { createServer } from "node:http"

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { Server } from "socket.io";

import mongoose from "mongoose";
import ChatMessage from "./chatModel.js";


const app = express();
const server = createServer(app);
const io = new Server(server);

mongoose.connect("mongodb://localhost:27017/chatDB", {});


const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
    // res.send(`<h1>hello world</h1>`);
    res.sendFile(join(__dirname, 'index.html'))
});

app.get('/room01', (req, res) => {
    res.sendFile(join(__dirname, 'room01.html'))
})

app.get('/room02', (req, res) => {
    res.sendFile(join(__dirname, 'room02.html'))
})

//전체방
io.on('connection', (socket) => {
    console.log("유저 연결됨");
    socket.on("disconnect", () => {
        console.log("유저 연결해제됨");
    })

    socket.on("joinRoom", async (roomID) => {
        socket.join(roomID)
        console.log(`${roomID}에 입장`);

        //이전 채팅 메세지 전송
        const messages = await ChatMessage.find({ roomID }).sort({ timestamp: 1 });
        socket.emit("previousMessage", messages);
    })

    socket.on("sendMessage", async ({ roomID, username, message }) => {
        const chatMessage = new ChatMessage({ roomID, username, message });
        await chatMessage.save(); // 메세지 저장

        io.to(roomID).emit("newMessage", chatMessage);
    })

    // 메세지 처리, 사용자 이름을 보낸는 기능 추가함
    // chat message라는 이름으로 된 메세지를 받아서 
    // 다시 클라에게 동일 이름으로 emit 해줌
    // socket.on("chat message", (msg) => {
    //     console.log("message: " + msg);

    //     // 보낸 사람을 포함한 모든 사람에게 메세지를 보냄 //파라미터를 두개보냄
    //     io.emit("chat message", socket.username, msg);
    // })

    // 사용자 이름 처리
    socket.on("set username", (username) => {
        socket.username = username;
    })
})

// room01 네임스페이스
const room01Namespace = io.of('/room01');
room01Namespace.on('connection', (socket) => {
    console.log("룸01 연결됨");

    socket.on("disconnect", () => {
        console.log("유저 연결해제됨");
    })

    socket.on("chat message", (msg) => {
        room01Namespace.emit("chat message", socket.username, msg);
    })

    // 사용자 이름 처리
    socket.on("set username", (username) => {
        socket.username = username;
    })

})

// room02 네임스페이스
const room02Namespace = io.of('/room02');
room02Namespace.on('connection', (socket) => {
    console.log("룸02 연결됨");

    socket.on("disconnect", () => {
        console.log("유저 연결해제됨");
    })

    socket.on("chat message", (msg) => {
        room02Namespace.emit("chat message", socket.username, msg);
    })

    // 사용자 이름 처리
    socket.on("set username", (username) => {
        socket.username = username;
    })

})


server.listen(3000, () => {
    console.log("서버 시작됨: http://localhost:3000");

})