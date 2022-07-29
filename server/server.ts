import express = require("express");
const app = express();
import http = require('http');
import { Server } from "socket.io";
import cors = require('cors');
//const initializeGame = require("./utils/Game/Game.js");
import initializeGameRun = require("./utils/GameRun/GameRun.js");
import util = require('node:util');
let CONTINUE = true;
let SERVER_STATUS = false;
let NUM_GAME = 10;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});

export const listenPromise = util.promisify(server.listen.bind(server))
server.listen(8079, () => {
    SERVER_STATUS = true;
    io.emit("test", {message: "test"})
})

server.on('listening', () => {
    console.log('listening')
    initializeGameRun.gameRoutine(io).then(() => {
        initializeGameRun.gameRoutine(io).then(() => {
            initializeGameRun.gameRoutine(io);
        });
    });
    
    
})

io.on("connection", (socket) => {
    console.log(socket.id+' connected');
    socket.on("test", (data) => { 
        console.log(data.content)
    })
    socket.on('listening', (data) => {
        console.log(data.content+'listening')
    })
    socket.emit("test", {message: "test"})
    socket.on('disconnect', () => {
        console.log(socket.id + ' discconected')
    })
}) 

export function getIo() {
    return io;
}

export function getServerStatus() {
    return SERVER_STATUS;
}

export async function startServer() {
    server.listen(8079, () => {
        SERVER_STATUS = true;
        io.emit("test", {message: "test"})
        //initializeGame.gameRoutine(io);
        //initializeGameRun.gameRoutine(io);
    })
}

export async function closeServer() {
    server.close();
}

export function recursiveStart() {
    initializeGameRun.gameRoutine(io).then(() => {
        if(NUM_GAME) {
            --NUM_GAME;
            recursiveStart()
        }
    });
}