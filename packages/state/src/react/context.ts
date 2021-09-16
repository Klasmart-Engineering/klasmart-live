import React from 'react';
import { Network } from '../client/network';

export const NetworkContext = React.createContext<Network>(null as any);
NetworkContext.displayName = 'KidsloopLiveNetwork';

export default NetworkContext;
