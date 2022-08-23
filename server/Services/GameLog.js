"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBet = exports.GameLog = void 0;
class GameLog {
    // constructor(record: IRecordSet<JSON>) {
    //     this.GameId = record["GameId"];
    //     this.StartDate = record["StartDate"];
    //     this.EndDate = record["EndDate"];
    //     this.BankRollBalance = record["BankRollBalance"];
    //     this.NetBetPool = record["NetBetPool"];
    //     this.CrashMultiplier = record["CrashMultiplier"];
    // }
    constructor(gameLog) {
        this.GameId = gameLog.GameId;
        this.StartDate = gameLog.StartDate;
        this.EndDate = gameLog.EndDate;
        this.BankRollBalance = gameLog.BankRollBalance;
        this.NetBetPool = gameLog.NetBetPool;
        this.CrashMultiplier = gameLog.CrashMultiplier;
    }
}
exports.GameLog = GameLog;
class GameBet {
    constructor(bet) {
        this.GameId = bet.GameId;
        this.UserId = bet.UserId;
        this.UserBetTime = bet.UserBetTime;
        this.UserBetPullTime = bet.UserBetPullTime;
        this.UserBet = bet.UserBet;
        this.UserBetPayout = bet.UserBetPayout;
    }
}
exports.GameBet = GameBet;
//# sourceMappingURL=GameLog.js.map