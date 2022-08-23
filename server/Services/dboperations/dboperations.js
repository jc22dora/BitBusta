"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBet = exports.insertBet = exports.getNextGameLogId = exports.insertGameLog = exports.getGameLog = void 0;
const dbconfig_1 = require("../../dbconfig");
const sql = require("mssql/msnodesqlv8");
function getGameLog() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pool = yield sql.connect(dbconfig_1.config);
            let gamelogs = yield pool.request().query("SELECT * FROM GameLog");
            return gamelogs;
        }
        catch (error) {
            return 'error';
        }
    });
}
exports.getGameLog = getGameLog;
function insertGameLog(gameLog) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pool = yield sql.connect(dbconfig_1.config);
            const ps = new sql.PreparedStatement(pool);
            ps.input('Start', sql.DateTime());
            ps.input('End', sql.DateTime());
            ps.input('BankRoll', sql.Real);
            ps.input('BetPool', sql.Real);
            ps.input('Multiplier', sql.Real);
            yield ps.prepare("EXEC insertGameLogs @StartDate=@Start, @EndDate=@End, @BankRollBalance=@BankRoll, @NetBetPool=@BetPool, @CrashMultiplier=@Multiplier");
            yield ps.execute({
                Start: gameLog.StartDate,
                End: gameLog.EndDate,
                BankRoll: gameLog.BankRollBalance,
                BetPool: gameLog.NetBetPool,
                Multiplier: gameLog.CrashMultiplier,
            });
        }
        catch (error) {
            return 'error';
        }
    });
}
exports.insertGameLog = insertGameLog;
function getNextGameLogId() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pool = yield sql.connect(dbconfig_1.config);
            let gamelogs = yield pool.request().query("SELECT * FROM GameLog");
            return gamelogs;
        }
        catch (error) {
            return 'error';
        }
    });
}
exports.getNextGameLogId = getNextGameLogId;
// Bets
function insertBet(bet) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let pool = yield sql.connect(dbconfig_1.config);
            const ps = new sql.PreparedStatement(pool);
            ps.input('GId', sql.Int);
            ps.input('UId', sql.Int);
            ps.input('Bet', sql.Real);
            ps.input('BetTime', sql.DateTime());
            ps.input('PullTime', sql.DateTime());
            ps.input('Payout', sql.Real);
            yield ps.prepare("INSERT INTO GameLedger VALUES( @GId, @UId, @Bet, @BetTime, @PullTime, @Payout)"); //@GameId=@GId, @UserId=@UId, @UserBetTime=@BetTime, @UserBetPullTime=@PullTime, @UserBet=@Bet, @UserBetPayout=@Payout)
            yield ps.execute({
                GId: bet.GameId,
                UId: bet.UserId,
                Bet: bet.UserBet,
                BetTime: bet.UserBetTime,
                PullTime: bet.UserBetPullTime,
                Payout: bet.UserBetPayout,
            });
        }
        catch (error) {
            return 'error';
        }
    });
}
exports.insertBet = insertBet;
function getBet() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getBet = getBet;
//# sourceMappingURL=dboperations.js.map