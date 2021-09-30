export interface AddMessageHook {
    addMessage: (message: string) => Promise<void>;
    result: boolean;
    loading: boolean;
    error: unknown;
}
export declare function useAddMessage(): AddMessageHook;
//# sourceMappingURL=useAddMessage.d.ts.map