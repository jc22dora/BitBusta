import { IRecordSet } from "mssql";

export interface GameLog {
    GameId: number,
    StartDate: Date,
    EndDate: Date,
    BankRollBalance: number,
    NetBetPool: number,
    CrashMultiplier: number,
}

export class GameLog {
    // constructor(record: IRecordSet<JSON>) {
    //     this.GameId = record["GameId"];
    //     this.StartDate = record["StartDate"];
    //     this.EndDate = record["EndDate"];
    //     this.BankRollBalance = record["BankRollBalance"];
    //     this.NetBetPool = record["NetBetPool"];
    //     this.CrashMultiplier = record["CrashMultiplier"];
    // }
    constructor(gameLog: GameLog) {
        this.GameId = gameLog.GameId;
        this.StartDate = gameLog.StartDate;
        this.EndDate = gameLog.EndDate;
        this.BankRollBalance = gameLog.BankRollBalance;
        this.NetBetPool = gameLog.NetBetPool;
        this.CrashMultiplier = gameLog.CrashMultiplier;
    }
}

export interface GameBet {
    GameId: number,
    UserId: number,
    UserBetTime: Date,
    UserBetPullTime: Date,
    UserBet: number,
    UserBetPayout: number,
}

export class GameBet implements GameBet {
    constructor(bet: GameBet) {
        this.GameId = bet.GameId;
        this.UserId = bet.UserId;
        this.UserBetTime = bet.UserBetTime;
        this.UserBetPullTime = bet.UserBetPullTime;
        this.UserBet = bet.UserBet;
        this.UserBetPayout = bet.UserBetPayout;
    }
}
