import * as MSGT from '../../Types/Messaging';
export async function sendMessageToClient(io: any, header: MSGT.Header, subheader:MSGT.SubHeader, message:Message) {
    const send = {
        header: header,
        payload: {
            subheader: subheader,
            message:  message.message,
        },
    }
    io.emit(send.header, send.payload);
}

export function createMessage(obj: any) {
    obj.toString();
    return new Message(obj)
}

export class Message {
    message: MSGT.Message;
    constructor(text: string) {
        this.message = text;
    }

}