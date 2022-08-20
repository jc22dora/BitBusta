export declare type LiveGameMultiplier = number;
export declare type LiveGameDuration = number;
export declare class LiveGameStats {
    multiplier: LiveGameMultiplier;
    gameDuration: LiveGameDuration;
    constructor(multiplier?: LiveGameMultiplier, gameDuration?: LiveGameDuration);
    calculateGameDuration(): number;
    static calculateGameDuration(multiplier: LiveGameMultiplier): number;
    static calculatePulse(multiplier: LiveGameMultiplier): number;
    private calculateRandomMultiplier;
}
export declare function getRandomMultiplier(): number;
