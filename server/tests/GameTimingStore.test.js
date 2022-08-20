"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameTimingStore_1 = require("../utils/GameTimingStore/GameTimingStore");
const Stats_1 = require("../utils/Stats/Stats");
describe("GameTimingStore", () => {
    it('getPulse', () => {
        var stats = new Stats_1.LiveGameStats(1.01, .00995);
        var store = new GameTimingStore_1.GameTimingStore();
        expect(store.getPulse(stats.multiplier)).toBe(.00995);
    });
    it('checkDecimals', () => {
        expect(GameTimingStore_1.GameTimingStore.checkDecimals(1.001, 3)).toBe(true);
    });
    it('checkAndTrim', () => {
        expect(GameTimingStore_1.GameTimingStore.checkAndTrim(1.001, 3)).toBe(1.001);
        expect(GameTimingStore_1.GameTimingStore.checkAndTrim(1.001111111, 3)).toBe(1.001);
        expect(GameTimingStore_1.GameTimingStore.checkAndTrim(1.01, 3)).toBe(1.01);
    });
});
//# sourceMappingURL=GameTimingStore.test.js.map