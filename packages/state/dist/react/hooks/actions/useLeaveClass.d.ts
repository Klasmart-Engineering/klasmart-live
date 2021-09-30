export interface LeaveClassHook {
    leaveClass: () => Promise<void>;
    result: boolean;
    loading: boolean;
    error: unknown;
}
export declare function useLeaveClass(): LeaveClassHook;
//# sourceMappingURL=useLeaveClass.d.ts.map