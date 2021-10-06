import { Content } from '../../../models';
export interface SetContentHook {
    setContent: (content: Content) => Promise<void>;
    result: boolean;
    loading: boolean;
    error: unknown;
}
export declare function useSetContent(): SetContentHook;
//# sourceMappingURL=useSetContent.d.ts.map