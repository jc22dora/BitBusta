import { GameBet } from "../Interfaces/GameBet/GameBet";
import { NEW_BET } from "../Interfaces/GamingHeaders";

export async function postBet(wager:number) {
    let bet:GameBet = {
        GameId: 1,
        UserId: 1,
        UserBetTime: new Date(),
        UserBetPullTime: new Date(),
        UserBet: 21,
        UserBetPayout: wager
    }
    return fetch(`http://localhost:8089/api/bets`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bet),
  })
    .then((response) => {
        console.log(response);
      return response.json();
    })
    .catch((err) => {
      return { status: 'fail', message: 'API CALL ERROR', error: err.message };
    });
}

export function sendBet(socket:any, wager:number) {
  let bet:GameBet = {
    GameId: 1,
    UserId: 1,
    UserBetTime: new Date(),
    UserBetPullTime: new Date(),
    UserBet: 21,
    UserBetPayout: wager
  }
  socket.emit(NEW_BET, bet, (response: any) => {
    console.log(response); // "got it"
  });
}