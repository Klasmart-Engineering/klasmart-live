/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const ServerMessage = $root.ServerMessage = (() => {

    /**
     * Properties of a ServerMessage.
     * @exports IServerMessage
     * @interface IServerMessage
     * @property {string|null} [roomId] ServerMessage roomId
     * @property {IRoomAction|null} [roomAction] ServerMessage roomAction
     * @property {Object.<string,IUserAction>|null} [userActions] ServerMessage userActions
     * @property {Object.<string,IDeviceAction>|null} [deviceActions] ServerMessage deviceActions
     */

    /**
     * Constructs a new ServerMessage.
     * @exports ServerMessage
     * @classdesc Represents a ServerMessage.
     * @implements IServerMessage
     * @constructor
     * @param {IServerMessage=} [properties] Properties to set
     */
    function ServerMessage(properties) {
        this.userActions = {};
        this.deviceActions = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerMessage roomId.
     * @member {string} roomId
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.roomId = "";

    /**
     * ServerMessage roomAction.
     * @member {IRoomAction|null|undefined} roomAction
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.roomAction = null;

    /**
     * ServerMessage userActions.
     * @member {Object.<string,IUserAction>} userActions
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.userActions = $util.emptyObject;

    /**
     * ServerMessage deviceActions.
     * @member {Object.<string,IDeviceAction>} deviceActions
     * @memberof ServerMessage
     * @instance
     */
    ServerMessage.prototype.deviceActions = $util.emptyObject;

    /**
     * Creates a new ServerMessage instance using the specified properties.
     * @function create
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage=} [properties] Properties to set
     * @returns {ServerMessage} ServerMessage instance
     */
    ServerMessage.create = function create(properties) {
        return new ServerMessage(properties);
    };

    /**
     * Encodes the specified ServerMessage message. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @function encode
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
        if (message.roomAction != null && Object.hasOwnProperty.call(message, "roomAction"))
            $root.RoomAction.encode(message.roomAction, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.userActions != null && Object.hasOwnProperty.call(message, "userActions"))
            for (let keys = Object.keys(message.userActions), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                $root.UserAction.encode(message.userActions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.deviceActions != null && Object.hasOwnProperty.call(message, "deviceActions"))
            for (let keys = Object.keys(message.deviceActions), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                $root.DeviceAction.encode(message.deviceActions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link ServerMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerMessage
     * @static
     * @param {IServerMessage} message ServerMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ServerMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerMessage} ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerMessage(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roomId = reader.string();
                break;
            case 2:
                message.roomAction = $root.RoomAction.decode(reader, reader.uint32());
                break;
            case 3:{
                if (message.userActions === $util.emptyObject)
                    message.userActions = {};
                let end2 = reader.uint32() + reader.pos;
                key = 0;
                value = null;
                while (reader.pos < end2) {
                    let tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.uint32();
                        break;
                    case 2:
                        value = $root.UserAction.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.userActions[key] = value;
                break;
            }
            case 4:{
                if (message.deviceActions === $util.emptyObject)
                    message.deviceActions = {};
                let end2 = reader.uint32() + reader.pos;
                key = 0;
                value = null;
                while (reader.pos < end2) {
                    let tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.uint32();
                        break;
                    case 2:
                        value = $root.DeviceAction.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.deviceActions[key] = value;
                break;
            }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerMessage} ServerMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerMessage message.
     * @function verify
     * @memberof ServerMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isString(message.roomId))
                return "roomId: string expected";
        if (message.roomAction != null && message.hasOwnProperty("roomAction")) {
            let error = $root.RoomAction.verify(message.roomAction);
            if (error)
                return "roomAction." + error;
        }
        if (message.userActions != null && message.hasOwnProperty("userActions")) {
            if (!$util.isObject(message.userActions))
                return "userActions: object expected";
            let key = Object.keys(message.userActions);
            for (let i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "userActions: integer key{k:uint32} expected";
                {
                    let error = $root.UserAction.verify(message.userActions[key[i]]);
                    if (error)
                        return "userActions." + error;
                }
            }
        }
        if (message.deviceActions != null && message.hasOwnProperty("deviceActions")) {
            if (!$util.isObject(message.deviceActions))
                return "deviceActions: object expected";
            let key = Object.keys(message.deviceActions);
            for (let i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "deviceActions: integer key{k:uint32} expected";
                {
                    let error = $root.DeviceAction.verify(message.deviceActions[key[i]]);
                    if (error)
                        return "deviceActions." + error;
                }
            }
        }
        return null;
    };

    /**
     * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerMessage} ServerMessage
     */
    ServerMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerMessage)
            return object;
        let message = new $root.ServerMessage();
        if (object.roomId != null)
            message.roomId = String(object.roomId);
        if (object.roomAction != null) {
            if (typeof object.roomAction !== "object")
                throw TypeError(".ServerMessage.roomAction: object expected");
            message.roomAction = $root.RoomAction.fromObject(object.roomAction);
        }
        if (object.userActions) {
            if (typeof object.userActions !== "object")
                throw TypeError(".ServerMessage.userActions: object expected");
            message.userActions = {};
            for (let keys = Object.keys(object.userActions), i = 0; i < keys.length; ++i) {
                if (typeof object.userActions[keys[i]] !== "object")
                    throw TypeError(".ServerMessage.userActions: object expected");
                message.userActions[keys[i]] = $root.UserAction.fromObject(object.userActions[keys[i]]);
            }
        }
        if (object.deviceActions) {
            if (typeof object.deviceActions !== "object")
                throw TypeError(".ServerMessage.deviceActions: object expected");
            message.deviceActions = {};
            for (let keys = Object.keys(object.deviceActions), i = 0; i < keys.length; ++i) {
                if (typeof object.deviceActions[keys[i]] !== "object")
                    throw TypeError(".ServerMessage.deviceActions: object expected");
                message.deviceActions[keys[i]] = $root.DeviceAction.fromObject(object.deviceActions[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerMessage
     * @static
     * @param {ServerMessage} message ServerMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults) {
            object.userActions = {};
            object.deviceActions = {};
        }
        if (options.defaults) {
            object.roomId = "";
            object.roomAction = null;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        if (message.roomAction != null && message.hasOwnProperty("roomAction"))
            object.roomAction = $root.RoomAction.toObject(message.roomAction, options);
        let keys2;
        if (message.userActions && (keys2 = Object.keys(message.userActions)).length) {
            object.userActions = {};
            for (let j = 0; j < keys2.length; ++j)
                object.userActions[keys2[j]] = $root.UserAction.toObject(message.userActions[keys2[j]], options);
        }
        if (message.deviceActions && (keys2 = Object.keys(message.deviceActions)).length) {
            object.deviceActions = {};
            for (let j = 0; j < keys2.length; ++j)
                object.deviceActions[keys2[j]] = $root.DeviceAction.toObject(message.deviceActions[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this ServerMessage to JSON.
     * @function toJSON
     * @memberof ServerMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServerMessage;
})();

export const ClientMessage = $root.ClientMessage = (() => {

    /**
     * Properties of a ClientMessage.
     * @exports IClientMessage
     * @interface IClientMessage
     * @property {Array.<string>|null} [chatMessages] ClientMessage chatMessages
     * @property {IActivityStream|null} [activityStream] ClientMessage activityStream
     * @property {IRoomAction|null} [roomAction] ClientMessage roomAction
     */

    /**
     * Constructs a new ClientMessage.
     * @exports ClientMessage
     * @classdesc Represents a ClientMessage.
     * @implements IClientMessage
     * @constructor
     * @param {IClientMessage=} [properties] Properties to set
     */
    function ClientMessage(properties) {
        this.chatMessages = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientMessage chatMessages.
     * @member {Array.<string>} chatMessages
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.chatMessages = $util.emptyArray;

    /**
     * ClientMessage activityStream.
     * @member {IActivityStream|null|undefined} activityStream
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.activityStream = null;

    /**
     * ClientMessage roomAction.
     * @member {IRoomAction|null|undefined} roomAction
     * @memberof ClientMessage
     * @instance
     */
    ClientMessage.prototype.roomAction = null;

    /**
     * Creates a new ClientMessage instance using the specified properties.
     * @function create
     * @memberof ClientMessage
     * @static
     * @param {IClientMessage=} [properties] Properties to set
     * @returns {ClientMessage} ClientMessage instance
     */
    ClientMessage.create = function create(properties) {
        return new ClientMessage(properties);
    };

    /**
     * Encodes the specified ClientMessage message. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @function encode
     * @memberof ClientMessage
     * @static
     * @param {IClientMessage} message ClientMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chatMessages != null && message.chatMessages.length)
            for (let i = 0; i < message.chatMessages.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chatMessages[i]);
        if (message.activityStream != null && Object.hasOwnProperty.call(message, "activityStream"))
            $root.ActivityStream.encode(message.activityStream, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.roomAction != null && Object.hasOwnProperty.call(message, "roomAction"))
            $root.RoomAction.encode(message.roomAction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link ClientMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientMessage
     * @static
     * @param {IClientMessage} message ClientMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ClientMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientMessage} ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.chatMessages && message.chatMessages.length))
                    message.chatMessages = [];
                message.chatMessages.push(reader.string());
                break;
            case 2:
                message.activityStream = $root.ActivityStream.decode(reader, reader.uint32());
                break;
            case 3:
                message.roomAction = $root.RoomAction.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientMessage} ClientMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientMessage message.
     * @function verify
     * @memberof ClientMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chatMessages != null && message.hasOwnProperty("chatMessages")) {
            if (!Array.isArray(message.chatMessages))
                return "chatMessages: array expected";
            for (let i = 0; i < message.chatMessages.length; ++i)
                if (!$util.isString(message.chatMessages[i]))
                    return "chatMessages: string[] expected";
        }
        if (message.activityStream != null && message.hasOwnProperty("activityStream")) {
            let error = $root.ActivityStream.verify(message.activityStream);
            if (error)
                return "activityStream." + error;
        }
        if (message.roomAction != null && message.hasOwnProperty("roomAction")) {
            let error = $root.RoomAction.verify(message.roomAction);
            if (error)
                return "roomAction." + error;
        }
        return null;
    };

    /**
     * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientMessage} ClientMessage
     */
    ClientMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientMessage)
            return object;
        let message = new $root.ClientMessage();
        if (object.chatMessages) {
            if (!Array.isArray(object.chatMessages))
                throw TypeError(".ClientMessage.chatMessages: array expected");
            message.chatMessages = [];
            for (let i = 0; i < object.chatMessages.length; ++i)
                message.chatMessages[i] = String(object.chatMessages[i]);
        }
        if (object.activityStream != null) {
            if (typeof object.activityStream !== "object")
                throw TypeError(".ClientMessage.activityStream: object expected");
            message.activityStream = $root.ActivityStream.fromObject(object.activityStream);
        }
        if (object.roomAction != null) {
            if (typeof object.roomAction !== "object")
                throw TypeError(".ClientMessage.roomAction: object expected");
            message.roomAction = $root.RoomAction.fromObject(object.roomAction);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientMessage
     * @static
     * @param {ClientMessage} message ClientMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.chatMessages = [];
        if (options.defaults) {
            object.activityStream = null;
            object.roomAction = null;
        }
        if (message.chatMessages && message.chatMessages.length) {
            object.chatMessages = [];
            for (let j = 0; j < message.chatMessages.length; ++j)
                object.chatMessages[j] = message.chatMessages[j];
        }
        if (message.activityStream != null && message.hasOwnProperty("activityStream"))
            object.activityStream = $root.ActivityStream.toObject(message.activityStream, options);
        if (message.roomAction != null && message.hasOwnProperty("roomAction"))
            object.roomAction = $root.RoomAction.toObject(message.roomAction, options);
        return object;
    };

    /**
     * Converts this ClientMessage to JSON.
     * @function toJSON
     * @memberof ClientMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientMessage;
})();

export const RoomAction = $root.RoomAction = (() => {

    /**
     * Properties of a RoomAction.
     * @exports IRoomAction
     * @interface IRoomAction
     * @property {IContent|null} [content] RoomAction content
     * @property {number|null} [hostId] RoomAction hostId
     * @property {number|null} [endTimestamp] RoomAction endTimestamp
     */

    /**
     * Constructs a new RoomAction.
     * @exports RoomAction
     * @classdesc Represents a RoomAction.
     * @implements IRoomAction
     * @constructor
     * @param {IRoomAction=} [properties] Properties to set
     */
    function RoomAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomAction content.
     * @member {IContent|null|undefined} content
     * @memberof RoomAction
     * @instance
     */
    RoomAction.prototype.content = null;

    /**
     * RoomAction hostId.
     * @member {number} hostId
     * @memberof RoomAction
     * @instance
     */
    RoomAction.prototype.hostId = 0;

    /**
     * RoomAction endTimestamp.
     * @member {number} endTimestamp
     * @memberof RoomAction
     * @instance
     */
    RoomAction.prototype.endTimestamp = 0;

    /**
     * Creates a new RoomAction instance using the specified properties.
     * @function create
     * @memberof RoomAction
     * @static
     * @param {IRoomAction=} [properties] Properties to set
     * @returns {RoomAction} RoomAction instance
     */
    RoomAction.create = function create(properties) {
        return new RoomAction(properties);
    };

    /**
     * Encodes the specified RoomAction message. Does not implicitly {@link RoomAction.verify|verify} messages.
     * @function encode
     * @memberof RoomAction
     * @static
     * @param {IRoomAction} message RoomAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.hostId != null && Object.hasOwnProperty.call(message, "hostId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.hostId);
        if (message.endTimestamp != null && Object.hasOwnProperty.call(message, "endTimestamp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.endTimestamp);
        return writer;
    };

    /**
     * Encodes the specified RoomAction message, length delimited. Does not implicitly {@link RoomAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomAction
     * @static
     * @param {IRoomAction} message RoomAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomAction message from the specified reader or buffer.
     * @function decode
     * @memberof RoomAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomAction} RoomAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            case 2:
                message.hostId = reader.uint32();
                break;
            case 3:
                message.endTimestamp = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomAction} RoomAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomAction message.
     * @function verify
     * @memberof RoomAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            let error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        if (message.hostId != null && message.hasOwnProperty("hostId"))
            if (!$util.isInteger(message.hostId))
                return "hostId: integer expected";
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            if (!$util.isInteger(message.endTimestamp))
                return "endTimestamp: integer expected";
        return null;
    };

    /**
     * Creates a RoomAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomAction} RoomAction
     */
    RoomAction.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomAction)
            return object;
        let message = new $root.RoomAction();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".RoomAction.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        if (object.hostId != null)
            message.hostId = object.hostId >>> 0;
        if (object.endTimestamp != null)
            message.endTimestamp = object.endTimestamp >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RoomAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomAction
     * @static
     * @param {RoomAction} message RoomAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.content = null;
            object.hostId = 0;
            object.endTimestamp = 0;
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        if (message.hostId != null && message.hasOwnProperty("hostId"))
            object.hostId = message.hostId;
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            object.endTimestamp = message.endTimestamp;
        return object;
    };

    /**
     * Converts this RoomAction to JSON.
     * @function toJSON
     * @memberof RoomAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomAction;
})();

export const UserAction = $root.UserAction = (() => {

    /**
     * Properties of a UserAction.
     * @exports IUserAction
     * @interface IUserAction
     * @property {string|null} [name] UserAction name
     * @property {boolean|null} [teacher] UserAction teacher
     * @property {Array.<IChatMessage>|null} [chatMessages] UserAction chatMessages
     */

    /**
     * Constructs a new UserAction.
     * @exports UserAction
     * @classdesc Represents a UserAction.
     * @implements IUserAction
     * @constructor
     * @param {IUserAction=} [properties] Properties to set
     */
    function UserAction(properties) {
        this.chatMessages = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserAction name.
     * @member {string} name
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.name = "";

    /**
     * UserAction teacher.
     * @member {boolean} teacher
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.teacher = false;

    /**
     * UserAction chatMessages.
     * @member {Array.<IChatMessage>} chatMessages
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.chatMessages = $util.emptyArray;

    /**
     * Creates a new UserAction instance using the specified properties.
     * @function create
     * @memberof UserAction
     * @static
     * @param {IUserAction=} [properties] Properties to set
     * @returns {UserAction} UserAction instance
     */
    UserAction.create = function create(properties) {
        return new UserAction(properties);
    };

    /**
     * Encodes the specified UserAction message. Does not implicitly {@link UserAction.verify|verify} messages.
     * @function encode
     * @memberof UserAction
     * @static
     * @param {IUserAction} message UserAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.teacher != null && Object.hasOwnProperty.call(message, "teacher"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.teacher);
        if (message.chatMessages != null && message.chatMessages.length)
            for (let i = 0; i < message.chatMessages.length; ++i)
                $root.ChatMessage.encode(message.chatMessages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserAction message, length delimited. Does not implicitly {@link UserAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserAction
     * @static
     * @param {IUserAction} message UserAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserAction message from the specified reader or buffer.
     * @function decode
     * @memberof UserAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserAction} UserAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.teacher = reader.bool();
                break;
            case 3:
                if (!(message.chatMessages && message.chatMessages.length))
                    message.chatMessages = [];
                message.chatMessages.push($root.ChatMessage.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserAction} UserAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserAction message.
     * @function verify
     * @memberof UserAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.teacher != null && message.hasOwnProperty("teacher"))
            if (typeof message.teacher !== "boolean")
                return "teacher: boolean expected";
        if (message.chatMessages != null && message.hasOwnProperty("chatMessages")) {
            if (!Array.isArray(message.chatMessages))
                return "chatMessages: array expected";
            for (let i = 0; i < message.chatMessages.length; ++i) {
                let error = $root.ChatMessage.verify(message.chatMessages[i]);
                if (error)
                    return "chatMessages." + error;
            }
        }
        return null;
    };

    /**
     * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserAction} UserAction
     */
    UserAction.fromObject = function fromObject(object) {
        if (object instanceof $root.UserAction)
            return object;
        let message = new $root.UserAction();
        if (object.name != null)
            message.name = String(object.name);
        if (object.teacher != null)
            message.teacher = Boolean(object.teacher);
        if (object.chatMessages) {
            if (!Array.isArray(object.chatMessages))
                throw TypeError(".UserAction.chatMessages: array expected");
            message.chatMessages = [];
            for (let i = 0; i < object.chatMessages.length; ++i) {
                if (typeof object.chatMessages[i] !== "object")
                    throw TypeError(".UserAction.chatMessages: object expected");
                message.chatMessages[i] = $root.ChatMessage.fromObject(object.chatMessages[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a UserAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserAction
     * @static
     * @param {UserAction} message UserAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.chatMessages = [];
        if (options.defaults) {
            object.name = "";
            object.teacher = false;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.teacher != null && message.hasOwnProperty("teacher"))
            object.teacher = message.teacher;
        if (message.chatMessages && message.chatMessages.length) {
            object.chatMessages = [];
            for (let j = 0; j < message.chatMessages.length; ++j)
                object.chatMessages[j] = $root.ChatMessage.toObject(message.chatMessages[j], options);
        }
        return object;
    };

    /**
     * Converts this UserAction to JSON.
     * @function toJSON
     * @memberof UserAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserAction;
})();

export const DeviceAction = $root.DeviceAction = (() => {

    /**
     * Properties of a DeviceAction.
     * @exports IDeviceAction
     * @interface IDeviceAction
     * @property {number|null} [userId] DeviceAction userId
     * @property {IActivityStream|null} [activityStream] DeviceAction activityStream
     */

    /**
     * Constructs a new DeviceAction.
     * @exports DeviceAction
     * @classdesc Represents a DeviceAction.
     * @implements IDeviceAction
     * @constructor
     * @param {IDeviceAction=} [properties] Properties to set
     */
    function DeviceAction(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceAction userId.
     * @member {number} userId
     * @memberof DeviceAction
     * @instance
     */
    DeviceAction.prototype.userId = 0;

    /**
     * DeviceAction activityStream.
     * @member {IActivityStream|null|undefined} activityStream
     * @memberof DeviceAction
     * @instance
     */
    DeviceAction.prototype.activityStream = null;

    /**
     * Creates a new DeviceAction instance using the specified properties.
     * @function create
     * @memberof DeviceAction
     * @static
     * @param {IDeviceAction=} [properties] Properties to set
     * @returns {DeviceAction} DeviceAction instance
     */
    DeviceAction.create = function create(properties) {
        return new DeviceAction(properties);
    };

    /**
     * Encodes the specified DeviceAction message. Does not implicitly {@link DeviceAction.verify|verify} messages.
     * @function encode
     * @memberof DeviceAction
     * @static
     * @param {IDeviceAction} message DeviceAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
        if (message.activityStream != null && Object.hasOwnProperty.call(message, "activityStream"))
            $root.ActivityStream.encode(message.activityStream, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceAction message, length delimited. Does not implicitly {@link DeviceAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceAction
     * @static
     * @param {IDeviceAction} message DeviceAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceAction message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceAction} DeviceAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.uint32();
                break;
            case 2:
                message.activityStream = $root.ActivityStream.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceAction} DeviceAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceAction message.
     * @function verify
     * @memberof DeviceAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.activityStream != null && message.hasOwnProperty("activityStream")) {
            let error = $root.ActivityStream.verify(message.activityStream);
            if (error)
                return "activityStream." + error;
        }
        return null;
    };

    /**
     * Creates a DeviceAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceAction} DeviceAction
     */
    DeviceAction.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceAction)
            return object;
        let message = new $root.DeviceAction();
        if (object.userId != null)
            message.userId = object.userId >>> 0;
        if (object.activityStream != null) {
            if (typeof object.activityStream !== "object")
                throw TypeError(".DeviceAction.activityStream: object expected");
            message.activityStream = $root.ActivityStream.fromObject(object.activityStream);
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceAction
     * @static
     * @param {DeviceAction} message DeviceAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userId = 0;
            object.activityStream = null;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.activityStream != null && message.hasOwnProperty("activityStream"))
            object.activityStream = $root.ActivityStream.toObject(message.activityStream, options);
        return object;
    };

    /**
     * Converts this DeviceAction to JSON.
     * @function toJSON
     * @memberof DeviceAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeviceAction;
})();

export const ActivityStream = $root.ActivityStream = (() => {

    /**
     * Properties of an ActivityStream.
     * @exports IActivityStream
     * @interface IActivityStream
     * @property {string|null} [activityId] ActivityStream activityId
     * @property {string|null} [streamId] ActivityStream streamId
     */

    /**
     * Constructs a new ActivityStream.
     * @exports ActivityStream
     * @classdesc Represents an ActivityStream.
     * @implements IActivityStream
     * @constructor
     * @param {IActivityStream=} [properties] Properties to set
     */
    function ActivityStream(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActivityStream activityId.
     * @member {string} activityId
     * @memberof ActivityStream
     * @instance
     */
    ActivityStream.prototype.activityId = "";

    /**
     * ActivityStream streamId.
     * @member {string} streamId
     * @memberof ActivityStream
     * @instance
     */
    ActivityStream.prototype.streamId = "";

    /**
     * Creates a new ActivityStream instance using the specified properties.
     * @function create
     * @memberof ActivityStream
     * @static
     * @param {IActivityStream=} [properties] Properties to set
     * @returns {ActivityStream} ActivityStream instance
     */
    ActivityStream.create = function create(properties) {
        return new ActivityStream(properties);
    };

    /**
     * Encodes the specified ActivityStream message. Does not implicitly {@link ActivityStream.verify|verify} messages.
     * @function encode
     * @memberof ActivityStream
     * @static
     * @param {IActivityStream} message ActivityStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityStream.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.activityId != null && Object.hasOwnProperty.call(message, "activityId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.activityId);
        if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.streamId);
        return writer;
    };

    /**
     * Encodes the specified ActivityStream message, length delimited. Does not implicitly {@link ActivityStream.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActivityStream
     * @static
     * @param {IActivityStream} message ActivityStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityStream.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActivityStream message from the specified reader or buffer.
     * @function decode
     * @memberof ActivityStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActivityStream} ActivityStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityStream.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActivityStream();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.activityId = reader.string();
                break;
            case 2:
                message.streamId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActivityStream message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActivityStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActivityStream} ActivityStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityStream.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActivityStream message.
     * @function verify
     * @memberof ActivityStream
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActivityStream.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            if (!$util.isString(message.activityId))
                return "activityId: string expected";
        if (message.streamId != null && message.hasOwnProperty("streamId"))
            if (!$util.isString(message.streamId))
                return "streamId: string expected";
        return null;
    };

    /**
     * Creates an ActivityStream message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActivityStream
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActivityStream} ActivityStream
     */
    ActivityStream.fromObject = function fromObject(object) {
        if (object instanceof $root.ActivityStream)
            return object;
        let message = new $root.ActivityStream();
        if (object.activityId != null)
            message.activityId = String(object.activityId);
        if (object.streamId != null)
            message.streamId = String(object.streamId);
        return message;
    };

    /**
     * Creates a plain object from an ActivityStream message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActivityStream
     * @static
     * @param {ActivityStream} message ActivityStream
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActivityStream.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.activityId = "";
            object.streamId = "";
        }
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            object.activityId = message.activityId;
        if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
        return object;
    };

    /**
     * Converts this ActivityStream to JSON.
     * @function toJSON
     * @memberof ActivityStream
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActivityStream.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActivityStream;
})();

export const ChatMessage = $root.ChatMessage = (() => {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {number|null} [timestamp] ChatMessage timestamp
     * @property {string|null} [text] ChatMessage text
     */

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */
    function ChatMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage timestamp.
     * @member {number} timestamp
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.timestamp = 0;

    /**
     * ChatMessage text.
     * @member {string} text
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.text = "";

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
    };

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.uint32();
                break;
            case 2:
                message.text = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatMessage)
            return object;
        let message = new $root.ChatMessage();
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.timestamp = 0;
            object.text = "";
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChatMessage;
})();

export const Content = $root.Content = (() => {

    /**
     * Properties of a Content.
     * @exports IContent
     * @interface IContent
     * @property {ContentType|null} [type] Content type
     * @property {string|null} [locator] Content locator
     */

    /**
     * Constructs a new Content.
     * @exports Content
     * @classdesc Represents a Content.
     * @implements IContent
     * @constructor
     * @param {IContent=} [properties] Properties to set
     */
    function Content(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Content type.
     * @member {ContentType} type
     * @memberof Content
     * @instance
     */
    Content.prototype.type = 0;

    /**
     * Content locator.
     * @member {string} locator
     * @memberof Content
     * @instance
     */
    Content.prototype.locator = "";

    /**
     * Creates a new Content instance using the specified properties.
     * @function create
     * @memberof Content
     * @static
     * @param {IContent=} [properties] Properties to set
     * @returns {Content} Content instance
     */
    Content.create = function create(properties) {
        return new Content(properties);
    };

    /**
     * Encodes the specified Content message. Does not implicitly {@link Content.verify|verify} messages.
     * @function encode
     * @memberof Content
     * @static
     * @param {IContent} message Content message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Content.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.locator != null && Object.hasOwnProperty.call(message, "locator"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.locator);
        return writer;
    };

    /**
     * Encodes the specified Content message, length delimited. Does not implicitly {@link Content.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Content
     * @static
     * @param {IContent} message Content message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Content.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Content message from the specified reader or buffer.
     * @function decode
     * @memberof Content
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Content} Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Content.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Content();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.locator = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Content message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Content
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Content} Content
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Content.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Content message.
     * @function verify
     * @memberof Content
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Content.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            }
        if (message.locator != null && message.hasOwnProperty("locator"))
            if (!$util.isString(message.locator))
                return "locator: string expected";
        return null;
    };

    /**
     * Creates a Content message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Content
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Content} Content
     */
    Content.fromObject = function fromObject(object) {
        if (object instanceof $root.Content)
            return object;
        let message = new $root.Content();
        switch (object.type) {
        case "Blank":
        case 0:
            message.type = 0;
            break;
        case "WebRTCStream":
        case 1:
            message.type = 1;
            break;
        case "ActivityStream":
        case 2:
            message.type = 2;
            break;
        case "H5P":
        case 3:
            message.type = 3;
            break;
        case "Image":
        case 4:
            message.type = 4;
            break;
        case "Video":
        case 5:
            message.type = 5;
            break;
        case "Audio":
        case 6:
            message.type = 6;
            break;
        }
        if (object.locator != null)
            message.locator = String(object.locator);
        return message;
    };

    /**
     * Creates a plain object from a Content message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Content
     * @static
     * @param {Content} message Content
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Content.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "Blank" : 0;
            object.locator = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ContentType[message.type] : message.type;
        if (message.locator != null && message.hasOwnProperty("locator"))
            object.locator = message.locator;
        return object;
    };

    /**
     * Converts this Content to JSON.
     * @function toJSON
     * @memberof Content
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Content.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Content;
})();

/**
 * ContentType enum.
 * @exports ContentType
 * @enum {number}
 * @property {number} Blank=0 Blank value
 * @property {number} WebRTCStream=1 WebRTCStream value
 * @property {number} ActivityStream=2 ActivityStream value
 * @property {number} H5P=3 H5P value
 * @property {number} Image=4 Image value
 * @property {number} Video=5 Video value
 * @property {number} Audio=6 Audio value
 */
export const ContentType = $root.ContentType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Blank"] = 0;
    values[valuesById[1] = "WebRTCStream"] = 1;
    values[valuesById[2] = "ActivityStream"] = 2;
    values[valuesById[3] = "H5P"] = 3;
    values[valuesById[4] = "Image"] = 4;
    values[valuesById[5] = "Video"] = 5;
    values[valuesById[6] = "Audio"] = 6;
    return values;
})();

export { $root as default };
