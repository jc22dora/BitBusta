import express = require("express");
const app = express();
import http = require('http');
import { Server } from "socket.io";
import cors = require('cors');
//const initializeGame = require("./utils/Game/Game.js");
import initializeGameRun = require("./utils/GameRun/GameRun.js");
import util = require('node:util');
import * as api from './services/api/Api'
import { BET_RESPONSE, GAME, NEW_BET } from "./utils/Headers/Headers.js";
import fetch from 'node-fetch'
let CONTINUE = true;
let SERVER_STATUS = false;
let NUM_GAME = 10;

app.use(cors());
api.startApi()
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
    socket.on('disconnect', () => {
        console.log(socket.id + ' discconected')
    })

    socket.on(NEW_BET, (message) => {
        if(initializeGameRun.isGameLive()) {
            io.emit(BET_RESPONSE, {status:false, message:'game live: bet cannot be placed'});
            console.log('game live: bet cannot be placed')
        } else {
            return fetch(`http://localhost:8089/api/bets`, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
            .then((response) => {
            return response.json();
            })
            .catch((err) => {
            return { status: 'fail', message: 'API CALL ERROR', error: err.message };
            });
        }
    })
})

export function getIo() {
    return io;
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
