import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import * as pb from '../../protobuf';
import { ContextPayload } from '../../';
declare type Reducer<T> = CaseReducer<pb.IState, PayloadAction<ContextPayload<T>>>;
export declare const roomSlice: import("@reduxjs/toolkit").Slice<pb.IState, {
    userJoin: Reducer<pb.IUserJoin>;
    userLeave: Reducer<pb.IUserLeave>;
    sendChatMessage: Reducer<pb.ISendChatMessage>;
    setHost: Reducer<pb.ISetHost>;
    addTrophy: CaseReducer<pb.IState, {
        payload: ContextPayload<pb.IAddTrophy>;
        type: string;
    }>;
    setDevice: Reducer<pb.ISetDevice>;
    removeDevice: Reducer<pb.IRemoveDevice>;
    setWebRtcStream: Reducer<pb.ISetWebRTCStream>;
    setActivity: Reducer<pb.ISetActivity>;
    setContent: Reducer<pb.ISetContent>;
}, "room">;
export declare const userJoin: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.IUserJoin>, string>, userLeave: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.IUserLeave>, string>, sendChatMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.ISendChatMessage>, string>, setHost: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.ISetHost>, string>, addTrophy: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.IAddTrophy>, string>, setDevice: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.ISetDevice>, string>, removeDevice: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.IRemoveDevice>, string>, setWebRtcStream: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.ISetWebRTCStream>, string>, setActivity: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.ISetActivity>, string>, setContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<pb.ISetContent>, string>;
export declare const Actions: import("@reduxjs/toolkit").CaseReducerActions<{
    userJoin: Reducer<pb.IUserJoin>;
    userLeave: Reducer<pb.IUserLeave>;
    sendChatMessage: Reducer<pb.ISendChatMessage>;
    setHost: Reducer<pb.ISetHost>;
    addTrophy: CaseReducer<pb.IState, {
        payload: ContextPayload<pb.IAddTrophy>;
        type: string;
    }>;
    setDevice: Reducer<pb.ISetDevice>;
    removeDevice: Reducer<pb.IRemoveDevice>;
    setWebRtcStream: Reducer<pb.ISetWebRTCStream>;
    setActivity: Reducer<pb.ISetActivity>;
    setContent: Reducer<pb.ISetContent>;
}>;
export declare const roomReducer: import("redux").Reducer<pb.IState, import("redux").AnyAction>;
export declare const INITIAL_ROOM_STATE: pb.IState;
export { generateStateDiff } from './diff';
//# sourceMappingURL=index.d.ts.map