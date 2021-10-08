import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { ClassState, UserID, Content, ChatMessageState, DeviceID, ActivityStreamID, DeviceState, Trophy } from '../../models';
import { ValueOf } from '../../types';
declare type Reducer<T = undefined> = CaseReducer<ClassState, PayloadAction<T>>;
export declare const INITIAL_ROOM_STATE: ClassState;
export declare const classSlice: import("@reduxjs/toolkit").Slice<ClassState, {
    setState: Reducer<ClassState>;
    endClass: Reducer<undefined>;
    deviceConnect: Reducer<{
        name: string;
        device: DeviceState;
    }>;
    deviceDisconnect: Reducer<{
        deviceId: DeviceID;
    }>;
    setHost: Reducer<UserID>;
    setContent: Reducer<Content>;
    addChatMessage: Reducer<ChatMessageState>;
    setActivityStreamId: Reducer<{
        deviceId: DeviceID;
        activityStreamId: ActivityStreamID;
    }>;
    rewardTrophyToUser: Reducer<{
        userId: UserID;
        trophy: Trophy;
    }>;
    rewardTrophyToAll: Reducer<{
        trophy: Trophy;
    }>;
}, "class">;
export declare const classReducer: import("redux").Reducer<ClassState, import("redux").AnyAction>;
export declare const classActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setState: Reducer<ClassState>;
    endClass: Reducer<undefined>;
    deviceConnect: Reducer<{
        name: string;
        device: DeviceState;
    }>;
    deviceDisconnect: Reducer<{
        deviceId: DeviceID;
    }>;
    setHost: Reducer<UserID>;
    setContent: Reducer<Content>;
    addChatMessage: Reducer<ChatMessageState>;
    setActivityStreamId: Reducer<{
        deviceId: DeviceID;
        activityStreamId: ActivityStreamID;
    }>;
    rewardTrophyToUser: Reducer<{
        userId: UserID;
        trophy: Trophy;
    }>;
    rewardTrophyToAll: Reducer<{
        trophy: Trophy;
    }>;
}>;
export declare type ClassAction = ReturnType<ValueOf<typeof classActions>>;
export {};
//# sourceMappingURL=index.d.ts.map