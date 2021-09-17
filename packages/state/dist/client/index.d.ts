import { NetworkActions } from './network';
import { RoomActions } from './roomSlice';
export { roomReducer, Actions, INITIAL_ROOM_STATE } from './roomSlice';
export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    room: import("kidsloop-live-serialization").IState;
    network: import("redux").CombinedState<{
        connectionState: boolean;
    }>;
}>, import("redux").AnyAction>;
export declare type State = ReturnType<typeof reducer>;
export declare type Actions = NetworkActions | RoomActions;
//# sourceMappingURL=index.d.ts.map