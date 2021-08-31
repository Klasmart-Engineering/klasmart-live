import * as $protobuf from "protobufjs";
/** Properties of a RoomState. */
export interface IRoomState {

    /** RoomState roomId */
    roomId?: (string|null);

    /** RoomState connectionCount */
    connectionCount?: (number|null);
}

/** Represents a RoomState. */
export class RoomState implements IRoomState {

    /**
     * Constructs a new RoomState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomState);

    /** RoomState roomId. */
    public roomId: string;

    /** RoomState connectionCount. */
    public connectionCount: number;

    /**
     * Creates a new RoomState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomState instance
     */
    public static create(properties?: IRoomState): RoomState;

    /**
     * Encodes the specified RoomState message. Does not implicitly {@link RoomState.verify|verify} messages.
     * @param message RoomState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomState message, length delimited. Does not implicitly {@link RoomState.verify|verify} messages.
     * @param message RoomState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomState;

    /**
     * Decodes a RoomState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomState;

    /**
     * Verifies a RoomState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomState
     */
    public static fromObject(object: { [k: string]: any }): RoomState;

    /**
     * Creates a plain object from a RoomState message. Also converts values to other types if specified.
     * @param message RoomState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
