import { useContext, useEffect } from 'react';
import { Network } from '../../network';
import NetworkContext from '../context';
import { useSelector } from 'react-redux';
import { ClassActionType, ClassActionTypeToPayload } from '../../ui';


export function useNetwork(): Network {
  return useContext(NetworkContext);
}

export function useNetworkState() {
  const network = useNetwork();
  return useSelector((state) => network.selector(state))
}

export function useNetworkHandler<T extends ClassActionType = ClassActionType>(actionType: T, callback: (payload: ClassActionTypeToPayload[T]) => unknown) {
  const network = useNetwork()
  useEffect(() => network.onAction(actionType,callback), [])
}
