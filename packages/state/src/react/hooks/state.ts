import { useContext } from 'react';
import NetworkContext from '../context';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducer';

export function useNetworkState<T=unknown>(selector: (state: State) => T) {
  const network = useContext(NetworkContext);
  return useSelector((state) => selector(network.selector(state)))
}