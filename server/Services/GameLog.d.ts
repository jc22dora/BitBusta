export interface GameLog {
    GameId: number;
    StartDate: Date;
    EndDate: Date;
    BankRollBalance: number;
    NetBetPool: number;
    CrashMultiplier: number;
}
export declare class GameLog {
    constructor(gameLog: GameLog);
}
export interface GameBet {
    GameId: number;
    UserId: number;
    UserBetTime: Date;
    UserBetPullTime: Date;
    UserBet: number;
    UserBetPayout: number;
}
export declare class GameBet implements GameBet {
    constructor(bet: GameBet);
}
