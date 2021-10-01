import * as pb from '../../../protobuf';
export interface SetContentHook {
    setContent: (content: pb.Content) => Promise<void>;
    result: boolean;
    loading: boolean;
    error: unknown;
}
export declare function useSetContent(): SetContentHook;
//# sourceMappingURL=useSetContent.d.ts.map