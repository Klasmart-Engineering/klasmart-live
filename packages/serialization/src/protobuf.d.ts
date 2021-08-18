import * as $protobuf from "protobufjs";
/** Properties of a WebRTCStreamUpdate. */
export interface IWebRTCStreamUpdate {

    /** WebRTCStreamUpdate label */
    label?: (string|null);

    /** WebRTCStreamUpdate sfu */
    sfu?: (string|null);

    /** WebRTCStreamUpdate trackIDs */
    trackIDs?: (string[]|null);

    /** WebRTCStreamUpdate removeTrackIDs */
    removeTrackIDs?: (string[]|null);
}

/** Represents a WebRTCStreamUpdate. */
export class WebRTCStreamUpdate implements IWebRTCStreamUpdate {

    /**
     * Constructs a new WebRTCStreamUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebRTCStreamUpdate);

    /** WebRTCStreamUpdate label. */
    public label: string;

    /** WebRTCStreamUpdate sfu. */
    public sfu: string;

    /** WebRTCStreamUpdate trackIDs. */
    public trackIDs: string[];

    /** WebRTCStreamUpdate removeTrackIDs. */
    public removeTrackIDs: string[];

    /**
     * Creates a new WebRTCStreamUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebRTCStreamUpdate instance
     */
    public static create(properties?: IWebRTCStreamUpdate): WebRTCStreamUpdate;

    /**
     * Encodes the specified WebRTCStreamUpdate message. Does not implicitly {@link WebRTCStreamUpdate.verify|verify} messages.
     * @param message WebRTCStreamUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebRTCStreamUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WebRTCStreamUpdate message, length delimited. Does not implicitly {@link WebRTCStreamUpdate.verify|verify} messages.
     * @param message WebRTCStreamUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWebRTCStreamUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebRTCStreamUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebRTCStreamUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebRTCStreamUpdate;

    /**
     * Decodes a WebRTCStreamUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebRTCStreamUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WebRTCStreamUpdate;

    /**
     * Verifies a WebRTCStreamUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WebRTCStreamUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebRTCStreamUpdate
     */
    public static fromObject(object: { [k: string]: any }): WebRTCStreamUpdate;

    /**
     * Creates a plain object from a WebRTCStreamUpdate message. Also converts values to other types if specified.
     * @param message WebRTCStreamUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WebRTCStreamUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WebRTCStreamUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeviceUpdate. */
export interface IDeviceUpdate {

    /** DeviceUpdate activityId */
    activityId?: (string|null);

    /** DeviceUpdate activityStreamId */
    activityStreamId?: (string|null);

    /** DeviceUpdate webRTCStreams */
    webRTCStreams?: ({ [k: string]: IWebRTCStreamUpdate }|null);

    /** DeviceUpdate removeWebRTCStreamIDs */
    removeWebRTCStreamIDs?: (string[]|null);
}

/** Represents a DeviceUpdate. */
export class DeviceUpdate implements IDeviceUpdate {

    /**
     * Constructs a new DeviceUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceUpdate);

    /** DeviceUpdate activityId. */
    public activityId: string;

    /** DeviceUpdate activityStreamId. */
    public activityStreamId: string;

    /** DeviceUpdate webRTCStreams. */
    public webRTCStreams: { [k: string]: IWebRTCStreamUpdate };

    /** DeviceUpdate removeWebRTCStreamIDs. */
    public removeWebRTCStreamIDs: string[];

    /**
     * Creates a new DeviceUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceUpdate instance
     */
    public static create(properties?: IDeviceUpdate): DeviceUpdate;

    /**
     * Encodes the specified DeviceUpdate message. Does not implicitly {@link DeviceUpdate.verify|verify} messages.
     * @param message DeviceUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceUpdate message, length delimited. Does not implicitly {@link DeviceUpdate.verify|verify} messages.
     * @param message DeviceUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceUpdate;

    /**
     * Decodes a DeviceUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceUpdate;

    /**
     * Verifies a DeviceUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceUpdate
     */
    public static fromObject(object: { [k: string]: any }): DeviceUpdate;

    /**
     * Creates a plain object from a DeviceUpdate message. Also converts values to other types if specified.
     * @param message DeviceUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage timestamp */
    timestamp?: (number|null);

    /** ChatMessage message */
    message?: (string|null);
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

    /** ChatMessage message. */
    public message: string;

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

/** Properties of a Trophy. */
export interface ITrophy {

    /** Trophy timestamp */
    timestamp?: (number|null);

    /** Trophy trophy */
    trophy?: (string|null);
}

/** Represents a Trophy. */
export class Trophy implements ITrophy {

    /**
     * Constructs a new Trophy.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrophy);

    /** Trophy timestamp. */
    public timestamp: number;

    /** Trophy trophy. */
    public trophy: string;

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

/** Properties of a UserUpdate. */
export interface IUserUpdate {

    /** UserUpdate name */
    name?: (string|null);

    /** UserUpdate devices */
    devices?: ({ [k: string]: IDeviceUpdate }|null);

    /** UserUpdate removeDeviceIDs */
    removeDeviceIDs?: (string[]|null);

    /** UserUpdate trophies */
    trophies?: (ITrophy[]|null);

    /** UserUpdate chatMessages */
    chatMessages?: (IChatMessage[]|null);
}

/** Represents a UserUpdate. */
export class UserUpdate implements IUserUpdate {

    /**
     * Constructs a new UserUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserUpdate);

    /** UserUpdate name. */
    public name: string;

    /** UserUpdate devices. */
    public devices: { [k: string]: IDeviceUpdate };

    /** UserUpdate removeDeviceIDs. */
    public removeDeviceIDs: string[];

    /** UserUpdate trophies. */
    public trophies: ITrophy[];

    /** UserUpdate chatMessages. */
    public chatMessages: IChatMessage[];

    /**
     * Creates a new UserUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserUpdate instance
     */
    public static create(properties?: IUserUpdate): UserUpdate;

    /**
     * Encodes the specified UserUpdate message. Does not implicitly {@link UserUpdate.verify|verify} messages.
     * @param message UserUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserUpdate message, length delimited. Does not implicitly {@link UserUpdate.verify|verify} messages.
     * @param message UserUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserUpdate;

    /**
     * Decodes a UserUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserUpdate;

    /**
     * Verifies a UserUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserUpdate
     */
    public static fromObject(object: { [k: string]: any }): UserUpdate;

    /**
     * Creates a plain object from a UserUpdate message. Also converts values to other types if specified.
     * @param message UserUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Content. */
export interface IContent {

    /** Content contentType */
    contentType?: (ContentType|null);

    /** Content id */
    id?: (string|null);
}

/** Represents a Content. */
export class Content implements IContent {

    /**
     * Constructs a new Content.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContent);

    /** Content contentType. */
    public contentType: ContentType;

    /** Content id. */
    public id: string;

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

/** Properties of a RoomUpdate. */
export interface IRoomUpdate {

    /** RoomUpdate teachers */
    teachers?: ({ [k: string]: IUserUpdate }|null);

    /** RoomUpdate students */
    students?: ({ [k: string]: IUserUpdate }|null);

    /** RoomUpdate host */
    host?: (string|null);

    /** RoomUpdate content */
    content?: (IContent|null);

    /** RoomUpdate endTimestamp */
    endTimestamp?: (number|null);
}

/** Represents a RoomUpdate. */
export class RoomUpdate implements IRoomUpdate {

    /**
     * Constructs a new RoomUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomUpdate);

    /** RoomUpdate teachers. */
    public teachers: { [k: string]: IUserUpdate };

    /** RoomUpdate students. */
    public students: { [k: string]: IUserUpdate };

    /** RoomUpdate host. */
    public host: string;

    /** RoomUpdate content. */
    public content?: (IContent|null);

    /** RoomUpdate endTimestamp. */
    public endTimestamp: number;

    /**
     * Creates a new RoomUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomUpdate instance
     */
    public static create(properties?: IRoomUpdate): RoomUpdate;

    /**
     * Encodes the specified RoomUpdate message. Does not implicitly {@link RoomUpdate.verify|verify} messages.
     * @param message RoomUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomUpdate message, length delimited. Does not implicitly {@link RoomUpdate.verify|verify} messages.
     * @param message RoomUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomUpdate;

    /**
     * Decodes a RoomUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomUpdate;

    /**
     * Verifies a RoomUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomUpdate
     */
    public static fromObject(object: { [k: string]: any }): RoomUpdate;

    /**
     * Creates a plain object from a RoomUpdate message. Also converts values to other types if specified.
     * @param message RoomUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StateUpdate. */
export interface IStateUpdate {

    /** StateUpdate actionCount */
    actionCount?: (number|null);

    /** StateUpdate room */
    room?: (IRoomUpdate|null);
}

/** Represents a StateUpdate. */
export class StateUpdate implements IStateUpdate {

    /**
     * Constructs a new StateUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStateUpdate);

    /** StateUpdate actionCount. */
    public actionCount: number;

    /** StateUpdate room. */
    public room?: (IRoomUpdate|null);

    /**
     * Creates a new StateUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StateUpdate instance
     */
    public static create(properties?: IStateUpdate): StateUpdate;

    /**
     * Encodes the specified StateUpdate message. Does not implicitly {@link StateUpdate.verify|verify} messages.
     * @param message StateUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StateUpdate message, length delimited. Does not implicitly {@link StateUpdate.verify|verify} messages.
     * @param message StateUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStateUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StateUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StateUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StateUpdate;

    /**
     * Decodes a StateUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StateUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StateUpdate;

    /**
     * Verifies a StateUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StateUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StateUpdate
     */
    public static fromObject(object: { [k: string]: any }): StateUpdate;

    /**
     * Creates a plain object from a StateUpdate message. Also converts values to other types if specified.
     * @param message StateUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StateUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StateUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Connect. */
export interface IConnect {

    /** Connect deviceId */
    deviceId?: (string|null);

    /** Connect jwt */
    jwt?: (string|null);
}

/** Represents a Connect. */
export class Connect implements IConnect {

    /**
     * Constructs a new Connect.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnect);

    /** Connect deviceId. */
    public deviceId: string;

    /** Connect jwt. */
    public jwt: string;

    /**
     * Creates a new Connect instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Connect instance
     */
    public static create(properties?: IConnect): Connect;

    /**
     * Encodes the specified Connect message. Does not implicitly {@link Connect.verify|verify} messages.
     * @param message Connect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Connect message, length delimited. Does not implicitly {@link Connect.verify|verify} messages.
     * @param message Connect message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnect, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Connect message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Connect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Connect;

    /**
     * Decodes a Connect message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Connect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Connect;

    /**
     * Verifies a Connect message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Connect message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Connect
     */
    public static fromObject(object: { [k: string]: any }): Connect;

    /**
     * Creates a plain object from a Connect message. Also converts values to other types if specified.
     * @param message Connect
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Connect, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Connect to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Action. */
export interface IAction {

    /** Action connect */
    connect?: (IConnect|null);

    /** Action device */
    device?: (IDeviceUpdate|null);

    /** Action chatMessage */
    chatMessage?: (string|null);

    /** Action end */
    end?: (boolean|null);

    /** Action content */
    content?: (IContent|null);

    /** Action host */
    host?: (string|null);

    /** Action userId */
    userId?: (string|null);

    /** Action trophy */
    trophy?: (ITrophy|null);
}

/** Represents an Action. */
export class Action implements IAction {

    /**
     * Constructs a new Action.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAction);

    /** Action connect. */
    public connect?: (IConnect|null);

    /** Action device. */
    public device?: (IDeviceUpdate|null);

    /** Action chatMessage. */
    public chatMessage: string;

    /** Action end. */
    public end: boolean;

    /** Action content. */
    public content?: (IContent|null);

    /** Action host. */
    public host: string;

    /** Action userId. */
    public userId: string;

    /** Action trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new Action instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Action instance
     */
    public static create(properties?: IAction): Action;

    /**
     * Encodes the specified Action message. Does not implicitly {@link Action.verify|verify} messages.
     * @param message Action message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Action message, length delimited. Does not implicitly {@link Action.verify|verify} messages.
     * @param message Action message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Action message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Action;

    /**
     * Decodes an Action message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Action;

    /**
     * Verifies an Action message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Action message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Action
     */
    public static fromObject(object: { [k: string]: any }): Action;

    /**
     * Creates a plain object from an Action message. Also converts values to other types if specified.
     * @param message Action
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Action to JSON.
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
