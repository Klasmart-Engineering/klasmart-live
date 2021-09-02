import { Transport } from "./network";
export declare class LiveClassState {
    private readonly store;
    private transport;
    constructor(store?: import("@reduxjs/toolkit").EnhancedStore<{
        connectionCount: number;
        connectionState: boolean;
        roomId: string;
    }, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
        connectionCount: number;
        connectionState: boolean;
        roomId: string;
    }, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
        connectionCount: number;
        connectionState: boolean;
        roomId: string;
    }, import("redux").AnyAction, undefined>]>, transport?: Transport);
    getStore(): import("@reduxjs/toolkit").EnhancedStore<{
        connectionCount: number;
        connectionState: boolean;
        roomId: string;
    }, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
        connectionCount: number;
        connectionState: boolean;
        roomId: string;
    }, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
        connectionCount: number;
        connectionState: boolean;
        roomId: string;
    }, import("redux").AnyAction, undefined>]>;
    connect(url: string): Promise<boolean>;
}
//# sourceMappingURL=live-class.d.ts.map