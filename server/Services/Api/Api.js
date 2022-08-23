"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApi = void 0;
const GameLog_1 = require("../GameLog");
const dboperations_1 = require("../dboperations/dboperations");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
var port = process.env.PORT || 8089;
app.listen(port);
console.log('listening on port' + port);
router.use((request, response, next) => {
    console.log(request.url);
    next();
});
router.route('/bets').post((request, response) => {
    let bet = new GameLog_1.GameBet({
        GameId: 1,
        UserId: 1,
        UserBetTime: new Date(),
        UserBetPullTime: new Date(),
        UserBet: 21,
        UserBetPayout: request.body["UserBetPayout"],
    });
    (0, dboperations_1.insertBet)(bet).then(result => {
        response.send(JSON.stringify('bet received'));
        response.end();
    });
});
router.route('/bets').get((request, response) => {
    response.send('hello');
    console.log('hello');
});
router.route("bets").head((request, response) => {
    response.json('head');
    console.log('head');
});
function startApi() {
}
exports.startApi = startApi;
// insertGameLog().then(result => {
//     console.log(result);
// })
//# sourceMappingURL=Api.js.map