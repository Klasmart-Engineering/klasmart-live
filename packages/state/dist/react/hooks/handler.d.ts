import { ClassActionType, ClassActionTypeToPayload } from '../../ui';
export declare function useNetworkHandler<T extends ClassActionType = ClassActionType>(actionType: T, callback: (payload: ClassActionTypeToPayload[T]) => unknown): void;
//# sourceMappingURL=handler.d.ts.map