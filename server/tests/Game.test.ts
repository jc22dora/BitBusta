import  {addToGameDurationStore, calculateGameDuration, calculatePulse, GameDuration, GameMultiplier, GameTimes, getGameDurationStore, getRandomMultiplier, TimePulse, } from '../utils/Game/Game';

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
})