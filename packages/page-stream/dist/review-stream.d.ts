import { Replayer } from 'rrweb';
export declare class ReviewStream {
    private url;
    private replayer;
    private offset;
    constructor(url: string, replayer: Replayer);
    close(): Promise<void>;
    private _ws?;
    private websocket?;
    private connect;
}
//# sourceMappingURL=review-stream.d.ts.map