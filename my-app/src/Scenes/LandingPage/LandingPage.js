"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const BitBusta_ico_1 = __importDefault(require("../../Assets/BitBusta.ico"));
const fd7d83879bdc0258ab637867faf48168_png_1 = __importDefault(require("../../Assets/fd7d83879bdc0258ab637867faf48168.png"));
const af565435543d38f5534cb9c5124531dc_png_1 = __importDefault(require("../../Assets/af565435543d38f5534cb9c5124531dc.png"));
const _2e83c6a30845a277c701d2bca8113147_png_1 = __importDefault(require("../../Assets/2e83c6a30845a277c701d2bca8113147.png"));
require("./LandingPages.css");
const LandingPage = () => {
    return react_1.default.createElement("div", { className: "LandingPage" },
        react_1.default.createElement("h3", { id: 'LandingPageHeader' }, "THE CLONED CRASH GAME"),
        react_1.default.createElement("div", { id: 'bustabit-logo-container' },
            react_1.default.createElement("img", { id: 'bustabit-logo', src: BitBusta_ico_1.default, alt: "bustabit Logo" }),
            react_1.default.createElement("h1", { id: 'bustabit-logo-title' }, "bitbusta")),
        react_1.default.createElement("div", { id: 'button-container' },
            react_1.default.createElement(material_1.Button, { href: "/play", variant: "contained", style: { backgroundColor: "rgb(188, 124, 210" } }, "Play Now")),
        react_1.default.createElement("div", { id: 'landingpage-chips' },
            react_1.default.createElement("div", { id: 'chips-container' },
                react_1.default.createElement("h4", null, "Social & Real Time"),
                react_1.default.createElement("img", { src: fd7d83879bdc0258ab637867faf48168_png_1.default, id: 'chips', alt: "Social and Real Time Game" })),
            react_1.default.createElement("div", { id: 'chips-container' },
                react_1.default.createElement("h4", null, "Provably Fair"),
                react_1.default.createElement("img", { src: af565435543d38f5534cb9c5124531dc_png_1.default, id: 'chips', alt: "Provably Fair" })),
            react_1.default.createElement("div", { id: 'chips-container' },
                react_1.default.createElement("h4", null, "Be the Bankroll"),
                react_1.default.createElement("img", { src: _2e83c6a30845a277c701d2bca8113147_png_1.default, id: 'chips', alt: "Bankroll" }))));
};
exports.default = LandingPage;
//# sourceMappingURL=LandingPage.js.map