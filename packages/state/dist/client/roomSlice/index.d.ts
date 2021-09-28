import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import pb from 'kidsloop-live-serialization';
import { ValueOf } from '../../types';
declare type Reducer<T> = CaseReducer<pb.IState, PayloadAction<T>>;
export declare const roomSlice: import("@reduxjs/toolkit").Slice<pb.IState, {
    setState: Reducer<pb.IState>;
    addParticipants: Reducer<pb.IAddParticipants>;
    removeParticipants: Reducer<pb.IRemoveParticipants>;
    changeContent: Reducer<pb.IChangeContent>;
    changeHost: Reducer<pb.IChangeHost>;
    appendChatMessage: Reducer<pb.IAppendChatMessage>;
    receiveTrophy: Reducer<pb.IReceiveTrophy>;
    classEnded: Reducer<pb.IClassEnded>;
}, "room">;
export declare const setState: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IState, string>, addParticipants: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IAddParticipants, string>, removeParticipants: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IRemoveParticipants, string>, changeContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IChangeContent, string>, changeHost: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IChangeHost, string>, appendChatMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IAppendChatMessage, string>, receiveTrophy: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IReceiveTrophy, string>, classEnded: import("@reduxjs/toolkit").ActionCreatorWithPayload<pb.IClassEnded, string>;
export declare const Actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setState: Reducer<pb.IState>;
    addParticipants: Reducer<pb.IAddParticipants>;
    removeParticipants: Reducer<pb.IRemoveParticipants>;
    changeContent: Reducer<pb.IChangeContent>;
    changeHost: Reducer<pb.IChangeHost>;
    appendChatMessage: Reducer<pb.IAppendChatMessage>;
    receiveTrophy: Reducer<pb.IReceiveTrophy>;
    classEnded: Reducer<pb.IClassEnded>;
}>;
export declare const roomReducer: import("redux").Reducer<pb.IState, import("redux").AnyAction>;
export declare type RoomState = ReturnType<typeof roomReducer>;
export declare const INITIAL_ROOM_STATE: pb.IState;
export declare type RoomActions = ReturnType<ValueOf<typeof roomSlice.actions>>;
export {};
//# sourceMappingURL=index.d.ts.map