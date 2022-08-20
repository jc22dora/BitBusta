import { Server } from "socket.io";
export declare const listenPromise: () => Promise<unknown>;
export declare function getIo(): Server<import("socket.io/dist/typed-events.js").DefaultEventsMap, import("socket.io/dist/typed-events.js").DefaultEventsMap, import("socket.io/dist/typed-events.js").DefaultEventsMap, any>;
export declare function startServer(): Promise<void>;
export declare function closeServer(): Promise<void>;
export declare function recursiveStart(): void;
