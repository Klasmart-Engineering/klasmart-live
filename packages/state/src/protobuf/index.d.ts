import * as $protobuf from "protobufjs";
/** Properties of a ClassRequest. */
export interface IClassRequest {

    /** ClassRequest id */
    id?: (string|null);

    /** ClassRequest endClass */
    endClass?: (IEndClassRequest|null);

    /** ClassRequest setHost */
    setHost?: (ISetHostRequest|null);

    /** ClassRequest setContent */
    setContent?: (ISetContentRequest|null);

    /** ClassRequest setActvityStreamId */
    setActvityStreamId?: (ISetActivityStreamIdRequest|null);

    /** ClassRequest rewardTrophyToUser */
    rewardTrophyToUser?: (IRewardTrophyToUserRequest|null);

    /** ClassRequest rewardTrophyToAll */
    rewardTrophyToAll?: (IRewardTrophyToAllRequest|null);

    /** ClassRequest sendChatMessage */
    sendChatMessage?: (ISendChatMessageRequest|null);
}

/** Represents a ClassRequest. */
export class ClassRequest implements IClassRequest {

    /**
     * Constructs a new ClassRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassRequest);

    /** ClassRequest id. */
    public id: string;

    /** ClassRequest endClass. */
    public endClass?: (IEndClassRequest|null);

    /** ClassRequest setHost. */
    public setHost?: (ISetHostRequest|null);

    /** ClassRequest setContent. */
    public setContent?: (ISetContentRequest|null);

    /** ClassRequest setActvityStreamId. */
    public setActvityStreamId?: (ISetActivityStreamIdRequest|null);

    /** ClassRequest rewardTrophyToUser. */
    public rewardTrophyToUser?: (IRewardTrophyToUserRequest|null);

    /** ClassRequest rewardTrophyToAll. */
    public rewardTrophyToAll?: (IRewardTrophyToAllRequest|null);

    /** ClassRequest sendChatMessage. */
    public sendChatMessage?: (ISendChatMessageRequest|null);

    /** ClassRequest type. */
    public type?: ("endClass"|"setHost"|"setContent"|"setActvityStreamId"|"rewardTrophyToUser"|"rewardTrophyToAll"|"sendChatMessage");

    /**
     * Creates a new ClassRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassRequest instance
     */
    public static create(properties?: IClassRequest): ClassRequest;

    /**
     * Encodes the specified ClassRequest message. Does not implicitly {@link ClassRequest.verify|verify} messages.
     * @param message ClassRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassRequest message, length delimited. Does not implicitly {@link ClassRequest.verify|verify} messages.
     * @param message ClassRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassRequest;

    /**
     * Decodes a ClassRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassRequest;

    /**
     * Verifies a ClassRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassRequest
     */
    public static fromObject(object: { [k: string]: any }): ClassRequest;

    /**
     * Creates a plain object from a ClassRequest message. Also converts values to other types if specified.
     * @param message ClassRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClassResponse. */
export interface IClassResponse {

    /** ClassResponse id */
    id?: (string|null);

    /** ClassResponse error */
    error?: (string|null);
}

/** Represents a ClassResponse. */
export class ClassResponse implements IClassResponse {

    /**
     * Constructs a new ClassResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassResponse);

    /** ClassResponse id. */
    public id: string;

    /** ClassResponse error. */
    public error: string;

    /**
     * Creates a new ClassResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassResponse instance
     */
    public static create(properties?: IClassResponse): ClassResponse;

    /**
     * Encodes the specified ClassResponse message. Does not implicitly {@link ClassResponse.verify|verify} messages.
     * @param message ClassResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClassResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassResponse message, length delimited. Does not implicitly {@link ClassResponse.verify|verify} messages.
     * @param message ClassResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClassResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassResponse;

    /**
     * Decodes a ClassResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassResponse;

    /**
     * Verifies a ClassResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassResponse
     */
    public static fromObject(object: { [k: string]: any }): ClassResponse;

    /**
     * Creates a plain object from a ClassResponse message. Also converts values to other types if specified.
     * @param message ClassResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClassEvent. */
export interface IClassEvent {

    /** ClassEvent id */
    id?: (string|null);

    /** ClassEvent acknowledge */
    acknowledge?: (IClassResponse|null);

    /** ClassEvent setRoomState */
    setRoomState?: (ISetClassStateEvent|null);

    /** ClassEvent classEnded */
    classEnded?: (IClassEndedEvent|null);

    /** ClassEvent deviceConnected */
    deviceConnected?: (IDeviceConnectedEvent|null);

    /** ClassEvent deviceDisconnected */
    deviceDisconnected?: (IDeviceDisconnectedEvent|null);

    /** ClassEvent hostChanged */
    hostChanged?: (IHostChangedEvent|null);

    /** ClassEvent contentChanged */
    contentChanged?: (IContentChangedEvent|null);

    /** ClassEvent newChatMessage */
    newChatMessage?: (INewChatMessageEvent|null);

    /** ClassEvent actvityStreamIdChanged */
    actvityStreamIdChanged?: (IActivityStreamIdChangedEvent|null);

    /** ClassEvent trophyRewardedToUser */
    trophyRewardedToUser?: (ITrophyRewardedToUserEvent|null);

    /** ClassEvent trophyRewardedToAll */
    trophyRewardedToAll?: (ITrophyRewardedToAllEvent|null);
}

/** Represents a ClassEvent. */
export class ClassEvent implements IClassEvent {

    /**
     * Constructs a new ClassEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassEvent);

    /** ClassEvent id. */
    public id: string;

    /** ClassEvent acknowledge. */
    public acknowledge?: (IClassResponse|null);

    /** ClassEvent setRoomState. */
    public setRoomState?: (ISetClassStateEvent|null);

    /** ClassEvent classEnded. */
    public classEnded?: (IClassEndedEvent|null);

    /** ClassEvent deviceConnected. */
    public deviceConnected?: (IDeviceConnectedEvent|null);

    /** ClassEvent deviceDisconnected. */
    public deviceDisconnected?: (IDeviceDisconnectedEvent|null);

    /** ClassEvent hostChanged. */
    public hostChanged?: (IHostChangedEvent|null);

    /** ClassEvent contentChanged. */
    public contentChanged?: (IContentChangedEvent|null);

    /** ClassEvent newChatMessage. */
    public newChatMessage?: (INewChatMessageEvent|null);

    /** ClassEvent actvityStreamIdChanged. */
    public actvityStreamIdChanged?: (IActivityStreamIdChangedEvent|null);

    /** ClassEvent trophyRewardedToUser. */
    public trophyRewardedToUser?: (ITrophyRewardedToUserEvent|null);

    /** ClassEvent trophyRewardedToAll. */
    public trophyRewardedToAll?: (ITrophyRewardedToAllEvent|null);

    /** ClassEvent type. */
    public type?: ("acknowledge"|"setRoomState"|"classEnded"|"deviceConnected"|"deviceDisconnected"|"hostChanged"|"contentChanged"|"newChatMessage"|"actvityStreamIdChanged"|"trophyRewardedToUser"|"trophyRewardedToAll");

    /**
     * Creates a new ClassEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassEvent instance
     */
    public static create(properties?: IClassEvent): ClassEvent;

    /**
     * Encodes the specified ClassEvent message. Does not implicitly {@link ClassEvent.verify|verify} messages.
     * @param message ClassEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClassEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassEvent message, length delimited. Does not implicitly {@link ClassEvent.verify|verify} messages.
     * @param message ClassEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClassEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassEvent;

    /**
     * Decodes a ClassEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassEvent;

    /**
     * Verifies a ClassEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassEvent
     */
    public static fromObject(object: { [k: string]: any }): ClassEvent;

    /**
     * Creates a plain object from a ClassEvent message. Also converts values to other types if specified.
     * @param message ClassEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EndClassRequest. */
export interface IEndClassRequest {
}

/** Represents an EndClassRequest. */
export class EndClassRequest implements IEndClassRequest {

    /**
     * Constructs a new EndClassRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEndClassRequest);

    /**
     * Creates a new EndClassRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EndClassRequest instance
     */
    public static create(properties?: IEndClassRequest): EndClassRequest;

    /**
     * Encodes the specified EndClassRequest message. Does not implicitly {@link EndClassRequest.verify|verify} messages.
     * @param message EndClassRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEndClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EndClassRequest message, length delimited. Does not implicitly {@link EndClassRequest.verify|verify} messages.
     * @param message EndClassRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEndClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EndClassRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EndClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EndClassRequest;

    /**
     * Decodes an EndClassRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EndClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EndClassRequest;

    /**
     * Verifies an EndClassRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EndClassRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EndClassRequest
     */
    public static fromObject(object: { [k: string]: any }): EndClassRequest;

    /**
     * Creates a plain object from an EndClassRequest message. Also converts values to other types if specified.
     * @param message EndClassRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EndClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EndClassRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetHostRequest. */
export interface ISetHostRequest {

    /** SetHostRequest hostUserId */
    hostUserId?: (string|null);
}

/** Represents a SetHostRequest. */
export class SetHostRequest implements ISetHostRequest {

    /**
     * Constructs a new SetHostRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetHostRequest);

    /** SetHostRequest hostUserId. */
    public hostUserId: string;

    /**
     * Creates a new SetHostRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetHostRequest instance
     */
    public static create(properties?: ISetHostRequest): SetHostRequest;

    /**
     * Encodes the specified SetHostRequest message. Does not implicitly {@link SetHostRequest.verify|verify} messages.
     * @param message SetHostRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetHostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetHostRequest message, length delimited. Does not implicitly {@link SetHostRequest.verify|verify} messages.
     * @param message SetHostRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetHostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetHostRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetHostRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetHostRequest;

    /**
     * Decodes a SetHostRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetHostRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetHostRequest;

    /**
     * Verifies a SetHostRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetHostRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetHostRequest
     */
    public static fromObject(object: { [k: string]: any }): SetHostRequest;

    /**
     * Creates a plain object from a SetHostRequest message. Also converts values to other types if specified.
     * @param message SetHostRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetHostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetHostRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetContentRequest. */
export interface ISetContentRequest {

    /** SetContentRequest content */
    content?: (IContent|null);
}

/** Represents a SetContentRequest. */
export class SetContentRequest implements ISetContentRequest {

    /**
     * Constructs a new SetContentRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetContentRequest);

    /** SetContentRequest content. */
    public content?: (IContent|null);

    /**
     * Creates a new SetContentRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetContentRequest instance
     */
    public static create(properties?: ISetContentRequest): SetContentRequest;

    /**
     * Encodes the specified SetContentRequest message. Does not implicitly {@link SetContentRequest.verify|verify} messages.
     * @param message SetContentRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetContentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetContentRequest message, length delimited. Does not implicitly {@link SetContentRequest.verify|verify} messages.
     * @param message SetContentRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetContentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetContentRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetContentRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetContentRequest;

    /**
     * Decodes a SetContentRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetContentRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetContentRequest;

    /**
     * Verifies a SetContentRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetContentRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetContentRequest
     */
    public static fromObject(object: { [k: string]: any }): SetContentRequest;

    /**
     * Creates a plain object from a SetContentRequest message. Also converts values to other types if specified.
     * @param message SetContentRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetContentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetContentRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetActivityStreamIdRequest. */
export interface ISetActivityStreamIdRequest {

    /** SetActivityStreamIdRequest deviceId */
    deviceId?: (string|null);

    /** SetActivityStreamIdRequest activityStreamId */
    activityStreamId?: (string|null);
}

/** Represents a SetActivityStreamIdRequest. */
export class SetActivityStreamIdRequest implements ISetActivityStreamIdRequest {

    /**
     * Constructs a new SetActivityStreamIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetActivityStreamIdRequest);

    /** SetActivityStreamIdRequest deviceId. */
    public deviceId: string;

    /** SetActivityStreamIdRequest activityStreamId. */
    public activityStreamId: string;

    /**
     * Creates a new SetActivityStreamIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetActivityStreamIdRequest instance
     */
    public static create(properties?: ISetActivityStreamIdRequest): SetActivityStreamIdRequest;

    /**
     * Encodes the specified SetActivityStreamIdRequest message. Does not implicitly {@link SetActivityStreamIdRequest.verify|verify} messages.
     * @param message SetActivityStreamIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetActivityStreamIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetActivityStreamIdRequest message, length delimited. Does not implicitly {@link SetActivityStreamIdRequest.verify|verify} messages.
     * @param message SetActivityStreamIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetActivityStreamIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetActivityStreamIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetActivityStreamIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetActivityStreamIdRequest;

    /**
     * Decodes a SetActivityStreamIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetActivityStreamIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetActivityStreamIdRequest;

    /**
     * Verifies a SetActivityStreamIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetActivityStreamIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetActivityStreamIdRequest
     */
    public static fromObject(object: { [k: string]: any }): SetActivityStreamIdRequest;

    /**
     * Creates a plain object from a SetActivityStreamIdRequest message. Also converts values to other types if specified.
     * @param message SetActivityStreamIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetActivityStreamIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetActivityStreamIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RewardTrophyToUserRequest. */
export interface IRewardTrophyToUserRequest {

    /** RewardTrophyToUserRequest userId */
    userId?: (string|null);

    /** RewardTrophyToUserRequest trophy */
    trophy?: (ITrophy|null);
}

/** Represents a RewardTrophyToUserRequest. */
export class RewardTrophyToUserRequest implements IRewardTrophyToUserRequest {

    /**
     * Constructs a new RewardTrophyToUserRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRewardTrophyToUserRequest);

    /** RewardTrophyToUserRequest userId. */
    public userId: string;

    /** RewardTrophyToUserRequest trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new RewardTrophyToUserRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RewardTrophyToUserRequest instance
     */
    public static create(properties?: IRewardTrophyToUserRequest): RewardTrophyToUserRequest;

    /**
     * Encodes the specified RewardTrophyToUserRequest message. Does not implicitly {@link RewardTrophyToUserRequest.verify|verify} messages.
     * @param message RewardTrophyToUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRewardTrophyToUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RewardTrophyToUserRequest message, length delimited. Does not implicitly {@link RewardTrophyToUserRequest.verify|verify} messages.
     * @param message RewardTrophyToUserRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRewardTrophyToUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RewardTrophyToUserRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RewardTrophyToUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RewardTrophyToUserRequest;

    /**
     * Decodes a RewardTrophyToUserRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RewardTrophyToUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RewardTrophyToUserRequest;

    /**
     * Verifies a RewardTrophyToUserRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RewardTrophyToUserRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RewardTrophyToUserRequest
     */
    public static fromObject(object: { [k: string]: any }): RewardTrophyToUserRequest;

    /**
     * Creates a plain object from a RewardTrophyToUserRequest message. Also converts values to other types if specified.
     * @param message RewardTrophyToUserRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RewardTrophyToUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RewardTrophyToUserRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RewardTrophyToAllRequest. */
export interface IRewardTrophyToAllRequest {

    /** RewardTrophyToAllRequest trophy */
    trophy?: (ITrophy|null);
}

/** Represents a RewardTrophyToAllRequest. */
export class RewardTrophyToAllRequest implements IRewardTrophyToAllRequest {

    /**
     * Constructs a new RewardTrophyToAllRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRewardTrophyToAllRequest);

    /** RewardTrophyToAllRequest trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new RewardTrophyToAllRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RewardTrophyToAllRequest instance
     */
    public static create(properties?: IRewardTrophyToAllRequest): RewardTrophyToAllRequest;

    /**
     * Encodes the specified RewardTrophyToAllRequest message. Does not implicitly {@link RewardTrophyToAllRequest.verify|verify} messages.
     * @param message RewardTrophyToAllRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRewardTrophyToAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RewardTrophyToAllRequest message, length delimited. Does not implicitly {@link RewardTrophyToAllRequest.verify|verify} messages.
     * @param message RewardTrophyToAllRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRewardTrophyToAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RewardTrophyToAllRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RewardTrophyToAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RewardTrophyToAllRequest;

    /**
     * Decodes a RewardTrophyToAllRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RewardTrophyToAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RewardTrophyToAllRequest;

    /**
     * Verifies a RewardTrophyToAllRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RewardTrophyToAllRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RewardTrophyToAllRequest
     */
    public static fromObject(object: { [k: string]: any }): RewardTrophyToAllRequest;

    /**
     * Creates a plain object from a RewardTrophyToAllRequest message. Also converts values to other types if specified.
     * @param message RewardTrophyToAllRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RewardTrophyToAllRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RewardTrophyToAllRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SendChatMessageRequest. */
export interface ISendChatMessageRequest {

    /** SendChatMessageRequest message */
    message?: (string|null);
}

/** Represents a SendChatMessageRequest. */
export class SendChatMessageRequest implements ISendChatMessageRequest {

    /**
     * Constructs a new SendChatMessageRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendChatMessageRequest);

    /** SendChatMessageRequest message. */
    public message: string;

    /**
     * Creates a new SendChatMessageRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendChatMessageRequest instance
     */
    public static create(properties?: ISendChatMessageRequest): SendChatMessageRequest;

    /**
     * Encodes the specified SendChatMessageRequest message. Does not implicitly {@link SendChatMessageRequest.verify|verify} messages.
     * @param message SendChatMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendChatMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendChatMessageRequest message, length delimited. Does not implicitly {@link SendChatMessageRequest.verify|verify} messages.
     * @param message SendChatMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendChatMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendChatMessageRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendChatMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendChatMessageRequest;

    /**
     * Decodes a SendChatMessageRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendChatMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendChatMessageRequest;

    /**
     * Verifies a SendChatMessageRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendChatMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendChatMessageRequest
     */
    public static fromObject(object: { [k: string]: any }): SendChatMessageRequest;

    /**
     * Creates a plain object from a SendChatMessageRequest message. Also converts values to other types if specified.
     * @param message SendChatMessageRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendChatMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendChatMessageRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetClassStateEvent. */
export interface ISetClassStateEvent {

    /** SetClassStateEvent state */
    state?: (IClassState|null);
}

/** Represents a SetClassStateEvent. */
export class SetClassStateEvent implements ISetClassStateEvent {

    /**
     * Constructs a new SetClassStateEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetClassStateEvent);

    /** SetClassStateEvent state. */
    public state?: (IClassState|null);

    /**
     * Creates a new SetClassStateEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetClassStateEvent instance
     */
    public static create(properties?: ISetClassStateEvent): SetClassStateEvent;

    /**
     * Encodes the specified SetClassStateEvent message. Does not implicitly {@link SetClassStateEvent.verify|verify} messages.
     * @param message SetClassStateEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetClassStateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetClassStateEvent message, length delimited. Does not implicitly {@link SetClassStateEvent.verify|verify} messages.
     * @param message SetClassStateEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetClassStateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetClassStateEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetClassStateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetClassStateEvent;

    /**
     * Decodes a SetClassStateEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetClassStateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetClassStateEvent;

    /**
     * Verifies a SetClassStateEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetClassStateEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetClassStateEvent
     */
    public static fromObject(object: { [k: string]: any }): SetClassStateEvent;

    /**
     * Creates a plain object from a SetClassStateEvent message. Also converts values to other types if specified.
     * @param message SetClassStateEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetClassStateEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetClassStateEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClassEndedEvent. */
export interface IClassEndedEvent {

    /** ClassEndedEvent timestamp */
    timestamp?: (number|Long|null);
}

/** Represents a ClassEndedEvent. */
export class ClassEndedEvent implements IClassEndedEvent {

    /**
     * Constructs a new ClassEndedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassEndedEvent);

    /** ClassEndedEvent timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new ClassEndedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassEndedEvent instance
     */
    public static create(properties?: IClassEndedEvent): ClassEndedEvent;

    /**
     * Encodes the specified ClassEndedEvent message. Does not implicitly {@link ClassEndedEvent.verify|verify} messages.
     * @param message ClassEndedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClassEndedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassEndedEvent message, length delimited. Does not implicitly {@link ClassEndedEvent.verify|verify} messages.
     * @param message ClassEndedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClassEndedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassEndedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassEndedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassEndedEvent;

    /**
     * Decodes a ClassEndedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassEndedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassEndedEvent;

    /**
     * Verifies a ClassEndedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassEndedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassEndedEvent
     */
    public static fromObject(object: { [k: string]: any }): ClassEndedEvent;

    /**
     * Creates a plain object from a ClassEndedEvent message. Also converts values to other types if specified.
     * @param message ClassEndedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassEndedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassEndedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeviceConnectedEvent. */
export interface IDeviceConnectedEvent {

    /** DeviceConnectedEvent name */
    name?: (string|null);

    /** DeviceConnectedEvent device */
    device?: (IDevice|null);
}

/** Represents a DeviceConnectedEvent. */
export class DeviceConnectedEvent implements IDeviceConnectedEvent {

    /**
     * Constructs a new DeviceConnectedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceConnectedEvent);

    /** DeviceConnectedEvent name. */
    public name: string;

    /** DeviceConnectedEvent device. */
    public device?: (IDevice|null);

    /**
     * Creates a new DeviceConnectedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceConnectedEvent instance
     */
    public static create(properties?: IDeviceConnectedEvent): DeviceConnectedEvent;

    /**
     * Encodes the specified DeviceConnectedEvent message. Does not implicitly {@link DeviceConnectedEvent.verify|verify} messages.
     * @param message DeviceConnectedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceConnectedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceConnectedEvent message, length delimited. Does not implicitly {@link DeviceConnectedEvent.verify|verify} messages.
     * @param message DeviceConnectedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceConnectedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceConnectedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceConnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceConnectedEvent;

    /**
     * Decodes a DeviceConnectedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceConnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceConnectedEvent;

    /**
     * Verifies a DeviceConnectedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceConnectedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceConnectedEvent
     */
    public static fromObject(object: { [k: string]: any }): DeviceConnectedEvent;

    /**
     * Creates a plain object from a DeviceConnectedEvent message. Also converts values to other types if specified.
     * @param message DeviceConnectedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceConnectedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceConnectedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeviceDisconnectedEvent. */
export interface IDeviceDisconnectedEvent {

    /** DeviceDisconnectedEvent deviceId */
    deviceId?: (string|null);
}

/** Represents a DeviceDisconnectedEvent. */
export class DeviceDisconnectedEvent implements IDeviceDisconnectedEvent {

    /**
     * Constructs a new DeviceDisconnectedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceDisconnectedEvent);

    /** DeviceDisconnectedEvent deviceId. */
    public deviceId: string;

    /**
     * Creates a new DeviceDisconnectedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceDisconnectedEvent instance
     */
    public static create(properties?: IDeviceDisconnectedEvent): DeviceDisconnectedEvent;

    /**
     * Encodes the specified DeviceDisconnectedEvent message. Does not implicitly {@link DeviceDisconnectedEvent.verify|verify} messages.
     * @param message DeviceDisconnectedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceDisconnectedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceDisconnectedEvent message, length delimited. Does not implicitly {@link DeviceDisconnectedEvent.verify|verify} messages.
     * @param message DeviceDisconnectedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceDisconnectedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceDisconnectedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceDisconnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceDisconnectedEvent;

    /**
     * Decodes a DeviceDisconnectedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceDisconnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceDisconnectedEvent;

    /**
     * Verifies a DeviceDisconnectedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceDisconnectedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceDisconnectedEvent
     */
    public static fromObject(object: { [k: string]: any }): DeviceDisconnectedEvent;

    /**
     * Creates a plain object from a DeviceDisconnectedEvent message. Also converts values to other types if specified.
     * @param message DeviceDisconnectedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceDisconnectedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceDisconnectedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a HostChangedEvent. */
export interface IHostChangedEvent {

    /** HostChangedEvent hostUserId */
    hostUserId?: (string|null);
}

/** Represents a HostChangedEvent. */
export class HostChangedEvent implements IHostChangedEvent {

    /**
     * Constructs a new HostChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostChangedEvent);

    /** HostChangedEvent hostUserId. */
    public hostUserId: string;

    /**
     * Creates a new HostChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostChangedEvent instance
     */
    public static create(properties?: IHostChangedEvent): HostChangedEvent;

    /**
     * Encodes the specified HostChangedEvent message. Does not implicitly {@link HostChangedEvent.verify|verify} messages.
     * @param message HostChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostChangedEvent message, length delimited. Does not implicitly {@link HostChangedEvent.verify|verify} messages.
     * @param message HostChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostChangedEvent;

    /**
     * Decodes a HostChangedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostChangedEvent;

    /**
     * Verifies a HostChangedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostChangedEvent
     */
    public static fromObject(object: { [k: string]: any }): HostChangedEvent;

    /**
     * Creates a plain object from a HostChangedEvent message. Also converts values to other types if specified.
     * @param message HostChangedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostChangedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostChangedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ContentChangedEvent. */
export interface IContentChangedEvent {

    /** ContentChangedEvent content */
    content?: (IContent|null);
}

/** Represents a ContentChangedEvent. */
export class ContentChangedEvent implements IContentChangedEvent {

    /**
     * Constructs a new ContentChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContentChangedEvent);

    /** ContentChangedEvent content. */
    public content?: (IContent|null);

    /**
     * Creates a new ContentChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContentChangedEvent instance
     */
    public static create(properties?: IContentChangedEvent): ContentChangedEvent;

    /**
     * Encodes the specified ContentChangedEvent message. Does not implicitly {@link ContentChangedEvent.verify|verify} messages.
     * @param message ContentChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IContentChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ContentChangedEvent message, length delimited. Does not implicitly {@link ContentChangedEvent.verify|verify} messages.
     * @param message ContentChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IContentChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContentChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContentChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContentChangedEvent;

    /**
     * Decodes a ContentChangedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContentChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ContentChangedEvent;

    /**
     * Verifies a ContentChangedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ContentChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContentChangedEvent
     */
    public static fromObject(object: { [k: string]: any }): ContentChangedEvent;

    /**
     * Creates a plain object from a ContentChangedEvent message. Also converts values to other types if specified.
     * @param message ContentChangedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ContentChangedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ContentChangedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActivityStreamIdChangedEvent. */
export interface IActivityStreamIdChangedEvent {

    /** ActivityStreamIdChangedEvent deviceId */
    deviceId?: (string|null);

    /** ActivityStreamIdChangedEvent activityStreamId */
    activityStreamId?: (string|null);
}

/** Represents an ActivityStreamIdChangedEvent. */
export class ActivityStreamIdChangedEvent implements IActivityStreamIdChangedEvent {

    /**
     * Constructs a new ActivityStreamIdChangedEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityStreamIdChangedEvent);

    /** ActivityStreamIdChangedEvent deviceId. */
    public deviceId: string;

    /** ActivityStreamIdChangedEvent activityStreamId. */
    public activityStreamId: string;

    /**
     * Creates a new ActivityStreamIdChangedEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityStreamIdChangedEvent instance
     */
    public static create(properties?: IActivityStreamIdChangedEvent): ActivityStreamIdChangedEvent;

    /**
     * Encodes the specified ActivityStreamIdChangedEvent message. Does not implicitly {@link ActivityStreamIdChangedEvent.verify|verify} messages.
     * @param message ActivityStreamIdChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityStreamIdChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActivityStreamIdChangedEvent message, length delimited. Does not implicitly {@link ActivityStreamIdChangedEvent.verify|verify} messages.
     * @param message ActivityStreamIdChangedEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActivityStreamIdChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityStreamIdChangedEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityStreamIdChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityStreamIdChangedEvent;

    /**
     * Decodes an ActivityStreamIdChangedEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActivityStreamIdChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActivityStreamIdChangedEvent;

    /**
     * Verifies an ActivityStreamIdChangedEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActivityStreamIdChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActivityStreamIdChangedEvent
     */
    public static fromObject(object: { [k: string]: any }): ActivityStreamIdChangedEvent;

    /**
     * Creates a plain object from an ActivityStreamIdChangedEvent message. Also converts values to other types if specified.
     * @param message ActivityStreamIdChangedEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActivityStreamIdChangedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActivityStreamIdChangedEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TrophyRewardedToUserEvent. */
export interface ITrophyRewardedToUserEvent {

    /** TrophyRewardedToUserEvent userId */
    userId?: (string|null);

    /** TrophyRewardedToUserEvent trophy */
    trophy?: (ITrophy|null);
}

/** Represents a TrophyRewardedToUserEvent. */
export class TrophyRewardedToUserEvent implements ITrophyRewardedToUserEvent {

    /**
     * Constructs a new TrophyRewardedToUserEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrophyRewardedToUserEvent);

    /** TrophyRewardedToUserEvent userId. */
    public userId: string;

    /** TrophyRewardedToUserEvent trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new TrophyRewardedToUserEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TrophyRewardedToUserEvent instance
     */
    public static create(properties?: ITrophyRewardedToUserEvent): TrophyRewardedToUserEvent;

    /**
     * Encodes the specified TrophyRewardedToUserEvent message. Does not implicitly {@link TrophyRewardedToUserEvent.verify|verify} messages.
     * @param message TrophyRewardedToUserEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITrophyRewardedToUserEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TrophyRewardedToUserEvent message, length delimited. Does not implicitly {@link TrophyRewardedToUserEvent.verify|verify} messages.
     * @param message TrophyRewardedToUserEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITrophyRewardedToUserEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TrophyRewardedToUserEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TrophyRewardedToUserEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TrophyRewardedToUserEvent;

    /**
     * Decodes a TrophyRewardedToUserEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TrophyRewardedToUserEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TrophyRewardedToUserEvent;

    /**
     * Verifies a TrophyRewardedToUserEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TrophyRewardedToUserEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TrophyRewardedToUserEvent
     */
    public static fromObject(object: { [k: string]: any }): TrophyRewardedToUserEvent;

    /**
     * Creates a plain object from a TrophyRewardedToUserEvent message. Also converts values to other types if specified.
     * @param message TrophyRewardedToUserEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TrophyRewardedToUserEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TrophyRewardedToUserEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TrophyRewardedToAllEvent. */
export interface ITrophyRewardedToAllEvent {

    /** TrophyRewardedToAllEvent trophy */
    trophy?: (ITrophy|null);
}

/** Represents a TrophyRewardedToAllEvent. */
export class TrophyRewardedToAllEvent implements ITrophyRewardedToAllEvent {

    /**
     * Constructs a new TrophyRewardedToAllEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrophyRewardedToAllEvent);

    /** TrophyRewardedToAllEvent trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new TrophyRewardedToAllEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TrophyRewardedToAllEvent instance
     */
    public static create(properties?: ITrophyRewardedToAllEvent): TrophyRewardedToAllEvent;

    /**
     * Encodes the specified TrophyRewardedToAllEvent message. Does not implicitly {@link TrophyRewardedToAllEvent.verify|verify} messages.
     * @param message TrophyRewardedToAllEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITrophyRewardedToAllEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TrophyRewardedToAllEvent message, length delimited. Does not implicitly {@link TrophyRewardedToAllEvent.verify|verify} messages.
     * @param message TrophyRewardedToAllEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITrophyRewardedToAllEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TrophyRewardedToAllEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TrophyRewardedToAllEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TrophyRewardedToAllEvent;

    /**
     * Decodes a TrophyRewardedToAllEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TrophyRewardedToAllEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TrophyRewardedToAllEvent;

    /**
     * Verifies a TrophyRewardedToAllEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TrophyRewardedToAllEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TrophyRewardedToAllEvent
     */
    public static fromObject(object: { [k: string]: any }): TrophyRewardedToAllEvent;

    /**
     * Creates a plain object from a TrophyRewardedToAllEvent message. Also converts values to other types if specified.
     * @param message TrophyRewardedToAllEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TrophyRewardedToAllEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TrophyRewardedToAllEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NewChatMessageEvent. */
export interface INewChatMessageEvent {

    /** NewChatMessageEvent chatMessage */
    chatMessage?: (IChatMessage|null);
}

/** Represents a NewChatMessageEvent. */
export class NewChatMessageEvent implements INewChatMessageEvent {

    /**
     * Constructs a new NewChatMessageEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewChatMessageEvent);

    /** NewChatMessageEvent chatMessage. */
    public chatMessage?: (IChatMessage|null);

    /**
     * Creates a new NewChatMessageEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewChatMessageEvent instance
     */
    public static create(properties?: INewChatMessageEvent): NewChatMessageEvent;

    /**
     * Encodes the specified NewChatMessageEvent message. Does not implicitly {@link NewChatMessageEvent.verify|verify} messages.
     * @param message NewChatMessageEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewChatMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewChatMessageEvent message, length delimited. Does not implicitly {@link NewChatMessageEvent.verify|verify} messages.
     * @param message NewChatMessageEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewChatMessageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewChatMessageEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewChatMessageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewChatMessageEvent;

    /**
     * Decodes a NewChatMessageEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewChatMessageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewChatMessageEvent;

    /**
     * Verifies a NewChatMessageEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewChatMessageEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewChatMessageEvent
     */
    public static fromObject(object: { [k: string]: any }): NewChatMessageEvent;

    /**
     * Creates a plain object from a NewChatMessageEvent message. Also converts values to other types if specified.
     * @param message NewChatMessageEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewChatMessageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewChatMessageEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClassState. */
export interface IClassState {

    /** ClassState users */
    users?: ({ [k: string]: IUser }|null);

    /** ClassState devices */
    devices?: ({ [k: string]: IDevice }|null);

    /** ClassState chatMessages */
    chatMessages?: (IChatMessage[]|null);

    /** ClassState content */
    content?: (IContent|null);

    /** ClassState hostUserId */
    hostUserId?: (string|null);

    /** ClassState classEndedTime */
    classEndedTime?: (number|Long|null);
}

/** Represents a ClassState. */
export class ClassState implements IClassState {

    /**
     * Constructs a new ClassState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassState);

    /** ClassState users. */
    public users: { [k: string]: IUser };

    /** ClassState devices. */
    public devices: { [k: string]: IDevice };

    /** ClassState chatMessages. */
    public chatMessages: IChatMessage[];

    /** ClassState content. */
    public content?: (IContent|null);

    /** ClassState hostUserId. */
    public hostUserId: string;

    /** ClassState classEndedTime. */
    public classEndedTime: (number|Long);

    /**
     * Creates a new ClassState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassState instance
     */
    public static create(properties?: IClassState): ClassState;

    /**
     * Encodes the specified ClassState message. Does not implicitly {@link ClassState.verify|verify} messages.
     * @param message ClassState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClassState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassState message, length delimited. Does not implicitly {@link ClassState.verify|verify} messages.
     * @param message ClassState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClassState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassState;

    /**
     * Decodes a ClassState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassState;

    /**
     * Verifies a ClassState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassState
     */
    public static fromObject(object: { [k: string]: any }): ClassState;

    /**
     * Creates a plain object from a ClassState message. Also converts values to other types if specified.
     * @param message ClassState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a User. */
export interface IUser {

    /** User id */
    id?: (string|null);

    /** User name */
    name?: (string|null);

    /** User trophies */
    trophies?: (ITrophy[]|null);

    /** User deviceIds */
    deviceIds?: (string[]|null);
}

/** Represents a User. */
export class User implements IUser {

    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser);

    /** User id. */
    public id: string;

    /** User name. */
    public name: string;

    /** User trophies. */
    public trophies: ITrophy[];

    /** User deviceIds. */
    public deviceIds: string[];

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: IUser): User;

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User;

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): User;

    /**
     * Verifies a User message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: User, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Trophy. */
export interface ITrophy {

    /** Trophy timestamp */
    timestamp?: (number|Long|null);

    /** Trophy type */
    type?: (string|null);
}

/** Represents a Trophy. */
export class Trophy implements ITrophy {

    /**
     * Constructs a new Trophy.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrophy);

    /** Trophy timestamp. */
    public timestamp: (number|Long);

    /** Trophy type. */
    public type: string;

    /**
     * Creates a new Trophy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Trophy instance
     */
    public static create(properties?: ITrophy): Trophy;

    /**
     * Encodes the specified Trophy message. Does not implicitly {@link Trophy.verify|verify} messages.
     * @param message Trophy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITrophy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Trophy message, length delimited. Does not implicitly {@link Trophy.verify|verify} messages.
     * @param message Trophy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITrophy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Trophy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Trophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trophy;

    /**
     * Decodes a Trophy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Trophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trophy;

    /**
     * Verifies a Trophy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Trophy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Trophy
     */
    public static fromObject(object: { [k: string]: any }): Trophy;

    /**
     * Creates a plain object from a Trophy message. Also converts values to other types if specified.
     * @param message Trophy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Trophy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Trophy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Device. */
export interface IDevice {

    /** Device id */
    id?: (string|null);

    /** Device userId */
    userId?: (string|null);

    /** Device activityStreamId */
    activityStreamId?: (string|null);

    /** Device webRtcStreamIds */
    webRtcStreamIds?: (string[]|null);
}

/** Represents a Device. */
export class Device implements IDevice {

    /**
     * Constructs a new Device.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDevice);

    /** Device id. */
    public id: string;

    /** Device userId. */
    public userId: string;

    /** Device activityStreamId. */
    public activityStreamId: string;

    /** Device webRtcStreamIds. */
    public webRtcStreamIds: string[];

    /**
     * Creates a new Device instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Device instance
     */
    public static create(properties?: IDevice): Device;

    /**
     * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
     * @param message Device message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Device message, length delimited. Does not implicitly {@link Device.verify|verify} messages.
     * @param message Device message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Device;

    /**
     * Decodes a Device message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Device;

    /**
     * Verifies a Device message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Device message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Device
     */
    public static fromObject(object: { [k: string]: any }): Device;

    /**
     * Creates a plain object from a Device message. Also converts values to other types if specified.
     * @param message Device
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Device to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage userId */
    userId?: (string|null);

    /** ChatMessage timestamp */
    timestamp?: (number|Long|null);

    /** ChatMessage text */
    text?: (string|null);
}

/** Represents a ChatMessage. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage userId. */
    public userId: string;

    /** ChatMessage timestamp. */
    public timestamp: (number|Long);

    /** ChatMessage text. */
    public text: string;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Content. */
export interface IContent {

    /** Content type */
    type?: (ContentType|null);

    /** Content contentLocation */
    contentLocation?: (string|null);
}

/** Represents a Content. */
export class Content implements IContent {

    /**
     * Constructs a new Content.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContent);

    /** Content type. */
    public type: ContentType;

    /** Content contentLocation. */
    public contentLocation: string;

    /**
     * Creates a new Content instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Content instance
     */
    public static create(properties?: IContent): Content;

    /**
     * Encodes the specified Content message. Does not implicitly {@link Content.verify|verify} messages.
     * @param message Content message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Content message, length delimited. Does not implicitly {@link Content.verify|verify} messages.
     * @param message Content message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Content message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Content;

    /**
     * Decodes a Content message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Content;

    /**
     * Verifies a Content message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Content message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Content
     */
    public static fromObject(object: { [k: string]: any }): Content;

    /**
     * Creates a plain object from a Content message. Also converts values to other types if specified.
     * @param message Content
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Content, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Content to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** ContentType enum. */
export enum ContentType {
    Blank = 0,
    Stream = 1,
    Activity = 2,
    Video = 3,
    Audio = 4,
    Image = 5,
    Camera = 6,
    Screen = 7
}
