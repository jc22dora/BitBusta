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
exports.calculateDelayAndSendWithStore = exports.addToGameDurationStore = exports.calculatePulse = exports.calculateGameDuration = exports.getGameDurationStore = exports.initializeGame = void 0;
const Headers_1 = require("../Headers/Headers");
const Headers_2 = require("../Headers/Headers");
let START_TIME;
let GAME_TIME;
const TICK_RATE = 150;
const GAME_END_DELAY = 3000;
const GAME_STARTING_DELAY = 5000;
const GAME_DURATION_C = 166.66667;
const GAME_DURATION_K = 0.01;
let io;
let gameDurationStore = new Map();
function initializeGame(socketio) {
    io = socketio;
    sendMessageToClient(Headers_2.GAME_HEADER, Headers_1.GAME_INITITIALIZED_HEADER, Headers_1.GAME_INITITIALIZED_HEADER);
    console.log('sent client message');
    gameStartRoutine();
}
exports.initializeGame = initializeGame;
function gameStartRoutine() {
    return __awaiter(this, void 0, void 0, function* () {
        setStartAndGameTime();
        let tempDate = Date.now();
        while (tempDate - START_TIME < GAME_STARTING_DELAY) {
            if (tempDate - GAME_TIME > TICK_RATE) {
                sendMessageToClient(Headers_2.GAME_HEADER, Headers_2.GAME_STARTING_HEADER, `COUNTDOWN ${tempDate}`);
                GAME_TIME = tempDate;
            }
            tempDate = Date.now();
        }
        liveMultiplierNumber(generateMultiplier(Math.random()));
    });
}
function setStartAndGameTime() {
    START_TIME = Date.now();
    GAME_TIME = START_TIME;
}
function sendMessageToClient(header, subheader, message) {
    const send = {
        header: header,
        payload: {
            subheader: subheader,
            message: message,
        },
    };
    io.emit(send.header, send.payload);
}
function liveMultiplierNumber(randomMultiplier) {
    return __awaiter(this, void 0, void 0, function* () {
        setStartAndGameTime();
        let currentMultiplier = 1.00;
        while (currentMultiplier < randomMultiplier) {
            currentMultiplier += .01;
            yield delay(calculateDelayAndSend(Headers_2.NEW_MULTIPLIER_HEADER, currentMultiplier)).then(() => {
            });
        }
        gameEndRoutine(currentMultiplier);
    });
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const generateMultiplier = (x) => {
    return Math.floor((x ** -1) * 100) / 100;
};
function calculateDelayAndSend(header, multiplier) {
    const exponent = multiplier * .2;
    sendMessageToClient(Headers_2.GAME_HEADER, header, multiplier);
    return (1.6 * Math.pow(Math.E, 1 / exponent));
}
function getPulse(multiplier) {
}
function getGameDurationStore() {
    return gameDurationStore;
}
exports.getGameDurationStore = getGameDurationStore;
function calculateGameDuration(multiplierObject) {
    return GAME_DURATION_C * Math.log(GAME_DURATION_K * multiplierObject.multiplier + 1);
}
exports.calculateGameDuration = calculateGameDuration;
function calculatePulse(multiplierObj) {
    const tempObj = Object.assign({}, multiplierObj);
    tempObj.multiplier = multiplierObj.multiplier + .01;
    return (calculateGameDuration(tempObj) - calculateGameDuration(multiplierObj));
}
exports.calculatePulse = calculatePulse;
function addToGameDurationStore(multiplierObject, gameTimes) {
    if (!gameDurationStore.has(multiplierObject)) {
        gameDurationStore.set(multiplierObject, gameTimes);
    }
}
exports.addToGameDurationStore = addToGameDurationStore;
function calculateDelayAndSendWithStore(header, multiplierObject) {
    if (gameDurationStore.has(multiplierObject)) {
        return gameDurationStore.get(multiplierObject);
    }
    else {
        const pulse = calculatePulse(multiplierObject);
        sendMessageToClient(Headers_2.GAME_HEADER, header, multiplierObject.multiplier);
    }
}
exports.calculateDelayAndSendWithStore = calculateDelayAndSendWithStore;
function gameEndRoutine(crashed) {
    return __awaiter(this, void 0, void 0, function* () {
        sendMessageToClient(Headers_2.GAME_HEADER, Headers_2.GAME_ENDING_HEADER, `crashed @ ${crashed}`);
        yield delay(GAME_END_DELAY).then(() => {
            gameStartRoutine();
        });
    });
}
