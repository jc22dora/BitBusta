import {config} from '../../dbconfig'
import * as sql from 'mssql/msnodesqlv8';
import { GameBet, GameLog } from '../GameLog';

export async function getGameLog() {
    try{
        let pool = await sql.connect(config);
        let gamelogs = await pool.request().query("SELECT * FROM GameLog");
        return gamelogs
    } catch(error){
        return 'error'
    }
}

export async function insertGameLog(gameLog: GameLog) {
    try{
        let pool = await sql.connect(config);
        const ps = new sql.PreparedStatement(pool)
        ps.input('Start', sql.DateTime());
        ps.input('End', sql.DateTime());
        ps.input('BankRoll', sql.Real);
        ps.input('BetPool', sql.Real);
        ps.input('Multiplier', sql.Real);
        await ps.prepare("EXEC insertGameLogs @StartDate=@Start, @EndDate=@End, @BankRollBalance=@BankRoll, @NetBetPool=@BetPool, @CrashMultiplier=@Multiplier");
        await ps.execute({
            Start: gameLog.StartDate,
            End: gameLog.EndDate,
            BankRoll: gameLog.BankRollBalance,
            BetPool: gameLog.NetBetPool,
            Multiplier: gameLog.CrashMultiplier,
        })
    } catch(error){
        return 'error'
    }
}

export async function getNextGameLogId() {
    try{
        let pool = await sql.connect(config);
        let gamelogs = await pool.request().query("SELECT * FROM GameLog");
        return gamelogs
    } catch(error){
        return 'error'
    }
}

// Bets

export async function insertBet(bet: GameBet) {
    try{
        let pool = await sql.connect(config);
        const ps = new sql.PreparedStatement(pool)
        ps.input('GId', sql.Int);
        ps.input('UId', sql.Int);
        ps.input('Bet', sql.Real);
        ps.input('BetTime', sql.DateTime());
        ps.input('PullTime', sql.DateTime());
        ps.input('Payout', sql.Real);
        await ps.prepare("INSERT INTO GameLedger VALUES( @GId, @UId, @Bet, @BetTime, @PullTime, @Payout)"); //@GameId=@GId, @UserId=@UId, @UserBetTime=@BetTime, @UserBetPullTime=@PullTime, @UserBet=@Bet, @UserBetPayout=@Payout)
        await ps.execute({
            GId: bet.GameId,
            UId: bet.UserId,
            Bet: bet.UserBet,
            BetTime: bet.UserBetTime,
            PullTime: bet.UserBetPullTime,
            Payout: bet.UserBetPayout,
        })
    } catch(error){
        return 'error'
    }
}

export async function getBet() {

}