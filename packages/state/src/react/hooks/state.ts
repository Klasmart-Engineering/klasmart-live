import { useContext } from 'react';
import NetworkContext from '../context';
import { useSelector } from 'react-redux';

export function useNetworkState() {
  const network = useContext(NetworkContext);
  return useSelector((state) => network.selector(state))
}
