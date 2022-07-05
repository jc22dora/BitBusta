import { GAME_INITITIALIZED_HEADER } from "../Headers/Headers";

import { GAME_HEADER, GAME_ENDING_HEADER, GAME_STARTING_HEADER, NEW_MULTIPLIER_HEADER }from "../Headers/Headers";

let START_TIME: number;
let GAME_TIME: number;
const TICK_RATE = 150;
const GAME_END_DELAY = 3000;
const GAME_STARTING_DELAY = 5000;
const GAME_DURATION_C = 166.66667;
const GAME_DURATION_K = 0.01;
let io: any;
type GameDurationStoreElement = {
    multiplier: GameMultiplier,
    gameDuration: GameDuration,
}
export type GameTimes = {
    gameDuration: GameDuration,
    timePulse: TimePulse,
}
export type GameMultiplier = {
    multiplier: number, //toFixed(2)
}
export type GameDuration = {
    gameDuration: number, //milliseconds
}
export type TimePulse = {
    timePulse: number, //milliseconds
} 
let gameDurationStore = new Map<GameMultiplier, GameTimes>();
export function initializeGame(socketio: any) {
    io = socketio;
    sendMessageToClient(GAME_HEADER, GAME_INITITIALIZED_HEADER, GAME_INITITIALIZED_HEADER);
    console.log('sent client message');
    gameStartRoutine();
} 
async function gameStartRoutine() {
    setStartAndGameTime();
    let tempDate = Date.now();
    while ( tempDate - START_TIME < GAME_STARTING_DELAY) {
        if (tempDate - GAME_TIME > TICK_RATE) {
            sendMessageToClient(GAME_HEADER, GAME_STARTING_HEADER, `COUNTDOWN ${tempDate}`)
            GAME_TIME = tempDate;
        }
        tempDate = Date.now();
    }
    liveMultiplierNumber(generateMultiplier(Math.random()));
}
 
function setStartAndGameTime() {
    START_TIME = Date.now();
    GAME_TIME = START_TIME;
}
function sendMessageToClient(header: string, subheader:any, message:any) {
    const send = {
        header: header,
        payload: {
            subheader: subheader,
            message: message,
        },
    }
    io.emit(send.header, send.payload);
}

async function liveMultiplierNumber(randomMultiplier:number) {
    setStartAndGameTime()
    let currentMultiplier = 1.00;
    while(currentMultiplier < randomMultiplier) {
        currentMultiplier += .01;
        await delay(calculateDelayAndSend(NEW_MULTIPLIER_HEADER, currentMultiplier)).then(() => {

        })
    }
    gameEndRoutine(currentMultiplier);
}
function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const generateMultiplier = (x:number) => {
    return Math.floor((x**-1)*100)/100
}
function calculateDelayAndSend(header:string, multiplier:number){
    const exponent = multiplier*.2;
    sendMessageToClient(GAME_HEADER, header, multiplier);
    return (1.6*Math.pow(Math.E, 1/exponent));
}

function getPulse(multiplier: number) {

}
export function getGameDurationStore() {
    return gameDurationStore;
}
export function calculateGameDuration(multiplierObject: GameMultiplier) {
    return GAME_DURATION_C*Math.log(GAME_DURATION_K*multiplierObject.multiplier+1)
}
export function calculatePulse(multiplierObj: GameMultiplier) {
        const tempObj = {...multiplierObj};
        tempObj.multiplier = multiplierObj.multiplier+.01;
        return (calculateGameDuration(tempObj)-calculateGameDuration(multiplierObj))
}
export function addToGameDurationStore(multiplierObject: GameMultiplier, gameTimes: GameTimes) {
    if(!gameDurationStore.has(multiplierObject)) {
        gameDurationStore.set(multiplierObject, gameTimes)
    }
}
export function calculateDelayAndSendWithStore(header:string, multiplierObject: GameMultiplier) {
    if(gameDurationStore.has(multiplierObject)) {
        return gameDurationStore.get(multiplierObject)
    } else {
        const pulse = calculatePulse(multiplierObject);
        sendMessageToClient(GAME_HEADER, header, multiplierObject.multiplier);
    }
}
async function gameEndRoutine(crashed:number) {
    sendMessageToClient(GAME_HEADER, GAME_ENDING_HEADER, `crashed @ ${crashed}`);
    await delay(GAME_END_DELAY).then(() => {
        gameStartRoutine()
    })
}

export function getRandomMultiplier() {
    // random number between 0-1
    // ((rand)^-1-.04 // this our randomly distrbutied multiplier
    return parseInt((Math.random()**-1 - 0.04).toFixed(2)); // NOTE: this causes a 4% difference in mean
    //return (Math.random()**-1 - 0.04);
}