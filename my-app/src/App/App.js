"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const LandingPage_1 = __importDefault(require("../Scenes/LandingPage/LandingPage"));
const react_router_dom_1 = require("react-router-dom");
const PlayPage_1 = __importDefault(require("../Scenes/PlayPage/PlayPage"));
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(LandingPage_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/Play", element: react_1.default.createElement(PlayPage_1.default, null) })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map