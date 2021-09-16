
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import NetworkContext from './context';


export function useIsConnected(): boolean {
    const network = useContext(NetworkContext);
    return useSelector((s) => network.selector(s).network.connectionState);
};
