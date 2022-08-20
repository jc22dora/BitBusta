"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomMultiplier = exports.LiveGameStats = void 0;
class LiveGameStats {
    constructor(multiplier, gameDuration) {
        this.multiplier = multiplier !== null && multiplier !== void 0 ? multiplier : this.calculateRandomMultiplier();
        this.gameDuration = gameDuration !== null && gameDuration !== void 0 ? gameDuration : this.calculateGameDuration(); // seconds
    }
    calculateGameDuration() {
        return Math.log(this.multiplier);
    }
    static calculateGameDuration(multiplier) {
        return Math.log(multiplier);
    }
    static calculatePulse(multiplier) {
        return Number((Math.log(multiplier) - Math.log(multiplier - .01)).toFixed(5));
    }
    calculateRandomMultiplier() {
        // random number between 0-1
        // ((rand)^-1-.04 // this our randomly distrbutied multiplier
        return Number((Math.pow(Math.random(), -1) - 0.03).toFixed(2)); // NOTE: this causes a 4% difference in mean
        //return (Math.random()**-1 - 0.04);
    }
}
exports.LiveGameStats = LiveGameStats;
function getRandomMultiplier() {
    // random number between 0-1
    // ((rand)^-1-.04 // this our randomly distrbutied multiplier
    return Number((Math.pow(Math.random(), -1) - 0.04).toFixed(2)); // NOTE: this causes a 4% difference in mean
    //return (Math.random()**-1 - 0.04);
}
exports.getRandomMultiplier = getRandomMultiplier;
// export function getGameDuration(LiveGame: LiveGameStats) {
//     return GAME_DURATION_C*Math.log(GAME_DURATION_K*LiveGame.multiplier+1)
// }
//# sourceMappingURL=Stats.js.map