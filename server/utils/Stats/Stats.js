"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameDuration = exports.getRandomMultiplier = exports.LiveGameStats = void 0;
const Constants_1 = require("../Constants/Constants");
class LiveGameStats {
    constructor() {
        this.multiplier = getRandomMultiplier();
        this.gameDuration = getGameDuration(this); // seconds
    }
}
exports.LiveGameStats = LiveGameStats;
function getRandomMultiplier() {
    // random number between 0-1
    // ((rand)^-1-.04 // this our randomly distrbutied multiplier
    return parseInt((Math.pow(Math.random(), -1) - 0.04).toFixed(2)); // NOTE: this causes a 4% difference in mean
    //return (Math.random()**-1 - 0.04);
}
exports.getRandomMultiplier = getRandomMultiplier;
function getGameDuration(LiveGame) {
    return Constants_1.GAME_DURATION_C * Math.log(Constants_1.GAME_DURATION_K * LiveGame.multiplier + 1);
}
exports.getGameDuration = getGameDuration;
//# sourceMappingURL=Stats.js.map