export declare type GameTimes = {
    gameDuration: GameDuration;
    timePulse: TimePulse;
};
export declare type GameMultiplier = {
    multiplier: number;
};
export declare type GameDuration = {
    gameDuration: number;
};
export declare type TimePulse = {
    timePulse: number;
};
export declare function delay(ms: number): Promise<unknown>;
export declare function getGameDurationStore(): Map<GameMultiplier, GameTimes>;
export declare function calculateGameDuration(multiplierObject: GameMultiplier): number;
export declare function calculatePulse(multiplierObj: GameMultiplier): number;
export declare function addToGameDurationStore(multiplierObject: GameMultiplier, gameTimes: GameTimes): void;
export declare function calculateDelayAndSendWithStore(header: string, multiplierObject: GameMultiplier): GameTimes | undefined;
export declare function getRandomMultiplier(): number;
export declare function gameRoutine(socket: any): void;
export declare function gameStart(): Promise<void>;
export declare function gameLive(): Promise<void>;
export declare function gameEnd(): Promise<void>;
export declare function initializeGameRoutine(socketio: any): void;
export declare function gameStartRoutine(): Promise<void>;
export declare function gameEndRoutine(crashed: number): Promise<void>;
