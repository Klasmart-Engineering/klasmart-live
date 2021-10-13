import { FC, ReactNode } from 'react';
import { DefaultRootState } from 'react-redux';
import { State } from '..';
export interface NetworkProviderProps {
    children?: ReactNode;
    selector: (state: DefaultRootState) => State;
}
export declare const NetworkProvider: FC<NetworkProviderProps>;
//# sourceMappingURL=provider.d.ts.map