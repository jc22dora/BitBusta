"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameTimingStore = void 0;
const Constants_1 = require("../Constants/Constants");
const Stats_1 = require("../Stats/Stats");
class GameTimingStore {
    constructor() {
        this.TimingStore = new Map();
    }
    // getPulse(gameStats: LiveGameStats) {
    //     if(this.TimingStore.has(gameStats.multiplier)) {
    //         return this.TimingStore.get(gameStats.multiplier)?.get("pulse")
    //     } else{
    //         let map = new Map();
    //         map.set("pulse", GameTimingStore.checkAndTrim(LiveGameStats.calculatePulse(gameStats.multiplier), PULSE_DECIMALS));
    //         map.set("gameduration", GameTimingStore.checkAndTrim(gameStats.gameDuration, GAMEDURATION_DECIMALS));
    //         this.TimingStore.set(gameStats.multiplier, map)
    //         return this.TimingStore.get(gameStats.multiplier)?.get("pulse");
    //     }
    // }
    getPulse(multiplier) {
        var _a, _b, _c, _d;
        multiplier = GameTimingStore.checkAndTrim(multiplier, Constants_1.MULTIPLIER_DECIMALS);
        if (this.TimingStore.has(multiplier)) {
            return (_b = (_a = this.TimingStore.get(multiplier)) === null || _a === void 0 ? void 0 : _a.get("pulse")) !== null && _b !== void 0 ? _b : .001;
        }
        else {
            let map = new Map();
            map.set("pulse", GameTimingStore.checkAndTrim(Stats_1.LiveGameStats.calculatePulse(multiplier), Constants_1.PULSE_DECIMALS));
            map.set("gameduration", GameTimingStore.checkAndTrim(Stats_1.LiveGameStats.calculateGameDuration(multiplier), Constants_1.GAMEDURATION_DECIMALS));
            this.TimingStore.set(multiplier, map);
            return (_d = (_c = this.TimingStore.get(multiplier)) === null || _c === void 0 ? void 0 : _c.get("pulse")) !== null && _d !== void 0 ? _d : .001;
        }
    }
    static checkDecimals(somenum, sometarget) {
        var somestr = somenum.toString();
        if (somestr.split(".")[1].length < sometarget) {
            return false;
        }
        ;
        return true;
    }
    static trimDeciamls(num, maxDecimals) {
        return Number(num.toFixed(maxDecimals));
    }
    static checkAndTrim(num, maxDecimals) {
        var somestr = num.toString();
        var split = somestr.split(".");
        if (split.length > 1) {
            if (somestr.split(".")[1].length > maxDecimals) {
                return Number(num.toFixed(maxDecimals));
            }
            ;
        }
        else {
            return Number(split + ".00");
        }
        return num;
    }
}
exports.GameTimingStore = GameTimingStore;
//# sourceMappingURL=GameTimingStore.js.map