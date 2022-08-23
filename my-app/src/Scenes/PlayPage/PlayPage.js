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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BetControls_1 = __importDefault(require("../../Components/BetControls/BetControls"));
const BitRollChart_1 = __importDefault(require("../../Components/BitRollChart/BitRollChart"));
const ChatBox_1 = __importDefault(require("../../Components/ChatBox/ChatBox"));
const Navbar_1 = __importDefault(require("../../Components/Navbar/Navbar"));
const UserLedger_1 = __importDefault(require("../../Components/UserLedger/UserLedger"));
require("./PlayPage.css");
require("../../Styles/UserLedger.css");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const react_2 = require("react");
const GamingHeaders_js_1 = require("../../Interfaces/GamingHeaders.js");
const SendBet_1 = require("../../Services/SendBet");
const socket = (0, socket_io_client_1.default)("http://localhost:8079");
const PlayPage = () => {
    const [multiplier, setMultiplier] = (0, react_2.useState)(false);
    const [message, setMessage] = (0, react_2.useState)('');
    const sendBet = (bet) => __awaiter(void 0, void 0, void 0, function* () {
        let resp = yield (0, SendBet_1.postBet)(bet);
        console.log(resp);
    });
    // <BetControls props={{sendBet}}></BetControls>
    (0, react_2.useEffect)(() => {
        socket.on(GamingHeaders_js_1.GAME_HEADER, (data) => {
            if (data.subheader === GamingHeaders_js_1.NEW_MULTIPLIER_HEADER) {
                setMessage(''); //setMessage(false)
                setMultiplier(data.message);
            }
            if (data.subheader === GamingHeaders_js_1.GAME_ENDING_HEADER) {
                setMultiplier(false);
                setMessage(data.message);
            }
            if (data.subheader === GamingHeaders_js_1.GAME_INITITIALIZED_HEADER) {
                setMessage(data.message);
            }
            if (data.subheader === GamingHeaders_js_1.GAME_STARTING_HEADER) {
                setMessage(data.message);
            }
        });
    }, [socket]);
    return (react_1.default.createElement("div", { className: "PlayPage" },
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement("div", { id: "grid-container" },
            react_1.default.createElement("div", { id: "left-side" },
                react_1.default.createElement(BitRollChart_1.default, { props: { multiplier, message } }),
                react_1.default.createElement(BetControls_1.default, { sendBet: sendBet }),
                react_1.default.createElement(ChatBox_1.default, null)),
            react_1.default.createElement("div", { id: "right-side" },
                react_1.default.createElement(UserLedger_1.default, null)))));
};
exports.default = PlayPage;
//# sourceMappingURL=PlayPage.js.map