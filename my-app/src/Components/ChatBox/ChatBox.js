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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./ChatBox.css");
const ChatBox = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [message, setMessage] = (0, react_1.useState)('');
    const handleChange = (event, set) => {
        set(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, message);
        setMessage('');
    };
    return react_1.default.createElement("div", { className: "ChatBox" },
        react_1.default.createElement("div", { id: 'ChatBox' }),
        react_1.default.createElement("div", { id: "cbfiller" }),
        react_1.default.createElement("form", { id: "cbform", autoComplete: "off" },
            react_1.default.createElement("input", { type: "text", placeholder: "Name", className: "cbinput", id: "name", value: name, onChange: (e) => handleChange(e, setName) }),
            react_1.default.createElement("input", { type: "text", placeholder: "message", className: "cbinput", id: "message", value: message, onChange: (e) => handleChange(e, setMessage) }),
            react_1.default.createElement("input", { type: "submit", value: "Submit", className: "cbinput", id: "submit", onClick: (e) => handleSubmit(e) })));
};
exports.default = ChatBox;
//# sourceMappingURL=ChatBox.js.map