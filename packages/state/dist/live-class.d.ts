import { Transport } from "./network";
export declare class LiveClassState {
    private readonly store;
    private transport;
    constructor(store?: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
        url: URL | undefined;
        connected: boolean;
        room: import("redux").CombinedState<{
            roomId: string | undefined;
            users: Record<number, import("./redux").User>;
            devices: Record<number, import("./redux").Device>;
            chatMessages: import("./redux").ChatMessage[];
            hostId: number | undefined;
            content: import("./redux").Content;
            endTimestamp: number | undefined;
        }>;
    }>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
        url: URL | undefined;
        connected: boolean;
        room: import("redux").CombinedState<{
            roomId: string | undefined;
            users: Record<number, import("./redux").User>;
            devices: Record<number, import("./redux").Device>;
            chatMessages: import("./redux").ChatMessage[];
            hostId: number | undefined;
            content: import("./redux").Content;
            endTimestamp: number | undefined;
        }>;
    }>, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
        url: URL | undefined;
        connected: boolean;
        room: import("redux").CombinedState<{
            roomId: string | undefined;
            users: Record<number, import("./redux").User>;
            devices: Record<number, import("./redux").Device>;
            chatMessages: import("./redux").ChatMessage[];
            hostId: number | undefined;
            content: import("./redux").Content;
            endTimestamp: number | undefined;
        }>;
    }>, import("redux").AnyAction, undefined>]>, transport?: Transport);
    getStore(): import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
        url: URL | undefined;
        connected: boolean;
        room: import("redux").CombinedState<{
            roomId: string | undefined;
            users: Record<number, import("./redux").User>;
            devices: Record<number, import("./redux").Device>;
            chatMessages: import("./redux").ChatMessage[];
            hostId: number | undefined;
            content: import("./redux").Content;
            endTimestamp: number | undefined;
        }>;
    }>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
        url: URL | undefined;
        connected: boolean;
        room: import("redux").CombinedState<{
            roomId: string | undefined;
            users: Record<number, import("./redux").User>;
            devices: Record<number, import("./redux").Device>;
            chatMessages: import("./redux").ChatMessage[];
            hostId: number | undefined;
            content: import("./redux").Content;
            endTimestamp: number | undefined;
        }>;
    }>, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
        url: URL | undefined;
        connected: boolean;
        room: import("redux").CombinedState<{
            roomId: string | undefined;
            users: Record<number, import("./redux").User>;
            devices: Record<number, import("./redux").Device>;
            chatMessages: import("./redux").ChatMessage[];
            hostId: number | undefined;
            content: import("./redux").Content;
            endTimestamp: number | undefined;
        }>;
    }>, import("redux").AnyAction, undefined>]>;
    connect(url: string): Promise<boolean>;
}
//# sourceMappingURL=live-class.d.ts.map