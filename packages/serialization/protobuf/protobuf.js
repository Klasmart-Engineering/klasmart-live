/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const RoomState = $root.RoomState = (() => {

    /**
     * Properties of a RoomState.
     * @exports IRoomState
     * @interface IRoomState
     * @property {number|null} [connectionCount] RoomState connectionCount
     */

    /**
     * Constructs a new RoomState.
     * @exports RoomState
     * @classdesc Represents a RoomState.
     * @implements IRoomState
     * @constructor
     * @param {IRoomState=} [properties] Properties to set
     */
    function RoomState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomState connectionCount.
     * @member {number} connectionCount
     * @memberof RoomState
     * @instance
     */
    RoomState.prototype.connectionCount = 0;

    /**
     * Creates a new RoomState instance using the specified properties.
     * @function create
     * @memberof RoomState
     * @static
     * @param {IRoomState=} [properties] Properties to set
     * @returns {RoomState} RoomState instance
     */
    RoomState.create = function create(properties) {
        return new RoomState(properties);
    };

    /**
     * Encodes the specified RoomState message. Does not implicitly {@link RoomState.verify|verify} messages.
     * @function encode
     * @memberof RoomState
     * @static
     * @param {IRoomState} message RoomState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.connectionCount != null && Object.hasOwnProperty.call(message, "connectionCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.connectionCount);
        return writer;
    };

    /**
     * Encodes the specified RoomState message, length delimited. Does not implicitly {@link RoomState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomState
     * @static
     * @param {IRoomState} message RoomState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomState message from the specified reader or buffer.
     * @function decode
     * @memberof RoomState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomState} RoomState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.connectionCount = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomState} RoomState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomState message.
     * @function verify
     * @memberof RoomState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.connectionCount != null && message.hasOwnProperty("connectionCount"))
            if (!$util.isInteger(message.connectionCount))
                return "connectionCount: integer expected";
        return null;
    };

    /**
     * Creates a RoomState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomState} RoomState
     */
    RoomState.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomState)
            return object;
        let message = new $root.RoomState();
        if (object.connectionCount != null)
            message.connectionCount = object.connectionCount >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RoomState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomState
     * @static
     * @param {RoomState} message RoomState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.connectionCount = 0;
        if (message.connectionCount != null && message.hasOwnProperty("connectionCount"))
            object.connectionCount = message.connectionCount;
        return object;
    };

    /**
     * Converts this RoomState to JSON.
     * @function toJSON
     * @memberof RoomState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomState;
})();

export { $root as default };
