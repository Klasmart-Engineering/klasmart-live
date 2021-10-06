export interface SendChatMessageHook {
    sendChatMessage: (message: string) => Promise<void>;
    result: boolean;
    loading: boolean;
    error: unknown;
}
export declare function useSendChatMessage(): SendChatMessageHook;
//# sourceMappingURL=useSendChatMessage.d.ts.map