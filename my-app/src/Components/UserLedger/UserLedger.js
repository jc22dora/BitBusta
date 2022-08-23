"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserLedger = () => {
    return react_1.default.createElement("div", { className: "UserLedger" },
        react_1.default.createElement("div", { className: "user-ledger-table-container" },
            react_1.default.createElement("table", { className: "user-ledger-table" },
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", { id: "even-col", className: "user-col" }, "User"),
                        react_1.default.createElement("th", { id: "odd-col" }, "@"),
                        react_1.default.createElement("th", { id: "even-col" }, "Bet"),
                        react_1.default.createElement("th", { id: "odd-col" }, "Profit"))),
                react_1.default.createElement("tbody", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", null, "User"),
                        react_1.default.createElement("td", null, "@"),
                        react_1.default.createElement("td", null, "Bet"),
                        react_1.default.createElement("td", null, "Profit"))))));
};
exports.default = UserLedger;
//# sourceMappingURL=UserLedger.js.map