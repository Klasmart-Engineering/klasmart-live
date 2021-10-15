import React, { useContext } from 'react';
import { Network } from '../../network';
import NetworkContext from '../context';

export function useNetwork(): Network {
  return useContext(NetworkContext);
}