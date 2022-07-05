"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("../utils/Game/Game");
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
});
