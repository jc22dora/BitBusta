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
exports.isGameLive = exports.getTest = exports.gameEnd = exports.gameLive = exports.setGlobalMultiplier = exports.gameStart = exports.initializeGameRoutine = exports.gameRoutine = exports.test = void 0;
const C = require("../Constants/Constants");
const Game_1 = require("../Game/Game");
//import { calculatePulse } from "../GameTimingStore/GameTimingStore";
const Headers = require("../Headers/Headers");
const Messaging_1 = require("../Messaging/Messaging");
const Stats_1 = require("../Stats/Stats");
const GameTimingStore_1 = require("../GameTimingStore/GameTimingStore");
const GameLog_1 = require("../../Services/GameLog");
const dboperations_1 = require("../../Services/dboperations/dboperations");
let START_TIME;
let END_TIME;
let currBankRoll = 121389;
let currBetPool = 12;
let io;
let LiveGame;
let timingStore = new GameTimingStore_1.GameTimingStore();
let GAME_LIVE = null;
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
                            let gameLog = new GameLog_1.GameLog({
                                GameId: 0,
                                StartDate: START_TIME,
                                EndDate: END_TIME,
                                BankRollBalance: currBankRoll,
                                NetBetPool: currBetPool,
                                CrashMultiplier: LiveGame.multiplier
                            });
                            (0, dboperations_1.insertGameLog)(gameLog);
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
        let GAME_LIVE = false;
        io = socket;
        (0, Messaging_1.sendMessageToClient)(io, Headers.GAME, Headers.GAME_INITITIALIZED, new Messaging_1.Message('initializing'));
        LiveGame = new Stats_1.LiveGameStats();
        return (0, Game_1.delay)(C.GAME_END_DELAY).then(() => {
        });
    });
}
exports.initializeGameRoutine = initializeGameRoutine;
function gameStart() {
    return __awaiter(this, void 0, void 0, function* () {
        setStartAndGameTime();
        var countdown = 6;
        while (countdown > 0) {
            (0, Messaging_1.sendMessageToClient)(io, Headers.GAME, Headers.GAME_STARTING, (0, Messaging_1.createMessage)(`COUNTDOWN ${countdown}`));
            yield (0, Game_1.delay)(500).then(() => {
            });
            countdown--;
        }
        return (0, Game_1.delay)(500).then(() => {
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
        // sendMessageToClient(io, Headers.GAME, Headers.GAME_LIVE, new Message('live'));
        // return delay(LiveGame.gameDuration*1000).then( () => {
        // });
        let GAME_LIVE = true;
        var currentMultiplier = 1.00;
        while (currentMultiplier < LiveGame.multiplier) {
            currentMultiplier += .01;
            yield (0, Game_1.delay)(calculateDelayAndSend(Headers.NEW_MULTIPLIER_HEADER, GameTimingStore_1.GameTimingStore.checkAndTrim(currentMultiplier, C.MULTIPLIER_DECIMALS))).then(() => {
            });
        }
    });
}
exports.gameLive = gameLive;
function gameEnd() {
    return __awaiter(this, void 0, void 0, function* () {
        END_TIME = new Date();
        (0, Messaging_1.sendMessageToClient)(io, Headers.GAME_HEADER, Headers.GAME_ENDING, (0, Messaging_1.createMessage)(`crashed @ ${LiveGame.multiplier}`));
        return (0, Game_1.delay)(C.GAME_END_DELAY);
    });
}
exports.gameEnd = gameEnd;
function getTest() {
    return exports.test;
}
exports.getTest = getTest;
function setStartAndGameTime() {
    START_TIME = new Date();
}
function calculateDelayAndSend(header, multiplier) {
    (0, Messaging_1.sendMessageToClient)(io, Headers.GAME_HEADER, header, (0, Messaging_1.createMessage)(multiplier));
    return 10000 * timingStore.getPulse(multiplier);
}
function isGameLive() {
    return GAME_LIVE;
}
exports.isGameLive = isGameLive;
//# sourceMappingURL=GameRun.js.map