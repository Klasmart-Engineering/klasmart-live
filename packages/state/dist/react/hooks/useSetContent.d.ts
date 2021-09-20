import * as pb from 'kidsloop-live-serialization';
export interface SetContentHook {
    setContent: (content: pb.Content) => Promise<void>;
    result: boolean;
    loading: boolean;
    error: unknown;
}
export declare function useAddMessage(): SetContentHook;
//# sourceMappingURL=useSetContent.d.ts.map