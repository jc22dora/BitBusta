import  {addToGameDurationStore, calculateGameDuration, calculatePulse, GameDuration, GameMultiplier, GameTimes, getGameDurationStore, TimePulse, } from '../utils/Game/Game';

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
})