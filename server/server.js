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
const api = require("./services/api/Api");
const Headers_js_1 = require("./utils/Headers/Headers.js");
const node_fetch_1 = require("node-fetch");
let CONTINUE = true;
let SERVER_STATUS = false;
let NUM_GAME = 10;
app.use(cors());
api.startApi();
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
    socket.on('disconnect', () => {
        console.log(socket.id + ' discconected');
    });
    socket.on(Headers_js_1.NEW_BET, (message) => {
        if (initializeGameRun.isGameLive()) {
            io.emit(Headers_js_1.BET_RESPONSE, { status: false, message: 'game live: bet cannot be placed' });
            console.log('game live: bet cannot be placed');
        }
        else {
            return (0, node_fetch_1.default)(`http://localhost:8089/api/bets`, {
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