"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../utils/Game/Game");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const Headers_1 = require("../utils/Headers/Headers");
describe("test calculatePulse", () => {
    const testMulti = {
        multiplier: 1.01,
    };
    const testDuration = {
        gameDuration: 1.67,
    };
    const testPulse = {
        timePulse: 164,
    };
    const testTimes = {
        gameDuration: testDuration,
        timePulse: testPulse,
    };
    (0, Game_1.calculatePulse)(testMulti);
    (0, Game_1.calculateGameDuration)(testMulti);
    it('addToGameDurationStore', () => {
        (0, Game_1.addToGameDurationStore)(testMulti, testTimes);
        (0, Game_1.addToGameDurationStore)(testMulti, testTimes);
        expect((0, Game_1.getGameDurationStore)().size).toBe(1);
        const testMultiTwo = Object.assign({}, testMulti);
        const testTimesTwo = testTimes;
        testMultiTwo.multiplier = 1.02;
        (0, Game_1.addToGameDurationStore)(testMultiTwo, testTimesTwo);
        expect((0, Game_1.getGameDurationStore)().size).toBe(2);
    });
    it('Increment multiplier procedure', () => {
    });
    it('test distribution for getRandomMultiplier', () => {
        let multiArray = [];
        const n_samples = 10000;
        let sum = 0;
        for (let i = 0; i < n_samples; i++) {
            multiArray[i] = (0, Game_1.getRandomMultiplier)();
            sum += multiArray[i];
        }
        const mean = sum / n_samples;
        let greaterThanFive = 0;
        for (let i = 0; i < n_samples; i++) {
            if (multiArray[i] > 5) {
                greaterThanFive += 1;
            }
        }
        console.log((greaterThanFive / n_samples) * 100);
        console.log(mean);
        expect((greaterThanFive / n_samples) * 100).toBeLessThan(20);
    });
    it('test game routine', () => {
        const socket = (0, socket_io_client_1.default)("http://localhost:8079");
        (0, Game_1.gameRoutine)(socket);
        let multiplierMessage = false;
        let gameEndingMessage = false;
        let gameInitializedMessage = false;
        let gameStartingMessage = false;
        let ms = 0;
        let MS = 10000;
        while (ms < MS) {
            socket.on(Headers_1.GAME_HEADER, (data) => {
                if (data.subheader === Headers_1.NEW_MULTIPLIER_HEADER) {
                    multiplierMessage = true;
                }
                if (data.subheader === Headers_1.GAME_ENDING_HEADER) {
                    gameEndingMessage = true;
                }
                if (data.subheader === Headers_1.GAME_INITITIALIZED_HEADER) {
                    gameInitializedMessage = true;
                }
                if (data.subheader === Headers_1.GAME_STARTING_HEADER) {
                    gameStartingMessage = true;
                }
            });
            ms++;
        }
        expect(multiplierMessage).toBe(true);
        expect(gameEndingMessage).toBe(true);
        expect(gameInitializedMessage).toBe(true);
        expect(gameStartingMessage).toBe(true);
    });
});
