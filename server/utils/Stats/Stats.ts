import { GAME_DURATION_C, GAME_DURATION_K } from "../Constants/Constants";

type LiveGameMultiplier = number;
type LiveGameDuration = number;

export class LiveGameStats {
    multiplier: LiveGameMultiplier;
    gameDuration: LiveGameDuration;
    constructor() {
        this.multiplier = getRandomMultiplier();
        this.gameDuration = getGameDuration(this); // seconds
    }
}

export function getRandomMultiplier() {
    // random number between 0-1
    // ((rand)^-1-.04 // this our randomly distrbutied multiplier
    return parseInt((Math.random()**-1 - 0.04).toFixed(2)); // NOTE: this causes a 4% difference in mean
    //return (Math.random()**-1 - 0.04);
}

export function getGameDuration(LiveGame: LiveGameStats) {
    return GAME_DURATION_C*Math.log(GAME_DURATION_K*LiveGame.multiplier+1)
}

