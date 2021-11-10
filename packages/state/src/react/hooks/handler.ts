import { useContext, useEffect } from 'react';
import { ClassActionType, ClassActionTypeToPayload, NetworkContext, State } from '../../ui';


export type NetworkHandlerCallback<T extends ClassActionType> = (payload: ClassActionTypeToPayload[T], state: State) => unknown

export function useNetworkHandler<T extends ClassActionType = ClassActionType>(
        actionType: T,
        callback: NetworkHandlerCallback<T>,
    ) {

    const network = useContext(NetworkContext);
    // TODO: How to accomodate additional Action types, other than ClassAction
    useEffect(() => network.onClassAction(actionType, callback), [network])
  }
  