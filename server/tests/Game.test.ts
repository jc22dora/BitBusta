import  {addToGameDurationStore, calculateGameDuration, calculatePulse, GameDuration, GameMultiplier, gameRoutine, GameTimes, getGameDurationStore, getRandomMultiplier, TimePulse, } from '../utils/Game/Game';
import io from 'socket.io-client';
import { GAME_ENDING_HEADER, GAME_HEADER, GAME_INITITIALIZED_HEADER, GAME_STARTING_HEADER, NEW_MULTIPLIER_HEADER } from '../utils/Headers/Headers';
describe("test calculatePulse", () => {
    const testMulti:  GameMultiplier = {
        multiplier: 1.01,
    }
    const testDuration: GameDuration = {
        gameDuration: 1.67,
    }
    const testPulse: TimePulse = {
        timePulse: 164,
    }
    const testTimes: GameTimes = {
        gameDuration:testDuration,
        timePulse:testPulse,
    }
    

     calculatePulse(testMulti);

     calculateGameDuration(testMulti);
    it('addToGameDurationStore', () => {
        addToGameDurationStore(testMulti, testTimes);
        addToGameDurationStore(testMulti, testTimes);
        expect(getGameDurationStore().size).toBe(1);
        const testMultiTwo = {...testMulti};
        const testTimesTwo: GameTimes = testTimes;
        testMultiTwo.multiplier = 1.02;
        addToGameDurationStore(testMultiTwo, testTimesTwo);
        expect(getGameDurationStore().size).toBe(2);
    })
    it('Increment multiplier procedure', () => {
        
    })
    it('test distribution for getRandomMultiplier', () => {
        let multiArray = [];
        const n_samples = 10000;
        let sum = 0;
        for(let i=0; i<n_samples;i++) {
            multiArray[i] = getRandomMultiplier();
            sum += multiArray[i];
        }
        const mean = sum/n_samples;
        let greaterThanFive = 0;
        for(let i=0; i<n_samples;i++) {
            if(multiArray[i]> 5) {
                greaterThanFive += 1;
            }
        }
        console.log((greaterThanFive/n_samples)*100)
        console.log(mean);
        expect((greaterThanFive/n_samples)*100).toBeLessThan(20);
    })

    it('test game routine', () => {
        const socket = io("http://localhost:8079");
        gameRoutine(socket);
        let multiplierMessage = false;
        let gameEndingMessage = false;
        let gameInitializedMessage = false;
        let gameStartingMessage = false;
        let ms = 0;
        let MS = 10000;
        while( ms < MS) {
            socket.on(GAME_HEADER, (data) => {
                if(data.subheader === NEW_MULTIPLIER_HEADER) {
                    multiplierMessage = true;
                }
                if(data.subheader === GAME_ENDING_HEADER) {
                    gameEndingMessage = true;
                }
                if(data.subheader === GAME_INITITIALIZED_HEADER) {
                    gameInitializedMessage = true;
                }
                if(data.subheader === GAME_STARTING_HEADER) {
                    gameStartingMessage = true;
                }
            })
            ms++;
        }
        expect(multiplierMessage).toBe(true);
        expect(gameEndingMessage).toBe(true);
        expect(gameInitializedMessage).toBe(true);
        expect(gameStartingMessage).toBe(true);
    })
})