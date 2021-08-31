import { Dispatch } from "./redux";
export declare class Transport {
    private url;
    private dispatch;
    constructor(url: string, dispatch: Dispatch);
    private websocket?;
    private connect;
    private send;
    private message;
    private openEvent;
    private closeEvent;
    private networkError;
}
//# sourceMappingURL=network.d.ts.map