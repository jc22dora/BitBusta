"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const BitBusta_ico_1 = __importDefault(require("../../Assets/BitBusta.ico"));
require("./NavBar.css");
const icon = "fas fa-question-circle";
const Navbar = () => {
    return react_1.default.createElement("div", { className: "Navbar" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", { id: 'nav-logo-container' },
                react_1.default.createElement("img", { id: 'bustabit-logo', src: BitBusta_ico_1.default, alt: "bustabit Logo" }),
                react_1.default.createElement("a", { className: "bitbusta", id: "PlayPage", href: '/' }, "bitbusta")),
            react_1.default.createElement("div", { id: 'nav-center-container' },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("a", { id: "PlayPage", href: '/bankroll/overview' },
                        react_1.default.createElement("i", { className: "fas fa-university" }),
                        "BANKROLL"),
                    react_1.default.createElement("a", { id: "PlayPage", href: '/statistics' },
                        react_1.default.createElement("i", { className: "fas fa-chart-bar" }),
                        "STATS"),
                    react_1.default.createElement("a", { id: "PlayPage", href: '/leaderboard' },
                        react_1.default.createElement("i", { className: "fas fa-trophy" }),
                        "LEADERBOARD"),
                    react_1.default.createElement("a", { id: "PlayPage", href: '/help' },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon }),
                        "HELP"))),
            react_1.default.createElement("div", { id: 'nav-right-container' },
                react_1.default.createElement("a", { id: "PlayPage", href: '/login' }, "LOGIN"),
                react_1.default.createElement("a", { id: "PlayPage", href: '/register' }, "REGISTER"))));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map