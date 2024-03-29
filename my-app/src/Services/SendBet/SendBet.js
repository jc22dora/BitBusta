"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBet = exports.postBet = void 0;
const GamingHeaders_1 = require("../../Interfaces/GamingHeaders/GamingHeaders");
function postBet(wager) {
    return __awaiter(this, void 0, void 0, function* () {
        let bet = {
            GameId: 1,
            UserId: 1,
            UserBetTime: new Date(),
            UserBetPullTime: new Date(),
            UserBet: 21,
            UserBetPayout: wager
        };
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
    });
}
exports.postBet = postBet;
function sendBet(socket, wager) {
    let bet = {
        GameId: 1,
        UserId: 1,
        UserBetTime: new Date(),
        UserBetPullTime: new Date(),
        UserBet: 21,
        UserBetPayout: wager
    };
    socket.emit(GamingHeaders_1.NEW_BET, bet, (response) => {
        console.log(response); // "got it"
    });
}
exports.sendBet = sendBet;
//# sourceMappingURL=SendBet.js.map