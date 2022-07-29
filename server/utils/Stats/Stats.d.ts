declare type LiveGameMultiplier = number;
declare type LiveGameDuration = number;
export declare class LiveGameStats {
    multiplier: LiveGameMultiplier;
    gameDuration: LiveGameDuration;
    constructor();
}
export declare function getRandomMultiplier(): number;
export declare function getGameDuration(LiveGame: LiveGameStats): number;
export {};
