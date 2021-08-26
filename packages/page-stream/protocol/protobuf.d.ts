import * as $protobuf from "protobufjs";
/** Properties of a DOMEvent. */
export interface IDOMEvent {

    /** DOMEvent n */
    n?: (number|null);

    /** DOMEvent event */
    event?: (string|null);

    /** DOMEvent isCheckout */
    isCheckout?: (boolean|null);
}

/** Represents a DOMEvent. */
export class DOMEvent implements IDOMEvent {

    /**
     * Constructs a new DOMEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDOMEvent);

    /** DOMEvent n. */
    public n: number;

    /** DOMEvent event. */
    public event: string;

    /** DOMEvent isCheckout. */
    public isCheckout: boolean;

    /**
     * Creates a new DOMEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DOMEvent instance
     */
    public static create(properties?: IDOMEvent): DOMEvent;

    /**
     * Encodes the specified DOMEvent message. Does not implicitly {@link DOMEvent.verify|verify} messages.
     * @param message DOMEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDOMEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DOMEvent message, length delimited. Does not implicitly {@link DOMEvent.verify|verify} messages.
     * @param message DOMEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDOMEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DOMEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DOMEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DOMEvent;

    /**
     * Decodes a DOMEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DOMEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DOMEvent;

    /**
     * Verifies a DOMEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DOMEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DOMEvent
     */
    public static fromObject(object: { [k: string]: any }): DOMEvent;

    /**
     * Creates a plain object from a DOMEvent message. Also converts values to other types if specified.
     * @param message DOMEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DOMEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DOMEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReportRequest. */
export interface IReportRequest {

    /** ReportRequest session */
    session?: (string|null);

    /** ReportRequest events */
    events?: (IDOMEvent[]|null);
}

/** Represents a ReportRequest. */
export class ReportRequest implements IReportRequest {

    /**
     * Constructs a new ReportRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReportRequest);

    /** ReportRequest session. */
    public session: string;

    /** ReportRequest events. */
    public events: IDOMEvent[];

    /**
     * Creates a new ReportRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportRequest instance
     */
    public static create(properties?: IReportRequest): ReportRequest;

    /**
     * Encodes the specified ReportRequest message. Does not implicitly {@link ReportRequest.verify|verify} messages.
     * @param message ReportRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReportRequest message, length delimited. Does not implicitly {@link ReportRequest.verify|verify} messages.
     * @param message ReportRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReportRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReportRequest;

    /**
     * Decodes a ReportRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReportRequest;

    /**
     * Verifies a ReportRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReportRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportRequest
     */
    public static fromObject(object: { [k: string]: any }): ReportRequest;

    /**
     * Creates a plain object from a ReportRequest message. Also converts values to other types if specified.
     * @param message ReportRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReportRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReportResponse. */
export interface IReportResponse {

    /** ReportResponse setStreamId */
    setStreamId?: (string|null);

    /** ReportResponse setSession */
    setSession?: (string|null);

    /** ReportResponse acknowledge */
    acknowledge?: (number|null);
}

/** Represents a ReportResponse. */
export class ReportResponse implements IReportResponse {

    /**
     * Constructs a new ReportResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReportResponse);

    /** ReportResponse setStreamId. */
    public setStreamId: string;

    /** ReportResponse setSession. */
    public setSession: string;

    /** ReportResponse acknowledge. */
    public acknowledge: number;

    /**
     * Creates a new ReportResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportResponse instance
     */
    public static create(properties?: IReportResponse): ReportResponse;

    /**
     * Encodes the specified ReportResponse message. Does not implicitly {@link ReportResponse.verify|verify} messages.
     * @param message ReportResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReportResponse message, length delimited. Does not implicitly {@link ReportResponse.verify|verify} messages.
     * @param message ReportResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReportResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReportResponse;

    /**
     * Decodes a ReportResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReportResponse;

    /**
     * Verifies a ReportResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReportResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportResponse
     */
    public static fromObject(object: { [k: string]: any }): ReportResponse;

    /**
     * Creates a plain object from a ReportResponse message. Also converts values to other types if specified.
     * @param message ReportResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReportResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReviewRequest. */
export interface IReviewRequest {

    /** ReviewRequest n */
    n?: (number|null);
}

/** Represents a ReviewRequest. */
export class ReviewRequest implements IReviewRequest {

    /**
     * Constructs a new ReviewRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReviewRequest);

    /** ReviewRequest n. */
    public n: number;

    /**
     * Creates a new ReviewRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReviewRequest instance
     */
    public static create(properties?: IReviewRequest): ReviewRequest;

    /**
     * Encodes the specified ReviewRequest message. Does not implicitly {@link ReviewRequest.verify|verify} messages.
     * @param message ReviewRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReviewRequest message, length delimited. Does not implicitly {@link ReviewRequest.verify|verify} messages.
     * @param message ReviewRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReviewRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReviewRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReviewRequest;

    /**
     * Decodes a ReviewRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReviewRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReviewRequest;

    /**
     * Verifies a ReviewRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReviewRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReviewRequest
     */
    public static fromObject(object: { [k: string]: any }): ReviewRequest;

    /**
     * Creates a plain object from a ReviewRequest message. Also converts values to other types if specified.
     * @param message ReviewRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReviewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReviewRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReviewResponse. */
export interface IReviewResponse {

    /** ReviewResponse event */
    event?: (string[]|null);

    /** ReviewResponse n */
    n?: (number|null);
}

/** Represents a ReviewResponse. */
export class ReviewResponse implements IReviewResponse {

    /**
     * Constructs a new ReviewResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReviewResponse);

    /** ReviewResponse event. */
    public event: string[];

    /** ReviewResponse n. */
    public n: number;

    /**
     * Creates a new ReviewResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReviewResponse instance
     */
    public static create(properties?: IReviewResponse): ReviewResponse;

    /**
     * Encodes the specified ReviewResponse message. Does not implicitly {@link ReviewResponse.verify|verify} messages.
     * @param message ReviewResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReviewResponse message, length delimited. Does not implicitly {@link ReviewResponse.verify|verify} messages.
     * @param message ReviewResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReviewResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReviewResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReviewResponse;

    /**
     * Decodes a ReviewResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReviewResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReviewResponse;

    /**
     * Verifies a ReviewResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReviewResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReviewResponse
     */
    public static fromObject(object: { [k: string]: any }): ReviewResponse;

    /**
     * Creates a plain object from a ReviewResponse message. Also converts values to other types if specified.
     * @param message ReviewResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReviewResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReviewResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
