
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ConnectionStatus } from '../../../redux/network';
import NetworkContext from '../../context';


export interface ConnectionState {
    connectionStatus: ConnectionStatus,
    connectionError: boolean,
}

export function useConnectionState(autoConnectUrl?: string): ConnectionState {
    const network = useContext(NetworkContext);
    
    const connectionStatus = useSelector((s) => network.selector(s).network.connectionStatus);
    const connectionError = useSelector((s) => network.selector(s).network.connectionError);
    
    if(connectionStatus === ConnectionStatus.Disconnected && autoConnectUrl) {
        network.initWs(autoConnectUrl);
    }

    return {
        connectionStatus,
        connectionError,
    };
};
