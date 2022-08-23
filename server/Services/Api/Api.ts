import { GameBet, GameLog } from "../GameLog";
import { getGameLog, insertBet, insertGameLog } from "../dboperations/dboperations";

import * as express from "express" 
import * as bodyParser from "body-parser"
import * as cors from "cors"

let app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

var port = process.env.PORT || 8089;
app.listen(port);
console.log('listening on port' + port)

router.use((request, response, next) => {
    console.log(request.url);
    next();
})

router.route('/bets').post((request, response) => {
    let bet = new GameBet({
        GameId: 1,
        UserId: 1,
        UserBetTime: new Date(),
        UserBetPullTime: new Date(),
        UserBet: 21,
        UserBetPayout: request.body["UserBetPayout"],
    })
    insertBet(bet).then(result => {
        response.send(JSON.stringify('bet received'));
        response.end();
    })
    
})
router.route('/bets').get((request, response) => {
    response.send('hello')
    console.log('hello')

})
router.route("bets").head((request, response) => {
    response.json('head')
    console.log('head')
})

export function startApi() {

}

// insertGameLog().then(result => {
//     console.log(result);
// })