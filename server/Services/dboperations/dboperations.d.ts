import { GameBet, GameLog } from '../GameLog';
export declare function getGameLog(): Promise<any>;
export declare function insertGameLog(gameLog: GameLog): Promise<"error" | undefined>;
export declare function getNextGameLogId(): Promise<any>;
export declare function insertBet(bet: GameBet): Promise<"error" | undefined>;
export declare function getBet(): Promise<void>;
