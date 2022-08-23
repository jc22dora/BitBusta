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
const dbconfig_1 = require("../dbconfig");
const sql = require("mssql/msnodesqlv8");
const GameLog_1 = require("../Services/GameLog");
const dboperations_1 = require("../Services/dboperations/dboperations");
describe("server", () => {
    it('', () => __awaiter(void 0, void 0, void 0, function* () {
        let pool = yield sql.connect(dbconfig_1.config);
        console.log(pool);
        let records = yield pool.request().query('SELECT * FROM GameLog');
        console.log(new GameLog_1.GameLog(records.recordset[0]).BankRollBalance);
    }));
    it('api', () => __awaiter(void 0, void 0, void 0, function* () {
        let pool = yield sql.connect(dbconfig_1.config);
        const ps = new sql.PreparedStatement(pool);
        ps.input('Start', sql.DateTime());
        //await ps.prepare("INSERT INTO GameLogs VALUES (@StartDate, @StartDate, "+12000+", "+10+", "+1+')') // WORKS
        yield ps.prepare("EXEC insertGameLogs @StartDate=@Start, @EndDate=@Start, @BankRollBalance=" + 12000 + ", @NetBetPool=" + 10 + ", @CrashMultiplier=" + 1);
        yield ps.execute({ Start: new Date(), });
    }));
    it('api', () => __awaiter(void 0, void 0, void 0, function* () {
        let pool = yield sql.connect(dbconfig_1.config);
        const ps = new sql.PreparedStatement(pool);
        let record = yield pool.request().query('SELECT * FROM GameLogs WHERE GameId = 1');
        let gameLog = new GameLog_1.GameLog(record.recordset[0]);
        let test = yield (0, dboperations_1.insertGameLog)(gameLog);
    }));
    it('api', () => __awaiter(void 0, void 0, void 0, function* () {
        let bet = new GameLog_1.GameBet({
            GameId: 1,
            UserId: 1,
            UserBetTime: new Date(),
            UserBetPullTime: new Date(),
            UserBet: 21,
            UserBetPayout: 0,
        });
        yield (0, dboperations_1.insertBet)(bet);
    }));
});
//# sourceMappingURL=server.test.js.map