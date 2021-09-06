import * as $protobuf from "protobufjs";
/** Properties of a ServerMessage. */
export interface IServerMessage {

    /** ServerMessage roomId */
    roomId?: (string|null);

    /** ServerMessage roomAction */
    roomAction?: (IRoomAction|null);

    /** ServerMessage userActions */
    userActions?: ({ [k: string]: IUserAction }|null);

    /** ServerMessage deviceActions */
    deviceActions?: ({ [k: string]: IDeviceAction }|null);
}

/** Represents a ServerMessage. */
export class ServerMessage implements IServerMessage {

    /**
     * Constructs a new ServerMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerMessage);

    /** ServerMessage roomId. */
    public roomId: string;

    /** ServerMessage roomAction. */
    public roomAction?: (IRoomAction|null);

    /** ServerMessage userActions. */
    public userActions: { [k: string]: IUserAction };

    /** ServerMessage deviceActions. */
    public deviceActions: { [k: string]: IDeviceAction };

    /**
     * Creates a new ServerMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerMessage instance
     */
    public static create(properties?: IServerMessage): ServerMessage;

    /**
     * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @param message ServerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @param message ServerMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerMessage;

    /**
     * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerMessage;

    /**
     * Verifies a ServerMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerMessage
     */
    public static fromObject(object: { [k: string]: any }): ServerMessage;

    /**
     * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
     * @param message ServerMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientMessage. */
export interface IClientMessage {

    /** ClientMessage chatMessages */
    chatMessages?: (string[]|null);

    /** ClientMessage activityStream */
    activityStream?: (IActivityStream|null);

    /** ClientMessage roomAction */
    roomAction?: (IRoomAction|null);
}

/** Represents a ClientMessage. */
export class ClientMessage implements IClientMessage {

    /**
     * Constructs a new ClientMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientMessage);

    /** ClientMessage chatMessages. */
    public chatMessages: string[];

    /** ClientMessage activityStream. */
    public activityStream?: (IActivityStream|null);

    /** ClientMessage roomAction. */
    public roomAction?: (IRoomAction|null);

    /**
     * Creates a new ClientMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientMessage instance
     */
    public static create(properties?: IClientMessage): ClientMessage;

    /**
     * Encodes the specified ClientMessage message. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @param message ClientMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @param message ClientMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientMessage;

    /**
     * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientMessage;

    /**
     * Verifies a ClientMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientMessage
     */
    public static fromObject(object: { [k: string]: any }): ClientMessage;

    /**
     * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
     * @param message ClientMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomAction. */
export interface IRoomAction {

    /** RoomAction content */
    content?: (IContent|null);

    /** RoomAction hostId */
    hostId?: (number|null);

    /** RoomAction endTimestamp */
    endTimestamp?: (number|null);
}

/** Represents a RoomAction. */
export class RoomAction implements IRoomAction {

    /**
     * Constructs a new RoomAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomAction);

    /** RoomAction content. */
    public content?: (IContent|null);

    /** RoomAction hostId. */
    public hostId: number;

    /** RoomAction endTimestamp. */
    public endTimestamp: number;

    /**
     * Creates a new RoomAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomAction instance
     */
    public static create(properties?: IRoomAction): RoomAction;

    /**
     * Encodes the specified RoomAction message. Does not implicitly {@link RoomAction.verify|verify} messages.
     * @param message RoomAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomAction message, length delimited. Does not implicitly {@link RoomAction.verify|verify} messages.
     * @param message RoomAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomAction;

    /**
     * Decodes a RoomAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomAction;

    /**
     * Verifies a RoomAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomAction
     */
    public static fromObject(object: { [k: string]: any }): RoomAction;

    /**
     * Creates a plain object from a RoomAction message. Also converts values to other types if specified.
     * @param message RoomAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserAction. */
export interface IUserAction {

    /** UserAction name */
    name?: (string|null);

    /** UserAction teacher */
    teacher?: (boolean|null);

    /** UserAction chatMessages */
    chatMessages?: (IChatMessage[]|null);
}

/** Represents a UserAction. */
export class UserAction implements IUserAction {

    /**
     * Constructs a new UserAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserAction);

    /** UserAction name. */
    public name: string;

    /** UserAction teacher. */
    public teacher: boolean;

    /** UserAction chatMessages. */
    public chatMessages: IChatMessage[];

    /**
     * Creates a new UserAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserAction instance
     */
    public static create(properties?: IUserAction): UserAction;

    /**
     * Encodes the specified UserAction message. Does not implicitly {@link UserAction.verify|verify} messages.
     * @param message UserAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserAction message, length delimited. Does not implicitly {@link UserAction.verify|verify} messages.
     * @param message UserAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserAction;

    /**
     * Decodes a UserAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserAction;

    /**
     * Verifies a UserAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserAction
     */
    public static fromObject(object: { [k: string]: any }): UserAction;

    /**
     * Creates a plain object from a UserAction message. Also converts values to other types if specified.
     * @param message UserAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeviceAction. */
export interface IDeviceAction {

    /** DeviceAction userId */
    userId?: (number|null);

    /** DeviceAction activityStream */
    activityStream?: (IActivityStream|null);
}

/** Represents a DeviceAction. */
export class DeviceAction implements IDeviceAction {

    /**
     * Constructs a new DeviceAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceAction);

    /** DeviceAction userId. */
    public userId: number;

    /** DeviceAction activityStream. */
    public activityStream?: (IActivityStream|null);

    /**
     * Creates a new DeviceAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceAction instance
     */
    public static create(properties?: IDeviceAction): DeviceAction;

    /**
     * Encodes the specified DeviceAction message. Does not implicitly {@link DeviceAction.verify|verify} messages.
     * @param message DeviceAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceAction message, length delimited. Does not implicitly {@link DeviceAction.verify|verify} messages.
     * @param message DeviceAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceAction;

    /**
     * Decodes a DeviceAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceAction;

    /**
     * Verifies a DeviceAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceAction
     */
    public static fromObject(object: { [k: string]: any }): DeviceAction;

    /**
     * Creates a plain object from a DeviceAction message. Also converts values to other types if specified.
     * @param message DeviceAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ActivityStream. */
export interface IActivityStream {

    /** ActivityStream activityId */
    activityId?: (string|null);

    /** ActivityStream streamId */
    streamId?: (string|null);
}

/** Represents an ActivityStream. */
export class ActivityStream implements IActivityStream {

    /**
     * Constructs a new ActivityStream.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivityStream);

    /** ActivityStream activityId. */
    public activityId: string;

    /** ActivityStream streamId. */
    public streamId: string;

    /**
     * Creates a new ActivityStream instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActivityStream instance
     */
    public static create(properties?: IActivityStream): ActivityStream;

    /**
     * Encodes the specified ActivityStream message. Does not implicitly {@link ActivityStream.verify|verify} messages.
     * @param message ActivityStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivityStream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActivityStream message, length delimited. Does not implicitly {@link ActivityStream.verify|verify} messages.
     * @param message ActivityStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActivityStream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActivityStream message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActivityStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActivityStream;

    /**
     * Decodes an ActivityStream message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActivityStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActivityStream;

    /**
     * Verifies an ActivityStream message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActivityStream message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActivityStream
     */
    public static fromObject(object: { [k: string]: any }): ActivityStream;

    /**
     * Creates a plain object from an ActivityStream message. Also converts values to other types if specified.
     * @param message ActivityStream
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActivityStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActivityStream to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage timestamp */
    timestamp?: (number|null);

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

    /** ChatMessage timestamp. */
    public timestamp: number;

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

    /** Content locator */
    locator?: (string|null);
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

    /** Content locator. */
    public locator: string;

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
    WebRTCStream = 1,
    ActivityStream = 2,
    H5P = 3,
    Image = 4,
    Video = 5,
    Audio = 6
}
