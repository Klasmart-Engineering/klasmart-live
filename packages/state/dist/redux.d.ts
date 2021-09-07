export interface ActivityStream {
    activityId: string;
    streamId: string;
}
export interface ChatMessage {
    timestamp: number;
    userId: number;
    text: string;
}
export declare enum ContentType {
    Blank = 0,
    WebRTCStream = 1,
    ActivityStream = 2,
    H5P = 3,
    Image = 4,
    Video = 5,
    Audio = 6
}
export interface Content {
    type: ContentType;
    locator?: string;
}
export interface Device {
    userId?: number;
    activityStream?: ActivityStream;
}
export interface User {
    name?: string;
    teacher?: boolean;
}
export interface Update<T> {
    id: number;
    update: Partial<T>;
}
export declare const updateDevice: import("@reduxjs/toolkit").ActionCreatorWithPayload<Update<Device>, "updateDevice">;
export declare const updateUser: import("@reduxjs/toolkit").ActionCreatorWithPayload<Update<User>, "updateUser">;
export declare const addChatMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<ChatMessage, "addChatMessage">;
export declare const setRoomId: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "setRoomId">;
export declare const setHostId: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<number | undefined, "setHostId">;
export declare const setContent: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Content | undefined, "setContent">;
export declare const setEndTimestamp: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "endClass">;
export declare const setUrl: import("@reduxjs/toolkit").ActionCreatorWithPayload<URL, "setUrl">;
export declare const setConnected: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "setConnected">;
export declare const devices: import("redux").Reducer<Record<number, Device>, import("redux").AnyAction>;
export declare const users: import("redux").Reducer<Record<number, User>, import("redux").AnyAction>;
export declare const chatMessages: import("redux").Reducer<ChatMessage[], import("redux").AnyAction>;
export declare const roomId: import("redux").Reducer<string | undefined, import("redux").AnyAction>;
export declare const hostId: import("redux").Reducer<number | undefined, import("redux").AnyAction>;
export declare const content: import("redux").Reducer<Content, import("redux").AnyAction>;
export declare const endTimestamp: import("redux").Reducer<number | undefined, import("redux").AnyAction>;
export declare const room: import("redux").Reducer<import("redux").CombinedState<{
    roomId: string | undefined;
    users: Record<number, User>;
    devices: Record<number, Device>;
    chatMessages: ChatMessage[];
    hostId: number | undefined;
    content: Content;
    endTimestamp: number | undefined;
}>, import("redux").AnyAction>;
export declare const url: import("redux").Reducer<URL | undefined, import("redux").AnyAction>;
export declare const connected: import("redux").Reducer<boolean, import("redux").AnyAction>;
export declare const root: import("redux").Reducer<import("redux").CombinedState<{
    url: URL | undefined;
    connected: boolean;
    room: import("redux").CombinedState<{
        roomId: string | undefined;
        users: Record<number, User>;
        devices: Record<number, Device>;
        chatMessages: ChatMessage[];
        hostId: number | undefined;
        content: Content;
        endTimestamp: number | undefined;
    }>;
}>, import("redux").AnyAction>;
export declare type RootState = ReturnType<typeof root>;
//# sourceMappingURL=redux.d.ts.map