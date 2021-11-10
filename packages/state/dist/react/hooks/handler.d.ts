import { ClassActionType, ClassActionTypeToPayload, State } from '../../ui';
export declare type NetworkHandlerCallback<T extends ClassActionType> = (payload: ClassActionTypeToPayload[T], state: State) => unknown;
export declare function useNetworkHandler<T extends ClassActionType = ClassActionType>(actionType: T, callback: NetworkHandlerCallback<T>): void;
//# sourceMappingURL=handler.d.ts.map