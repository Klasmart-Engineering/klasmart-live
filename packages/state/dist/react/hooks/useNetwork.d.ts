import { Network } from '../../network';
export declare function useNetwork(): Network;
export declare function useNetworkState(): import("redux").CombinedState<{
    class: import("../../models").ClassState;
    network: import("redux").CombinedState<{
        connectionStatus: import("../../ui").ConnectionStatus;
        connectionError: boolean;
    }>;
}>;
//# sourceMappingURL=useNetwork.d.ts.map