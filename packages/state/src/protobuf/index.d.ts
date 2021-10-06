import * as $protobuf from "protobufjs";
/** Properties of a Command. */
export interface ICommand {

    /** Command id */
    id?: (string|null);

    /** Command endClass */
    endClass?: (IEndClassCommand|null);

    /** Command setHost */
    setHost?: (ISetHostCommand|null);

    /** Command setContent */
    setContent?: (ISetContentCommand|null);

    /** Command setActvityStreamId */
    setActvityStreamId?: (ISetActivityStreamIdCommand|null);

    /** Command rewardTrophyToUser */
    rewardTrophyToUser?: (IRewardTrophyToUserCommand|null);

    /** Command rewardTrophyToAll */
    rewardTrophyToAll?: (IRewardTrophyToAllCommand|null);

    /** Command sendChatMessage */
    sendChatMessage?: (ISendChatMessageCommand|null);
}

/** Represents a Command. */
export class Command implements ICommand {

    /**
     * Constructs a new Command.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommand);

    /** Command id. */
    public id: string;

    /** Command endClass. */
    public endClass?: (IEndClassCommand|null);

    /** Command setHost. */
    public setHost?: (ISetHostCommand|null);

    /** Command setContent. */
    public setContent?: (ISetContentCommand|null);

    /** Command setActvityStreamId. */
    public setActvityStreamId?: (ISetActivityStreamIdCommand|null);

    /** Command rewardTrophyToUser. */
    public rewardTrophyToUser?: (IRewardTrophyToUserCommand|null);

    /** Command rewardTrophyToAll. */
    public rewardTrophyToAll?: (IRewardTrophyToAllCommand|null);

    /** Command sendChatMessage. */
    public sendChatMessage?: (ISendChatMessageCommand|null);

    /** Command command. */
    public command?: ("endClass"|"setHost"|"setContent"|"setActvityStreamId"|"rewardTrophyToUser"|"rewardTrophyToAll"|"sendChatMessage");

    /**
     * Creates a new Command instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Command instance
     */
    public static create(properties?: ICommand): Command;

    /**
     * Encodes the specified Command message. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Command message, length delimited. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Command message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Command;

    /**
     * Decodes a Command message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Command;

    /**
     * Verifies a Command message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Command message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Command
     */
    public static fromObject(object: { [k: string]: any }): Command;

    /**
     * Creates a plain object from a Command message. Also converts values to other types if specified.
     * @param message Command
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Command to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommandAcknowledgement. */
export interface ICommandAcknowledgement {

    /** CommandAcknowledgement id */
    id?: (string|null);

    /** CommandAcknowledgement error */
    error?: (string|null);

    /** CommandAcknowledgement code */
    code?: (number|null);
}

/** Represents a CommandAcknowledgement. */
export class CommandAcknowledgement implements ICommandAcknowledgement {

    /**
     * Constructs a new CommandAcknowledgement.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommandAcknowledgement);

    /** CommandAcknowledgement id. */
    public id: string;

    /** CommandAcknowledgement error. */
    public error: string;

    /** CommandAcknowledgement code. */
    public code: number;

    /**
     * Creates a new CommandAcknowledgement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommandAcknowledgement instance
     */
    public static create(properties?: ICommandAcknowledgement): CommandAcknowledgement;

    /**
     * Encodes the specified CommandAcknowledgement message. Does not implicitly {@link CommandAcknowledgement.verify|verify} messages.
     * @param message CommandAcknowledgement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommandAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommandAcknowledgement message, length delimited. Does not implicitly {@link CommandAcknowledgement.verify|verify} messages.
     * @param message CommandAcknowledgement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommandAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommandAcknowledgement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommandAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandAcknowledgement;

    /**
     * Decodes a CommandAcknowledgement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommandAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandAcknowledgement;

    /**
     * Verifies a CommandAcknowledgement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommandAcknowledgement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommandAcknowledgement
     */
    public static fromObject(object: { [k: string]: any }): CommandAcknowledgement;

    /**
     * Creates a plain object from a CommandAcknowledgement message. Also converts values to other types if specified.
     * @param message CommandAcknowledgement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommandAcknowledgement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommandAcknowledgement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Event. */
export interface IEvent {

    /** Event id */
    id?: (string|null);

    /** Event setRoomState */
    setRoomState?: (ISetClassStateEvent|null);

    /** Event classEnded */
    classEnded?: (IClassEndedEvent|null);

    /** Event userJoinedClass */
    userJoinedClass?: (IUserJoinedClassEvent|null);

    /** Event userLeftClass */
    userLeftClass?: (IUserLeftClassEvent|null);

    /** Event hostChanged */
    hostChanged?: (IHostChangedEvent|null);

    /** Event contentChanged */
    contentChanged?: (IContentChangedEvent|null);

    /** Event newChatMessage */
    newChatMessage?: (INewChatMessageEvent|null);

    /** Event actvityStreamIdChanged */
    actvityStreamIdChanged?: (IActivityStreamIdChangedEvent|null);

    /** Event trophyRewardedToUser */
    trophyRewardedToUser?: (ITrophyRewardedToUserEvent|null);

    /** Event trophyRewardedToAll */
    trophyRewardedToAll?: (ITrophyRewardedToAllEvent|null);
}

/** Represents an Event. */
export class Event implements IEvent {

    /**
     * Constructs a new Event.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEvent);

    /** Event id. */
    public id: string;

    /** Event setRoomState. */
    public setRoomState?: (ISetClassStateEvent|null);

    /** Event classEnded. */
    public classEnded?: (IClassEndedEvent|null);

    /** Event userJoinedClass. */
    public userJoinedClass?: (IUserJoinedClassEvent|null);

    /** Event userLeftClass. */
    public userLeftClass?: (IUserLeftClassEvent|null);

    /** Event hostChanged. */
    public hostChanged?: (IHostChangedEvent|null);

    /** Event contentChanged. */
    public contentChanged?: (IContentChangedEvent|null);

    /** Event newChatMessage. */
    public newChatMessage?: (INewChatMessageEvent|null);

    /** Event actvityStreamIdChanged. */
    public actvityStreamIdChanged?: (IActivityStreamIdChangedEvent|null);

    /** Event trophyRewardedToUser. */
    public trophyRewardedToUser?: (ITrophyRewardedToUserEvent|null);

    /** Event trophyRewardedToAll. */
    public trophyRewardedToAll?: (ITrophyRewardedToAllEvent|null);

    /** Event event. */
    public event?: ("setRoomState"|"classEnded"|"userJoinedClass"|"userLeftClass"|"hostChanged"|"contentChanged"|"newChatMessage"|"actvityStreamIdChanged"|"trophyRewardedToUser"|"trophyRewardedToAll");

    /**
     * Creates a new Event instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Event instance
     */
    public static create(properties?: IEvent): Event;

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Event;

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Event;

    /**
     * Verifies an Event message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Event
     */
    public static fromObject(object: { [k: string]: any }): Event;

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @param message Event
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Event to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EndClassCommand. */
export interface IEndClassCommand {
}

/** Represents an EndClassCommand. */
export class EndClassCommand implements IEndClassCommand {

    /**
     * Constructs a new EndClassCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEndClassCommand);

    /**
     * Creates a new EndClassCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EndClassCommand instance
     */
    public static create(properties?: IEndClassCommand): EndClassCommand;

    /**
     * Encodes the specified EndClassCommand message. Does not implicitly {@link EndClassCommand.verify|verify} messages.
     * @param message EndClassCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEndClassCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EndClassCommand message, length delimited. Does not implicitly {@link EndClassCommand.verify|verify} messages.
     * @param message EndClassCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEndClassCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EndClassCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EndClassCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EndClassCommand;

    /**
     * Decodes an EndClassCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EndClassCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EndClassCommand;

    /**
     * Verifies an EndClassCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EndClassCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EndClassCommand
     */
    public static fromObject(object: { [k: string]: any }): EndClassCommand;

    /**
     * Creates a plain object from an EndClassCommand message. Also converts values to other types if specified.
     * @param message EndClassCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EndClassCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EndClassCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetHostCommand. */
export interface ISetHostCommand {

    /** SetHostCommand hostUserId */
    hostUserId?: (string|null);
}

/** Represents a SetHostCommand. */
export class SetHostCommand implements ISetHostCommand {

    /**
     * Constructs a new SetHostCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetHostCommand);

    /** SetHostCommand hostUserId. */
    public hostUserId: string;

    /**
     * Creates a new SetHostCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetHostCommand instance
     */
    public static create(properties?: ISetHostCommand): SetHostCommand;

    /**
     * Encodes the specified SetHostCommand message. Does not implicitly {@link SetHostCommand.verify|verify} messages.
     * @param message SetHostCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetHostCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetHostCommand message, length delimited. Does not implicitly {@link SetHostCommand.verify|verify} messages.
     * @param message SetHostCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetHostCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetHostCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetHostCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetHostCommand;

    /**
     * Decodes a SetHostCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetHostCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetHostCommand;

    /**
     * Verifies a SetHostCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetHostCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetHostCommand
     */
    public static fromObject(object: { [k: string]: any }): SetHostCommand;

    /**
     * Creates a plain object from a SetHostCommand message. Also converts values to other types if specified.
     * @param message SetHostCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetHostCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetHostCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetContentCommand. */
export interface ISetContentCommand {

    /** SetContentCommand content */
    content?: (IContent|null);
}

/** Represents a SetContentCommand. */
export class SetContentCommand implements ISetContentCommand {

    /**
     * Constructs a new SetContentCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetContentCommand);

    /** SetContentCommand content. */
    public content?: (IContent|null);

    /**
     * Creates a new SetContentCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetContentCommand instance
     */
    public static create(properties?: ISetContentCommand): SetContentCommand;

    /**
     * Encodes the specified SetContentCommand message. Does not implicitly {@link SetContentCommand.verify|verify} messages.
     * @param message SetContentCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetContentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetContentCommand message, length delimited. Does not implicitly {@link SetContentCommand.verify|verify} messages.
     * @param message SetContentCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetContentCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetContentCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetContentCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetContentCommand;

    /**
     * Decodes a SetContentCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetContentCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetContentCommand;

    /**
     * Verifies a SetContentCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetContentCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetContentCommand
     */
    public static fromObject(object: { [k: string]: any }): SetContentCommand;

    /**
     * Creates a plain object from a SetContentCommand message. Also converts values to other types if specified.
     * @param message SetContentCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetContentCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetContentCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetActivityStreamIdCommand. */
export interface ISetActivityStreamIdCommand {

    /** SetActivityStreamIdCommand deviceId */
    deviceId?: (string|null);

    /** SetActivityStreamIdCommand activityStreamId */
    activityStreamId?: (string|null);
}

/** Represents a SetActivityStreamIdCommand. */
export class SetActivityStreamIdCommand implements ISetActivityStreamIdCommand {

    /**
     * Constructs a new SetActivityStreamIdCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetActivityStreamIdCommand);

    /** SetActivityStreamIdCommand deviceId. */
    public deviceId: string;

    /** SetActivityStreamIdCommand activityStreamId. */
    public activityStreamId: string;

    /**
     * Creates a new SetActivityStreamIdCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetActivityStreamIdCommand instance
     */
    public static create(properties?: ISetActivityStreamIdCommand): SetActivityStreamIdCommand;

    /**
     * Encodes the specified SetActivityStreamIdCommand message. Does not implicitly {@link SetActivityStreamIdCommand.verify|verify} messages.
     * @param message SetActivityStreamIdCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetActivityStreamIdCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetActivityStreamIdCommand message, length delimited. Does not implicitly {@link SetActivityStreamIdCommand.verify|verify} messages.
     * @param message SetActivityStreamIdCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetActivityStreamIdCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetActivityStreamIdCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetActivityStreamIdCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetActivityStreamIdCommand;

    /**
     * Decodes a SetActivityStreamIdCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetActivityStreamIdCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetActivityStreamIdCommand;

    /**
     * Verifies a SetActivityStreamIdCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetActivityStreamIdCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetActivityStreamIdCommand
     */
    public static fromObject(object: { [k: string]: any }): SetActivityStreamIdCommand;

    /**
     * Creates a plain object from a SetActivityStreamIdCommand message. Also converts values to other types if specified.
     * @param message SetActivityStreamIdCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetActivityStreamIdCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetActivityStreamIdCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RewardTrophyToUserCommand. */
export interface IRewardTrophyToUserCommand {

    /** RewardTrophyToUserCommand userId */
    userId?: (string|null);

    /** RewardTrophyToUserCommand trophy */
    trophy?: (ITrophy|null);
}

/** Represents a RewardTrophyToUserCommand. */
export class RewardTrophyToUserCommand implements IRewardTrophyToUserCommand {

    /**
     * Constructs a new RewardTrophyToUserCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRewardTrophyToUserCommand);

    /** RewardTrophyToUserCommand userId. */
    public userId: string;

    /** RewardTrophyToUserCommand trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new RewardTrophyToUserCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RewardTrophyToUserCommand instance
     */
    public static create(properties?: IRewardTrophyToUserCommand): RewardTrophyToUserCommand;

    /**
     * Encodes the specified RewardTrophyToUserCommand message. Does not implicitly {@link RewardTrophyToUserCommand.verify|verify} messages.
     * @param message RewardTrophyToUserCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRewardTrophyToUserCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RewardTrophyToUserCommand message, length delimited. Does not implicitly {@link RewardTrophyToUserCommand.verify|verify} messages.
     * @param message RewardTrophyToUserCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRewardTrophyToUserCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RewardTrophyToUserCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RewardTrophyToUserCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RewardTrophyToUserCommand;

    /**
     * Decodes a RewardTrophyToUserCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RewardTrophyToUserCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RewardTrophyToUserCommand;

    /**
     * Verifies a RewardTrophyToUserCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RewardTrophyToUserCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RewardTrophyToUserCommand
     */
    public static fromObject(object: { [k: string]: any }): RewardTrophyToUserCommand;

    /**
     * Creates a plain object from a RewardTrophyToUserCommand message. Also converts values to other types if specified.
     * @param message RewardTrophyToUserCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RewardTrophyToUserCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RewardTrophyToUserCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RewardTrophyToAllCommand. */
export interface IRewardTrophyToAllCommand {

    /** RewardTrophyToAllCommand trophy */
    trophy?: (ITrophy|null);
}

/** Represents a RewardTrophyToAllCommand. */
export class RewardTrophyToAllCommand implements IRewardTrophyToAllCommand {

    /**
     * Constructs a new RewardTrophyToAllCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRewardTrophyToAllCommand);

    /** RewardTrophyToAllCommand trophy. */
    public trophy?: (ITrophy|null);

    /**
     * Creates a new RewardTrophyToAllCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RewardTrophyToAllCommand instance
     */
    public static create(properties?: IRewardTrophyToAllCommand): RewardTrophyToAllCommand;

    /**
     * Encodes the specified RewardTrophyToAllCommand message. Does not implicitly {@link RewardTrophyToAllCommand.verify|verify} messages.
     * @param message RewardTrophyToAllCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRewardTrophyToAllCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RewardTrophyToAllCommand message, length delimited. Does not implicitly {@link RewardTrophyToAllCommand.verify|verify} messages.
     * @param message RewardTrophyToAllCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRewardTrophyToAllCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RewardTrophyToAllCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RewardTrophyToAllCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RewardTrophyToAllCommand;

    /**
     * Decodes a RewardTrophyToAllCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RewardTrophyToAllCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RewardTrophyToAllCommand;

    /**
     * Verifies a RewardTrophyToAllCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RewardTrophyToAllCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RewardTrophyToAllCommand
     */
    public static fromObject(object: { [k: string]: any }): RewardTrophyToAllCommand;

    /**
     * Creates a plain object from a RewardTrophyToAllCommand message. Also converts values to other types if specified.
     * @param message RewardTrophyToAllCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RewardTrophyToAllCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RewardTrophyToAllCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SendChatMessageCommand. */
export interface ISendChatMessageCommand {

    /** SendChatMessageCommand message */
    message?: (string|null);
}

/** Represents a SendChatMessageCommand. */
export class SendChatMessageCommand implements ISendChatMessageCommand {

    /**
     * Constructs a new SendChatMessageCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISendChatMessageCommand);

    /** SendChatMessageCommand message. */
    public message: string;

    /**
     * Creates a new SendChatMessageCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SendChatMessageCommand instance
     */
    public static create(properties?: ISendChatMessageCommand): SendChatMessageCommand;

    /**
     * Encodes the specified SendChatMessageCommand message. Does not implicitly {@link SendChatMessageCommand.verify|verify} messages.
     * @param message SendChatMessageCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISendChatMessageCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SendChatMessageCommand message, length delimited. Does not implicitly {@link SendChatMessageCommand.verify|verify} messages.
     * @param message SendChatMessageCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISendChatMessageCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SendChatMessageCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SendChatMessageCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SendChatMessageCommand;

    /**
     * Decodes a SendChatMessageCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SendChatMessageCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SendChatMessageCommand;

    /**
     * Verifies a SendChatMessageCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SendChatMessageCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SendChatMessageCommand
     */
    public static fromObject(object: { [k: string]: any }): SendChatMessageCommand;

    /**
     * Creates a plain object from a SendChatMessageCommand message. Also converts values to other types if specified.
     * @param message SendChatMessageCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SendChatMessageCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SendChatMessageCommand to JSON.
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

/** Properties of a UserJoinedClassEvent. */
export interface IUserJoinedClassEvent {

    /** UserJoinedClassEvent user */
    user?: (IUser|null);

    /** UserJoinedClassEvent device */
    device?: (IDevice|null);
}

/** Represents a UserJoinedClassEvent. */
export class UserJoinedClassEvent implements IUserJoinedClassEvent {

    /**
     * Constructs a new UserJoinedClassEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserJoinedClassEvent);

    /** UserJoinedClassEvent user. */
    public user?: (IUser|null);

    /** UserJoinedClassEvent device. */
    public device?: (IDevice|null);

    /**
     * Creates a new UserJoinedClassEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserJoinedClassEvent instance
     */
    public static create(properties?: IUserJoinedClassEvent): UserJoinedClassEvent;

    /**
     * Encodes the specified UserJoinedClassEvent message. Does not implicitly {@link UserJoinedClassEvent.verify|verify} messages.
     * @param message UserJoinedClassEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserJoinedClassEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserJoinedClassEvent message, length delimited. Does not implicitly {@link UserJoinedClassEvent.verify|verify} messages.
     * @param message UserJoinedClassEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserJoinedClassEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserJoinedClassEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserJoinedClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserJoinedClassEvent;

    /**
     * Decodes a UserJoinedClassEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserJoinedClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserJoinedClassEvent;

    /**
     * Verifies a UserJoinedClassEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserJoinedClassEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserJoinedClassEvent
     */
    public static fromObject(object: { [k: string]: any }): UserJoinedClassEvent;

    /**
     * Creates a plain object from a UserJoinedClassEvent message. Also converts values to other types if specified.
     * @param message UserJoinedClassEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserJoinedClassEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserJoinedClassEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserLeftClassEvent. */
export interface IUserLeftClassEvent {

    /** UserLeftClassEvent userId */
    userId?: (string|null);
}

/** Represents a UserLeftClassEvent. */
export class UserLeftClassEvent implements IUserLeftClassEvent {

    /**
     * Constructs a new UserLeftClassEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserLeftClassEvent);

    /** UserLeftClassEvent userId. */
    public userId: string;

    /**
     * Creates a new UserLeftClassEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserLeftClassEvent instance
     */
    public static create(properties?: IUserLeftClassEvent): UserLeftClassEvent;

    /**
     * Encodes the specified UserLeftClassEvent message. Does not implicitly {@link UserLeftClassEvent.verify|verify} messages.
     * @param message UserLeftClassEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserLeftClassEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserLeftClassEvent message, length delimited. Does not implicitly {@link UserLeftClassEvent.verify|verify} messages.
     * @param message UserLeftClassEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserLeftClassEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserLeftClassEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserLeftClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserLeftClassEvent;

    /**
     * Decodes a UserLeftClassEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserLeftClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserLeftClassEvent;

    /**
     * Verifies a UserLeftClassEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserLeftClassEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserLeftClassEvent
     */
    public static fromObject(object: { [k: string]: any }): UserLeftClassEvent;

    /**
     * Creates a plain object from a UserLeftClassEvent message. Also converts values to other types if specified.
     * @param message UserLeftClassEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserLeftClassEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserLeftClassEvent to JSON.
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

    /** ChatMessage trophies */
    trophies?: (ITrophy[]|null);
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

    /** ChatMessage trophies. */
    public trophies: ITrophy[];

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
