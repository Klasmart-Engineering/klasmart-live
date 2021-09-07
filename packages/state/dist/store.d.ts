export declare type ID = string;
export interface Context {
    userId: ID;
    isTeacher: boolean;
    name: string;
}
export declare type ContextPayload<T> = {
    context: Context;
    payload: T;
};
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    room: import("kidsloop-live-serialization").IState;
}, import("redux").AnyAction, never[]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=store.d.ts.map