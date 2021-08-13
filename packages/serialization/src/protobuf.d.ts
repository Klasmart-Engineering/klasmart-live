import * as $protobuf from "protobufjs";
/** Properties of an Action. */
export interface IAction {

    /** Action actionCount */
    actionCount?: (number|null);

    /** Action actions */
    actions?: (IRoomAction|null);
}

/** Represents an Action. */
export class Action implements IAction {

    /**
     * Constructs a new Action.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAction);

    /** Action actionCount. */
    public actionCount: number;

    /** Action actions. */
    public actions?: (IRoomAction|null);

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

/** Properties of a RoomAction. */
export interface IRoomAction {

    /** RoomAction teachers */
    teachers?: (IUserAction[]|null);

    /** RoomAction students */
    students?: (IUserAction[]|null);

    /** RoomAction host */
    host?: (string|null);

    /** RoomAction content */
    content?: (IContent|null);

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

    /** RoomAction teachers. */
    public teachers: IUserAction[];

    /** RoomAction students. */
    public students: IUserAction[];

    /** RoomAction host. */
    public host: string;

    /** RoomAction content. */
    public content?: (IContent|null);

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

    /** UserAction id */
    id?: (string|null);

    /** UserAction name */
    name?: (string|null);

    /** UserAction devices */
    devices?: (IDeviceAction[]|null);

    /** UserAction removeDeviceIDs */
    removeDeviceIDs?: (string[]|null);

    /** UserAction trophies */
    trophies?: (ITrophy[]|null);

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

    /** UserAction id. */
    public id: string;

    /** UserAction name. */
    public name: string;

    /** UserAction devices. */
    public devices: IDeviceAction[];

    /** UserAction removeDeviceIDs. */
    public removeDeviceIDs: string[];

    /** UserAction trophies. */
    public trophies: ITrophy[];

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

    /** DeviceAction id */
    id?: (string|null);

    /** DeviceAction activityId */
    activityId?: (string|null);

    /** DeviceAction activityStreamId */
    activityStreamId?: (string|null);

    /** DeviceAction webRTCStreams */
    webRTCStreams?: (IWebRTCStreamAction[]|null);

    /** DeviceAction removeWebRTCStreamIDs */
    removeWebRTCStreamIDs?: (string[]|null);
}

/** Represents a DeviceAction. */
export class DeviceAction implements IDeviceAction {

    /**
     * Constructs a new DeviceAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceAction);

    /** DeviceAction id. */
    public id: string;

    /** DeviceAction activityId. */
    public activityId: string;

    /** DeviceAction activityStreamId. */
    public activityStreamId: string;

    /** DeviceAction webRTCStreams. */
    public webRTCStreams: IWebRTCStreamAction[];

    /** DeviceAction removeWebRTCStreamIDs. */
    public removeWebRTCStreamIDs: string[];

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

/** Properties of a WebRTCStreamAction. */
export interface IWebRTCStreamAction {

    /** WebRTCStreamAction id */
    id?: (string|null);

    /** WebRTCStreamAction label */
    label?: (string|null);

    /** WebRTCStreamAction tracks */
    tracks?: (IWebRTCTrack[]|null);

    /** WebRTCStreamAction removeTrackIDs */
    removeTrackIDs?: (string[]|null);
}

/** Represents a WebRTCStreamAction. */
export class WebRTCStreamAction implements IWebRTCStreamAction {

    /**
     * Constructs a new WebRTCStreamAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWebRTCStreamAction);

    /** WebRTCStreamAction id. */
    public id: string;

    /** WebRTCStreamAction label. */
    public label: string;

    /** WebRTCStreamAction tracks. */
    public tracks: IWebRTCTrack[];

    /** WebRTCStreamAction removeTrackIDs. */
    public removeTrackIDs: string[];

    /**
     * Creates a new WebRTCStreamAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebRTCStreamAction instance
     */
    public static create(properties?: IWebRTCStreamAction): WebRTCStreamAction;

    /**
     * Encodes the specified WebRTCStreamAction message. Does not implicitly {@link WebRTCStreamAction.verify|verify} messages.
     * @param message WebRTCStreamAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWebRTCStreamAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WebRTCStreamAction message, length delimited. Does not implicitly {@link WebRTCStreamAction.verify|verify} messages.
     * @param message WebRTCStreamAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWebRTCStreamAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WebRTCStreamAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebRTCStreamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WebRTCStreamAction;

    /**
     * Decodes a WebRTCStreamAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebRTCStreamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WebRTCStreamAction;

    /**
     * Verifies a WebRTCStreamAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WebRTCStreamAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebRTCStreamAction
     */
    public static fromObject(object: { [k: string]: any }): WebRTCStreamAction;

    /**
     * Creates a plain object from a WebRTCStreamAction message. Also converts values to other types if specified.
     * @param message WebRTCStreamAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WebRTCStreamAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WebRTCStreamAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a State. */
export interface IState {

    /** State transitions */
    transitions?: (number|null);

    /** State room */
    room?: (IRoom|null);
}

/** Represents a State. */
export class State implements IState {

    /**
     * Constructs a new State.
     * @param [properties] Properties to set
     */
    constructor(properties?: IState);

    /** State transitions. */
    public transitions: number;

    /** State room. */
    public room?: (IRoom|null);

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

/** Properties of a Room. */
export interface IRoom {

    /** Room teachers */
    teachers?: (IUser[]|null);

    /** Room students */
    students?: (IUser[]|null);

    /** Room host */
    host?: (string|null);

    /** Room content */
    content?: (IContent|null);

    /** Room endTimestamp */
    endTimestamp?: (number|null);
}

/** Represents a Room. */
export class Room implements IRoom {

    /**
     * Constructs a new Room.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoom);

    /** Room teachers. */
    public teachers: IUser[];

    /** Room students. */
    public students: IUser[];

    /** Room host. */
    public host: string;

    /** Room content. */
    public content?: (IContent|null);

    /** Room endTimestamp. */
    public endTimestamp: number;

    /**
     * Creates a new Room instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Room instance
     */
    public static create(properties?: IRoom): Room;

    /**
     * Encodes the specified Room message. Does not implicitly {@link Room.verify|verify} messages.
     * @param message Room message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Room message, length delimited. Does not implicitly {@link Room.verify|verify} messages.
     * @param message Room message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Room message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Room
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Room;

    /**
     * Decodes a Room message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Room
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Room;

    /**
     * Verifies a Room message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Room message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Room
     */
    public static fromObject(object: { [k: string]: any }): Room;

    /**
     * Creates a plain object from a Room message. Also converts values to other types if specified.
     * @param message Room
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Room to JSON.
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

    /** User devices */
    devices?: (IDevice[]|null);

    /** User trophies */
    trophies?: (ITrophy[]|null);

    /** User chatMessages */
    chatMessages?: (IChatMessage[]|null);
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

    /** User devices. */
    public devices: IDevice[];

    /** User trophies. */
    public trophies: ITrophy[];

    /** User chatMessages. */
    public chatMessages: IChatMessage[];

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

/** Properties of a Device. */
export interface IDevice {

    /** Device id */
    id?: (string|null);

    /** Device activityId */
    activityId?: (string|null);

    /** Device activityStreamId */
    activityStreamId?: (string|null);

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

    /** Device id. */
    public id: string;

    /** Device activityId. */
    public activityId: string;

    /** Device activityStreamId. */
    public activityStreamId: string;

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

    /** Trophy tropy */
    tropy?: (string|null);

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

    /** Trophy tropy. */
    public tropy: string;

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

/** Properties of a Content. */
export interface IContent {

    /** Content type */
    type?: (Content.Type|null);

    /** Content id */
    id?: (string|null);

    /** Content url */
    url?: (string|null);
}

/** Represents a Content. */
export class Content implements IContent {

    /**
     * Constructs a new Content.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContent);

    /** Content type. */
    public type: Content.Type;

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

export namespace Content {

    /** Type enum. */
    enum Type {
        Blank = 0,
        WebRTCStream = 1,
        ActivityStream = 2,
        H5P = 3,
        Image = 4,
        Video = 5,
        Audio = 6
    }
}
