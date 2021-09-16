import React, { useMemo, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Network } from '../client/network';
import { State } from '../client';
import NetworkContext from './context';


export interface NetworkProviderProps {
    children?: ReactNode,
    selector: (state: unknown) => State
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const NetworkProvider = ({children, selector}: NetworkProviderProps) => {
    const dispatch = useDispatch();
    const value = useMemo(() => new Network(dispatch, selector), []);
    return (
        <NetworkContext.Provider value={value}>
            {children}
        </NetworkContext.Provider>
    );
};
