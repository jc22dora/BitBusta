"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
require("./BetControls.css");
function BetControls(props) {
    const [bet, setBet] = (0, react_1.useState)(1);
    const [payout, setPayout] = (0, react_1.useState)(1);
    const handleChange = (event) => {
        const onlyNums = event.target.value.replace(/[^0-9]/g, '');
        setBet(onlyNums);
        if (!bet) {
            setPayout(onlyNums);
        }
    };
    const handlePayoutChange = (event) => {
        const onlyNums = event.target.value.replace(/[^0-9]/g, '');
        setPayout(onlyNums);
    };
    const handleSendBet = (bet) => {
        props.sendBet(bet);
        props.setBetAbility(false);
    };
    return react_1.default.createElement("div", { className: "BetControls" },
        react_1.default.createElement("div", { id: 'BetControls' },
            react_1.default.createElement("div", { id: "betinput" },
                react_1.default.createElement(FormControl_1.default, { variant: "filled", style: { width: '100%', borderWidth: '10px' } },
                    react_1.default.createElement(TextField_1.default, { label: "Bet", type: "number", onChange: handleChange }),
                    react_1.default.createElement(InputLabel_1.default, { htmlFor: "component-filled" })),
                react_1.default.createElement(FormControl_1.default, { variant: "filled", style: { width: '100%', borderWidth: '10px' } },
                    react_1.default.createElement(TextField_1.default, { label: "Payout", type: "number", onChange: handlePayoutChange, value: payout }),
                    react_1.default.createElement(InputLabel_1.default, { htmlFor: "component-filled" }))),
            react_1.default.createElement("div", { id: "betbutton" },
                react_1.default.createElement(material_1.Button, { variant: "contained", style: {
                        backgroundColor: props.betAbility ? "rgb(188, 124, 210)" : "rgb(0, 0, 0)",
                        width: '100%', bottom: '0',
                        maxHeight: '50px',
                        minHeight: '50px'
                    }, onClick: (e) => { handleSendBet(bet); } }, props.betButtonMessage))));
}
exports.default = BetControls;
//# sourceMappingURL=BetControls.js.map