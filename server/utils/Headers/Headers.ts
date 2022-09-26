import { Header, SubHeader } from "../../Types/Messaging";

// Header
export const GAME_HEADER = 'GAME_HEADER';
// Initializing
export const GAME_INITITIALIZED_HEADER = 'INITIALIZED';
// Starting
export const GAME_STARTING_HEADER = 'GAME_STARTING';
export type GAME_STARTING_RESPONSE= {
    message: string,
}
// Live
export const NEW_MULTIPLIER_HEADER = 'NEW_MULTIPLIER';
// Ending
export const GAME_ENDING_HEADER = 'GAME_ENDING';

export const GAME: Header = 'GAME_HEADER';
export const GAME_INITITIALIZED: SubHeader = 'INITIALIZED';
export const GAME_STARTING: SubHeader = 'GAME_STARTING';
export const GAME_LIVE: SubHeader = 'LIVE';
export const NEW_MULTIPLIER:  SubHeader = 'NEW_MULTIPLIER';
export const GAME_ENDING: SubHeader = 'GAME_ENDING';

export const NEW_BET = 'BET'
export const BET_RESPONSE = 'BET_RESPONSE'