import { useContext, useEffect } from 'react';
import { ClassActionType, ClassActionTypeToPayload, NetworkContext } from '../../ui';


export function useNetworkHandler<T extends ClassActionType = ClassActionType>(actionType: T, callback: (payload: ClassActionTypeToPayload[T]) => unknown) {
    const network = useContext(NetworkContext);
    useEffect(() => network.onAction(actionType, callback), [network])
  }
  