"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stats_1 = require("../utils/Stats/Stats");
describe("", () => {
    it('test distribution for getRandomMultiplier', () => {
        const sampleSize = 1000;
        let sum = 0;
        let greaterThanFive = 0;
        let lessThanOne = 0;
        let countMap = new Map();
        for (let i = 0; i < sampleSize; i++) {
            let LiveGame = new Stats_1.LiveGameStats();
            sum += LiveGame.multiplier;
            const stripped = LiveGame.multiplier.toString().split(".")[0];
            if (countMap.has(stripped)) {
                countMap.set(stripped, countMap.get(stripped) + 1);
            }
            else {
                countMap.set(stripped, 1);
            }
            if (LiveGame.multiplier < 1) {
                lessThanOne++;
            }
            if (LiveGame.multiplier > 5) {
                greaterThanFive++;
            }
        }
        countMap.forEach((value, key) => {
            console.log(key + ":" + (value / sampleSize).toString());
        });
        const mean = sum / sampleSize;
        console.log((greaterThanFive / sampleSize) * 100);
        console.log(mean);
        console.log(lessThanOne);
        console.log(lessThanOne / sampleSize);
        expect((greaterThanFive / sampleSize) * 100).toBeLessThan(20);
    });
});
//# sourceMappingURL=Stats.test.js.map