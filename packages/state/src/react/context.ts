import React from 'react';
import { Network } from '../network';

export const NetworkContext = React.createContext<Network<unknown>>(null as any);
NetworkContext.displayName = 'KidsloopLiveNetwork';

export default NetworkContext;
