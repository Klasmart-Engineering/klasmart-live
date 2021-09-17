import { ReactNode } from 'react';
import { State } from '../client';
export interface NetworkProviderProps {
    children?: ReactNode;
    selector: (state: unknown) => State;
}
export declare const NetworkProvider: ({ children, selector }: NetworkProviderProps) => JSX.Element;
//# sourceMappingURL=provider.d.ts.map