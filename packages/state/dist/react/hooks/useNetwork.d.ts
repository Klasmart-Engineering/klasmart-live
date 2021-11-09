import { Network } from '../../network';
import { ClassActionType, ClassActionTypeToPayload } from '../../ui';
export declare function useNetwork(): Network;
export declare function useNetworkState(): import("redux").CombinedState<{
    class: import("../../models").ClassState;
    network: import("redux").CombinedState<{
        connectionStatus: import("../../ui").ConnectionStatus;
        connectionError: boolean;
    }>;
}>;
export declare function useNetworkHandler<T extends ClassActionType = ClassActionType>(actionType: T, callback: (payload: ClassActionTypeToPayload[T]) => unknown): void;
//# sourceMappingURL=useNetwork.d.ts.map