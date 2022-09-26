"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./BitRollChart.css");
const BitRollChart = ({ props }) => {
    const multiplierDecorator = (data) => {
        if (props.multiplier) {
            return `${props.multiplier}x`;
        }
        return props.multiplier;
    };
    return react_1.default.createElement("div", { className: "BitRollChart" },
        react_1.default.createElement("div", { id: 'BitRollChart' },
            react_1.default.createElement("div", { className: "br-vals", id: 'br-multiplier' }, multiplierDecorator(props.multiplier)),
            react_1.default.createElement("div", { className: "br-vals", id: 'br-message' }, props.message)));
};
exports.default = BitRollChart;
//# sourceMappingURL=BitRollChart.js.map