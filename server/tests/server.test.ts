
import {config} from '../dbconfig'
import * as sql from 'mssql/msnodesqlv8';
import { GameBet, GameLog} from '../Services/GameLog';
import { DateTime, MSSQLError } from 'mssql/msnodesqlv8';
import { insertBet, insertGameLog } from '../Services/dboperations/dboperations';
describe("server", () => {
    it('', async () => {
        let pool = await sql.connect(config);
        console.log(pool);
        let records = await pool.request().query('SELECT * FROM GameLog');
        console.log(new GameLog(records.recordset[0]).BankRollBalance)
    })  
    it('api', async () => {
        let pool = await sql.connect(config);
        const ps = new sql.PreparedStatement(pool)
        ps.input('Start', sql.DateTime());
        //await ps.prepare("INSERT INTO GameLogs VALUES (@StartDate, @StartDate, "+12000+", "+10+", "+1+')') // WORKS
        await ps.prepare("EXEC insertGameLogs @StartDate=@Start, @EndDate=@Start, @BankRollBalance="+12000+", @NetBetPool="+10+", @CrashMultiplier="+1);
        await ps.execute({Start: new Date(),})
    })

    it('api', async () => {
        let pool = await sql.connect(config);
        const ps = new sql.PreparedStatement(pool)
        let record = await pool.request().query('SELECT * FROM GameLogs WHERE GameId = 1');
        let gameLog = new GameLog(record.recordset[0]);
        let test = await insertGameLog(gameLog);
    })
    it('api', async () => {
        let bet = new GameBet({
            GameId: 1,
            UserId: 1,
            UserBetTime: new Date(),
            UserBetPullTime: new Date(),
            UserBet: 21,
            UserBetPayout: 0,
        })
        await insertBet(bet);

    })
})