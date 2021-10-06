import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { ClassState as State, UserID, UserState, Content, ChatMessageState, DeviceID, ActivityStreamID, DeviceState, Trophy } from '../../models';
import { ValueOf } from '../../types';
declare type Reducer<T> = CaseReducer<State, PayloadAction<T>>;
export declare const INITIAL_ROOM_STATE: State;
export declare const classSlice: import("@reduxjs/toolkit").Slice<State, {
    setState: Reducer<State>;
    endClass: Reducer<undefined>;
    joinClass: Reducer<{
        user: UserState;
        device: DeviceState;
    }>;
    leaveClass: Reducer<UserID>;
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
export declare const classReducer: import("redux").Reducer<State, import("redux").AnyAction>;
export declare type ClassState = ReturnType<typeof classReducer>;
export declare const classActions: import("@reduxjs/toolkit").CaseReducerActions<{
    setState: Reducer<State>;
    endClass: Reducer<undefined>;
    joinClass: Reducer<{
        user: UserState;
        device: DeviceState;
    }>;
    leaveClass: Reducer<UserID>;
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