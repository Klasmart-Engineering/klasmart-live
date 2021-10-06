import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import * as pb from '../../protobuf';
import { ContextPayload } from '../../';
declare type Reducer<T> = CaseReducer<pb.IState, PayloadAction<ContextPayload<T>>>;
export declare const roomSlice: import("@reduxjs/toolkit").Slice<any, {
    userJoin: Reducer<any>;
    userLeave: Reducer<any>;
    sendChatMessage: Reducer<any>;
    setHost: Reducer<any>;
    addTrophy: CaseReducer<any, {
        payload: ContextPayload<any>;
        type: string;
    }>;
    setDevice: Reducer<any>;
    removeDevice: Reducer<any>;
    setWebRtcStream: Reducer<any>;
    setActivity: Reducer<any>;
    setContent: Reducer<any>;
}, "room">;
export declare const userJoin: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, userLeave: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, sendChatMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, setHost: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, addTrophy: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, setDevice: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, removeDevice: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, setWebRtcStream: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, setActivity: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>, setContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<ContextPayload<any>, string>;
export declare const Actions: import("@reduxjs/toolkit").CaseReducerActions<{
    userJoin: Reducer<any>;
    userLeave: Reducer<any>;
    sendChatMessage: Reducer<any>;
    setHost: Reducer<any>;
    addTrophy: CaseReducer<any, {
        payload: ContextPayload<any>;
        type: string;
    }>;
    setDevice: Reducer<any>;
    removeDevice: Reducer<any>;
    setWebRtcStream: Reducer<any>;
    setActivity: Reducer<any>;
    setContent: Reducer<any>;
}>;
export declare const roomReducer: import("redux").Reducer<any, import("redux").AnyAction>;
export declare const INITIAL_ROOM_STATE: any;
export { generateStateDiff } from './diff';
//# sourceMappingURL=index.d.ts.map