export interface JoinClassHook {
    joinClass: (url: string) => Promise<void>;
    result: boolean;
    loading: boolean;
    error: unknown;
}
export declare function useJoinClass(): JoinClassHook;
//# sourceMappingURL=useJoinClass.d.ts.map