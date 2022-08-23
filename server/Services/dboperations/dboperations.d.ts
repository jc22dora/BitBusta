import * as sql from 'mssql/msnodesqlv8';
import { GameBet, GameLog } from '../GameLog';
export declare function getGameLog(): Promise<sql.IResult<any> | "error">;
export declare function insertGameLog(gameLog: GameLog): Promise<"error" | undefined>;
export declare function getNextGameLogId(): Promise<sql.IResult<any> | "error">;
export declare function insertBet(bet: GameBet): Promise<"error" | undefined>;
export declare function getBet(): Promise<void>;
