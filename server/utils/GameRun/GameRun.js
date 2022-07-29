"use strict";
// function gameRoutine(socket: any) {
//     initializeGameRoutine(socket);
//     gameStart();
//     setGlobalMultiplier(getRandomMultiplier());
//     gameLive();
//     gameEnd();ddd
// }
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
exports.getTest = exports.gameEnd = exports.gameLive = exports.setGlobalMultiplier = exports.gameStart = exports.initializeGameRoutine = exports.gameRoutine = exports.test = void 0;
const C = require("../Constants/Constants");
const Game_1 = require("../Game/Game");
const Headers = require("../Headers/Headers");
const Messaging_1 = require("../Messaging/Messaging");
const Stats_1 = require("../Stats/Stats");
let START_TIME;
let GAME_TIME;
let io;
let LiveGame;
function gameRoutine(socket) {
    return __awaiter(this, void 0, void 0, function* () {
        const now = Date.now();
        console.log(Date.now());
        yield initializeGameRoutine(socket).then(() => __awaiter(this, void 0, void 0, function* () {
            console.log(Date.now() - now);
            yield gameStart().then(() => __awaiter(this, void 0, void 0, function* () {
                console.log(Date.now() - now);
                yield setGlobalMultiplier().then(() => __awaiter(this, void 0, void 0, function* () {
                    console.log(Date.now() - now);
                    yield gameLive().then(() => __awaiter(this, void 0, void 0, function* () {
                        console.log(Date.now() - now);
                        yield gameEnd().then(() => {
                            console.log(Date.now() - now);
                        });
                    }));
                }));
            }));
        }));
    });
}
exports.gameRoutine = gameRoutine;
function initializeGameRoutine(socket) {
    return __awaiter(this, void 0, void 0, function* () {
        io = socket;
        // if(await sendMessageToClient(socket, Headers.GAME_HEADER, Headers.GAME_INITITIALIZED_HEADER, null)) {
        //     console.log('SERVER SENT MESSAGE FOR INITIALIZATION');
        // } else {
        //     console.log('MESSAGE NOT SENT');
        // }
        (0, Messaging_1.sendMessageToClient)(io, Headers.GAME, Headers.GAME_INITITIALIZED, new Messaging_1.Message('initializing'));
        //console.log('SERVER SENT MESSAGE FOR INITIALIZATION');
        LiveGame = new Stats_1.LiveGameStats();
        return (0, Game_1.delay)(C.GAME_END_DELAY).then(() => {
        });
    });
}
exports.initializeGameRoutine = initializeGameRoutine;
function gameStart() {
    return __awaiter(this, void 0, void 0, function* () {
        setStartAndGameTime();
        (0, Messaging_1.sendMessageToClient)(io, Headers.GAME, Headers.GAME_STARTING, (0, Messaging_1.createMessage)(`COUNTDOWN ${Date.now()}`));
        // let tempDate = Date.now();
        // while ( tempDate - START_TIME < C.GAME_STARTING_DELAY) {
        //     if (tempDate - GAME_TIME > C.TICK_RATE) {
        //         sendMessageToClient(io, Headers.GAME, Headers.GAME_STARTING, createMessage(`COUNTDOWN ${tempDate}`))
        //         GAME_TIME = tempDate;
        //     }
        //     tempDate = Date.now();
        // }  
        return (0, Game_1.delay)(C.GAME_END_DELAY).then(() => {
        });
    });
}
exports.gameStart = gameStart;
function setGlobalMultiplier() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.setGlobalMultiplier = setGlobalMultiplier;
function gameLive() {
    return __awaiter(this, void 0, void 0, function* () {
        setStartAndGameTime();
        // send multiplier to clients ddsss
        (0, Messaging_1.sendMessageToClient)(io, Headers.GAME, Headers.GAME_LIVE, new Messaging_1.Message('live'));
        // return delay(LiveGame.gameDuration*1000).then( () => {
        // });
        return (0, Game_1.delay)(C.GAME_END_DELAY).then(() => {
        });
    });
}
exports.gameLive = gameLive;
function gameEnd() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, Messaging_1.sendMessageToClient)(io, Headers.GAME_HEADER, Headers.GAME_ENDING, (0, Messaging_1.createMessage)(`crashed @ ${LiveGame.multiplier}`));
        exports.test = true;
        return (0, Game_1.delay)(C.GAME_END_DELAY);
    });
}
exports.gameEnd = gameEnd;
function getTest() {
    return exports.test;
}
exports.getTest = getTest;
function setStartAndGameTime() {
    START_TIME = Date.now();
    GAME_TIME = START_TIME;
}
//# sourceMappingURL=GameRun.js.map