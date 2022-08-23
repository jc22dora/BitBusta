"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
function BetControls(props) {
    const [bet, setBet] = react_1.default.useState(1);
    const [payout, setPayout] = react_1.default.useState(1);
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
                        backgroundColor: "rgb(188, 124, 210",
                        width: '100%', bottom: '0',
                        maxHeight: '50px',
                        minHeight: '50px'
                    }, onClick: (e) => { props.sendBet(bet); } }, "Bet"))));
}
exports.default = BetControls;
//# sourceMappingURL=BetControls.js.map