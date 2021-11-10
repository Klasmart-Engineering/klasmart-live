import React, { FC, useMemo, ReactNode } from "react";
import { useStore } from "react-redux";
import { Action, State } from "../ui";
import { Network } from "../network";
import NetworkContext from "./context";

export interface NetworkProviderProps<ApplicationState=unknown> {
  children?: ReactNode;
  selector: (state: ApplicationState) => State;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function NetworkProvider<ApplicationState=unknown>({
  children,
  selector,
}:NetworkProviderProps<ApplicationState>) {
  const store = useStore<ApplicationState,Action>();
  const value = useMemo(() => new Network(store, selector), [store, selector]);
  return (
    <NetworkContext.Provider value={value as Network<unknown>}>{children}</NetworkContext.Provider>
  );
};
