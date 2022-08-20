import { GameTimingStore } from "../utils/GameTimingStore/GameTimingStore";
import { LiveGameStats } from "../utils/Stats/Stats";

describe("GameTimingStore", () => {
    it('getPulse', () => {
        var stats = new LiveGameStats(1.01, .00995);
        var store = new GameTimingStore();
        expect(store.getPulse(stats.multiplier)).toBe(.00995);
    })  
    it('checkDecimals', () => {
        expect(GameTimingStore.checkDecimals(1.001, 3)).toBe(true);
    }) 
    it('checkAndTrim', () => {
        expect(GameTimingStore.checkAndTrim(1.001, 3)).toBe(1.001);
        expect(GameTimingStore.checkAndTrim(1.001111111, 3)).toBe(1.001);
        expect(GameTimingStore.checkAndTrim(1.01, 3)).toBe(1.01);
        expect(GameTimingStore.checkAndTrim(1, 3)).toBe(1.00);
    }) 
})