export * as Server from './server';
export * as Client from './client';
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
//# sourceMappingURL=index.d.ts.map