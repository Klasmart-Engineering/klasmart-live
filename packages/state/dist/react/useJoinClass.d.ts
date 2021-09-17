export interface JoinClassHook {
    result: boolean;
    loading: boolean;
    joinClass: (url: string) => Promise<void>;
}
export declare function useJoinClass(): JoinClassHook;
//# sourceMappingURL=useJoinClass.d.ts.map