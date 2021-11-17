import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { ClassState, UserID, Content, ChatMessageState, DeviceID, ActivityStreamID, DeviceState, Trophy, UserRole, Timestamp } from '../models';
import { ValueOf } from '../types';
declare type Reducer<P = void, T extends string = string> = CaseReducer<ClassState, PayloadAction<P, T>>;
export declare const INITIAL_ROOM_STATE: ClassState;
export declare const classSliceActionPrefix = "class";
export declare const classSlice: import("@reduxjs/toolkit").Slice<ClassState, {
    join: Reducer<{
        state: ClassState;
        deviceId: DeviceID;
    }, string>;
    endClass: Reducer<{
        timestamp: Timestamp;
    }, string>;
    deviceConnect: Reducer<{
        name: string;
        device: DeviceState;
        role: UserRole;
    }, string>;
    deviceDisconnect: Reducer<{
        deviceId: DeviceID;
    }, string>;
    setHost: Reducer<DeviceID, string>;
    setContent: Reducer<Content, string>;
    addChatMessage: Reducer<ChatMessageState, string>;
    setActivityStreamId: Reducer<{
        deviceId: DeviceID;
        activityStreamId?: ActivityStreamID | undefined;
    }, string>;
    rewardTrophyToUser: Reducer<{
        userId: UserID;
        trophy: Trophy;
    }, string>;
    rewardTrophyToAll: Reducer<{
        trophy: Trophy;
    }, string>;
}, "class">;
export declare const classReducer: import("redux").Reducer<ClassState, import("redux").AnyAction>;
export declare const classActions: import("@reduxjs/toolkit").CaseReducerActions<{
    join: Reducer<{
        state: ClassState;
        deviceId: DeviceID;
    }, string>;
    endClass: Reducer<{
        timestamp: Timestamp;
    }, string>;
    deviceConnect: Reducer<{
        name: string;
        device: DeviceState;
        role: UserRole;
    }, string>;
    deviceDisconnect: Reducer<{
        deviceId: DeviceID;
    }, string>;
    setHost: Reducer<DeviceID, string>;
    setContent: Reducer<Content, string>;
    addChatMessage: Reducer<ChatMessageState, string>;
    setActivityStreamId: Reducer<{
        deviceId: DeviceID;
        activityStreamId?: ActivityStreamID | undefined;
    }, string>;
    rewardTrophyToUser: Reducer<{
        userId: UserID;
        trophy: Trophy;
    }, string>;
    rewardTrophyToAll: Reducer<{
        trophy: Trophy;
    }, string>;
}>;
export declare type ClassActionType = keyof typeof classActions;
export declare type ClassAction = ReturnType<ValueOf<typeof classActions>>;
export declare type ClassActionTypeToPayload = {
    [K in keyof typeof classActions]: ReturnType<typeof classActions[K]>["payload"];
};
export {};
//# sourceMappingURL=class.d.ts.map