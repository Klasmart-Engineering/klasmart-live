import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { IState, IUserJoin, ISetHost, ISetDevice, IUserLeave, ISetWebRTCStream, ISetActivityStream, ISendChatMessage, ISetContent, IAddTrophy } from 'kidsloop-live-serialization';
import { ContextPayload } from '../store';
declare type Reducer<T> = CaseReducer<IState, PayloadAction<ContextPayload<T>>>;
export declare const roomSlice: import('@reduxjs/toolkit').Slice<IState, {
    userJoin: Reducer<IUserJoin>;
    userLeave: Reducer<IUserLeave>;
    sendChatMessage: Reducer<ISendChatMessage>;
    setHost: Reducer<ISetHost>;
    addTrophy: CaseReducer<IState, {
        payload: ContextPayload<IAddTrophy>;
        type: string;
    }>;
    setDevice: Reducer<ISetDevice>;
    setWebRtcStream: Reducer<ISetWebRTCStream>;
    setActivityStream: Reducer<ISetActivityStream>;
    setContent: Reducer<ISetContent>;
}, 'room'>;
export declare const userJoin: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<IUserJoin>, string>, userLeave: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<IUserLeave>, string>, sendChatMessage: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<ISendChatMessage>, string>, setHost: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<ISetHost>, string>, addTrophy: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<IAddTrophy>, string>, setDevice: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<ISetDevice>, string>, setWebRtcStream: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<ISetWebRTCStream>, string>, setActivityStream: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<ISetActivityStream>, string>, setContent: import('@reduxjs/toolkit').ActionCreatorWithPayload<ContextPayload<ISetContent>, string>;
export declare const Actions: import('@reduxjs/toolkit').CaseReducerActions<{
    userJoin: Reducer<IUserJoin>;
    userLeave: Reducer<IUserLeave>;
    sendChatMessage: Reducer<ISendChatMessage>;
    setHost: Reducer<ISetHost>;
    addTrophy: CaseReducer<IState, {
        payload: ContextPayload<IAddTrophy>;
        type: string;
    }>;
    setDevice: Reducer<ISetDevice>;
    setWebRtcStream: Reducer<ISetWebRTCStream>;
    setActivityStream: Reducer<ISetActivityStream>;
    setContent: Reducer<ISetContent>;
}>;
export declare const roomReducer: import('redux').Reducer<IState, import('redux').AnyAction>;
export declare const INITIAL_ROOM_STATE: IState;
export { generateStateDiff } from './diff';
//# sourceMappingURL=index.d.ts.map