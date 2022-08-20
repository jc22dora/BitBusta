import { nodeModuleNameResolver } from "typescript";
import { GAME_DURATION_C, GAME_DURATION_K } from "../Constants/Constants";

export type LiveGameMultiplier = number;
export type LiveGameDuration = number;

export class LiveGameStats {
    multiplier: LiveGameMultiplier;
    gameDuration: LiveGameDuration;
    constructor(multiplier?:LiveGameMultiplier, gameDuration?:LiveGameDuration) {
        this.multiplier = multiplier??this.calculateRandomMultiplier();
        this.gameDuration = gameDuration??this.calculateGameDuration(); // seconds
    }

    calculateGameDuration() {
        return Math.log(this.multiplier)
    }
    static calculateGameDuration(multiplier: LiveGameMultiplier) {
        return Math.log(multiplier)
    }

    static calculatePulse(multiplier: LiveGameMultiplier) {
        return Number((Math.log(multiplier)-Math.log(multiplier-.01)).toFixed(5));
    }
    
    private calculateRandomMultiplier() {
        // random number between 0-1
        // ((rand)^-1-.04 // this our randomly distrbutied multiplier
        return Number((Math.random()**-1 - 0.03).toFixed(2)); // NOTE: this causes a 4% difference in mean
        //return (Math.random()**-1 - 0.04);
    }
}


export function getRandomMultiplier() {
    // random number between 0-1
    // ((rand)^-1-.04 // this our randomly distrbutied multiplier
    return Number((Math.random()**-1 - 0.04).toFixed(2)); // NOTE: this causes a 4% difference in mean
    //return (Math.random()**-1 - 0.04);
}

// export function getGameDuration(LiveGame: LiveGameStats) {
//     return GAME_DURATION_C*Math.log(GAME_DURATION_K*LiveGame.multiplier+1)
// }
