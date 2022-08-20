import { LiveGameMultiplier } from "../Stats/Stats";
export declare class GameTimingStore {
    TimingStore: Map<LiveGameMultiplier, Map<String, number>>;
    constructor();
    getPulse(multiplier: LiveGameMultiplier): number;
    static checkDecimals(somenum: number, sometarget: number): boolean;
    static trimDeciamls(num: number, maxDecimals: number): number;
    static checkAndTrim(num: number, maxDecimals: number): number;
}
