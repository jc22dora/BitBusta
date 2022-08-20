
import { GAMEDURATION_DECIMALS, MULTIPLIER_DECIMALS, PULSE_DECIMALS } from "../Constants/Constants";
import { LiveGameMultiplier, LiveGameStats } from "../Stats/Stats";

export class GameTimingStore{
    TimingStore: Map<LiveGameMultiplier, Map<String, number>>;
    constructor() {
        this.TimingStore = new Map()
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
    getPulse(multiplier: LiveGameMultiplier) {
        multiplier = GameTimingStore.checkAndTrim(multiplier, MULTIPLIER_DECIMALS);
        if(this.TimingStore.has(multiplier)) {
            return this.TimingStore.get(multiplier)?.get("pulse") ??  .001;
        } else{
            let map = new Map();
            map.set("pulse", GameTimingStore.checkAndTrim(LiveGameStats.calculatePulse(multiplier), PULSE_DECIMALS));
            map.set("gameduration", GameTimingStore.checkAndTrim(LiveGameStats.calculateGameDuration(multiplier), GAMEDURATION_DECIMALS));
            this.TimingStore.set(multiplier, map)
            return this.TimingStore.get(multiplier)?.get("pulse") ??  .001;
        }
    }

    static checkDecimals(somenum: number, sometarget:number){
        var somestr = somenum.toString();
        if(somestr.split(".")[1].length < sometarget) {
            return false;
        };
        return true;
    }
    
    static trimDeciamls(num: number, maxDecimals:number) {
        return Number(num.toFixed(maxDecimals))
    }

    static checkAndTrim(num: number, maxDecimals:number) {
        var somestr = num.toString();
        var split = somestr.split(".");
        if(split.length > 1) {
            if(somestr.split(".")[1].length > maxDecimals) {
                return Number(num.toFixed(maxDecimals));
            };
        } else {
            return Number(split+".00");
        }
        
        return num;
    }

}

