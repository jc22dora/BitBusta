const BASE_DELAY = 10;
//const CRASH_POINT = 200;
const CRASH_POINT = Math.random();
const GAME_DURATION = Math.ceil(inverseGrowth(CRASH_POINT));
const TICK_RATE = 150;
const GAME_END_DELAY = 3000;
const GAME_STARTING_DELAY = 5000;
let START_TIME;
let GAME_TIME;
function calculateDelayAndSend(multiplier){
    const exponent = multiplier*.2 //.01 too slow, .9 too fast
    //console.log(decorateMultiplier(Math.pow(Math.E, exponent)));
    //console.log(`${Math.pow(Math.E, exponent)}x`);
    //sendMultiplierToClient(`${Math.pow(Math.E, exponent)}x`)
    sendMessageToClient(multiplier);
    return (1.6*Math.pow(Math.E, 1/exponent));
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function growthFunc(ms) {
    var r = 0.00006;
    return Math.floor(100 * Math.pow(Math.E, r * ms));
}

function inverseGrowth(crash) {
    var c = 16666.666667;
    return c * Math.log(.01* crash);
}

const generateMultiplier = (x) => {
    return Math.floor((x**-1)*100)/100
}

function printMultiplier(multiplier) {
    console.log(`${multiplier}x`);
}

function decorateMultiplier(multiplier) {
    let multiplierString = multiplier.toString();
    const decimalIndex = multiplierString.indexOf('.');
    if (decimalIndex >= 0) {
        multiplierString = multiplierString.substring(0, decimalIndex+3);
    }
    return `${multiplierString}x`
}

function sendMultiplierToClient(multiplier) {
    if (new Date()-GAME_TIME > TICK_RATE ) {
        console.log(multiplier);
    }
}

function sendMessageToClient(header, message) {
    const payload = {
        header: header,
        message: message,
    }
    console.log(`${payload.header}: ${payload.message}`)
}

async function liveMultiplierNumber(randomMultiplier) {
    //START_TIME = new Date();
    //GAME_TIME = START_TIME;
    setStartAndGameTime()
    let currentMultiplier = 1.00;
    while(currentMultiplier < randomMultiplier) {
        currentMultiplier += .01;
        await delay(calculateDelayAndSend(currentMultiplier)).then(() => {

        })
    }
    gameEndRoutine(currentMultiplier);
}

function setStartAndGameTime() {
    START_TIME = new Date();
    GAME_TIME = START_TIME;
}

async function gameEndRoutine(crashed) {
    sendMessageToClient('GAME_ENDING', `crashed @ ${crashed}`);
    await delay(GAME_END_DELAY).then(() => {
        gameStartRoutine()
    })
}

async function gameStartRoutine() {
    sendMessageToClient('GAME_STARTING', 'GAME STARTING');
    setStartAndGameTime();
    let tempDate = Date.now();
    while ( tempDate - START_TIME < GAME_STARTING_DELAY) {
        if (tempDate - GAME_TIME > TICK_RATE) {
            sendMessageToClient('GAME_STARTING', `COUNTDOWN ${tempDate}`)
            GAME_TIME = tempDate;
        }
        tempDate = Date.now();
    }
    //gameInFlight();
    liveMultiplierNumber(generateMultiplier(Math.random()));
}

async function gameInFlight() {
    setStartAndGameTime();
    let currentMultiplier = 1.00;
    let randomMultiplier = generateMultiplier(Math.random());
    while(currentMultiplier < randomMultiplier) {
        currentMultiplier += .01;
        await delay(calculateDelayAndSend(currentMultiplier)).then(() => {

        })
    }
}

export function initializeGame() {
    gameStartRoutine();
}

//const randomVariable = Math.random(); // random num between 0 and 1
//const randomMultiplier =generateMultiplier(randomVariable);
//liveMultiplierNumber(1200);

