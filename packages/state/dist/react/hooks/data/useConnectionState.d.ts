import { ConnectionStatus } from '../../../redux/network';
export interface ConnectionState {
    connectionStatus: ConnectionStatus;
    connectionError: boolean;
}
export declare function useConnectionState(autoConnectUrl?: string): ConnectionState;
//# sourceMappingURL=useConnectionState.d.ts.map