import { Header, SubHeader } from "../../Types/Messaging";
export declare const GAME_HEADER = "GAME_HEADER";
export declare const GAME_INITITIALIZED_HEADER = "INITIALIZED";
export declare const GAME_STARTING_HEADER = "GAME_STARTING";
export declare type GAME_STARTING_RESPONSE = {
    message: string;
};
export declare const NEW_MULTIPLIER_HEADER = "NEW_MULTIPLIER";
export declare const GAME_ENDING_HEADER = "GAME_ENDING";
export declare const GAME: Header;
export declare const GAME_INITITIALIZED: SubHeader;
export declare const GAME_STARTING: SubHeader;
export declare const GAME_LIVE: SubHeader;
export declare const NEW_MULTIPLIER: SubHeader;
export declare const GAME_ENDING: SubHeader;
export declare const NEW_BET = "BET";
export declare const BET_RESPONSE = "BET_RESPONSE";
