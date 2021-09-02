import { Action } from "@reduxjs/toolkit";
export declare class Transport {
    private dispatch;
    constructor(dispatch: (action: Action) => unknown);
    connect(url: string): Promise<boolean>;
    private _ws?;
    private _websocketPromise?;
    private websocket;
    private send;
    private message;
    private openEvent;
    private closeEvent;
    private networkError;
}
//# sourceMappingURL=network.d.ts.map