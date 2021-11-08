import React, { useContext } from 'react';
import { Network } from '../../network';
import NetworkContext from '../context';
import { useSelector } from 'react-redux';


export function useNetwork(): Network {
  return useContext(NetworkContext);
}

export function useNetworkState() {
  const network = useNetwork();
  return useSelector((state) => network.selector(state))
}
