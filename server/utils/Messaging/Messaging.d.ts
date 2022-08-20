import * as MSGT from '../../Types/Messaging';
export declare function sendMessageToClient(io: any, header: MSGT.Header, subheader: MSGT.SubHeader, message: Message): Promise<void>;
export declare function createMessage(obj: any): Message;
export declare class Message {
    message: MSGT.Message;
    constructor(text: string);
}
