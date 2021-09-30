import React, { useContext } from 'react';
import NetworkContext from '../context';

export function useNetwork() {
  return useContext(NetworkContext);
}