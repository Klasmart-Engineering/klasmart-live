import * as $protobuf from "protobufjs";
/** Properties of an Action. */
export interface IAction {

    /** Action id */
    id?: (string|null);

    /** Action setDevice */
    setDevice?: (ISetDevice|null);

    /** Action removeDevice */
    removeDevice?: (IRemoveDevice|null);

    /** Action setWebRtcStream */
    setWebRtcStream?: (ISetWebRTCStream|null);

    /** Action setActivity */
    setActivity?: (ISetActivity|null);

    /** Action setHost */
    setHost?: (ISetHost|null);

    /** Action addTrophy */
    addTrophy?: (IAddTrophy|null);

    /** Action setContent */
    setContent?: (ISetContent|null);

    /** Action sendChatMessage */
    sendChatMessage?: (ISendChatMessage|null);

    /** Action userJoin */
    userJoin?: (IUserJoin|null);

    /** Action userLeave */
    userLeave?: (IUserLeave|null);

    /** Action endClass */
    endClass?: (IEndClass|null);

    /** Action heartbeat */
    heartbeat?: (IHeartbeat|null);
}

/** Represents an Action. */
export class Action implements IAction {

    /**
     * Constructs a new Action.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAction);

    /** Action id. */
    public id: string;

    /** Action setDevice. */
    public setDevice?: (ISetDevice|null);

    /** Action removeDevice. */
    public removeDevice?: (IRemoveDevice|null);

    /** Action setWebRtcStream. */
    public setWebRtcStream?: (ISetWebRTCStream|null);

    /** Action setActivity. */
    public setActivity?: (ISetActivity|null);

    /** Action setHost. */
    public setHost?: (ISetHost|null);

    /** Action addTrophy. */
    public addTrophy?: (IAddTrophy|null);

    /** Action setContent. */
    public setContent?: (ISetContent|null);

    /** Action sendChatMessage. */
    public sendChatMessage?: (ISendChatMessage|null);

    /** Action userJoin. */
    public userJoin?: (IUserJoin|null);

    /** Action userLeave. */
    public userLeave?: (IUserLeave|null);

    /** Action endClass. */
    public endClass?: (IEndClass|null);

    /** Action heartbeat. */
    public heartbeat?: (IHeartbeat|null);

    /** Action action. */
    public action?: ("setDevice"|"removeDevice"|"setWebRtcStream"|"setActivity"|"setHost"|"addTrophy"|"setContent"|"sendChatMessage"|"userJoin"|"userLeave"|"endClass"|"heartbeat");

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

/** Properties of an ActionAcknowledgement. */
export interface IActionAcknowledgement {

    /** ActionAcknowledgement id */
    id?: (string|null);

    /** ActionAcknowledgement error */
    error?: (string|null);

    /** ActionAcknowledgement code */
    code?: (number|null);
}

/** Represents an ActionAcknowledgement. */
export class ActionAcknowledgement implements IActionAcknowledgement {

    /**
     * Constructs a new ActionAcknowledgement.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionAcknowledgement);

    /** ActionAcknowledgement id. */
    public id: string;

    /** ActionAcknowledgement error. */
    public error: string;

    /** ActionAcknowledgement code. */
    public code: number;

    /**
     * Creates a new ActionAcknowledgement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionAcknowledgement instance
     */
    public static create(properties?: IActionAcknowledgement): ActionAcknowledgement;

    /**
     * Encodes the specified ActionAcknowledgement message. Does not implicitly {@link ActionAcknowledgement.verify|verify} messages.
     * @param message ActionAcknowledgement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionAcknowledgement message, length delimited. Does not implicitly {@link ActionAcknowledgement.verify|verify} messages.
     * @param message ActionAcknowledgement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionAcknowledgement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionAcknowledgement;

    /**
     * Decodes an ActionAcknowledgement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionAcknowledgement;

    /**
     * Verifies an ActionAcknowledgement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionAcknowledgement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionAcknowledgement
     */
    public static fromObject(object: { [k: string]: any }): ActionAcknowledgement;

    /**
     * Creates a plain object from an ActionAcknowledgement message. Also converts values to other types if specified.
     * @param message ActionAcknowledgement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionAcknowledgement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionAcknowledgement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserJoin. */
export interface IUserJoin {
}

/** Represents a UserJoin. */
export class UserJoin implements IUserJoin {

    /**
     * Constructs a new UserJoin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserJoin);

    /**
     * Creates a new UserJoin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserJoin instance
     */
    public static create(properties?: IUserJoin): UserJoin;

    /**
     * Encodes the specified UserJoin message. Does not implicitly {@link UserJoin.verify|verify} messages.
     * @param message UserJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserJoin message, length delimited. Does not implicitly {@link UserJoin.verify|verify} messages.
     * @param message UserJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserJoin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserJoin;

    /**
     * Decodes a UserJoin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserJoin;

    /**
     * Verifies a UserJoin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserJoin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserJoin
     */
    public static fromObject(object: { [k: string]: any }): UserJoin;

    /**
     * Creates a plain object from a UserJoin message. Also converts values to other types if specified.
     * @param message UserJoin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserJoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserJoin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserLeave. */
export interface IUserLeave {
}

/** Represents a UserLeave. */
export class UserLeave implements IUserLeave {

    /**
     * Constructs a new UserLeave.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserLeave);

    /**
     * Creates a new UserLeave instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserLeave instance
     */
    public static create(properties?: IUserLeave): UserLeave;

    /**
     * Encodes the specified UserLeave message. Does not implicitly {@link UserLeave.verify|verify} messages.
     * @param message UserLeave message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserLeave, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link UserLeave.verify|verify} messages.
     * @param message UserLeave message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserLeave, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserLeave message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserLeave;

    /**
     * Decodes a UserLeave message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserLeave;

    /**
     * Verifies a UserLeave message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserLeave
     */
    public static fromObject(object: { [k: string]: any }): UserLeave;

    /**
     * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
     * @param message UserLeave
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserLeave, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserLeave to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EndClass. */
export interface IEndClass {
}

/** Represents an EndClass. */
export class EndClass implements IEndClass {

    /**
     * Constructs a new EndClass.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEndClass);

    /**
     * Creates a new EndClass instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EndClass instance
     */
    public static create(properties?: IEndClass): EndClass;

    /**
     * Encodes the specified EndClass message. Does not implicitly {@link EndClass.verify|verify} messages.
     * @param message EndClass message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEndClass, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EndClass message, length delimited. Does not implicitly {@link EndClass.verify|verify} messages.
     * @param message EndClass message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEndClass, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EndClass message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EndClass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EndClass;

    /**
     * Decodes an EndClass message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EndClass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EndClass;

    /**
     * Verifies an EndClass message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EndClass message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EndClass
     */
    public static fromObject(object: { [k: string]: any }): EndClass;

    /**
     * Creates a plain object from an EndClass message. Also converts values to other types if specified.
     * @param message EndClass
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EndClass, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EndClass to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Heartbeat. */
export interface IHeartbeat {
}

/** Represents a Heartbeat. */
export class Heartbeat implements IHeartbeat {

    /**
     * Constructs a new Heartbeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartbeat);

    /**
     * Creates a new Heartbeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Heartbeat instance
     */
    public static create(properties?: IHeartbeat): Heartbeat;

    /**
     * Encodes the specified Heartbeat message. Does not implicitly {@link Heartbeat.verify|verify} messages.
     * @param message Heartbeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link Heartbeat.verify|verify} messages.
     * @param message Heartbeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Heartbeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Heartbeat;

    /**
     * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Heartbeat;

    /**
     * Verifies a Heartbeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Heartbeat
     */
    public static fromObject(object: { [k: string]: any }): Heartbeat;

    /**
     * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
     * @param message Heartbeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Heartbeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Heartbeat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetDevice. */
export interface ISetDevice {

    /** SetDevice deviceId */
    deviceId?: (string|null);

    /** SetDevice device */
    device?: (IDevice|null);
}

/** Represents a SetDevice. */
export class SetDevice implements ISetDevice {

    /**
     * Constructs a new SetDevice.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetDevice);

    /** SetDevice deviceId. */
    public deviceId: string;

    /** SetDevice device. */
    public device?: (IDevice|null);

    /**
     * Creates a new SetDevice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetDevice instance
     */
    public static create(properties?: ISetDevice): SetDevice;

    /**
     * Encodes the specified SetDevice message. Does not implicitly {@link SetDevice.verify|verify} messages.
     * @param message SetDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetDevice message, length delimited. Does not implicitly {@link SetDevice.verify|verify} messages.
     * @param message SetDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetDevice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetDevice;

    /**
     * Decodes a SetDevice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetDevice;

    /**
     * Verifies a SetDevice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetDevice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetDevice
     */
    public static fromObject(object: { [k: string]: any }): SetDevice;

    /**
     * Creates a plain object from a SetDevice message. Also converts values to other types if specified.
     * @param message SetDevice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetDevice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RemoveDevice. */
export interface IRemoveDevice {

    /** RemoveDevice id */
    id?: (string|null);
}

/** Represents a RemoveDevice. */
export class RemoveDevice implements IRemoveDevice {

    /**
     * Constructs a new RemoveDevice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRemoveDevice);

    /** RemoveDevice id. */
    public id: string;

    /**
     * Creates a new RemoveDevice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RemoveDevice instance
     */
    public static create(properties?: IRemoveDevice): RemoveDevice;

    /**
     * Encodes the specified RemoveDevice message. Does not implicitly {@link RemoveDevice.verify|verify} messages.
     * @param message RemoveDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRemoveDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RemoveDevice message, length delimited. Does not implicitly {@link RemoveDevice.verify|verify} messages.
     * @param message RemoveDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRemoveDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoveDevice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RemoveDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RemoveDevice;

    /**
     * Decodes a RemoveDevice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RemoveDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RemoveDevice;

    /**
     * Verifies a RemoveDevice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RemoveDevice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RemoveDevice
     */
    public static fromObject(object: { [k: string]: any }): RemoveDevice;

    /**
     * Creates a plain object from a RemoveDevice message. Also converts values to other types if specified.
     * @param message RemoveDevice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RemoveDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RemoveDevice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetWebRTCStream. */
export interface ISetWebRTCStream {

    /** SetWebRTCStream deviceId */
    deviceId?: (string|null);

    /** SetWebRTCStream streams */
    streams?: (IWebRTCStream[]|null);
}

/** Represents a SetWebRTCStream. */
export class SetWebRTCStream implements ISetWebRTCStream {

    /**
     * Constructs a new SetWebRTCStream.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetWebRTCStream);

    /** SetWebRTCStream deviceId. */
    public deviceId: string;

    /** SetWebRTCStream streams. */
    public streams: IWebRTCStream[];

    /**
     * Creates a new SetWebRTCStream instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetWebRTCStream instance
     */
    public static create(properties?: ISetWebRTCStream): SetWebRTCStream;

    /**
     * Encodes the specified SetWebRTCStream message. Does not implicitly {@link SetWebRTCStream.verify|verify} messages.
     * @param message SetWebRTCStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetWebRTCStream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetWebRTCStream message, length delimited. Does not implicitly {@link SetWebRTCStream.verify|verify} messages.
     * @param message SetWebRTCStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetWebRTCStream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetWebRTCStream message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetWebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetWebRTCStream;

    /**
     * Decodes a SetWebRTCStream message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetWebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetWebRTCStream;

    /**
     * Verifies a SetWebRTCStream message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetWebRTCStream message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetWebRTCStream
     */
    public static fromObject(object: { [k: string]: any }): SetWebRTCStream;

    /**
     * Creates a plain object from a SetWebRTCStream message. Also converts values to other types if specified.
     * @param message SetWebRTCStream
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetWebRTCStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetWebRTCStream to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetActivity. */
export interface ISetActivity {

    /** SetActivity deviceId */
    deviceId?: (string|null);

    /** SetActivity activity */
    activity?: (IActivity|null);
}

/** Represents a SetActivity. */
export class SetActivity implements ISetActivity {

    /**
     * Constructs a new SetActivity.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetActivity);

    /** SetActivity deviceId. */
    public deviceId: string;

    /** SetActivity activity. */
    public activity?: (IActivity|null);

    /**
     * Creates a new SetActivity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetActivity instance
     */
    public static create(properties?: ISetActivity): SetActivity;

    /**
     * Encodes the specified SetActivity message. Does not implicitly {@link SetActivity.verify|verify} messages.
     * @param message SetActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetActivity message, length delimited. Does not implicitly {@link SetActivity.verify|verify} messages.
     * @param message SetActivity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetActivity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetActivity;

    /**
     * Decodes a SetActivity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetActivity;

    /**
     * Verifies a SetActivity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetActivity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetActivity
     */
    public static fromObject(object: { [k: string]: any }): SetActivity;

    /**
     * Creates a plain object from a SetActivity message. Also converts values to other types if specified.
     * @param message SetActivity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetActivity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetHost. */
export interface ISetHost {

    /** SetHost id */
    id?: (string|null);
}

/** Represents a SetHost. */
export class SetHost implements ISetHost {

    /**
     * Constructs a new SetHost.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetHost);

    /** SetHost id. */
    public id: string;

    /**
     * Creates a new SetHost instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetHost instance
     */
    public static create(properties?: ISetHost): SetHost;

    /**
     * Encodes the specified SetHost message. Does not implicitly {@link SetHost.verify|verify} messages.
     * @param message SetHost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetHost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetHost message, length delimited. Does not implicitly {@link SetHost.verify|verify} messages.
     * @param message SetHost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetHost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetHost message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetHost;

    /**
     * Decodes a SetHost message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetHost;

    /**
     * Verifies a SetHost message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetHost message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetHost
     */
    public static fromObject(object: { [k: string]: any }): SetHost;

    /**
     * Creates a plain object from a SetHost message. Also converts values to other types if specified.
     * @param message SetHost
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetHost to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AddTrophy. */
export interface IAddTrophy {

    /** AddTrophy trophyId */
    trophyId?: (string|null);

    /** AddTrophy timestamp */
    timestamp?: (number|Long|null);

    /** AddTrophy userId */
    userId?: (string|null);
}

/** Represents an AddTrophy. */
export class AddTrophy implements IAddTrophy {

    /**
     * Constructs a new AddTrophy.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAddTrophy);

    /** AddTrophy trophyId. */
    public trophyId: string;

    /** AddTrophy timestamp. */
    public timestamp: (number|Long);

    /** AddTrophy userId. */
    public userId: string;

    /**
     * Creates a new AddTrophy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddTrophy instance
     */
    public static create(properties?: IAddTrophy): AddTrophy;

    /**
     * Encodes the specified AddTrophy message. Does not implicitly {@link AddTrophy.verify|verify} messages.
     * @param message AddTrophy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAddTrophy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AddTrophy message, length delimited. Does not implicitly {@link AddTrophy.verify|verify} messages.
     * @param message AddTrophy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAddTrophy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddTrophy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AddTrophy;

    /**
     * Decodes an AddTrophy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AddTrophy;

    /**
     * Verifies an AddTrophy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AddTrophy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddTrophy
     */
    public static fromObject(object: { [k: string]: any }): AddTrophy;

    /**
     * Creates a plain object from an AddTrophy message. Also converts values to other types if specified.
     * @param message AddTrophy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AddTrophy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AddTrophy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetContent. */
export interface ISetContent {

    /** SetContent content */
    content?: (IContent|null);
}

/** Represents a SetContent. */
export class SetContent implements ISetContent {

    /**
     * Constructs a new SetContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetContent);

    /** SetContent content. */
    public content?: (IContent|null);

    /**
     * Creates a new SetContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetContent instance
     */
    public static create(properties?: ISetContent): SetContent;

    /**
     * Encodes the specified SetContent message. Does not implicitly {@link SetContent.verify|verify} messages.
     * @param message SetContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetContent message, length delimited. Does not implicitly {@link SetContent.verify|verify} messages.
     * @param message SetContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetContent;

    /**
     * Decodes a SetContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetContent;

    /**
     * Verifies a SetContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetContent
     */
    public static fromObject(object: { [k: string]: any }): SetContent;

    /**
     * Creates a plain object from a SetContent message. Also converts values to other types if specified.
     * @param message SetContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SendChatMessage. */
export interface ISendChatMessage {

    /** SendChatMessage message */
    message?: (string|null);
}

/** Represents a SendChatMessage. */
export class SendChatMessage implements ISendChatMessage {

    /**
     * Constructs a new SendChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendChatMessage);

    /** SendChatMessage message. */
    public message: string;

    /**
     * Creates a new SendChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendChatMessage instance
     */
    public static create(properties?: ISendChatMessage): SendChatMessage;

    /**
     * Encodes the specified SendChatMessage message. Does not implicitly {@link SendChatMessage.verify|verify} messages.
     * @param message SendChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendChatMessage message, length delimited. Does not implicitly {@link SendChatMessage.verify|verify} messages.
     * @param message SendChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendChatMessage;

    /**
     * Decodes a SendChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendChatMessage;

    /**
     * Verifies a SendChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendChatMessage
     */
    public static fromObject(object: { [k: string]: any }): SendChatMessage;

    /**
     * Creates a plain object from a SendChatMessage message. Also converts values to other types if specified.
     * @param message SendChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StateChanges. */
export interface IStateChanges {

    /** StateChanges changes */
    changes?: (IStateDiff[]|null);
}

/** Represents a StateChanges. */
export class StateChanges implements IStateChanges {

    /**
     * Constructs a new StateChanges.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStateChanges);

    /** StateChanges changes. */
    public changes: IStateDiff[];

    /**
     * Creates a new StateChanges instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StateChanges instance
     */
    public static create(properties?: IStateChanges): StateChanges;

    /**
     * Encodes the specified StateChanges message. Does not implicitly {@link StateChanges.verify|verify} messages.
     * @param message StateChanges message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStateChanges, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StateChanges message, length delimited. Does not implicitly {@link StateChanges.verify|verify} messages.
     * @param message StateChanges message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStateChanges, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StateChanges message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StateChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StateChanges;

    /**
     * Decodes a StateChanges message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StateChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StateChanges;

    /**
     * Verifies a StateChanges message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StateChanges message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StateChanges
     */
    public static fromObject(object: { [k: string]: any }): StateChanges;

    /**
     * Creates a plain object from a StateChanges message. Also converts values to other types if specified.
     * @param message StateChanges
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StateChanges, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StateChanges to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StateDiff. */
export interface IStateDiff {

    /** StateDiff setState */
    setState?: (IState|null);

    /** StateDiff addParticipants */
    addParticipants?: (IAddParticipants|null);

    /** StateDiff removeParticipants */
    removeParticipants?: (IRemoveParticipants|null);

    /** StateDiff changeContent */
    changeContent?: (IChangeContent|null);

    /** StateDiff changeHost */
    changeHost?: (IChangeHost|null);

    /** StateDiff appendChatMessage */
    appendChatMessage?: (IAppendChatMessage|null);

    /** StateDiff receiveTrophy */
    receiveTrophy?: (IReceiveTrophy|null);

    /** StateDiff classEnded */
    classEnded?: (IClassEnded|null);
}

/** Represents a StateDiff. */
export class StateDiff implements IStateDiff {

    /**
     * Constructs a new StateDiff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStateDiff);

    /** StateDiff setState. */
    public setState?: (IState|null);

    /** StateDiff addParticipants. */
    public addParticipants?: (IAddParticipants|null);

    /** StateDiff removeParticipants. */
    public removeParticipants?: (IRemoveParticipants|null);

    /** StateDiff changeContent. */
    public changeContent?: (IChangeContent|null);

    /** StateDiff changeHost. */
    public changeHost?: (IChangeHost|null);

    /** StateDiff appendChatMessage. */
    public appendChatMessage?: (IAppendChatMessage|null);

    /** StateDiff receiveTrophy. */
    public receiveTrophy?: (IReceiveTrophy|null);

    /** StateDiff classEnded. */
    public classEnded?: (IClassEnded|null);

    /** StateDiff action. */
    public action?: ("setState"|"addParticipants"|"removeParticipants"|"changeContent"|"changeHost"|"appendChatMessage"|"receiveTrophy"|"classEnded");

    /**
     * Creates a new StateDiff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StateDiff instance
     */
    public static create(properties?: IStateDiff): StateDiff;

    /**
     * Encodes the specified StateDiff message. Does not implicitly {@link StateDiff.verify|verify} messages.
     * @param message StateDiff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStateDiff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StateDiff message, length delimited. Does not implicitly {@link StateDiff.verify|verify} messages.
     * @param message StateDiff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStateDiff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StateDiff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StateDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StateDiff;

    /**
     * Decodes a StateDiff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StateDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StateDiff;

    /**
     * Verifies a StateDiff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StateDiff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StateDiff
     */
    public static fromObject(object: { [k: string]: any }): StateDiff;

    /**
     * Creates a plain object from a StateDiff message. Also converts values to other types if specified.
     * @param message StateDiff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StateDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StateDiff to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Participant. */
export interface IParticipant {

    /** Participant name */
    name?: (string|null);

    /** Participant devices */
    devices?: ({ [k: string]: IDevice }|null);

    /** Participant trophies */
    trophies?: (ITrophy[]|null);
}

/** Represents a Participant. */
export class Participant implements IParticipant {

    /**
     * Constructs a new Participant.
     * @param [properties] Properties to set
     */
    constructor(properties?: IParticipant);

    /** Participant name. */
    public name: string;

    /** Participant devices. */
    public devices: { [k: string]: IDevice };

    /** Participant trophies. */
    public trophies: ITrophy[];

    /**
     * Creates a new Participant instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Participant instance
     */
    public static create(properties?: IParticipant): Participant;

    /**
     * Encodes the specified Participant message. Does not implicitly {@link Participant.verify|verify} messages.
     * @param message Participant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Participant message, length delimited. Does not implicitly {@link Participant.verify|verify} messages.
     * @param message Participant message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Participant message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Participant;

    /**
     * Decodes a Participant message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Participant;

    /**
     * Verifies a Participant message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Participant message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Participant
     */
    public static fromObject(object: { [k: string]: any }): Participant;

    /**
     * Creates a plain object from a Participant message. Also converts values to other types if specified.
     * @param message Participant
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Participant, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Participant to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a State. */
export interface IState {

    /** State roomId */
    roomId?: (string|null);

    /** State participants */
    participants?: ({ [k: string]: IParticipant }|null);

    /** State host */
    host?: (string|null);

    /** State content */
    content?: (IContent|null);

    /** State chatMessages */
    chatMessages?: (IChatMessage[]|null);

    /** State endTimestamp */
    endTimestamp?: (number|null);
}

/** Represents a State. */
export class State implements IState {

    /**
     * Constructs a new State.
     * @param [properties] Properties to set
     */
    constructor(properties?: IState);

    /** State roomId. */
    public roomId: string;

    /** State participants. */
    public participants: { [k: string]: IParticipant };

    /** State host. */
    public host: string;

    /** State content. */
    public content?: (IContent|null);

    /** State chatMessages. */
    public chatMessages: IChatMessage[];

    /** State endTimestamp. */
    public endTimestamp: number;

    /**
     * Creates a new State instance using the specified properties.
     * @param [properties] Properties to set
     * @returns State instance
     */
    public static create(properties?: IState): State;

    /**
     * Encodes the specified State message. Does not implicitly {@link State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a State message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): State;

    /**
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): State;

    /**
     * Verifies a State message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns State
     */
    public static fromObject(object: { [k: string]: any }): State;

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @param message State
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: State, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this State to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AddParticipants. */
export interface IAddParticipants {

    /** AddParticipants participants */
    participants?: ({ [k: string]: IParticipant }|null);
}

/** Represents an AddParticipants. */
export class AddParticipants implements IAddParticipants {

    /**
     * Constructs a new AddParticipants.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAddParticipants);

    /** AddParticipants participants. */
    public participants: { [k: string]: IParticipant };

    /**
     * Creates a new AddParticipants instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddParticipants instance
     */
    public static create(properties?: IAddParticipants): AddParticipants;

    /**
     * Encodes the specified AddParticipants message. Does not implicitly {@link AddParticipants.verify|verify} messages.
     * @param message AddParticipants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAddParticipants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AddParticipants message, length delimited. Does not implicitly {@link AddParticipants.verify|verify} messages.
     * @param message AddParticipants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAddParticipants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddParticipants message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AddParticipants;

    /**
     * Decodes an AddParticipants message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AddParticipants;

    /**
     * Verifies an AddParticipants message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AddParticipants message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddParticipants
     */
    public static fromObject(object: { [k: string]: any }): AddParticipants;

    /**
     * Creates a plain object from an AddParticipants message. Also converts values to other types if specified.
     * @param message AddParticipants
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AddParticipants, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AddParticipants to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RemoveParticipants. */
export interface IRemoveParticipants {

    /** RemoveParticipants participants */
    participants?: (string[]|null);
}

/** Represents a RemoveParticipants. */
export class RemoveParticipants implements IRemoveParticipants {

    /**
     * Constructs a new RemoveParticipants.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRemoveParticipants);

    /** RemoveParticipants participants. */
    public participants: string[];

    /**
     * Creates a new RemoveParticipants instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RemoveParticipants instance
     */
    public static create(properties?: IRemoveParticipants): RemoveParticipants;

    /**
     * Encodes the specified RemoveParticipants message. Does not implicitly {@link RemoveParticipants.verify|verify} messages.
     * @param message RemoveParticipants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRemoveParticipants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RemoveParticipants message, length delimited. Does not implicitly {@link RemoveParticipants.verify|verify} messages.
     * @param message RemoveParticipants message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRemoveParticipants, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoveParticipants message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RemoveParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RemoveParticipants;

    /**
     * Decodes a RemoveParticipants message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RemoveParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RemoveParticipants;

    /**
     * Verifies a RemoveParticipants message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RemoveParticipants message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RemoveParticipants
     */
    public static fromObject(object: { [k: string]: any }): RemoveParticipants;

    /**
     * Creates a plain object from a RemoveParticipants message. Also converts values to other types if specified.
     * @param message RemoveParticipants
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RemoveParticipants, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RemoveParticipants to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChangeContent. */
export interface IChangeContent {

    /** ChangeContent content */
    content?: (IContent|null);
}

/** Represents a ChangeContent. */
export class ChangeContent implements IChangeContent {

    /**
     * Constructs a new ChangeContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangeContent);

    /** ChangeContent content. */
    public content?: (IContent|null);

    /**
     * Creates a new ChangeContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeContent instance
     */
    public static create(properties?: IChangeContent): ChangeContent;

    /**
     * Encodes the specified ChangeContent message. Does not implicitly {@link ChangeContent.verify|verify} messages.
     * @param message ChangeContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangeContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangeContent message, length delimited. Does not implicitly {@link ChangeContent.verify|verify} messages.
     * @param message ChangeContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangeContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangeContent;

    /**
     * Decodes a ChangeContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangeContent;

    /**
     * Verifies a ChangeContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChangeContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangeContent
     */
    public static fromObject(object: { [k: string]: any }): ChangeContent;

    /**
     * Creates a plain object from a ChangeContent message. Also converts values to other types if specified.
     * @param message ChangeContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangeContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangeContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChangeHost. */
export interface IChangeHost {

    /** ChangeHost hostId */
    hostId?: (string|null);
}

/** Represents a ChangeHost. */
export class ChangeHost implements IChangeHost {

    /**
     * Constructs a new ChangeHost.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangeHost);

    /** ChangeHost hostId. */
    public hostId: string;

    /**
     * Creates a new ChangeHost instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangeHost instance
     */
    public static create(properties?: IChangeHost): ChangeHost;

    /**
     * Encodes the specified ChangeHost message. Does not implicitly {@link ChangeHost.verify|verify} messages.
     * @param message ChangeHost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangeHost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangeHost message, length delimited. Does not implicitly {@link ChangeHost.verify|verify} messages.
     * @param message ChangeHost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangeHost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangeHost message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangeHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangeHost;

    /**
     * Decodes a ChangeHost message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangeHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangeHost;

    /**
     * Verifies a ChangeHost message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChangeHost message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangeHost
     */
    public static fromObject(object: { [k: string]: any }): ChangeHost;

    /**
     * Creates a plain object from a ChangeHost message. Also converts values to other types if specified.
     * @param message ChangeHost
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangeHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangeHost to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AppendChatMessage. */
export interface IAppendChatMessage {

    /** AppendChatMessage messages */
    messages?: (IChatMessage[]|null);
}

/** Represents an AppendChatMessage. */
export class AppendChatMessage implements IAppendChatMessage {

    /**
     * Constructs a new AppendChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppendChatMessage);

    /** AppendChatMessage messages. */
    public messages: IChatMessage[];

    /**
     * Creates a new AppendChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppendChatMessage instance
     */
    public static create(properties?: IAppendChatMessage): AppendChatMessage;

    /**
     * Encodes the specified AppendChatMessage message. Does not implicitly {@link AppendChatMessage.verify|verify} messages.
     * @param message AppendChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AppendChatMessage message, length delimited. Does not implicitly {@link AppendChatMessage.verify|verify} messages.
     * @param message AppendChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppendChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppendChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AppendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppendChatMessage;

    /**
     * Decodes an AppendChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AppendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppendChatMessage;

    /**
     * Verifies an AppendChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AppendChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AppendChatMessage
     */
    public static fromObject(object: { [k: string]: any }): AppendChatMessage;

    /**
     * Creates a plain object from an AppendChatMessage message. Also converts values to other types if specified.
     * @param message AppendChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AppendChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AppendChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReceiveTrophy. */
export interface IReceiveTrophy {

    /** ReceiveTrophy trophy */
    trophy?: (ITrophy|null);
}

/** Represents a ReceiveTrophy. */
export class ReceiveTrophy implements IReceiveTrophy {

    /**
     * Constructs a new ReceiveTrophy.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReceiveTrophy);

    /** ReceiveTrophy trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new ReceiveTrophy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReceiveTrophy instance
     */
    public static create(properties?: IReceiveTrophy): ReceiveTrophy;

    /**
     * Encodes the specified ReceiveTrophy message. Does not implicitly {@link ReceiveTrophy.verify|verify} messages.
     * @param message ReceiveTrophy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReceiveTrophy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReceiveTrophy message, length delimited. Does not implicitly {@link ReceiveTrophy.verify|verify} messages.
     * @param message ReceiveTrophy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReceiveTrophy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReceiveTrophy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReceiveTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveTrophy;

    /**
     * Decodes a ReceiveTrophy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReceiveTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveTrophy;

    /**
     * Verifies a ReceiveTrophy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReceiveTrophy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReceiveTrophy
     */
    public static fromObject(object: { [k: string]: any }): ReceiveTrophy;

    /**
     * Creates a plain object from a ReceiveTrophy message. Also converts values to other types if specified.
     * @param message ReceiveTrophy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReceiveTrophy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReceiveTrophy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClassEnded. */
export interface IClassEnded {
}

/** Represents a ClassEnded. */
export class ClassEnded implements IClassEnded {

    /**
     * Constructs a new ClassEnded.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClassEnded);

    /**
     * Creates a new ClassEnded instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClassEnded instance
     */
    public static create(properties?: IClassEnded): ClassEnded;

    /**
     * Encodes the specified ClassEnded message. Does not implicitly {@link ClassEnded.verify|verify} messages.
     * @param message ClassEnded message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClassEnded, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClassEnded message, length delimited. Does not implicitly {@link ClassEnded.verify|verify} messages.
     * @param message ClassEnded message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClassEnded, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClassEnded message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClassEnded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClassEnded;

    /**
     * Decodes a ClassEnded message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClassEnded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClassEnded;

    /**
     * Verifies a ClassEnded message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClassEnded message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClassEnded
     */
    public static fromObject(object: { [k: string]: any }): ClassEnded;

    /**
     * Creates a plain object from a ClassEnded message. Also converts values to other types if specified.
     * @param message ClassEnded
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClassEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClassEnded to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Device. */
export interface IDevice {

    /** Device activity */
    activity?: (IActivity|null);

    /** Device webRTCStreams */
    webRTCStreams?: (IWebRTCStream[]|null);
}

/** Represents a Device. */
export class Device implements IDevice {

    /**
     * Constructs a new Device.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDevice);

    /** Device activity. */
    public activity?: (IActivity|null);

    /** Device webRTCStreams. */
    public webRTCStreams: IWebRTCStream[];

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

/** Properties of an Activity. */
export interface IActivity {

    /** Activity id */
    id?: (string|null);

    /** Activity streamId */
    streamId?: (string|null);
}

/** Represents an Activity. */
export class Activity implements IActivity {

    /**
     * Constructs a new Activity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActivity);

    /** Activity id. */
    public id: string;

    /** Activity streamId. */
    public streamId: string;

    /**
     * Creates a new Activity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Activity instance
     */
    public static create(properties?: IActivity): Activity;

    /**
     * Encodes the specified Activity message. Does not implicitly {@link Activity.verify|verify} messages.
     * @param message Activity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Activity message, length delimited. Does not implicitly {@link Activity.verify|verify} messages.
     * @param message Activity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActivity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Activity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Activity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Activity;

    /**
     * Decodes an Activity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Activity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Activity;

    /**
     * Verifies an Activity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Activity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Activity
     */
    public static fromObject(object: { [k: string]: any }): Activity;

    /**
     * Creates a plain object from an Activity message. Also converts values to other types if specified.
     * @param message Activity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Activity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Activity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WebRTCStream. */
export interface IWebRTCStream {

    /** WebRTCStream id */
    id?: (string|null);

    /** WebRTCStream label */
    label?: (string|null);

    /** WebRTCStream tracks */
    tracks?: (IWebRTCTrack[]|null);
}

/** Represents a WebRTCStream. */
export class WebRTCStream implements IWebRTCStream {

    /**
     * Constructs a new WebRTCStream.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebRTCStream);

    /** WebRTCStream id. */
    public id: string;

    /** WebRTCStream label. */
    public label: string;

    /** WebRTCStream tracks. */
    public tracks: IWebRTCTrack[];

    /**
     * Creates a new WebRTCStream instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebRTCStream instance
     */
    public static create(properties?: IWebRTCStream): WebRTCStream;

    /**
     * Encodes the specified WebRTCStream message. Does not implicitly {@link WebRTCStream.verify|verify} messages.
     * @param message WebRTCStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebRTCStream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WebRTCStream message, length delimited. Does not implicitly {@link WebRTCStream.verify|verify} messages.
     * @param message WebRTCStream message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWebRTCStream, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebRTCStream message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebRTCStream;

    /**
     * Decodes a WebRTCStream message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WebRTCStream;

    /**
     * Verifies a WebRTCStream message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WebRTCStream message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebRTCStream
     */
    public static fromObject(object: { [k: string]: any }): WebRTCStream;

    /**
     * Creates a plain object from a WebRTCStream message. Also converts values to other types if specified.
     * @param message WebRTCStream
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WebRTCStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WebRTCStream to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WebRTCTrack. */
export interface IWebRTCTrack {

    /** WebRTCTrack id */
    id?: (string|null);

    /** WebRTCTrack sfu */
    sfu?: (string|null);
}

/** Represents a WebRTCTrack. */
export class WebRTCTrack implements IWebRTCTrack {

    /**
     * Constructs a new WebRTCTrack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebRTCTrack);

    /** WebRTCTrack id. */
    public id: string;

    /** WebRTCTrack sfu. */
    public sfu: string;

    /**
     * Creates a new WebRTCTrack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebRTCTrack instance
     */
    public static create(properties?: IWebRTCTrack): WebRTCTrack;

    /**
     * Encodes the specified WebRTCTrack message. Does not implicitly {@link WebRTCTrack.verify|verify} messages.
     * @param message WebRTCTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebRTCTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WebRTCTrack message, length delimited. Does not implicitly {@link WebRTCTrack.verify|verify} messages.
     * @param message WebRTCTrack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWebRTCTrack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebRTCTrack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebRTCTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebRTCTrack;

    /**
     * Decodes a WebRTCTrack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebRTCTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WebRTCTrack;

    /**
     * Verifies a WebRTCTrack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WebRTCTrack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebRTCTrack
     */
    public static fromObject(object: { [k: string]: any }): WebRTCTrack;

    /**
     * Creates a plain object from a WebRTCTrack message. Also converts values to other types if specified.
     * @param message WebRTCTrack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WebRTCTrack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WebRTCTrack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Trophy. */
export interface ITrophy {

    /** Trophy trophy */
    trophy?: (string|null);

    /** Trophy timestamp */
    timestamp?: (number|null);
}

/** Represents a Trophy. */
export class Trophy implements ITrophy {

    /**
     * Constructs a new Trophy.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrophy);

    /** Trophy trophy. */
    public trophy: string;

    /** Trophy timestamp. */
    public timestamp: number;

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

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage message */
    message?: (string|null);

    /** ChatMessage fromUser */
    fromUser?: (string|null);

    /** ChatMessage timestamp */
    timestamp?: (number|null);
}

/** Represents a ChatMessage. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage message. */
    public message: string;

    /** ChatMessage fromUser. */
    public fromUser: string;

    /** ChatMessage timestamp. */
    public timestamp: number;

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

/** ContentType enum. */
export enum ContentType {
    Blank = 0,
    WebRtcStream = 1,
    ActivityStream = 2,
    H5P = 3,
    Image = 4,
    Video = 5,
    Audio = 6
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

    /** Content id. */
    public id: string;

    /** Content url. */
    public url: string;

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
