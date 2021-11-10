import { useContext } from 'react';
import NetworkContext from '../context';
import { useSelector } from 'react-redux';
import { Network } from '../../network';

export function useNetworkState<T=unknown>(selector: (state: ReturnType<Network["selector"]>) => T) {
  const network = useContext(NetworkContext);
  return useSelector((state) => selector(network.selector(state)))
}