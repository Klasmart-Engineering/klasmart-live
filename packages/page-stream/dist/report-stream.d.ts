export declare class ReportStream {
    private streamId?;
    private session?;
    private events;
    private eventCount;
    constructor(streamId?: string | undefined, session?: Uint8Array | undefined);
    private websocket?;
    private getSender;
    private sendPromise?;
    private send;
    private event;
    private getWSUrl;
}
//# sourceMappingURL=report-stream.d.ts.map