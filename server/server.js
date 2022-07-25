const express = require("express");
const app = express();
const http = require('http');
const {Server} = require("socket.io");
const cors = require('cors');
const initializeGame = require("./utils/Game/Game.js");
let CONTINUE = true;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

server.listen(8079, () => {
    console.log('listening')
    io.emit("test", {message: "test"})
    initializeGame.gameRoutine(io);
})

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("test", (data) => { 
        console.log(data.content)
    })
    socket.emit("test", {message: "test"})
}) 
