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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.createMessage = exports.sendMessageToClient = void 0;
function sendMessageToClient(io, header, subheader, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const send = {
            header: header,
            payload: {
                subheader: subheader,
                message: message.message,
            },
        };
        io.emit(send.header, send.payload);
    });
}
exports.sendMessageToClient = sendMessageToClient;
function createMessage(obj) {
    obj.toString();
    return new Message(obj);
}
exports.createMessage = createMessage;
class Message {
    constructor(text) {
        this.message = text;
    }
}
exports.Message = Message;
//# sourceMappingURL=Messaging.js.map