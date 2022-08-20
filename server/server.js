"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveStart = exports.closeServer = exports.startServer = exports.getIo = exports.listenPromise = void 0;
const express = require("express");
const app = express();
const http = require("http");
const socket_io_1 = require("socket.io");
const cors = require("cors");
//const initializeGame = require("./utils/Game/Game.js");
const initializeGameRun = require("./utils/GameRun/GameRun.js");
const util = require("node:util");
let CONTINUE = true;
let SERVER_STATUS = false;
let NUM_GAME = 10;
app.use(cors());
const server = http.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});
exports.listenPromise = util.promisify(server.listen.bind(server));
server.listen(8079, () => {
    SERVER_STATUS = true;
    io.emit("test", { message: "test" });
});
server.on('listening', () => {
    console.log('listening');
    initializeGameRun.gameRoutine(io).then(() => {
        initializeGameRun.gameRoutine(io).then(() => {
            initializeGameRun.gameRoutine(io);
        });
    });
});
io.on("connection", (socket) => {
    console.log(socket.id + ' connected');
    socket.on("test", (data) => {
        console.log(data.content);
    });
    socket.on('listening', (data) => {
        console.log(data.content + 'listening');
    });
    socket.emit("test", { message: "test" });
    socket.on('disconnect', () => {
        console.log(socket.id + ' discconected');
    });
});
function getIo() {
    return io;
}
exports.getIo = getIo;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        server.listen(8079, () => {
            SERVER_STATUS = true;
            io.emit("test", { message: "test" });
            //initializeGame.gameRoutine(io);
            //initializeGameRun.gameRoutine(io);
        });
    });
}
exports.startServer = startServer;
function closeServer() {
    return __awaiter(this, void 0, void 0, function* () {
        server.close();
    });
}
exports.closeServer = closeServer;
function recursiveStart() {
    initializeGameRun.gameRoutine(io).then(() => {
        if (NUM_GAME) {
            --NUM_GAME;
            recursiveStart();
        }
    });
}
exports.recursiveStart = recursiveStart;
//# sourceMappingURL=server.js.map