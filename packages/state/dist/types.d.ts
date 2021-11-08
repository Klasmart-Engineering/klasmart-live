export declare type ValueOf<T> = T[keyof T];
export declare type NewType<T, NewTypeName> = T & {
    /**
     * This is not available at runtime
     */
    readonly __COMPILETIME_TYPE__: NewTypeName;
};
export declare const keys: <O>(o: O) => (keyof O)[];
export declare const values: <O>(o: O) => ValueOf<O>[];
export declare const entries: <O>(o: O) => [keyof O, ValueOf<O>][];
//# sourceMappingURL=types.d.ts.map