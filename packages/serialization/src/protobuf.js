/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const WebRTCStreamUpdate = $root.WebRTCStreamUpdate = (() => {

    /**
     * Properties of a WebRTCStreamUpdate.
     * @exports IWebRTCStreamUpdate
     * @interface IWebRTCStreamUpdate
     * @property {string|null} [label] WebRTCStreamUpdate label
     * @property {string|null} [sfu] WebRTCStreamUpdate sfu
     * @property {Array.<string>|null} [trackIDs] WebRTCStreamUpdate trackIDs
     * @property {Array.<string>|null} [removeTrackIDs] WebRTCStreamUpdate removeTrackIDs
     */

    /**
     * Constructs a new WebRTCStreamUpdate.
     * @exports WebRTCStreamUpdate
     * @classdesc Represents a WebRTCStreamUpdate.
     * @implements IWebRTCStreamUpdate
     * @constructor
     * @param {IWebRTCStreamUpdate=} [properties] Properties to set
     */
    function WebRTCStreamUpdate(properties) {
        this.trackIDs = [];
        this.removeTrackIDs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WebRTCStreamUpdate label.
     * @member {string} label
     * @memberof WebRTCStreamUpdate
     * @instance
     */
    WebRTCStreamUpdate.prototype.label = "";

    /**
     * WebRTCStreamUpdate sfu.
     * @member {string} sfu
     * @memberof WebRTCStreamUpdate
     * @instance
     */
    WebRTCStreamUpdate.prototype.sfu = "";

    /**
     * WebRTCStreamUpdate trackIDs.
     * @member {Array.<string>} trackIDs
     * @memberof WebRTCStreamUpdate
     * @instance
     */
    WebRTCStreamUpdate.prototype.trackIDs = $util.emptyArray;

    /**
     * WebRTCStreamUpdate removeTrackIDs.
     * @member {Array.<string>} removeTrackIDs
     * @memberof WebRTCStreamUpdate
     * @instance
     */
    WebRTCStreamUpdate.prototype.removeTrackIDs = $util.emptyArray;

    /**
     * Creates a new WebRTCStreamUpdate instance using the specified properties.
     * @function create
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {IWebRTCStreamUpdate=} [properties] Properties to set
     * @returns {WebRTCStreamUpdate} WebRTCStreamUpdate instance
     */
    WebRTCStreamUpdate.create = function create(properties) {
        return new WebRTCStreamUpdate(properties);
    };

    /**
     * Encodes the specified WebRTCStreamUpdate message. Does not implicitly {@link WebRTCStreamUpdate.verify|verify} messages.
     * @function encode
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {IWebRTCStreamUpdate} message WebRTCStreamUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStreamUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.label);
        if (message.sfu != null && Object.hasOwnProperty.call(message, "sfu"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sfu);
        if (message.trackIDs != null && message.trackIDs.length)
            for (let i = 0; i < message.trackIDs.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.trackIDs[i]);
        if (message.removeTrackIDs != null && message.removeTrackIDs.length)
            for (let i = 0; i < message.removeTrackIDs.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.removeTrackIDs[i]);
        return writer;
    };

    /**
     * Encodes the specified WebRTCStreamUpdate message, length delimited. Does not implicitly {@link WebRTCStreamUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {IWebRTCStreamUpdate} message WebRTCStreamUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStreamUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WebRTCStreamUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WebRTCStreamUpdate} WebRTCStreamUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStreamUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCStreamUpdate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.label = reader.string();
                break;
            case 1:
                message.sfu = reader.string();
                break;
            case 2:
                if (!(message.trackIDs && message.trackIDs.length))
                    message.trackIDs = [];
                message.trackIDs.push(reader.string());
                break;
            case 3:
                if (!(message.removeTrackIDs && message.removeTrackIDs.length))
                    message.removeTrackIDs = [];
                message.removeTrackIDs.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WebRTCStreamUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WebRTCStreamUpdate} WebRTCStreamUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStreamUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WebRTCStreamUpdate message.
     * @function verify
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WebRTCStreamUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.label != null && message.hasOwnProperty("label"))
            if (!$util.isString(message.label))
                return "label: string expected";
        if (message.sfu != null && message.hasOwnProperty("sfu"))
            if (!$util.isString(message.sfu))
                return "sfu: string expected";
        if (message.trackIDs != null && message.hasOwnProperty("trackIDs")) {
            if (!Array.isArray(message.trackIDs))
                return "trackIDs: array expected";
            for (let i = 0; i < message.trackIDs.length; ++i)
                if (!$util.isString(message.trackIDs[i]))
                    return "trackIDs: string[] expected";
        }
        if (message.removeTrackIDs != null && message.hasOwnProperty("removeTrackIDs")) {
            if (!Array.isArray(message.removeTrackIDs))
                return "removeTrackIDs: array expected";
            for (let i = 0; i < message.removeTrackIDs.length; ++i)
                if (!$util.isString(message.removeTrackIDs[i]))
                    return "removeTrackIDs: string[] expected";
        }
        return null;
    };

    /**
     * Creates a WebRTCStreamUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WebRTCStreamUpdate} WebRTCStreamUpdate
     */
    WebRTCStreamUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.WebRTCStreamUpdate)
            return object;
        let message = new $root.WebRTCStreamUpdate();
        if (object.label != null)
            message.label = String(object.label);
        if (object.sfu != null)
            message.sfu = String(object.sfu);
        if (object.trackIDs) {
            if (!Array.isArray(object.trackIDs))
                throw TypeError(".WebRTCStreamUpdate.trackIDs: array expected");
            message.trackIDs = [];
            for (let i = 0; i < object.trackIDs.length; ++i)
                message.trackIDs[i] = String(object.trackIDs[i]);
        }
        if (object.removeTrackIDs) {
            if (!Array.isArray(object.removeTrackIDs))
                throw TypeError(".WebRTCStreamUpdate.removeTrackIDs: array expected");
            message.removeTrackIDs = [];
            for (let i = 0; i < object.removeTrackIDs.length; ++i)
                message.removeTrackIDs[i] = String(object.removeTrackIDs[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a WebRTCStreamUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WebRTCStreamUpdate
     * @static
     * @param {WebRTCStreamUpdate} message WebRTCStreamUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WebRTCStreamUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.trackIDs = [];
            object.removeTrackIDs = [];
        }
        if (options.defaults) {
            object.label = "";
            object.sfu = "";
        }
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = message.label;
        if (message.sfu != null && message.hasOwnProperty("sfu"))
            object.sfu = message.sfu;
        if (message.trackIDs && message.trackIDs.length) {
            object.trackIDs = [];
            for (let j = 0; j < message.trackIDs.length; ++j)
                object.trackIDs[j] = message.trackIDs[j];
        }
        if (message.removeTrackIDs && message.removeTrackIDs.length) {
            object.removeTrackIDs = [];
            for (let j = 0; j < message.removeTrackIDs.length; ++j)
                object.removeTrackIDs[j] = message.removeTrackIDs[j];
        }
        return object;
    };

    /**
     * Converts this WebRTCStreamUpdate to JSON.
     * @function toJSON
     * @memberof WebRTCStreamUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WebRTCStreamUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WebRTCStreamUpdate;
})();

export const DeviceUpdate = $root.DeviceUpdate = (() => {

    /**
     * Properties of a DeviceUpdate.
     * @exports IDeviceUpdate
     * @interface IDeviceUpdate
     * @property {string|null} [activityId] DeviceUpdate activityId
     * @property {string|null} [activityStreamId] DeviceUpdate activityStreamId
     * @property {Object.<string,IWebRTCStreamUpdate>|null} [webRTCStreams] DeviceUpdate webRTCStreams
     * @property {Array.<string>|null} [removeWebRTCStreamIDs] DeviceUpdate removeWebRTCStreamIDs
     */

    /**
     * Constructs a new DeviceUpdate.
     * @exports DeviceUpdate
     * @classdesc Represents a DeviceUpdate.
     * @implements IDeviceUpdate
     * @constructor
     * @param {IDeviceUpdate=} [properties] Properties to set
     */
    function DeviceUpdate(properties) {
        this.webRTCStreams = {};
        this.removeWebRTCStreamIDs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceUpdate activityId.
     * @member {string} activityId
     * @memberof DeviceUpdate
     * @instance
     */
    DeviceUpdate.prototype.activityId = "";

    /**
     * DeviceUpdate activityStreamId.
     * @member {string} activityStreamId
     * @memberof DeviceUpdate
     * @instance
     */
    DeviceUpdate.prototype.activityStreamId = "";

    /**
     * DeviceUpdate webRTCStreams.
     * @member {Object.<string,IWebRTCStreamUpdate>} webRTCStreams
     * @memberof DeviceUpdate
     * @instance
     */
    DeviceUpdate.prototype.webRTCStreams = $util.emptyObject;

    /**
     * DeviceUpdate removeWebRTCStreamIDs.
     * @member {Array.<string>} removeWebRTCStreamIDs
     * @memberof DeviceUpdate
     * @instance
     */
    DeviceUpdate.prototype.removeWebRTCStreamIDs = $util.emptyArray;

    /**
     * Creates a new DeviceUpdate instance using the specified properties.
     * @function create
     * @memberof DeviceUpdate
     * @static
     * @param {IDeviceUpdate=} [properties] Properties to set
     * @returns {DeviceUpdate} DeviceUpdate instance
     */
    DeviceUpdate.create = function create(properties) {
        return new DeviceUpdate(properties);
    };

    /**
     * Encodes the specified DeviceUpdate message. Does not implicitly {@link DeviceUpdate.verify|verify} messages.
     * @function encode
     * @memberof DeviceUpdate
     * @static
     * @param {IDeviceUpdate} message DeviceUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.activityId != null && Object.hasOwnProperty.call(message, "activityId"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.activityId);
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.activityStreamId);
        if (message.webRTCStreams != null && Object.hasOwnProperty.call(message, "webRTCStreams"))
            for (let keys = Object.keys(message.webRTCStreams), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.WebRTCStreamUpdate.encode(message.webRTCStreams[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.removeWebRTCStreamIDs != null && message.removeWebRTCStreamIDs.length)
            for (let i = 0; i < message.removeWebRTCStreamIDs.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.removeWebRTCStreamIDs[i]);
        return writer;
    };

    /**
     * Encodes the specified DeviceUpdate message, length delimited. Does not implicitly {@link DeviceUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceUpdate
     * @static
     * @param {IDeviceUpdate} message DeviceUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceUpdate} DeviceUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceUpdate(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.activityId = reader.string();
                break;
            case 1:
                message.activityStreamId = reader.string();
                break;
            case 2:
                if (message.webRTCStreams === $util.emptyObject)
                    message.webRTCStreams = {};
                let end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    let tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.WebRTCStreamUpdate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.webRTCStreams[key] = value;
                break;
            case 3:
                if (!(message.removeWebRTCStreamIDs && message.removeWebRTCStreamIDs.length))
                    message.removeWebRTCStreamIDs = [];
                message.removeWebRTCStreamIDs.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceUpdate} DeviceUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceUpdate message.
     * @function verify
     * @memberof DeviceUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            if (!$util.isString(message.activityId))
                return "activityId: string expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        if (message.webRTCStreams != null && message.hasOwnProperty("webRTCStreams")) {
            if (!$util.isObject(message.webRTCStreams))
                return "webRTCStreams: object expected";
            let key = Object.keys(message.webRTCStreams);
            for (let i = 0; i < key.length; ++i) {
                let error = $root.WebRTCStreamUpdate.verify(message.webRTCStreams[key[i]]);
                if (error)
                    return "webRTCStreams." + error;
            }
        }
        if (message.removeWebRTCStreamIDs != null && message.hasOwnProperty("removeWebRTCStreamIDs")) {
            if (!Array.isArray(message.removeWebRTCStreamIDs))
                return "removeWebRTCStreamIDs: array expected";
            for (let i = 0; i < message.removeWebRTCStreamIDs.length; ++i)
                if (!$util.isString(message.removeWebRTCStreamIDs[i]))
                    return "removeWebRTCStreamIDs: string[] expected";
        }
        return null;
    };

    /**
     * Creates a DeviceUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceUpdate} DeviceUpdate
     */
    DeviceUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceUpdate)
            return object;
        let message = new $root.DeviceUpdate();
        if (object.activityId != null)
            message.activityId = String(object.activityId);
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        if (object.webRTCStreams) {
            if (typeof object.webRTCStreams !== "object")
                throw TypeError(".DeviceUpdate.webRTCStreams: object expected");
            message.webRTCStreams = {};
            for (let keys = Object.keys(object.webRTCStreams), i = 0; i < keys.length; ++i) {
                if (typeof object.webRTCStreams[keys[i]] !== "object")
                    throw TypeError(".DeviceUpdate.webRTCStreams: object expected");
                message.webRTCStreams[keys[i]] = $root.WebRTCStreamUpdate.fromObject(object.webRTCStreams[keys[i]]);
            }
        }
        if (object.removeWebRTCStreamIDs) {
            if (!Array.isArray(object.removeWebRTCStreamIDs))
                throw TypeError(".DeviceUpdate.removeWebRTCStreamIDs: array expected");
            message.removeWebRTCStreamIDs = [];
            for (let i = 0; i < object.removeWebRTCStreamIDs.length; ++i)
                message.removeWebRTCStreamIDs[i] = String(object.removeWebRTCStreamIDs[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceUpdate
     * @static
     * @param {DeviceUpdate} message DeviceUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.removeWebRTCStreamIDs = [];
        if (options.objects || options.defaults)
            object.webRTCStreams = {};
        if (options.defaults) {
            object.activityId = "";
            object.activityStreamId = "";
        }
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            object.activityId = message.activityId;
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        let keys2;
        if (message.webRTCStreams && (keys2 = Object.keys(message.webRTCStreams)).length) {
            object.webRTCStreams = {};
            for (let j = 0; j < keys2.length; ++j)
                object.webRTCStreams[keys2[j]] = $root.WebRTCStreamUpdate.toObject(message.webRTCStreams[keys2[j]], options);
        }
        if (message.removeWebRTCStreamIDs && message.removeWebRTCStreamIDs.length) {
            object.removeWebRTCStreamIDs = [];
            for (let j = 0; j < message.removeWebRTCStreamIDs.length; ++j)
                object.removeWebRTCStreamIDs[j] = message.removeWebRTCStreamIDs[j];
        }
        return object;
    };

    /**
     * Converts this DeviceUpdate to JSON.
     * @function toJSON
     * @memberof DeviceUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeviceUpdate;
})();

export const ChatMessage = $root.ChatMessage = (() => {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {number|null} [timestamp] ChatMessage timestamp
     * @property {string|null} [message] ChatMessage message
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
     * ChatMessage message.
     * @member {string} message
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.message = "";

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
            writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.timestamp);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
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
            case 0:
                message.timestamp = reader.uint32();
                break;
            case 1:
                message.message = reader.string();
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
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
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
        if (object.message != null)
            message.message = String(object.message);
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
            object.message = "";
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
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

export const Trophy = $root.Trophy = (() => {

    /**
     * Properties of a Trophy.
     * @exports ITrophy
     * @interface ITrophy
     * @property {number|null} [timestamp] Trophy timestamp
     * @property {string|null} [trophy] Trophy trophy
     */

    /**
     * Constructs a new Trophy.
     * @exports Trophy
     * @classdesc Represents a Trophy.
     * @implements ITrophy
     * @constructor
     * @param {ITrophy=} [properties] Properties to set
     */
    function Trophy(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Trophy timestamp.
     * @member {number} timestamp
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.timestamp = 0;

    /**
     * Trophy trophy.
     * @member {string} trophy
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.trophy = "";

    /**
     * Creates a new Trophy instance using the specified properties.
     * @function create
     * @memberof Trophy
     * @static
     * @param {ITrophy=} [properties] Properties to set
     * @returns {Trophy} Trophy instance
     */
    Trophy.create = function create(properties) {
        return new Trophy(properties);
    };

    /**
     * Encodes the specified Trophy message. Does not implicitly {@link Trophy.verify|verify} messages.
     * @function encode
     * @memberof Trophy
     * @static
     * @param {ITrophy} message Trophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trophy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.timestamp);
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.trophy);
        return writer;
    };

    /**
     * Encodes the specified Trophy message, length delimited. Does not implicitly {@link Trophy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Trophy
     * @static
     * @param {ITrophy} message Trophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trophy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Trophy message from the specified reader or buffer.
     * @function decode
     * @memberof Trophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Trophy} Trophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trophy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trophy();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.timestamp = reader.uint32();
                break;
            case 1:
                message.trophy = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Trophy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Trophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Trophy} Trophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trophy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Trophy message.
     * @function verify
     * @memberof Trophy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Trophy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            if (!$util.isString(message.trophy))
                return "trophy: string expected";
        return null;
    };

    /**
     * Creates a Trophy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Trophy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Trophy} Trophy
     */
    Trophy.fromObject = function fromObject(object) {
        if (object instanceof $root.Trophy)
            return object;
        let message = new $root.Trophy();
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
        if (object.trophy != null)
            message.trophy = String(object.trophy);
        return message;
    };

    /**
     * Creates a plain object from a Trophy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Trophy
     * @static
     * @param {Trophy} message Trophy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Trophy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.timestamp = 0;
            object.trophy = "";
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = message.trophy;
        return object;
    };

    /**
     * Converts this Trophy to JSON.
     * @function toJSON
     * @memberof Trophy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Trophy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Trophy;
})();

export const UserUpdate = $root.UserUpdate = (() => {

    /**
     * Properties of a UserUpdate.
     * @exports IUserUpdate
     * @interface IUserUpdate
     * @property {string|null} [name] UserUpdate name
     * @property {Object.<string,IDeviceUpdate>|null} [devices] UserUpdate devices
     * @property {Array.<string>|null} [removeDeviceIDs] UserUpdate removeDeviceIDs
     * @property {Array.<ITrophy>|null} [trophies] UserUpdate trophies
     * @property {Array.<IChatMessage>|null} [chatMessages] UserUpdate chatMessages
     */

    /**
     * Constructs a new UserUpdate.
     * @exports UserUpdate
     * @classdesc Represents a UserUpdate.
     * @implements IUserUpdate
     * @constructor
     * @param {IUserUpdate=} [properties] Properties to set
     */
    function UserUpdate(properties) {
        this.devices = {};
        this.removeDeviceIDs = [];
        this.trophies = [];
        this.chatMessages = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserUpdate name.
     * @member {string} name
     * @memberof UserUpdate
     * @instance
     */
    UserUpdate.prototype.name = "";

    /**
     * UserUpdate devices.
     * @member {Object.<string,IDeviceUpdate>} devices
     * @memberof UserUpdate
     * @instance
     */
    UserUpdate.prototype.devices = $util.emptyObject;

    /**
     * UserUpdate removeDeviceIDs.
     * @member {Array.<string>} removeDeviceIDs
     * @memberof UserUpdate
     * @instance
     */
    UserUpdate.prototype.removeDeviceIDs = $util.emptyArray;

    /**
     * UserUpdate trophies.
     * @member {Array.<ITrophy>} trophies
     * @memberof UserUpdate
     * @instance
     */
    UserUpdate.prototype.trophies = $util.emptyArray;

    /**
     * UserUpdate chatMessages.
     * @member {Array.<IChatMessage>} chatMessages
     * @memberof UserUpdate
     * @instance
     */
    UserUpdate.prototype.chatMessages = $util.emptyArray;

    /**
     * Creates a new UserUpdate instance using the specified properties.
     * @function create
     * @memberof UserUpdate
     * @static
     * @param {IUserUpdate=} [properties] Properties to set
     * @returns {UserUpdate} UserUpdate instance
     */
    UserUpdate.create = function create(properties) {
        return new UserUpdate(properties);
    };

    /**
     * Encodes the specified UserUpdate message. Does not implicitly {@link UserUpdate.verify|verify} messages.
     * @function encode
     * @memberof UserUpdate
     * @static
     * @param {IUserUpdate} message UserUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.name);
        if (message.devices != null && Object.hasOwnProperty.call(message, "devices"))
            for (let keys = Object.keys(message.devices), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.DeviceUpdate.encode(message.devices[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.removeDeviceIDs != null && message.removeDeviceIDs.length)
            for (let i = 0; i < message.removeDeviceIDs.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.removeDeviceIDs[i]);
        if (message.trophies != null && message.trophies.length)
            for (let i = 0; i < message.trophies.length; ++i)
                $root.Trophy.encode(message.trophies[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.chatMessages != null && message.chatMessages.length)
            for (let i = 0; i < message.chatMessages.length; ++i)
                $root.ChatMessage.encode(message.chatMessages[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserUpdate message, length delimited. Does not implicitly {@link UserUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserUpdate
     * @static
     * @param {IUserUpdate} message UserUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof UserUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserUpdate} UserUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserUpdate(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.name = reader.string();
                break;
            case 1:
                if (message.devices === $util.emptyObject)
                    message.devices = {};
                let end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    let tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.DeviceUpdate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.devices[key] = value;
                break;
            case 2:
                if (!(message.removeDeviceIDs && message.removeDeviceIDs.length))
                    message.removeDeviceIDs = [];
                message.removeDeviceIDs.push(reader.string());
                break;
            case 3:
                if (!(message.trophies && message.trophies.length))
                    message.trophies = [];
                message.trophies.push($root.Trophy.decode(reader, reader.uint32()));
                break;
            case 4:
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
     * Decodes a UserUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserUpdate} UserUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserUpdate message.
     * @function verify
     * @memberof UserUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!$util.isObject(message.devices))
                return "devices: object expected";
            let key = Object.keys(message.devices);
            for (let i = 0; i < key.length; ++i) {
                let error = $root.DeviceUpdate.verify(message.devices[key[i]]);
                if (error)
                    return "devices." + error;
            }
        }
        if (message.removeDeviceIDs != null && message.hasOwnProperty("removeDeviceIDs")) {
            if (!Array.isArray(message.removeDeviceIDs))
                return "removeDeviceIDs: array expected";
            for (let i = 0; i < message.removeDeviceIDs.length; ++i)
                if (!$util.isString(message.removeDeviceIDs[i]))
                    return "removeDeviceIDs: string[] expected";
        }
        if (message.trophies != null && message.hasOwnProperty("trophies")) {
            if (!Array.isArray(message.trophies))
                return "trophies: array expected";
            for (let i = 0; i < message.trophies.length; ++i) {
                let error = $root.Trophy.verify(message.trophies[i]);
                if (error)
                    return "trophies." + error;
            }
        }
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
     * Creates a UserUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserUpdate} UserUpdate
     */
    UserUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.UserUpdate)
            return object;
        let message = new $root.UserUpdate();
        if (object.name != null)
            message.name = String(object.name);
        if (object.devices) {
            if (typeof object.devices !== "object")
                throw TypeError(".UserUpdate.devices: object expected");
            message.devices = {};
            for (let keys = Object.keys(object.devices), i = 0; i < keys.length; ++i) {
                if (typeof object.devices[keys[i]] !== "object")
                    throw TypeError(".UserUpdate.devices: object expected");
                message.devices[keys[i]] = $root.DeviceUpdate.fromObject(object.devices[keys[i]]);
            }
        }
        if (object.removeDeviceIDs) {
            if (!Array.isArray(object.removeDeviceIDs))
                throw TypeError(".UserUpdate.removeDeviceIDs: array expected");
            message.removeDeviceIDs = [];
            for (let i = 0; i < object.removeDeviceIDs.length; ++i)
                message.removeDeviceIDs[i] = String(object.removeDeviceIDs[i]);
        }
        if (object.trophies) {
            if (!Array.isArray(object.trophies))
                throw TypeError(".UserUpdate.trophies: array expected");
            message.trophies = [];
            for (let i = 0; i < object.trophies.length; ++i) {
                if (typeof object.trophies[i] !== "object")
                    throw TypeError(".UserUpdate.trophies: object expected");
                message.trophies[i] = $root.Trophy.fromObject(object.trophies[i]);
            }
        }
        if (object.chatMessages) {
            if (!Array.isArray(object.chatMessages))
                throw TypeError(".UserUpdate.chatMessages: array expected");
            message.chatMessages = [];
            for (let i = 0; i < object.chatMessages.length; ++i) {
                if (typeof object.chatMessages[i] !== "object")
                    throw TypeError(".UserUpdate.chatMessages: object expected");
                message.chatMessages[i] = $root.ChatMessage.fromObject(object.chatMessages[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a UserUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserUpdate
     * @static
     * @param {UserUpdate} message UserUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.removeDeviceIDs = [];
            object.trophies = [];
            object.chatMessages = [];
        }
        if (options.objects || options.defaults)
            object.devices = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        let keys2;
        if (message.devices && (keys2 = Object.keys(message.devices)).length) {
            object.devices = {};
            for (let j = 0; j < keys2.length; ++j)
                object.devices[keys2[j]] = $root.DeviceUpdate.toObject(message.devices[keys2[j]], options);
        }
        if (message.removeDeviceIDs && message.removeDeviceIDs.length) {
            object.removeDeviceIDs = [];
            for (let j = 0; j < message.removeDeviceIDs.length; ++j)
                object.removeDeviceIDs[j] = message.removeDeviceIDs[j];
        }
        if (message.trophies && message.trophies.length) {
            object.trophies = [];
            for (let j = 0; j < message.trophies.length; ++j)
                object.trophies[j] = $root.Trophy.toObject(message.trophies[j], options);
        }
        if (message.chatMessages && message.chatMessages.length) {
            object.chatMessages = [];
            for (let j = 0; j < message.chatMessages.length; ++j)
                object.chatMessages[j] = $root.ChatMessage.toObject(message.chatMessages[j], options);
        }
        return object;
    };

    /**
     * Converts this UserUpdate to JSON.
     * @function toJSON
     * @memberof UserUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserUpdate;
})();

export const Content = $root.Content = (() => {

    /**
     * Properties of a Content.
     * @exports IContent
     * @interface IContent
     * @property {ContentType|null} [contentType] Content contentType
     * @property {string|null} [id] Content id
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
     * Content contentType.
     * @member {ContentType} contentType
     * @memberof Content
     * @instance
     */
    Content.prototype.contentType = 0;

    /**
     * Content id.
     * @member {string} id
     * @memberof Content
     * @instance
     */
    Content.prototype.id = "";

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
        if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.contentType);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
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
            case 0:
                message.contentType = reader.int32();
                break;
            case 1:
                message.id = reader.string();
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
        if (message.contentType != null && message.hasOwnProperty("contentType"))
            switch (message.contentType) {
            default:
                return "contentType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            }
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
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
        switch (object.contentType) {
        case "Blank":
        case 0:
            message.contentType = 0;
            break;
        case "WebRTCStream":
        case 1:
            message.contentType = 1;
            break;
        case "ActivityStream":
        case 2:
            message.contentType = 2;
            break;
        case "H5P":
        case 3:
            message.contentType = 3;
            break;
        case "Image":
        case 4:
            message.contentType = 4;
            break;
        case "Video":
        case 5:
            message.contentType = 5;
            break;
        case "Audio":
        case 6:
            message.contentType = 6;
            break;
        }
        if (object.id != null)
            message.id = String(object.id);
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
            object.contentType = options.enums === String ? "Blank" : 0;
            object.id = "";
        }
        if (message.contentType != null && message.hasOwnProperty("contentType"))
            object.contentType = options.enums === String ? $root.ContentType[message.contentType] : message.contentType;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
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

export const RoomUpdate = $root.RoomUpdate = (() => {

    /**
     * Properties of a RoomUpdate.
     * @exports IRoomUpdate
     * @interface IRoomUpdate
     * @property {Object.<string,IUserUpdate>|null} [teachers] RoomUpdate teachers
     * @property {Object.<string,IUserUpdate>|null} [students] RoomUpdate students
     * @property {string|null} [host] RoomUpdate host
     * @property {IContent|null} [content] RoomUpdate content
     * @property {number|null} [endTimestamp] RoomUpdate endTimestamp
     */

    /**
     * Constructs a new RoomUpdate.
     * @exports RoomUpdate
     * @classdesc Represents a RoomUpdate.
     * @implements IRoomUpdate
     * @constructor
     * @param {IRoomUpdate=} [properties] Properties to set
     */
    function RoomUpdate(properties) {
        this.teachers = {};
        this.students = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomUpdate teachers.
     * @member {Object.<string,IUserUpdate>} teachers
     * @memberof RoomUpdate
     * @instance
     */
    RoomUpdate.prototype.teachers = $util.emptyObject;

    /**
     * RoomUpdate students.
     * @member {Object.<string,IUserUpdate>} students
     * @memberof RoomUpdate
     * @instance
     */
    RoomUpdate.prototype.students = $util.emptyObject;

    /**
     * RoomUpdate host.
     * @member {string} host
     * @memberof RoomUpdate
     * @instance
     */
    RoomUpdate.prototype.host = "";

    /**
     * RoomUpdate content.
     * @member {IContent|null|undefined} content
     * @memberof RoomUpdate
     * @instance
     */
    RoomUpdate.prototype.content = null;

    /**
     * RoomUpdate endTimestamp.
     * @member {number} endTimestamp
     * @memberof RoomUpdate
     * @instance
     */
    RoomUpdate.prototype.endTimestamp = 0;

    /**
     * Creates a new RoomUpdate instance using the specified properties.
     * @function create
     * @memberof RoomUpdate
     * @static
     * @param {IRoomUpdate=} [properties] Properties to set
     * @returns {RoomUpdate} RoomUpdate instance
     */
    RoomUpdate.create = function create(properties) {
        return new RoomUpdate(properties);
    };

    /**
     * Encodes the specified RoomUpdate message. Does not implicitly {@link RoomUpdate.verify|verify} messages.
     * @function encode
     * @memberof RoomUpdate
     * @static
     * @param {IRoomUpdate} message RoomUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.teachers != null && Object.hasOwnProperty.call(message, "teachers"))
            for (let keys = Object.keys(message.teachers), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 0, wireType 2 =*/2).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.UserUpdate.encode(message.teachers[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.students != null && Object.hasOwnProperty.call(message, "students"))
            for (let keys = Object.keys(message.students), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.UserUpdate.encode(message.students[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.endTimestamp != null && Object.hasOwnProperty.call(message, "endTimestamp"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.endTimestamp);
        return writer;
    };

    /**
     * Encodes the specified RoomUpdate message, length delimited. Does not implicitly {@link RoomUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomUpdate
     * @static
     * @param {IRoomUpdate} message RoomUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof RoomUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomUpdate} RoomUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomUpdate(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:{
                if (message.teachers === $util.emptyObject)
                    message.teachers = {};
                let end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    let tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.UserUpdate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.teachers[key] = value;
                break;
            }
            case 1:{
                if (message.students === $util.emptyObject)
                    message.students = {};
                let end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    let tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.UserUpdate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.students[key] = value;
                break;
            }
            case 2:
                message.host = reader.string();
                break;
            case 3:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            case 4:
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
     * Decodes a RoomUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomUpdate} RoomUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomUpdate message.
     * @function verify
     * @memberof RoomUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.teachers != null && message.hasOwnProperty("teachers")) {
            if (!$util.isObject(message.teachers))
                return "teachers: object expected";
            let key = Object.keys(message.teachers);
            for (let i = 0; i < key.length; ++i) {
                let error = $root.UserUpdate.verify(message.teachers[key[i]]);
                if (error)
                    return "teachers." + error;
            }
        }
        if (message.students != null && message.hasOwnProperty("students")) {
            if (!$util.isObject(message.students))
                return "students: object expected";
            let key = Object.keys(message.students);
            for (let i = 0; i < key.length; ++i) {
                let error = $root.UserUpdate.verify(message.students[key[i]]);
                if (error)
                    return "students." + error;
            }
        }
        if (message.host != null && message.hasOwnProperty("host"))
            if (!$util.isString(message.host))
                return "host: string expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            let error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            if (!$util.isInteger(message.endTimestamp))
                return "endTimestamp: integer expected";
        return null;
    };

    /**
     * Creates a RoomUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomUpdate} RoomUpdate
     */
    RoomUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomUpdate)
            return object;
        let message = new $root.RoomUpdate();
        if (object.teachers) {
            if (typeof object.teachers !== "object")
                throw TypeError(".RoomUpdate.teachers: object expected");
            message.teachers = {};
            for (let keys = Object.keys(object.teachers), i = 0; i < keys.length; ++i) {
                if (typeof object.teachers[keys[i]] !== "object")
                    throw TypeError(".RoomUpdate.teachers: object expected");
                message.teachers[keys[i]] = $root.UserUpdate.fromObject(object.teachers[keys[i]]);
            }
        }
        if (object.students) {
            if (typeof object.students !== "object")
                throw TypeError(".RoomUpdate.students: object expected");
            message.students = {};
            for (let keys = Object.keys(object.students), i = 0; i < keys.length; ++i) {
                if (typeof object.students[keys[i]] !== "object")
                    throw TypeError(".RoomUpdate.students: object expected");
                message.students[keys[i]] = $root.UserUpdate.fromObject(object.students[keys[i]]);
            }
        }
        if (object.host != null)
            message.host = String(object.host);
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".RoomUpdate.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        if (object.endTimestamp != null)
            message.endTimestamp = object.endTimestamp >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a RoomUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomUpdate
     * @static
     * @param {RoomUpdate} message RoomUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults) {
            object.teachers = {};
            object.students = {};
        }
        if (options.defaults) {
            object.host = "";
            object.content = null;
            object.endTimestamp = 0;
        }
        let keys2;
        if (message.teachers && (keys2 = Object.keys(message.teachers)).length) {
            object.teachers = {};
            for (let j = 0; j < keys2.length; ++j)
                object.teachers[keys2[j]] = $root.UserUpdate.toObject(message.teachers[keys2[j]], options);
        }
        if (message.students && (keys2 = Object.keys(message.students)).length) {
            object.students = {};
            for (let j = 0; j < keys2.length; ++j)
                object.students[keys2[j]] = $root.UserUpdate.toObject(message.students[keys2[j]], options);
        }
        if (message.host != null && message.hasOwnProperty("host"))
            object.host = message.host;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            object.endTimestamp = message.endTimestamp;
        return object;
    };

    /**
     * Converts this RoomUpdate to JSON.
     * @function toJSON
     * @memberof RoomUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomUpdate;
})();

export const StateUpdate = $root.StateUpdate = (() => {

    /**
     * Properties of a StateUpdate.
     * @exports IStateUpdate
     * @interface IStateUpdate
     * @property {number|null} [actionCount] StateUpdate actionCount
     * @property {IRoomUpdate|null} [room] StateUpdate room
     */

    /**
     * Constructs a new StateUpdate.
     * @exports StateUpdate
     * @classdesc Represents a StateUpdate.
     * @implements IStateUpdate
     * @constructor
     * @param {IStateUpdate=} [properties] Properties to set
     */
    function StateUpdate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StateUpdate actionCount.
     * @member {number} actionCount
     * @memberof StateUpdate
     * @instance
     */
    StateUpdate.prototype.actionCount = 0;

    /**
     * StateUpdate room.
     * @member {IRoomUpdate|null|undefined} room
     * @memberof StateUpdate
     * @instance
     */
    StateUpdate.prototype.room = null;

    /**
     * Creates a new StateUpdate instance using the specified properties.
     * @function create
     * @memberof StateUpdate
     * @static
     * @param {IStateUpdate=} [properties] Properties to set
     * @returns {StateUpdate} StateUpdate instance
     */
    StateUpdate.create = function create(properties) {
        return new StateUpdate(properties);
    };

    /**
     * Encodes the specified StateUpdate message. Does not implicitly {@link StateUpdate.verify|verify} messages.
     * @function encode
     * @memberof StateUpdate
     * @static
     * @param {IStateUpdate} message StateUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.actionCount != null && Object.hasOwnProperty.call(message, "actionCount"))
            writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.actionCount);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            $root.RoomUpdate.encode(message.room, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StateUpdate message, length delimited. Does not implicitly {@link StateUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StateUpdate
     * @static
     * @param {IStateUpdate} message StateUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StateUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof StateUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StateUpdate} StateUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.StateUpdate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.actionCount = reader.uint32();
                break;
            case 1:
                message.room = $root.RoomUpdate.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StateUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StateUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StateUpdate} StateUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StateUpdate message.
     * @function verify
     * @memberof StateUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StateUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.actionCount != null && message.hasOwnProperty("actionCount"))
            if (!$util.isInteger(message.actionCount))
                return "actionCount: integer expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            let error = $root.RoomUpdate.verify(message.room);
            if (error)
                return "room." + error;
        }
        return null;
    };

    /**
     * Creates a StateUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StateUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StateUpdate} StateUpdate
     */
    StateUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.StateUpdate)
            return object;
        let message = new $root.StateUpdate();
        if (object.actionCount != null)
            message.actionCount = object.actionCount >>> 0;
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".StateUpdate.room: object expected");
            message.room = $root.RoomUpdate.fromObject(object.room);
        }
        return message;
    };

    /**
     * Creates a plain object from a StateUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StateUpdate
     * @static
     * @param {StateUpdate} message StateUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StateUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.actionCount = 0;
            object.room = null;
        }
        if (message.actionCount != null && message.hasOwnProperty("actionCount"))
            object.actionCount = message.actionCount;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.RoomUpdate.toObject(message.room, options);
        return object;
    };

    /**
     * Converts this StateUpdate to JSON.
     * @function toJSON
     * @memberof StateUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StateUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StateUpdate;
})();

export const Connect = $root.Connect = (() => {

    /**
     * Properties of a Connect.
     * @exports IConnect
     * @interface IConnect
     * @property {string|null} [deviceId] Connect deviceId
     * @property {string|null} [jwt] Connect jwt
     */

    /**
     * Constructs a new Connect.
     * @exports Connect
     * @classdesc Represents a Connect.
     * @implements IConnect
     * @constructor
     * @param {IConnect=} [properties] Properties to set
     */
    function Connect(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Connect deviceId.
     * @member {string} deviceId
     * @memberof Connect
     * @instance
     */
    Connect.prototype.deviceId = "";

    /**
     * Connect jwt.
     * @member {string} jwt
     * @memberof Connect
     * @instance
     */
    Connect.prototype.jwt = "";

    /**
     * Creates a new Connect instance using the specified properties.
     * @function create
     * @memberof Connect
     * @static
     * @param {IConnect=} [properties] Properties to set
     * @returns {Connect} Connect instance
     */
    Connect.create = function create(properties) {
        return new Connect(properties);
    };

    /**
     * Encodes the specified Connect message. Does not implicitly {@link Connect.verify|verify} messages.
     * @function encode
     * @memberof Connect
     * @static
     * @param {IConnect} message Connect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connect.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.deviceId);
        if (message.jwt != null && Object.hasOwnProperty.call(message, "jwt"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.jwt);
        return writer;
    };

    /**
     * Encodes the specified Connect message, length delimited. Does not implicitly {@link Connect.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Connect
     * @static
     * @param {IConnect} message Connect message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Connect.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Connect message from the specified reader or buffer.
     * @function decode
     * @memberof Connect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Connect} Connect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connect.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Connect();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.deviceId = reader.string();
                break;
            case 1:
                message.jwt = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Connect message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Connect
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Connect} Connect
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Connect.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Connect message.
     * @function verify
     * @memberof Connect
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Connect.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.jwt != null && message.hasOwnProperty("jwt"))
            if (!$util.isString(message.jwt))
                return "jwt: string expected";
        return null;
    };

    /**
     * Creates a Connect message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Connect
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Connect} Connect
     */
    Connect.fromObject = function fromObject(object) {
        if (object instanceof $root.Connect)
            return object;
        let message = new $root.Connect();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.jwt != null)
            message.jwt = String(object.jwt);
        return message;
    };

    /**
     * Creates a plain object from a Connect message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Connect
     * @static
     * @param {Connect} message Connect
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Connect.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.deviceId = "";
            object.jwt = "";
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.jwt != null && message.hasOwnProperty("jwt"))
            object.jwt = message.jwt;
        return object;
    };

    /**
     * Converts this Connect to JSON.
     * @function toJSON
     * @memberof Connect
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Connect.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Connect;
})();

export const Action = $root.Action = (() => {

    /**
     * Properties of an Action.
     * @exports IAction
     * @interface IAction
     * @property {IConnect|null} [connect] Action connect
     * @property {IDeviceUpdate|null} [device] Action device
     * @property {string|null} [chatMessage] Action chatMessage
     * @property {boolean|null} [end] Action end
     * @property {IContent|null} [content] Action content
     * @property {string|null} [host] Action host
     * @property {string|null} [userId] Action userId
     * @property {ITrophy|null} [trophy] Action trophy
     */

    /**
     * Constructs a new Action.
     * @exports Action
     * @classdesc Represents an Action.
     * @implements IAction
     * @constructor
     * @param {IAction=} [properties] Properties to set
     */
    function Action(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Action connect.
     * @member {IConnect|null|undefined} connect
     * @memberof Action
     * @instance
     */
    Action.prototype.connect = null;

    /**
     * Action device.
     * @member {IDeviceUpdate|null|undefined} device
     * @memberof Action
     * @instance
     */
    Action.prototype.device = null;

    /**
     * Action chatMessage.
     * @member {string} chatMessage
     * @memberof Action
     * @instance
     */
    Action.prototype.chatMessage = "";

    /**
     * Action end.
     * @member {boolean} end
     * @memberof Action
     * @instance
     */
    Action.prototype.end = false;

    /**
     * Action content.
     * @member {IContent|null|undefined} content
     * @memberof Action
     * @instance
     */
    Action.prototype.content = null;

    /**
     * Action host.
     * @member {string} host
     * @memberof Action
     * @instance
     */
    Action.prototype.host = "";

    /**
     * Action userId.
     * @member {string} userId
     * @memberof Action
     * @instance
     */
    Action.prototype.userId = "";

    /**
     * Action trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof Action
     * @instance
     */
    Action.prototype.trophy = null;

    /**
     * Creates a new Action instance using the specified properties.
     * @function create
     * @memberof Action
     * @static
     * @param {IAction=} [properties] Properties to set
     * @returns {Action} Action instance
     */
    Action.create = function create(properties) {
        return new Action(properties);
    };

    /**
     * Encodes the specified Action message. Does not implicitly {@link Action.verify|verify} messages.
     * @function encode
     * @memberof Action
     * @static
     * @param {IAction} message Action message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Action.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.connect != null && Object.hasOwnProperty.call(message, "connect"))
            $root.Connect.encode(message.connect, writer.uint32(/* id 0, wireType 2 =*/2).fork()).ldelim();
        if (message.device != null && Object.hasOwnProperty.call(message, "device"))
            $root.DeviceUpdate.encode(message.device, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.chatMessage != null && Object.hasOwnProperty.call(message, "chatMessage"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.chatMessage);
        if (message.end != null && Object.hasOwnProperty.call(message, "end"))
            writer.uint32(/* id 50, wireType 0 =*/400).bool(message.end);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 51, wireType 2 =*/410).fork()).ldelim();
        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
            writer.uint32(/* id 52, wireType 2 =*/418).string(message.host);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 53, wireType 2 =*/426).string(message.userId);
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 54, wireType 2 =*/434).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Action message, length delimited. Does not implicitly {@link Action.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Action
     * @static
     * @param {IAction} message Action message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Action.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Action message from the specified reader or buffer.
     * @function decode
     * @memberof Action
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Action} Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Action.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Action();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.connect = $root.Connect.decode(reader, reader.uint32());
                break;
            case 1:
                message.device = $root.DeviceUpdate.decode(reader, reader.uint32());
                break;
            case 2:
                message.chatMessage = reader.string();
                break;
            case 50:
                message.end = reader.bool();
                break;
            case 51:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            case 52:
                message.host = reader.string();
                break;
            case 53:
                message.userId = reader.string();
                break;
            case 54:
                message.trophy = $root.Trophy.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Action message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Action
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Action} Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Action.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Action message.
     * @function verify
     * @memberof Action
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Action.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.connect != null && message.hasOwnProperty("connect")) {
            let error = $root.Connect.verify(message.connect);
            if (error)
                return "connect." + error;
        }
        if (message.device != null && message.hasOwnProperty("device")) {
            let error = $root.DeviceUpdate.verify(message.device);
            if (error)
                return "device." + error;
        }
        if (message.chatMessage != null && message.hasOwnProperty("chatMessage"))
            if (!$util.isString(message.chatMessage))
                return "chatMessage: string expected";
        if (message.end != null && message.hasOwnProperty("end"))
            if (typeof message.end !== "boolean")
                return "end: boolean expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            let error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        if (message.host != null && message.hasOwnProperty("host"))
            if (!$util.isString(message.host))
                return "host: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.trophy != null && message.hasOwnProperty("trophy")) {
            let error = $root.Trophy.verify(message.trophy);
            if (error)
                return "trophy." + error;
        }
        return null;
    };

    /**
     * Creates an Action message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Action
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Action} Action
     */
    Action.fromObject = function fromObject(object) {
        if (object instanceof $root.Action)
            return object;
        let message = new $root.Action();
        if (object.connect != null) {
            if (typeof object.connect !== "object")
                throw TypeError(".Action.connect: object expected");
            message.connect = $root.Connect.fromObject(object.connect);
        }
        if (object.device != null) {
            if (typeof object.device !== "object")
                throw TypeError(".Action.device: object expected");
            message.device = $root.DeviceUpdate.fromObject(object.device);
        }
        if (object.chatMessage != null)
            message.chatMessage = String(object.chatMessage);
        if (object.end != null)
            message.end = Boolean(object.end);
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".Action.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        if (object.host != null)
            message.host = String(object.host);
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".Action.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from an Action message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Action
     * @static
     * @param {Action} message Action
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Action.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.connect = null;
            object.device = null;
            object.chatMessage = "";
            object.end = false;
            object.content = null;
            object.host = "";
            object.userId = "";
            object.trophy = null;
        }
        if (message.connect != null && message.hasOwnProperty("connect"))
            object.connect = $root.Connect.toObject(message.connect, options);
        if (message.device != null && message.hasOwnProperty("device"))
            object.device = $root.DeviceUpdate.toObject(message.device, options);
        if (message.chatMessage != null && message.hasOwnProperty("chatMessage"))
            object.chatMessage = message.chatMessage;
        if (message.end != null && message.hasOwnProperty("end"))
            object.end = message.end;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        if (message.host != null && message.hasOwnProperty("host"))
            object.host = message.host;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = $root.Trophy.toObject(message.trophy, options);
        return object;
    };

    /**
     * Converts this Action to JSON.
     * @function toJSON
     * @memberof Action
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Action.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Action;
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
