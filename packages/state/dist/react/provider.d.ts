import { ReactNode } from "react";
import { State } from "../ui";
export interface NetworkProviderProps<ApplicationState = unknown> {
    children?: ReactNode;
    selector: (state: ApplicationState) => State;
}
export declare function NetworkProvider<ApplicationState = unknown>({ children, selector, }: NetworkProviderProps<ApplicationState>): JSX.Element;
//# sourceMappingURL=provider.d.ts.map