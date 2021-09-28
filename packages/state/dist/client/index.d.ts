export { roomReducer, Actions, INITIAL_ROOM_STATE } from './roomSlice';
export * from './network';
import { NetworkActions } from './network';
import { RoomActions } from './roomSlice';
export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    network: import("redux").CombinedState<{
        connectionStatus: import("./network").ConnectionStatus;
        connectionError: boolean;
    }>;
}>, import("redux").AnyAction>;
export declare type State = ReturnType<typeof reducer>;
export declare type Actions = NetworkActions | RoomActions;
//# sourceMappingURL=index.d.ts.map