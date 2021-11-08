import { FC, ReactNode } from "react";
import { State } from "../ui";
export interface NetworkProviderProps {
    children?: ReactNode;
    selector: (state: unknown) => State;
}
export declare const NetworkProvider: FC<NetworkProviderProps>;
//# sourceMappingURL=provider.d.ts.map