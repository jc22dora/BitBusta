
import { Header, SubHeader } from "../../Types/Messaging";
import * as C from "../Constants/Constants";
import { delay } from "../Game/Game";
//import { calculatePulse } from "../GameTimingStore/GameTimingStore";
import * as Headers from "../Headers/Headers";
import { createMessage, Message, sendMessageToClient } from "../Messaging/Messaging";
import { getRandomMultiplier, LiveGameMultiplier, LiveGameStats } from "../Stats/Stats";
import {GameTimingStore} from "../GameTimingStore/GameTimingStore";

let START_TIME: number;
let GAME_TIME: number;
let io: any;
export var test: any;
let LiveGame: LiveGameStats;
let timingStore: GameTimingStore = new GameTimingStore();

export async function gameRoutine(socket: any) {
    const now = Date.now();
    console.log(Date.now());
    await initializeGameRoutine(socket).then(async () => {
        console.log(Date.now()-now);
        await gameStart().then(async() => {
            console.log(Date.now()-now);
            await setGlobalMultiplier().then(async() => {
                console.log(Date.now()-now);
                await gameLive().then(async() => {
                    console.log(Date.now()-now);
                    await gameEnd().then(() => {
                        console.log(Date.now()-now);
                    })
                })
            })
        })
    })
}
export async function initializeGameRoutine(socket: any) {
    io = socket;
    sendMessageToClient(io, Headers.GAME, Headers.GAME_INITITIALIZED, new Message('initializing'))
    LiveGame = new LiveGameStats();
    return delay(C.GAME_END_DELAY).then( () => {
    });
}
export async function gameStart() {
    setStartAndGameTime();
    var countdown = 6;
    while(countdown>0) {
        sendMessageToClient(io, Headers.GAME, Headers.GAME_STARTING, createMessage(`COUNTDOWN ${countdown}`))
        await delay(500).then(() => {
        })
        countdown--;
    }
    
    return delay(500).then( () => {
    });
}
export async function setGlobalMultiplier() {
        
}
export async function gameLive() {
    setStartAndGameTime();
    // send multiplier to clients ddsss
    // sendMessageToClient(io, Headers.GAME, Headers.GAME_LIVE, new Message('live'));
    // return delay(LiveGame.gameDuration*1000).then( () => {
    // });
    var currentMultiplier= 1.00;
    while(currentMultiplier < LiveGame.multiplier) {
        currentMultiplier += .01;
        await delay(calculateDelayAndSend(Headers.NEW_MULTIPLIER_HEADER, GameTimingStore.checkAndTrim(currentMultiplier, C.MULTIPLIER_DECIMALS))).then(() => {

        })
    }
}
export async function gameEnd() {
    
    sendMessageToClient(io, Headers.GAME_HEADER, Headers.GAME_ENDING, createMessage(`crashed @ ${LiveGame.multiplier}`));
    
    test = true;
    return delay(C.GAME_END_DELAY)
}
export function getTest() {
    return test;
}

function setStartAndGameTime() {
    START_TIME = Date.now();
    GAME_TIME = START_TIME;
}

function calculateDelayAndSend(header: SubHeader, multiplier: LiveGameMultiplier) {
    sendMessageToClient(io, Headers.GAME_HEADER, header, createMessage(multiplier));

    return 10000*timingStore.getPulse(multiplier);
}