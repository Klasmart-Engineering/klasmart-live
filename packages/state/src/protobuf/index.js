/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ClassRequest = (function() {

    /**
     * Properties of a ClassRequest.
     * @exports IClassRequest
     * @interface IClassRequest
     * @property {string|null} [id] ClassRequest id
     * @property {IEndClassRequest|null} [endClass] ClassRequest endClass
     * @property {ISetHostRequest|null} [setHost] ClassRequest setHost
     * @property {ISetContentRequest|null} [setContent] ClassRequest setContent
     * @property {ISetActivityStreamIdRequest|null} [setActvityStreamId] ClassRequest setActvityStreamId
     * @property {IRewardTrophyToUserRequest|null} [rewardTrophyToUser] ClassRequest rewardTrophyToUser
     * @property {IRewardTrophyToAllRequest|null} [rewardTrophyToAll] ClassRequest rewardTrophyToAll
     * @property {ISendChatMessageRequest|null} [sendChatMessage] ClassRequest sendChatMessage
     */

    /**
     * Constructs a new ClassRequest.
     * @exports ClassRequest
     * @classdesc Represents a ClassRequest.
     * @implements IClassRequest
     * @constructor
     * @param {IClassRequest=} [properties] Properties to set
     */
    function ClassRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClassRequest id.
     * @member {string} id
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.id = "";

    /**
     * ClassRequest endClass.
     * @member {IEndClassRequest|null|undefined} endClass
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.endClass = null;

    /**
     * ClassRequest setHost.
     * @member {ISetHostRequest|null|undefined} setHost
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.setHost = null;

    /**
     * ClassRequest setContent.
     * @member {ISetContentRequest|null|undefined} setContent
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.setContent = null;

    /**
     * ClassRequest setActvityStreamId.
     * @member {ISetActivityStreamIdRequest|null|undefined} setActvityStreamId
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.setActvityStreamId = null;

    /**
     * ClassRequest rewardTrophyToUser.
     * @member {IRewardTrophyToUserRequest|null|undefined} rewardTrophyToUser
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.rewardTrophyToUser = null;

    /**
     * ClassRequest rewardTrophyToAll.
     * @member {IRewardTrophyToAllRequest|null|undefined} rewardTrophyToAll
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.rewardTrophyToAll = null;

    /**
     * ClassRequest sendChatMessage.
     * @member {ISendChatMessageRequest|null|undefined} sendChatMessage
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.sendChatMessage = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClassRequest type.
     * @member {"endClass"|"setHost"|"setContent"|"setActvityStreamId"|"rewardTrophyToUser"|"rewardTrophyToAll"|"sendChatMessage"|undefined} type
     * @memberof ClassRequest
     * @instance
     */
    Object.defineProperty(ClassRequest.prototype, "type", {
        get: $util.oneOfGetter($oneOfFields = ["endClass", "setHost", "setContent", "setActvityStreamId", "rewardTrophyToUser", "rewardTrophyToAll", "sendChatMessage"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClassRequest instance using the specified properties.
     * @function create
     * @memberof ClassRequest
     * @static
     * @param {IClassRequest=} [properties] Properties to set
     * @returns {ClassRequest} ClassRequest instance
     */
    ClassRequest.create = function create(properties) {
        return new ClassRequest(properties);
    };

    /**
     * Encodes the specified ClassRequest message. Does not implicitly {@link ClassRequest.verify|verify} messages.
     * @function encode
     * @memberof ClassRequest
     * @static
     * @param {IClassRequest} message ClassRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.endClass != null && Object.hasOwnProperty.call(message, "endClass"))
            $root.EndClassRequest.encode(message.endClass, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.setHost != null && Object.hasOwnProperty.call(message, "setHost"))
            $root.SetHostRequest.encode(message.setHost, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.setContent != null && Object.hasOwnProperty.call(message, "setContent"))
            $root.SetContentRequest.encode(message.setContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.setActvityStreamId != null && Object.hasOwnProperty.call(message, "setActvityStreamId"))
            $root.SetActivityStreamIdRequest.encode(message.setActvityStreamId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.rewardTrophyToUser != null && Object.hasOwnProperty.call(message, "rewardTrophyToUser"))
            $root.RewardTrophyToUserRequest.encode(message.rewardTrophyToUser, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.rewardTrophyToAll != null && Object.hasOwnProperty.call(message, "rewardTrophyToAll"))
            $root.RewardTrophyToAllRequest.encode(message.rewardTrophyToAll, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.sendChatMessage != null && Object.hasOwnProperty.call(message, "sendChatMessage"))
            $root.SendChatMessageRequest.encode(message.sendChatMessage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClassRequest message, length delimited. Does not implicitly {@link ClassRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassRequest
     * @static
     * @param {IClassRequest} message ClassRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClassRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassRequest} ClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.endClass = $root.EndClassRequest.decode(reader, reader.uint32());
                break;
            case 3:
                message.setHost = $root.SetHostRequest.decode(reader, reader.uint32());
                break;
            case 4:
                message.setContent = $root.SetContentRequest.decode(reader, reader.uint32());
                break;
            case 5:
                message.setActvityStreamId = $root.SetActivityStreamIdRequest.decode(reader, reader.uint32());
                break;
            case 6:
                message.rewardTrophyToUser = $root.RewardTrophyToUserRequest.decode(reader, reader.uint32());
                break;
            case 7:
                message.rewardTrophyToAll = $root.RewardTrophyToAllRequest.decode(reader, reader.uint32());
                break;
            case 8:
                message.sendChatMessage = $root.SendChatMessageRequest.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClassRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassRequest} ClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassRequest message.
     * @function verify
     * @memberof ClassRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            properties.type = 1;
            {
                var error = $root.EndClassRequest.verify(message.endClass);
                if (error)
                    return "endClass." + error;
            }
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.SetHostRequest.verify(message.setHost);
                if (error)
                    return "setHost." + error;
            }
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.SetContentRequest.verify(message.setContent);
                if (error)
                    return "setContent." + error;
            }
        }
        if (message.setActvityStreamId != null && message.hasOwnProperty("setActvityStreamId")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.SetActivityStreamIdRequest.verify(message.setActvityStreamId);
                if (error)
                    return "setActvityStreamId." + error;
            }
        }
        if (message.rewardTrophyToUser != null && message.hasOwnProperty("rewardTrophyToUser")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.RewardTrophyToUserRequest.verify(message.rewardTrophyToUser);
                if (error)
                    return "rewardTrophyToUser." + error;
            }
        }
        if (message.rewardTrophyToAll != null && message.hasOwnProperty("rewardTrophyToAll")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.RewardTrophyToAllRequest.verify(message.rewardTrophyToAll);
                if (error)
                    return "rewardTrophyToAll." + error;
            }
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.SendChatMessageRequest.verify(message.sendChatMessage);
                if (error)
                    return "sendChatMessage." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClassRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassRequest} ClassRequest
     */
    ClassRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassRequest)
            return object;
        var message = new $root.ClassRequest();
        if (object.id != null)
            message.id = String(object.id);
        if (object.endClass != null) {
            if (typeof object.endClass !== "object")
                throw TypeError(".ClassRequest.endClass: object expected");
            message.endClass = $root.EndClassRequest.fromObject(object.endClass);
        }
        if (object.setHost != null) {
            if (typeof object.setHost !== "object")
                throw TypeError(".ClassRequest.setHost: object expected");
            message.setHost = $root.SetHostRequest.fromObject(object.setHost);
        }
        if (object.setContent != null) {
            if (typeof object.setContent !== "object")
                throw TypeError(".ClassRequest.setContent: object expected");
            message.setContent = $root.SetContentRequest.fromObject(object.setContent);
        }
        if (object.setActvityStreamId != null) {
            if (typeof object.setActvityStreamId !== "object")
                throw TypeError(".ClassRequest.setActvityStreamId: object expected");
            message.setActvityStreamId = $root.SetActivityStreamIdRequest.fromObject(object.setActvityStreamId);
        }
        if (object.rewardTrophyToUser != null) {
            if (typeof object.rewardTrophyToUser !== "object")
                throw TypeError(".ClassRequest.rewardTrophyToUser: object expected");
            message.rewardTrophyToUser = $root.RewardTrophyToUserRequest.fromObject(object.rewardTrophyToUser);
        }
        if (object.rewardTrophyToAll != null) {
            if (typeof object.rewardTrophyToAll !== "object")
                throw TypeError(".ClassRequest.rewardTrophyToAll: object expected");
            message.rewardTrophyToAll = $root.RewardTrophyToAllRequest.fromObject(object.rewardTrophyToAll);
        }
        if (object.sendChatMessage != null) {
            if (typeof object.sendChatMessage !== "object")
                throw TypeError(".ClassRequest.sendChatMessage: object expected");
            message.sendChatMessage = $root.SendChatMessageRequest.fromObject(object.sendChatMessage);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClassRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassRequest
     * @static
     * @param {ClassRequest} message ClassRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            object.endClass = $root.EndClassRequest.toObject(message.endClass, options);
            if (options.oneofs)
                object.type = "endClass";
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            object.setHost = $root.SetHostRequest.toObject(message.setHost, options);
            if (options.oneofs)
                object.type = "setHost";
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            object.setContent = $root.SetContentRequest.toObject(message.setContent, options);
            if (options.oneofs)
                object.type = "setContent";
        }
        if (message.setActvityStreamId != null && message.hasOwnProperty("setActvityStreamId")) {
            object.setActvityStreamId = $root.SetActivityStreamIdRequest.toObject(message.setActvityStreamId, options);
            if (options.oneofs)
                object.type = "setActvityStreamId";
        }
        if (message.rewardTrophyToUser != null && message.hasOwnProperty("rewardTrophyToUser")) {
            object.rewardTrophyToUser = $root.RewardTrophyToUserRequest.toObject(message.rewardTrophyToUser, options);
            if (options.oneofs)
                object.type = "rewardTrophyToUser";
        }
        if (message.rewardTrophyToAll != null && message.hasOwnProperty("rewardTrophyToAll")) {
            object.rewardTrophyToAll = $root.RewardTrophyToAllRequest.toObject(message.rewardTrophyToAll, options);
            if (options.oneofs)
                object.type = "rewardTrophyToAll";
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            object.sendChatMessage = $root.SendChatMessageRequest.toObject(message.sendChatMessage, options);
            if (options.oneofs)
                object.type = "sendChatMessage";
        }
        return object;
    };

    /**
     * Converts this ClassRequest to JSON.
     * @function toJSON
     * @memberof ClassRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassRequest;
})();

$root.ClassResponse = (function() {

    /**
     * Properties of a ClassResponse.
     * @exports IClassResponse
     * @interface IClassResponse
     * @property {string|null} [id] ClassResponse id
     * @property {string|null} [error] ClassResponse error
     */

    /**
     * Constructs a new ClassResponse.
     * @exports ClassResponse
     * @classdesc Represents a ClassResponse.
     * @implements IClassResponse
     * @constructor
     * @param {IClassResponse=} [properties] Properties to set
     */
    function ClassResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClassResponse id.
     * @member {string} id
     * @memberof ClassResponse
     * @instance
     */
    ClassResponse.prototype.id = "";

    /**
     * ClassResponse error.
     * @member {string} error
     * @memberof ClassResponse
     * @instance
     */
    ClassResponse.prototype.error = "";

    /**
     * Creates a new ClassResponse instance using the specified properties.
     * @function create
     * @memberof ClassResponse
     * @static
     * @param {IClassResponse=} [properties] Properties to set
     * @returns {ClassResponse} ClassResponse instance
     */
    ClassResponse.create = function create(properties) {
        return new ClassResponse(properties);
    };

    /**
     * Encodes the specified ClassResponse message. Does not implicitly {@link ClassResponse.verify|verify} messages.
     * @function encode
     * @memberof ClassResponse
     * @static
     * @param {IClassResponse} message ClassResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        return writer;
    };

    /**
     * Encodes the specified ClassResponse message, length delimited. Does not implicitly {@link ClassResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassResponse
     * @static
     * @param {IClassResponse} message ClassResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ClassResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassResponse} ClassResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.error = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClassResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassResponse} ClassResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassResponse message.
     * @function verify
     * @memberof ClassResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        return null;
    };

    /**
     * Creates a ClassResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassResponse} ClassResponse
     */
    ClassResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassResponse)
            return object;
        var message = new $root.ClassResponse();
        if (object.id != null)
            message.id = String(object.id);
        if (object.error != null)
            message.error = String(object.error);
        return message;
    };

    /**
     * Creates a plain object from a ClassResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassResponse
     * @static
     * @param {ClassResponse} message ClassResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.error = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        return object;
    };

    /**
     * Converts this ClassResponse to JSON.
     * @function toJSON
     * @memberof ClassResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassResponse;
})();

$root.ClassEvent = (function() {

    /**
     * Properties of a ClassEvent.
     * @exports IClassEvent
     * @interface IClassEvent
     * @property {string|null} [id] ClassEvent id
     * @property {IClassResponse|null} [acknowledge] ClassEvent acknowledge
     * @property {ISetClassStateEvent|null} [setRoomState] ClassEvent setRoomState
     * @property {IClassEndedEvent|null} [classEnded] ClassEvent classEnded
     * @property {IDeviceConnectedEvent|null} [deviceConnected] ClassEvent deviceConnected
     * @property {IDeviceDisconnectedEvent|null} [deviceDisconnected] ClassEvent deviceDisconnected
     * @property {IHostChangedEvent|null} [hostChanged] ClassEvent hostChanged
     * @property {IContentChangedEvent|null} [contentChanged] ClassEvent contentChanged
     * @property {INewChatMessageEvent|null} [newChatMessage] ClassEvent newChatMessage
     * @property {IActivityStreamIdChangedEvent|null} [actvityStreamIdChanged] ClassEvent actvityStreamIdChanged
     * @property {ITrophyRewardedToUserEvent|null} [trophyRewardedToUser] ClassEvent trophyRewardedToUser
     * @property {ITrophyRewardedToAllEvent|null} [trophyRewardedToAll] ClassEvent trophyRewardedToAll
     */

    /**
     * Constructs a new ClassEvent.
     * @exports ClassEvent
     * @classdesc Represents a ClassEvent.
     * @implements IClassEvent
     * @constructor
     * @param {IClassEvent=} [properties] Properties to set
     */
    function ClassEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClassEvent id.
     * @member {string} id
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.id = "";

    /**
     * ClassEvent acknowledge.
     * @member {IClassResponse|null|undefined} acknowledge
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.acknowledge = null;

    /**
     * ClassEvent setRoomState.
     * @member {ISetClassStateEvent|null|undefined} setRoomState
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.setRoomState = null;

    /**
     * ClassEvent classEnded.
     * @member {IClassEndedEvent|null|undefined} classEnded
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.classEnded = null;

    /**
     * ClassEvent deviceConnected.
     * @member {IDeviceConnectedEvent|null|undefined} deviceConnected
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.deviceConnected = null;

    /**
     * ClassEvent deviceDisconnected.
     * @member {IDeviceDisconnectedEvent|null|undefined} deviceDisconnected
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.deviceDisconnected = null;

    /**
     * ClassEvent hostChanged.
     * @member {IHostChangedEvent|null|undefined} hostChanged
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.hostChanged = null;

    /**
     * ClassEvent contentChanged.
     * @member {IContentChangedEvent|null|undefined} contentChanged
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.contentChanged = null;

    /**
     * ClassEvent newChatMessage.
     * @member {INewChatMessageEvent|null|undefined} newChatMessage
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.newChatMessage = null;

    /**
     * ClassEvent actvityStreamIdChanged.
     * @member {IActivityStreamIdChangedEvent|null|undefined} actvityStreamIdChanged
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.actvityStreamIdChanged = null;

    /**
     * ClassEvent trophyRewardedToUser.
     * @member {ITrophyRewardedToUserEvent|null|undefined} trophyRewardedToUser
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.trophyRewardedToUser = null;

    /**
     * ClassEvent trophyRewardedToAll.
     * @member {ITrophyRewardedToAllEvent|null|undefined} trophyRewardedToAll
     * @memberof ClassEvent
     * @instance
     */
    ClassEvent.prototype.trophyRewardedToAll = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClassEvent type.
     * @member {"acknowledge"|"setRoomState"|"classEnded"|"deviceConnected"|"deviceDisconnected"|"hostChanged"|"contentChanged"|"newChatMessage"|"actvityStreamIdChanged"|"trophyRewardedToUser"|"trophyRewardedToAll"|undefined} type
     * @memberof ClassEvent
     * @instance
     */
    Object.defineProperty(ClassEvent.prototype, "type", {
        get: $util.oneOfGetter($oneOfFields = ["acknowledge", "setRoomState", "classEnded", "deviceConnected", "deviceDisconnected", "hostChanged", "contentChanged", "newChatMessage", "actvityStreamIdChanged", "trophyRewardedToUser", "trophyRewardedToAll"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClassEvent instance using the specified properties.
     * @function create
     * @memberof ClassEvent
     * @static
     * @param {IClassEvent=} [properties] Properties to set
     * @returns {ClassEvent} ClassEvent instance
     */
    ClassEvent.create = function create(properties) {
        return new ClassEvent(properties);
    };

    /**
     * Encodes the specified ClassEvent message. Does not implicitly {@link ClassEvent.verify|verify} messages.
     * @function encode
     * @memberof ClassEvent
     * @static
     * @param {IClassEvent} message ClassEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.acknowledge != null && Object.hasOwnProperty.call(message, "acknowledge"))
            $root.ClassResponse.encode(message.acknowledge, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.setRoomState != null && Object.hasOwnProperty.call(message, "setRoomState"))
            $root.SetClassStateEvent.encode(message.setRoomState, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.classEnded != null && Object.hasOwnProperty.call(message, "classEnded"))
            $root.ClassEndedEvent.encode(message.classEnded, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.deviceConnected != null && Object.hasOwnProperty.call(message, "deviceConnected"))
            $root.DeviceConnectedEvent.encode(message.deviceConnected, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.deviceDisconnected != null && Object.hasOwnProperty.call(message, "deviceDisconnected"))
            $root.DeviceDisconnectedEvent.encode(message.deviceDisconnected, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.hostChanged != null && Object.hasOwnProperty.call(message, "hostChanged"))
            $root.HostChangedEvent.encode(message.hostChanged, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.contentChanged != null && Object.hasOwnProperty.call(message, "contentChanged"))
            $root.ContentChangedEvent.encode(message.contentChanged, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.newChatMessage != null && Object.hasOwnProperty.call(message, "newChatMessage"))
            $root.NewChatMessageEvent.encode(message.newChatMessage, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.actvityStreamIdChanged != null && Object.hasOwnProperty.call(message, "actvityStreamIdChanged"))
            $root.ActivityStreamIdChangedEvent.encode(message.actvityStreamIdChanged, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.trophyRewardedToUser != null && Object.hasOwnProperty.call(message, "trophyRewardedToUser"))
            $root.TrophyRewardedToUserEvent.encode(message.trophyRewardedToUser, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.trophyRewardedToAll != null && Object.hasOwnProperty.call(message, "trophyRewardedToAll"))
            $root.TrophyRewardedToAllEvent.encode(message.trophyRewardedToAll, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClassEvent message, length delimited. Does not implicitly {@link ClassEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassEvent
     * @static
     * @param {IClassEvent} message ClassEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ClassEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassEvent} ClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.acknowledge = $root.ClassResponse.decode(reader, reader.uint32());
                break;
            case 3:
                message.setRoomState = $root.SetClassStateEvent.decode(reader, reader.uint32());
                break;
            case 4:
                message.classEnded = $root.ClassEndedEvent.decode(reader, reader.uint32());
                break;
            case 5:
                message.deviceConnected = $root.DeviceConnectedEvent.decode(reader, reader.uint32());
                break;
            case 6:
                message.deviceDisconnected = $root.DeviceDisconnectedEvent.decode(reader, reader.uint32());
                break;
            case 7:
                message.hostChanged = $root.HostChangedEvent.decode(reader, reader.uint32());
                break;
            case 8:
                message.contentChanged = $root.ContentChangedEvent.decode(reader, reader.uint32());
                break;
            case 9:
                message.newChatMessage = $root.NewChatMessageEvent.decode(reader, reader.uint32());
                break;
            case 10:
                message.actvityStreamIdChanged = $root.ActivityStreamIdChangedEvent.decode(reader, reader.uint32());
                break;
            case 11:
                message.trophyRewardedToUser = $root.TrophyRewardedToUserEvent.decode(reader, reader.uint32());
                break;
            case 12:
                message.trophyRewardedToAll = $root.TrophyRewardedToAllEvent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClassEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassEvent} ClassEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassEvent message.
     * @function verify
     * @memberof ClassEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.acknowledge != null && message.hasOwnProperty("acknowledge")) {
            properties.type = 1;
            {
                var error = $root.ClassResponse.verify(message.acknowledge);
                if (error)
                    return "acknowledge." + error;
            }
        }
        if (message.setRoomState != null && message.hasOwnProperty("setRoomState")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.SetClassStateEvent.verify(message.setRoomState);
                if (error)
                    return "setRoomState." + error;
            }
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.ClassEndedEvent.verify(message.classEnded);
                if (error)
                    return "classEnded." + error;
            }
        }
        if (message.deviceConnected != null && message.hasOwnProperty("deviceConnected")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.DeviceConnectedEvent.verify(message.deviceConnected);
                if (error)
                    return "deviceConnected." + error;
            }
        }
        if (message.deviceDisconnected != null && message.hasOwnProperty("deviceDisconnected")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.DeviceDisconnectedEvent.verify(message.deviceDisconnected);
                if (error)
                    return "deviceDisconnected." + error;
            }
        }
        if (message.hostChanged != null && message.hasOwnProperty("hostChanged")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.HostChangedEvent.verify(message.hostChanged);
                if (error)
                    return "hostChanged." + error;
            }
        }
        if (message.contentChanged != null && message.hasOwnProperty("contentChanged")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.ContentChangedEvent.verify(message.contentChanged);
                if (error)
                    return "contentChanged." + error;
            }
        }
        if (message.newChatMessage != null && message.hasOwnProperty("newChatMessage")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.NewChatMessageEvent.verify(message.newChatMessage);
                if (error)
                    return "newChatMessage." + error;
            }
        }
        if (message.actvityStreamIdChanged != null && message.hasOwnProperty("actvityStreamIdChanged")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.ActivityStreamIdChangedEvent.verify(message.actvityStreamIdChanged);
                if (error)
                    return "actvityStreamIdChanged." + error;
            }
        }
        if (message.trophyRewardedToUser != null && message.hasOwnProperty("trophyRewardedToUser")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.TrophyRewardedToUserEvent.verify(message.trophyRewardedToUser);
                if (error)
                    return "trophyRewardedToUser." + error;
            }
        }
        if (message.trophyRewardedToAll != null && message.hasOwnProperty("trophyRewardedToAll")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            {
                var error = $root.TrophyRewardedToAllEvent.verify(message.trophyRewardedToAll);
                if (error)
                    return "trophyRewardedToAll." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClassEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassEvent} ClassEvent
     */
    ClassEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassEvent)
            return object;
        var message = new $root.ClassEvent();
        if (object.id != null)
            message.id = String(object.id);
        if (object.acknowledge != null) {
            if (typeof object.acknowledge !== "object")
                throw TypeError(".ClassEvent.acknowledge: object expected");
            message.acknowledge = $root.ClassResponse.fromObject(object.acknowledge);
        }
        if (object.setRoomState != null) {
            if (typeof object.setRoomState !== "object")
                throw TypeError(".ClassEvent.setRoomState: object expected");
            message.setRoomState = $root.SetClassStateEvent.fromObject(object.setRoomState);
        }
        if (object.classEnded != null) {
            if (typeof object.classEnded !== "object")
                throw TypeError(".ClassEvent.classEnded: object expected");
            message.classEnded = $root.ClassEndedEvent.fromObject(object.classEnded);
        }
        if (object.deviceConnected != null) {
            if (typeof object.deviceConnected !== "object")
                throw TypeError(".ClassEvent.deviceConnected: object expected");
            message.deviceConnected = $root.DeviceConnectedEvent.fromObject(object.deviceConnected);
        }
        if (object.deviceDisconnected != null) {
            if (typeof object.deviceDisconnected !== "object")
                throw TypeError(".ClassEvent.deviceDisconnected: object expected");
            message.deviceDisconnected = $root.DeviceDisconnectedEvent.fromObject(object.deviceDisconnected);
        }
        if (object.hostChanged != null) {
            if (typeof object.hostChanged !== "object")
                throw TypeError(".ClassEvent.hostChanged: object expected");
            message.hostChanged = $root.HostChangedEvent.fromObject(object.hostChanged);
        }
        if (object.contentChanged != null) {
            if (typeof object.contentChanged !== "object")
                throw TypeError(".ClassEvent.contentChanged: object expected");
            message.contentChanged = $root.ContentChangedEvent.fromObject(object.contentChanged);
        }
        if (object.newChatMessage != null) {
            if (typeof object.newChatMessage !== "object")
                throw TypeError(".ClassEvent.newChatMessage: object expected");
            message.newChatMessage = $root.NewChatMessageEvent.fromObject(object.newChatMessage);
        }
        if (object.actvityStreamIdChanged != null) {
            if (typeof object.actvityStreamIdChanged !== "object")
                throw TypeError(".ClassEvent.actvityStreamIdChanged: object expected");
            message.actvityStreamIdChanged = $root.ActivityStreamIdChangedEvent.fromObject(object.actvityStreamIdChanged);
        }
        if (object.trophyRewardedToUser != null) {
            if (typeof object.trophyRewardedToUser !== "object")
                throw TypeError(".ClassEvent.trophyRewardedToUser: object expected");
            message.trophyRewardedToUser = $root.TrophyRewardedToUserEvent.fromObject(object.trophyRewardedToUser);
        }
        if (object.trophyRewardedToAll != null) {
            if (typeof object.trophyRewardedToAll !== "object")
                throw TypeError(".ClassEvent.trophyRewardedToAll: object expected");
            message.trophyRewardedToAll = $root.TrophyRewardedToAllEvent.fromObject(object.trophyRewardedToAll);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClassEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassEvent
     * @static
     * @param {ClassEvent} message ClassEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.acknowledge != null && message.hasOwnProperty("acknowledge")) {
            object.acknowledge = $root.ClassResponse.toObject(message.acknowledge, options);
            if (options.oneofs)
                object.type = "acknowledge";
        }
        if (message.setRoomState != null && message.hasOwnProperty("setRoomState")) {
            object.setRoomState = $root.SetClassStateEvent.toObject(message.setRoomState, options);
            if (options.oneofs)
                object.type = "setRoomState";
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            object.classEnded = $root.ClassEndedEvent.toObject(message.classEnded, options);
            if (options.oneofs)
                object.type = "classEnded";
        }
        if (message.deviceConnected != null && message.hasOwnProperty("deviceConnected")) {
            object.deviceConnected = $root.DeviceConnectedEvent.toObject(message.deviceConnected, options);
            if (options.oneofs)
                object.type = "deviceConnected";
        }
        if (message.deviceDisconnected != null && message.hasOwnProperty("deviceDisconnected")) {
            object.deviceDisconnected = $root.DeviceDisconnectedEvent.toObject(message.deviceDisconnected, options);
            if (options.oneofs)
                object.type = "deviceDisconnected";
        }
        if (message.hostChanged != null && message.hasOwnProperty("hostChanged")) {
            object.hostChanged = $root.HostChangedEvent.toObject(message.hostChanged, options);
            if (options.oneofs)
                object.type = "hostChanged";
        }
        if (message.contentChanged != null && message.hasOwnProperty("contentChanged")) {
            object.contentChanged = $root.ContentChangedEvent.toObject(message.contentChanged, options);
            if (options.oneofs)
                object.type = "contentChanged";
        }
        if (message.newChatMessage != null && message.hasOwnProperty("newChatMessage")) {
            object.newChatMessage = $root.NewChatMessageEvent.toObject(message.newChatMessage, options);
            if (options.oneofs)
                object.type = "newChatMessage";
        }
        if (message.actvityStreamIdChanged != null && message.hasOwnProperty("actvityStreamIdChanged")) {
            object.actvityStreamIdChanged = $root.ActivityStreamIdChangedEvent.toObject(message.actvityStreamIdChanged, options);
            if (options.oneofs)
                object.type = "actvityStreamIdChanged";
        }
        if (message.trophyRewardedToUser != null && message.hasOwnProperty("trophyRewardedToUser")) {
            object.trophyRewardedToUser = $root.TrophyRewardedToUserEvent.toObject(message.trophyRewardedToUser, options);
            if (options.oneofs)
                object.type = "trophyRewardedToUser";
        }
        if (message.trophyRewardedToAll != null && message.hasOwnProperty("trophyRewardedToAll")) {
            object.trophyRewardedToAll = $root.TrophyRewardedToAllEvent.toObject(message.trophyRewardedToAll, options);
            if (options.oneofs)
                object.type = "trophyRewardedToAll";
        }
        return object;
    };

    /**
     * Converts this ClassEvent to JSON.
     * @function toJSON
     * @memberof ClassEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassEvent;
})();

$root.EndClassRequest = (function() {

    /**
     * Properties of an EndClassRequest.
     * @exports IEndClassRequest
     * @interface IEndClassRequest
     */

    /**
     * Constructs a new EndClassRequest.
     * @exports EndClassRequest
     * @classdesc Represents an EndClassRequest.
     * @implements IEndClassRequest
     * @constructor
     * @param {IEndClassRequest=} [properties] Properties to set
     */
    function EndClassRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EndClassRequest instance using the specified properties.
     * @function create
     * @memberof EndClassRequest
     * @static
     * @param {IEndClassRequest=} [properties] Properties to set
     * @returns {EndClassRequest} EndClassRequest instance
     */
    EndClassRequest.create = function create(properties) {
        return new EndClassRequest(properties);
    };

    /**
     * Encodes the specified EndClassRequest message. Does not implicitly {@link EndClassRequest.verify|verify} messages.
     * @function encode
     * @memberof EndClassRequest
     * @static
     * @param {IEndClassRequest} message EndClassRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClassRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EndClassRequest message, length delimited. Does not implicitly {@link EndClassRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EndClassRequest
     * @static
     * @param {IEndClassRequest} message EndClassRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClassRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EndClassRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EndClassRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EndClassRequest} EndClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClassRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EndClassRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EndClassRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EndClassRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EndClassRequest} EndClassRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClassRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EndClassRequest message.
     * @function verify
     * @memberof EndClassRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EndClassRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EndClassRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EndClassRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EndClassRequest} EndClassRequest
     */
    EndClassRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.EndClassRequest)
            return object;
        return new $root.EndClassRequest();
    };

    /**
     * Creates a plain object from an EndClassRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EndClassRequest
     * @static
     * @param {EndClassRequest} message EndClassRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EndClassRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EndClassRequest to JSON.
     * @function toJSON
     * @memberof EndClassRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EndClassRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EndClassRequest;
})();

$root.SetHostRequest = (function() {

    /**
     * Properties of a SetHostRequest.
     * @exports ISetHostRequest
     * @interface ISetHostRequest
     * @property {string|null} [hostUserId] SetHostRequest hostUserId
     */

    /**
     * Constructs a new SetHostRequest.
     * @exports SetHostRequest
     * @classdesc Represents a SetHostRequest.
     * @implements ISetHostRequest
     * @constructor
     * @param {ISetHostRequest=} [properties] Properties to set
     */
    function SetHostRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetHostRequest hostUserId.
     * @member {string} hostUserId
     * @memberof SetHostRequest
     * @instance
     */
    SetHostRequest.prototype.hostUserId = "";

    /**
     * Creates a new SetHostRequest instance using the specified properties.
     * @function create
     * @memberof SetHostRequest
     * @static
     * @param {ISetHostRequest=} [properties] Properties to set
     * @returns {SetHostRequest} SetHostRequest instance
     */
    SetHostRequest.create = function create(properties) {
        return new SetHostRequest(properties);
    };

    /**
     * Encodes the specified SetHostRequest message. Does not implicitly {@link SetHostRequest.verify|verify} messages.
     * @function encode
     * @memberof SetHostRequest
     * @static
     * @param {ISetHostRequest} message SetHostRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHostRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hostUserId != null && Object.hasOwnProperty.call(message, "hostUserId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostUserId);
        return writer;
    };

    /**
     * Encodes the specified SetHostRequest message, length delimited. Does not implicitly {@link SetHostRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetHostRequest
     * @static
     * @param {ISetHostRequest} message SetHostRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHostRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetHostRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SetHostRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetHostRequest} SetHostRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHostRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetHostRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hostUserId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetHostRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetHostRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetHostRequest} SetHostRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHostRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetHostRequest message.
     * @function verify
     * @memberof SetHostRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetHostRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
            if (!$util.isString(message.hostUserId))
                return "hostUserId: string expected";
        return null;
    };

    /**
     * Creates a SetHostRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetHostRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetHostRequest} SetHostRequest
     */
    SetHostRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SetHostRequest)
            return object;
        var message = new $root.SetHostRequest();
        if (object.hostUserId != null)
            message.hostUserId = String(object.hostUserId);
        return message;
    };

    /**
     * Creates a plain object from a SetHostRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetHostRequest
     * @static
     * @param {SetHostRequest} message SetHostRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetHostRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.hostUserId = "";
        if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
            object.hostUserId = message.hostUserId;
        return object;
    };

    /**
     * Converts this SetHostRequest to JSON.
     * @function toJSON
     * @memberof SetHostRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetHostRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetHostRequest;
})();

$root.SetContentRequest = (function() {

    /**
     * Properties of a SetContentRequest.
     * @exports ISetContentRequest
     * @interface ISetContentRequest
     * @property {IContent|null} [content] SetContentRequest content
     */

    /**
     * Constructs a new SetContentRequest.
     * @exports SetContentRequest
     * @classdesc Represents a SetContentRequest.
     * @implements ISetContentRequest
     * @constructor
     * @param {ISetContentRequest=} [properties] Properties to set
     */
    function SetContentRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetContentRequest content.
     * @member {IContent|null|undefined} content
     * @memberof SetContentRequest
     * @instance
     */
    SetContentRequest.prototype.content = null;

    /**
     * Creates a new SetContentRequest instance using the specified properties.
     * @function create
     * @memberof SetContentRequest
     * @static
     * @param {ISetContentRequest=} [properties] Properties to set
     * @returns {SetContentRequest} SetContentRequest instance
     */
    SetContentRequest.create = function create(properties) {
        return new SetContentRequest(properties);
    };

    /**
     * Encodes the specified SetContentRequest message. Does not implicitly {@link SetContentRequest.verify|verify} messages.
     * @function encode
     * @memberof SetContentRequest
     * @static
     * @param {ISetContentRequest} message SetContentRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContentRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetContentRequest message, length delimited. Does not implicitly {@link SetContentRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetContentRequest
     * @static
     * @param {ISetContentRequest} message SetContentRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContentRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetContentRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SetContentRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetContentRequest} SetContentRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContentRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetContentRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetContentRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetContentRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetContentRequest} SetContentRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContentRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetContentRequest message.
     * @function verify
     * @memberof SetContentRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetContentRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            var error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        return null;
    };

    /**
     * Creates a SetContentRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetContentRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetContentRequest} SetContentRequest
     */
    SetContentRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SetContentRequest)
            return object;
        var message = new $root.SetContentRequest();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".SetContentRequest.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetContentRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetContentRequest
     * @static
     * @param {SetContentRequest} message SetContentRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetContentRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = null;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        return object;
    };

    /**
     * Converts this SetContentRequest to JSON.
     * @function toJSON
     * @memberof SetContentRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetContentRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetContentRequest;
})();

$root.SetActivityStreamIdRequest = (function() {

    /**
     * Properties of a SetActivityStreamIdRequest.
     * @exports ISetActivityStreamIdRequest
     * @interface ISetActivityStreamIdRequest
     * @property {string|null} [deviceId] SetActivityStreamIdRequest deviceId
     * @property {string|null} [activityStreamId] SetActivityStreamIdRequest activityStreamId
     */

    /**
     * Constructs a new SetActivityStreamIdRequest.
     * @exports SetActivityStreamIdRequest
     * @classdesc Represents a SetActivityStreamIdRequest.
     * @implements ISetActivityStreamIdRequest
     * @constructor
     * @param {ISetActivityStreamIdRequest=} [properties] Properties to set
     */
    function SetActivityStreamIdRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetActivityStreamIdRequest deviceId.
     * @member {string} deviceId
     * @memberof SetActivityStreamIdRequest
     * @instance
     */
    SetActivityStreamIdRequest.prototype.deviceId = "";

    /**
     * SetActivityStreamIdRequest activityStreamId.
     * @member {string} activityStreamId
     * @memberof SetActivityStreamIdRequest
     * @instance
     */
    SetActivityStreamIdRequest.prototype.activityStreamId = "";

    /**
     * Creates a new SetActivityStreamIdRequest instance using the specified properties.
     * @function create
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {ISetActivityStreamIdRequest=} [properties] Properties to set
     * @returns {SetActivityStreamIdRequest} SetActivityStreamIdRequest instance
     */
    SetActivityStreamIdRequest.create = function create(properties) {
        return new SetActivityStreamIdRequest(properties);
    };

    /**
     * Encodes the specified SetActivityStreamIdRequest message. Does not implicitly {@link SetActivityStreamIdRequest.verify|verify} messages.
     * @function encode
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {ISetActivityStreamIdRequest} message SetActivityStreamIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivityStreamIdRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.activityStreamId);
        return writer;
    };

    /**
     * Encodes the specified SetActivityStreamIdRequest message, length delimited. Does not implicitly {@link SetActivityStreamIdRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {ISetActivityStreamIdRequest} message SetActivityStreamIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivityStreamIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetActivityStreamIdRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetActivityStreamIdRequest} SetActivityStreamIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivityStreamIdRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetActivityStreamIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            case 2:
                message.activityStreamId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetActivityStreamIdRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetActivityStreamIdRequest} SetActivityStreamIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivityStreamIdRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetActivityStreamIdRequest message.
     * @function verify
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetActivityStreamIdRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        return null;
    };

    /**
     * Creates a SetActivityStreamIdRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetActivityStreamIdRequest} SetActivityStreamIdRequest
     */
    SetActivityStreamIdRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SetActivityStreamIdRequest)
            return object;
        var message = new $root.SetActivityStreamIdRequest();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        return message;
    };

    /**
     * Creates a plain object from a SetActivityStreamIdRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetActivityStreamIdRequest
     * @static
     * @param {SetActivityStreamIdRequest} message SetActivityStreamIdRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetActivityStreamIdRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deviceId = "";
            object.activityStreamId = "";
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        return object;
    };

    /**
     * Converts this SetActivityStreamIdRequest to JSON.
     * @function toJSON
     * @memberof SetActivityStreamIdRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetActivityStreamIdRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetActivityStreamIdRequest;
})();

$root.RewardTrophyToUserRequest = (function() {

    /**
     * Properties of a RewardTrophyToUserRequest.
     * @exports IRewardTrophyToUserRequest
     * @interface IRewardTrophyToUserRequest
     * @property {string|null} [userId] RewardTrophyToUserRequest userId
     * @property {ITrophy|null} [trophy] RewardTrophyToUserRequest trophy
     */

    /**
     * Constructs a new RewardTrophyToUserRequest.
     * @exports RewardTrophyToUserRequest
     * @classdesc Represents a RewardTrophyToUserRequest.
     * @implements IRewardTrophyToUserRequest
     * @constructor
     * @param {IRewardTrophyToUserRequest=} [properties] Properties to set
     */
    function RewardTrophyToUserRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RewardTrophyToUserRequest userId.
     * @member {string} userId
     * @memberof RewardTrophyToUserRequest
     * @instance
     */
    RewardTrophyToUserRequest.prototype.userId = "";

    /**
     * RewardTrophyToUserRequest trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof RewardTrophyToUserRequest
     * @instance
     */
    RewardTrophyToUserRequest.prototype.trophy = null;

    /**
     * Creates a new RewardTrophyToUserRequest instance using the specified properties.
     * @function create
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {IRewardTrophyToUserRequest=} [properties] Properties to set
     * @returns {RewardTrophyToUserRequest} RewardTrophyToUserRequest instance
     */
    RewardTrophyToUserRequest.create = function create(properties) {
        return new RewardTrophyToUserRequest(properties);
    };

    /**
     * Encodes the specified RewardTrophyToUserRequest message. Does not implicitly {@link RewardTrophyToUserRequest.verify|verify} messages.
     * @function encode
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {IRewardTrophyToUserRequest} message RewardTrophyToUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToUserRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RewardTrophyToUserRequest message, length delimited. Does not implicitly {@link RewardTrophyToUserRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {IRewardTrophyToUserRequest} message RewardTrophyToUserRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RewardTrophyToUserRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RewardTrophyToUserRequest} RewardTrophyToUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RewardTrophyToUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
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
     * Decodes a RewardTrophyToUserRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RewardTrophyToUserRequest} RewardTrophyToUserRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RewardTrophyToUserRequest message.
     * @function verify
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RewardTrophyToUserRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.trophy != null && message.hasOwnProperty("trophy")) {
            var error = $root.Trophy.verify(message.trophy);
            if (error)
                return "trophy." + error;
        }
        return null;
    };

    /**
     * Creates a RewardTrophyToUserRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RewardTrophyToUserRequest} RewardTrophyToUserRequest
     */
    RewardTrophyToUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.RewardTrophyToUserRequest)
            return object;
        var message = new $root.RewardTrophyToUserRequest();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".RewardTrophyToUserRequest.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a RewardTrophyToUserRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RewardTrophyToUserRequest
     * @static
     * @param {RewardTrophyToUserRequest} message RewardTrophyToUserRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RewardTrophyToUserRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.trophy = null;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = $root.Trophy.toObject(message.trophy, options);
        return object;
    };

    /**
     * Converts this RewardTrophyToUserRequest to JSON.
     * @function toJSON
     * @memberof RewardTrophyToUserRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RewardTrophyToUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RewardTrophyToUserRequest;
})();

$root.RewardTrophyToAllRequest = (function() {

    /**
     * Properties of a RewardTrophyToAllRequest.
     * @exports IRewardTrophyToAllRequest
     * @interface IRewardTrophyToAllRequest
     * @property {ITrophy|null} [trophy] RewardTrophyToAllRequest trophy
     */

    /**
     * Constructs a new RewardTrophyToAllRequest.
     * @exports RewardTrophyToAllRequest
     * @classdesc Represents a RewardTrophyToAllRequest.
     * @implements IRewardTrophyToAllRequest
     * @constructor
     * @param {IRewardTrophyToAllRequest=} [properties] Properties to set
     */
    function RewardTrophyToAllRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RewardTrophyToAllRequest trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof RewardTrophyToAllRequest
     * @instance
     */
    RewardTrophyToAllRequest.prototype.trophy = null;

    /**
     * Creates a new RewardTrophyToAllRequest instance using the specified properties.
     * @function create
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {IRewardTrophyToAllRequest=} [properties] Properties to set
     * @returns {RewardTrophyToAllRequest} RewardTrophyToAllRequest instance
     */
    RewardTrophyToAllRequest.create = function create(properties) {
        return new RewardTrophyToAllRequest(properties);
    };

    /**
     * Encodes the specified RewardTrophyToAllRequest message. Does not implicitly {@link RewardTrophyToAllRequest.verify|verify} messages.
     * @function encode
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {IRewardTrophyToAllRequest} message RewardTrophyToAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToAllRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RewardTrophyToAllRequest message, length delimited. Does not implicitly {@link RewardTrophyToAllRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {IRewardTrophyToAllRequest} message RewardTrophyToAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToAllRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RewardTrophyToAllRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RewardTrophyToAllRequest} RewardTrophyToAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToAllRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RewardTrophyToAllRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
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
     * Decodes a RewardTrophyToAllRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RewardTrophyToAllRequest} RewardTrophyToAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToAllRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RewardTrophyToAllRequest message.
     * @function verify
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RewardTrophyToAllRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.trophy != null && message.hasOwnProperty("trophy")) {
            var error = $root.Trophy.verify(message.trophy);
            if (error)
                return "trophy." + error;
        }
        return null;
    };

    /**
     * Creates a RewardTrophyToAllRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RewardTrophyToAllRequest} RewardTrophyToAllRequest
     */
    RewardTrophyToAllRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.RewardTrophyToAllRequest)
            return object;
        var message = new $root.RewardTrophyToAllRequest();
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".RewardTrophyToAllRequest.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a RewardTrophyToAllRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RewardTrophyToAllRequest
     * @static
     * @param {RewardTrophyToAllRequest} message RewardTrophyToAllRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RewardTrophyToAllRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.trophy = null;
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = $root.Trophy.toObject(message.trophy, options);
        return object;
    };

    /**
     * Converts this RewardTrophyToAllRequest to JSON.
     * @function toJSON
     * @memberof RewardTrophyToAllRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RewardTrophyToAllRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RewardTrophyToAllRequest;
})();

$root.SendChatMessageRequest = (function() {

    /**
     * Properties of a SendChatMessageRequest.
     * @exports ISendChatMessageRequest
     * @interface ISendChatMessageRequest
     * @property {string|null} [message] SendChatMessageRequest message
     */

    /**
     * Constructs a new SendChatMessageRequest.
     * @exports SendChatMessageRequest
     * @classdesc Represents a SendChatMessageRequest.
     * @implements ISendChatMessageRequest
     * @constructor
     * @param {ISendChatMessageRequest=} [properties] Properties to set
     */
    function SendChatMessageRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendChatMessageRequest message.
     * @member {string} message
     * @memberof SendChatMessageRequest
     * @instance
     */
    SendChatMessageRequest.prototype.message = "";

    /**
     * Creates a new SendChatMessageRequest instance using the specified properties.
     * @function create
     * @memberof SendChatMessageRequest
     * @static
     * @param {ISendChatMessageRequest=} [properties] Properties to set
     * @returns {SendChatMessageRequest} SendChatMessageRequest instance
     */
    SendChatMessageRequest.create = function create(properties) {
        return new SendChatMessageRequest(properties);
    };

    /**
     * Encodes the specified SendChatMessageRequest message. Does not implicitly {@link SendChatMessageRequest.verify|verify} messages.
     * @function encode
     * @memberof SendChatMessageRequest
     * @static
     * @param {ISendChatMessageRequest} message SendChatMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessageRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified SendChatMessageRequest message, length delimited. Does not implicitly {@link SendChatMessageRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendChatMessageRequest
     * @static
     * @param {ISendChatMessageRequest} message SendChatMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendChatMessageRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SendChatMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendChatMessageRequest} SendChatMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessageRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendChatMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
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
     * Decodes a SendChatMessageRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendChatMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendChatMessageRequest} SendChatMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessageRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendChatMessageRequest message.
     * @function verify
     * @memberof SendChatMessageRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendChatMessageRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a SendChatMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendChatMessageRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendChatMessageRequest} SendChatMessageRequest
     */
    SendChatMessageRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SendChatMessageRequest)
            return object;
        var message = new $root.SendChatMessageRequest();
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a SendChatMessageRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendChatMessageRequest
     * @static
     * @param {SendChatMessageRequest} message SendChatMessageRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendChatMessageRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.message = "";
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this SendChatMessageRequest to JSON.
     * @function toJSON
     * @memberof SendChatMessageRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendChatMessageRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendChatMessageRequest;
})();

$root.SetClassStateEvent = (function() {

    /**
     * Properties of a SetClassStateEvent.
     * @exports ISetClassStateEvent
     * @interface ISetClassStateEvent
     * @property {IClassState|null} [state] SetClassStateEvent state
     */

    /**
     * Constructs a new SetClassStateEvent.
     * @exports SetClassStateEvent
     * @classdesc Represents a SetClassStateEvent.
     * @implements ISetClassStateEvent
     * @constructor
     * @param {ISetClassStateEvent=} [properties] Properties to set
     */
    function SetClassStateEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetClassStateEvent state.
     * @member {IClassState|null|undefined} state
     * @memberof SetClassStateEvent
     * @instance
     */
    SetClassStateEvent.prototype.state = null;

    /**
     * Creates a new SetClassStateEvent instance using the specified properties.
     * @function create
     * @memberof SetClassStateEvent
     * @static
     * @param {ISetClassStateEvent=} [properties] Properties to set
     * @returns {SetClassStateEvent} SetClassStateEvent instance
     */
    SetClassStateEvent.create = function create(properties) {
        return new SetClassStateEvent(properties);
    };

    /**
     * Encodes the specified SetClassStateEvent message. Does not implicitly {@link SetClassStateEvent.verify|verify} messages.
     * @function encode
     * @memberof SetClassStateEvent
     * @static
     * @param {ISetClassStateEvent} message SetClassStateEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetClassStateEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            $root.ClassState.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetClassStateEvent message, length delimited. Does not implicitly {@link SetClassStateEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetClassStateEvent
     * @static
     * @param {ISetClassStateEvent} message SetClassStateEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetClassStateEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetClassStateEvent message from the specified reader or buffer.
     * @function decode
     * @memberof SetClassStateEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetClassStateEvent} SetClassStateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetClassStateEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetClassStateEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.state = $root.ClassState.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetClassStateEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetClassStateEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetClassStateEvent} SetClassStateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetClassStateEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetClassStateEvent message.
     * @function verify
     * @memberof SetClassStateEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetClassStateEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state")) {
            var error = $root.ClassState.verify(message.state);
            if (error)
                return "state." + error;
        }
        return null;
    };

    /**
     * Creates a SetClassStateEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetClassStateEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetClassStateEvent} SetClassStateEvent
     */
    SetClassStateEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.SetClassStateEvent)
            return object;
        var message = new $root.SetClassStateEvent();
        if (object.state != null) {
            if (typeof object.state !== "object")
                throw TypeError(".SetClassStateEvent.state: object expected");
            message.state = $root.ClassState.fromObject(object.state);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetClassStateEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetClassStateEvent
     * @static
     * @param {SetClassStateEvent} message SetClassStateEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetClassStateEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.state = null;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = $root.ClassState.toObject(message.state, options);
        return object;
    };

    /**
     * Converts this SetClassStateEvent to JSON.
     * @function toJSON
     * @memberof SetClassStateEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetClassStateEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetClassStateEvent;
})();

$root.ClassEndedEvent = (function() {

    /**
     * Properties of a ClassEndedEvent.
     * @exports IClassEndedEvent
     * @interface IClassEndedEvent
     * @property {number|Long|null} [timestamp] ClassEndedEvent timestamp
     */

    /**
     * Constructs a new ClassEndedEvent.
     * @exports ClassEndedEvent
     * @classdesc Represents a ClassEndedEvent.
     * @implements IClassEndedEvent
     * @constructor
     * @param {IClassEndedEvent=} [properties] Properties to set
     */
    function ClassEndedEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClassEndedEvent timestamp.
     * @member {number|Long} timestamp
     * @memberof ClassEndedEvent
     * @instance
     */
    ClassEndedEvent.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new ClassEndedEvent instance using the specified properties.
     * @function create
     * @memberof ClassEndedEvent
     * @static
     * @param {IClassEndedEvent=} [properties] Properties to set
     * @returns {ClassEndedEvent} ClassEndedEvent instance
     */
    ClassEndedEvent.create = function create(properties) {
        return new ClassEndedEvent(properties);
    };

    /**
     * Encodes the specified ClassEndedEvent message. Does not implicitly {@link ClassEndedEvent.verify|verify} messages.
     * @function encode
     * @memberof ClassEndedEvent
     * @static
     * @param {IClassEndedEvent} message ClassEndedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEndedEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified ClassEndedEvent message, length delimited. Does not implicitly {@link ClassEndedEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassEndedEvent
     * @static
     * @param {IClassEndedEvent} message ClassEndedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEndedEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassEndedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ClassEndedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassEndedEvent} ClassEndedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEndedEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassEndedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClassEndedEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassEndedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassEndedEvent} ClassEndedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEndedEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassEndedEvent message.
     * @function verify
     * @memberof ClassEndedEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassEndedEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a ClassEndedEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassEndedEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassEndedEvent} ClassEndedEvent
     */
    ClassEndedEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassEndedEvent)
            return object;
        var message = new $root.ClassEndedEvent();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a ClassEndedEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassEndedEvent
     * @static
     * @param {ClassEndedEvent} message ClassEndedEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassEndedEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        return object;
    };

    /**
     * Converts this ClassEndedEvent to JSON.
     * @function toJSON
     * @memberof ClassEndedEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassEndedEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassEndedEvent;
})();

$root.DeviceConnectedEvent = (function() {

    /**
     * Properties of a DeviceConnectedEvent.
     * @exports IDeviceConnectedEvent
     * @interface IDeviceConnectedEvent
     * @property {string|null} [name] DeviceConnectedEvent name
     * @property {IDevice|null} [device] DeviceConnectedEvent device
     */

    /**
     * Constructs a new DeviceConnectedEvent.
     * @exports DeviceConnectedEvent
     * @classdesc Represents a DeviceConnectedEvent.
     * @implements IDeviceConnectedEvent
     * @constructor
     * @param {IDeviceConnectedEvent=} [properties] Properties to set
     */
    function DeviceConnectedEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceConnectedEvent name.
     * @member {string} name
     * @memberof DeviceConnectedEvent
     * @instance
     */
    DeviceConnectedEvent.prototype.name = "";

    /**
     * DeviceConnectedEvent device.
     * @member {IDevice|null|undefined} device
     * @memberof DeviceConnectedEvent
     * @instance
     */
    DeviceConnectedEvent.prototype.device = null;

    /**
     * Creates a new DeviceConnectedEvent instance using the specified properties.
     * @function create
     * @memberof DeviceConnectedEvent
     * @static
     * @param {IDeviceConnectedEvent=} [properties] Properties to set
     * @returns {DeviceConnectedEvent} DeviceConnectedEvent instance
     */
    DeviceConnectedEvent.create = function create(properties) {
        return new DeviceConnectedEvent(properties);
    };

    /**
     * Encodes the specified DeviceConnectedEvent message. Does not implicitly {@link DeviceConnectedEvent.verify|verify} messages.
     * @function encode
     * @memberof DeviceConnectedEvent
     * @static
     * @param {IDeviceConnectedEvent} message DeviceConnectedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceConnectedEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.device != null && Object.hasOwnProperty.call(message, "device"))
            $root.Device.encode(message.device, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceConnectedEvent message, length delimited. Does not implicitly {@link DeviceConnectedEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceConnectedEvent
     * @static
     * @param {IDeviceConnectedEvent} message DeviceConnectedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceConnectedEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceConnectedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceConnectedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceConnectedEvent} DeviceConnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceConnectedEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceConnectedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.device = $root.Device.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceConnectedEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceConnectedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceConnectedEvent} DeviceConnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceConnectedEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceConnectedEvent message.
     * @function verify
     * @memberof DeviceConnectedEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceConnectedEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.device != null && message.hasOwnProperty("device")) {
            var error = $root.Device.verify(message.device);
            if (error)
                return "device." + error;
        }
        return null;
    };

    /**
     * Creates a DeviceConnectedEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceConnectedEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceConnectedEvent} DeviceConnectedEvent
     */
    DeviceConnectedEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceConnectedEvent)
            return object;
        var message = new $root.DeviceConnectedEvent();
        if (object.name != null)
            message.name = String(object.name);
        if (object.device != null) {
            if (typeof object.device !== "object")
                throw TypeError(".DeviceConnectedEvent.device: object expected");
            message.device = $root.Device.fromObject(object.device);
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceConnectedEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceConnectedEvent
     * @static
     * @param {DeviceConnectedEvent} message DeviceConnectedEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceConnectedEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.device = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.device != null && message.hasOwnProperty("device"))
            object.device = $root.Device.toObject(message.device, options);
        return object;
    };

    /**
     * Converts this DeviceConnectedEvent to JSON.
     * @function toJSON
     * @memberof DeviceConnectedEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceConnectedEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeviceConnectedEvent;
})();

$root.DeviceDisconnectedEvent = (function() {

    /**
     * Properties of a DeviceDisconnectedEvent.
     * @exports IDeviceDisconnectedEvent
     * @interface IDeviceDisconnectedEvent
     * @property {string|null} [deviceId] DeviceDisconnectedEvent deviceId
     */

    /**
     * Constructs a new DeviceDisconnectedEvent.
     * @exports DeviceDisconnectedEvent
     * @classdesc Represents a DeviceDisconnectedEvent.
     * @implements IDeviceDisconnectedEvent
     * @constructor
     * @param {IDeviceDisconnectedEvent=} [properties] Properties to set
     */
    function DeviceDisconnectedEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceDisconnectedEvent deviceId.
     * @member {string} deviceId
     * @memberof DeviceDisconnectedEvent
     * @instance
     */
    DeviceDisconnectedEvent.prototype.deviceId = "";

    /**
     * Creates a new DeviceDisconnectedEvent instance using the specified properties.
     * @function create
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {IDeviceDisconnectedEvent=} [properties] Properties to set
     * @returns {DeviceDisconnectedEvent} DeviceDisconnectedEvent instance
     */
    DeviceDisconnectedEvent.create = function create(properties) {
        return new DeviceDisconnectedEvent(properties);
    };

    /**
     * Encodes the specified DeviceDisconnectedEvent message. Does not implicitly {@link DeviceDisconnectedEvent.verify|verify} messages.
     * @function encode
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {IDeviceDisconnectedEvent} message DeviceDisconnectedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceDisconnectedEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        return writer;
    };

    /**
     * Encodes the specified DeviceDisconnectedEvent message, length delimited. Does not implicitly {@link DeviceDisconnectedEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {IDeviceDisconnectedEvent} message DeviceDisconnectedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceDisconnectedEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceDisconnectedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceDisconnectedEvent} DeviceDisconnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceDisconnectedEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceDisconnectedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceDisconnectedEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceDisconnectedEvent} DeviceDisconnectedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceDisconnectedEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceDisconnectedEvent message.
     * @function verify
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceDisconnectedEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        return null;
    };

    /**
     * Creates a DeviceDisconnectedEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceDisconnectedEvent} DeviceDisconnectedEvent
     */
    DeviceDisconnectedEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceDisconnectedEvent)
            return object;
        var message = new $root.DeviceDisconnectedEvent();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        return message;
    };

    /**
     * Creates a plain object from a DeviceDisconnectedEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceDisconnectedEvent
     * @static
     * @param {DeviceDisconnectedEvent} message DeviceDisconnectedEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceDisconnectedEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.deviceId = "";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        return object;
    };

    /**
     * Converts this DeviceDisconnectedEvent to JSON.
     * @function toJSON
     * @memberof DeviceDisconnectedEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceDisconnectedEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DeviceDisconnectedEvent;
})();

$root.HostChangedEvent = (function() {

    /**
     * Properties of a HostChangedEvent.
     * @exports IHostChangedEvent
     * @interface IHostChangedEvent
     * @property {string|null} [hostUserId] HostChangedEvent hostUserId
     */

    /**
     * Constructs a new HostChangedEvent.
     * @exports HostChangedEvent
     * @classdesc Represents a HostChangedEvent.
     * @implements IHostChangedEvent
     * @constructor
     * @param {IHostChangedEvent=} [properties] Properties to set
     */
    function HostChangedEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostChangedEvent hostUserId.
     * @member {string} hostUserId
     * @memberof HostChangedEvent
     * @instance
     */
    HostChangedEvent.prototype.hostUserId = "";

    /**
     * Creates a new HostChangedEvent instance using the specified properties.
     * @function create
     * @memberof HostChangedEvent
     * @static
     * @param {IHostChangedEvent=} [properties] Properties to set
     * @returns {HostChangedEvent} HostChangedEvent instance
     */
    HostChangedEvent.create = function create(properties) {
        return new HostChangedEvent(properties);
    };

    /**
     * Encodes the specified HostChangedEvent message. Does not implicitly {@link HostChangedEvent.verify|verify} messages.
     * @function encode
     * @memberof HostChangedEvent
     * @static
     * @param {IHostChangedEvent} message HostChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostChangedEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hostUserId != null && Object.hasOwnProperty.call(message, "hostUserId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostUserId);
        return writer;
    };

    /**
     * Encodes the specified HostChangedEvent message, length delimited. Does not implicitly {@link HostChangedEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostChangedEvent
     * @static
     * @param {IHostChangedEvent} message HostChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostChangedEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostChangedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof HostChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostChangedEvent} HostChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostChangedEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostChangedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hostUserId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostChangedEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostChangedEvent} HostChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostChangedEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostChangedEvent message.
     * @function verify
     * @memberof HostChangedEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostChangedEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
            if (!$util.isString(message.hostUserId))
                return "hostUserId: string expected";
        return null;
    };

    /**
     * Creates a HostChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostChangedEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostChangedEvent} HostChangedEvent
     */
    HostChangedEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.HostChangedEvent)
            return object;
        var message = new $root.HostChangedEvent();
        if (object.hostUserId != null)
            message.hostUserId = String(object.hostUserId);
        return message;
    };

    /**
     * Creates a plain object from a HostChangedEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostChangedEvent
     * @static
     * @param {HostChangedEvent} message HostChangedEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostChangedEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.hostUserId = "";
        if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
            object.hostUserId = message.hostUserId;
        return object;
    };

    /**
     * Converts this HostChangedEvent to JSON.
     * @function toJSON
     * @memberof HostChangedEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostChangedEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return HostChangedEvent;
})();

$root.ContentChangedEvent = (function() {

    /**
     * Properties of a ContentChangedEvent.
     * @exports IContentChangedEvent
     * @interface IContentChangedEvent
     * @property {IContent|null} [content] ContentChangedEvent content
     */

    /**
     * Constructs a new ContentChangedEvent.
     * @exports ContentChangedEvent
     * @classdesc Represents a ContentChangedEvent.
     * @implements IContentChangedEvent
     * @constructor
     * @param {IContentChangedEvent=} [properties] Properties to set
     */
    function ContentChangedEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContentChangedEvent content.
     * @member {IContent|null|undefined} content
     * @memberof ContentChangedEvent
     * @instance
     */
    ContentChangedEvent.prototype.content = null;

    /**
     * Creates a new ContentChangedEvent instance using the specified properties.
     * @function create
     * @memberof ContentChangedEvent
     * @static
     * @param {IContentChangedEvent=} [properties] Properties to set
     * @returns {ContentChangedEvent} ContentChangedEvent instance
     */
    ContentChangedEvent.create = function create(properties) {
        return new ContentChangedEvent(properties);
    };

    /**
     * Encodes the specified ContentChangedEvent message. Does not implicitly {@link ContentChangedEvent.verify|verify} messages.
     * @function encode
     * @memberof ContentChangedEvent
     * @static
     * @param {IContentChangedEvent} message ContentChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContentChangedEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ContentChangedEvent message, length delimited. Does not implicitly {@link ContentChangedEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ContentChangedEvent
     * @static
     * @param {IContentChangedEvent} message ContentChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContentChangedEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ContentChangedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ContentChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContentChangedEvent} ContentChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContentChangedEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContentChangedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ContentChangedEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ContentChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ContentChangedEvent} ContentChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContentChangedEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ContentChangedEvent message.
     * @function verify
     * @memberof ContentChangedEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ContentChangedEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            var error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        return null;
    };

    /**
     * Creates a ContentChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ContentChangedEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ContentChangedEvent} ContentChangedEvent
     */
    ContentChangedEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ContentChangedEvent)
            return object;
        var message = new $root.ContentChangedEvent();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".ContentChangedEvent.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        return message;
    };

    /**
     * Creates a plain object from a ContentChangedEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ContentChangedEvent
     * @static
     * @param {ContentChangedEvent} message ContentChangedEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ContentChangedEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = null;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        return object;
    };

    /**
     * Converts this ContentChangedEvent to JSON.
     * @function toJSON
     * @memberof ContentChangedEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ContentChangedEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ContentChangedEvent;
})();

$root.ActivityStreamIdChangedEvent = (function() {

    /**
     * Properties of an ActivityStreamIdChangedEvent.
     * @exports IActivityStreamIdChangedEvent
     * @interface IActivityStreamIdChangedEvent
     * @property {string|null} [deviceId] ActivityStreamIdChangedEvent deviceId
     * @property {string|null} [activityStreamId] ActivityStreamIdChangedEvent activityStreamId
     */

    /**
     * Constructs a new ActivityStreamIdChangedEvent.
     * @exports ActivityStreamIdChangedEvent
     * @classdesc Represents an ActivityStreamIdChangedEvent.
     * @implements IActivityStreamIdChangedEvent
     * @constructor
     * @param {IActivityStreamIdChangedEvent=} [properties] Properties to set
     */
    function ActivityStreamIdChangedEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActivityStreamIdChangedEvent deviceId.
     * @member {string} deviceId
     * @memberof ActivityStreamIdChangedEvent
     * @instance
     */
    ActivityStreamIdChangedEvent.prototype.deviceId = "";

    /**
     * ActivityStreamIdChangedEvent activityStreamId.
     * @member {string} activityStreamId
     * @memberof ActivityStreamIdChangedEvent
     * @instance
     */
    ActivityStreamIdChangedEvent.prototype.activityStreamId = "";

    /**
     * Creates a new ActivityStreamIdChangedEvent instance using the specified properties.
     * @function create
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {IActivityStreamIdChangedEvent=} [properties] Properties to set
     * @returns {ActivityStreamIdChangedEvent} ActivityStreamIdChangedEvent instance
     */
    ActivityStreamIdChangedEvent.create = function create(properties) {
        return new ActivityStreamIdChangedEvent(properties);
    };

    /**
     * Encodes the specified ActivityStreamIdChangedEvent message. Does not implicitly {@link ActivityStreamIdChangedEvent.verify|verify} messages.
     * @function encode
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {IActivityStreamIdChangedEvent} message ActivityStreamIdChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityStreamIdChangedEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.activityStreamId);
        return writer;
    };

    /**
     * Encodes the specified ActivityStreamIdChangedEvent message, length delimited. Does not implicitly {@link ActivityStreamIdChangedEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {IActivityStreamIdChangedEvent} message ActivityStreamIdChangedEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActivityStreamIdChangedEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActivityStreamIdChangedEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActivityStreamIdChangedEvent} ActivityStreamIdChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityStreamIdChangedEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActivityStreamIdChangedEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            case 2:
                message.activityStreamId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActivityStreamIdChangedEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActivityStreamIdChangedEvent} ActivityStreamIdChangedEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActivityStreamIdChangedEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActivityStreamIdChangedEvent message.
     * @function verify
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActivityStreamIdChangedEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        return null;
    };

    /**
     * Creates an ActivityStreamIdChangedEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActivityStreamIdChangedEvent} ActivityStreamIdChangedEvent
     */
    ActivityStreamIdChangedEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ActivityStreamIdChangedEvent)
            return object;
        var message = new $root.ActivityStreamIdChangedEvent();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        return message;
    };

    /**
     * Creates a plain object from an ActivityStreamIdChangedEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActivityStreamIdChangedEvent
     * @static
     * @param {ActivityStreamIdChangedEvent} message ActivityStreamIdChangedEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActivityStreamIdChangedEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deviceId = "";
            object.activityStreamId = "";
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        return object;
    };

    /**
     * Converts this ActivityStreamIdChangedEvent to JSON.
     * @function toJSON
     * @memberof ActivityStreamIdChangedEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActivityStreamIdChangedEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActivityStreamIdChangedEvent;
})();

$root.TrophyRewardedToUserEvent = (function() {

    /**
     * Properties of a TrophyRewardedToUserEvent.
     * @exports ITrophyRewardedToUserEvent
     * @interface ITrophyRewardedToUserEvent
     * @property {string|null} [userId] TrophyRewardedToUserEvent userId
     * @property {ITrophy|null} [trophy] TrophyRewardedToUserEvent trophy
     */

    /**
     * Constructs a new TrophyRewardedToUserEvent.
     * @exports TrophyRewardedToUserEvent
     * @classdesc Represents a TrophyRewardedToUserEvent.
     * @implements ITrophyRewardedToUserEvent
     * @constructor
     * @param {ITrophyRewardedToUserEvent=} [properties] Properties to set
     */
    function TrophyRewardedToUserEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TrophyRewardedToUserEvent userId.
     * @member {string} userId
     * @memberof TrophyRewardedToUserEvent
     * @instance
     */
    TrophyRewardedToUserEvent.prototype.userId = "";

    /**
     * TrophyRewardedToUserEvent trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof TrophyRewardedToUserEvent
     * @instance
     */
    TrophyRewardedToUserEvent.prototype.trophy = null;

    /**
     * Creates a new TrophyRewardedToUserEvent instance using the specified properties.
     * @function create
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {ITrophyRewardedToUserEvent=} [properties] Properties to set
     * @returns {TrophyRewardedToUserEvent} TrophyRewardedToUserEvent instance
     */
    TrophyRewardedToUserEvent.create = function create(properties) {
        return new TrophyRewardedToUserEvent(properties);
    };

    /**
     * Encodes the specified TrophyRewardedToUserEvent message. Does not implicitly {@link TrophyRewardedToUserEvent.verify|verify} messages.
     * @function encode
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {ITrophyRewardedToUserEvent} message TrophyRewardedToUserEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TrophyRewardedToUserEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TrophyRewardedToUserEvent message, length delimited. Does not implicitly {@link TrophyRewardedToUserEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {ITrophyRewardedToUserEvent} message TrophyRewardedToUserEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TrophyRewardedToUserEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TrophyRewardedToUserEvent message from the specified reader or buffer.
     * @function decode
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TrophyRewardedToUserEvent} TrophyRewardedToUserEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TrophyRewardedToUserEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TrophyRewardedToUserEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
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
     * Decodes a TrophyRewardedToUserEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TrophyRewardedToUserEvent} TrophyRewardedToUserEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TrophyRewardedToUserEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TrophyRewardedToUserEvent message.
     * @function verify
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TrophyRewardedToUserEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.trophy != null && message.hasOwnProperty("trophy")) {
            var error = $root.Trophy.verify(message.trophy);
            if (error)
                return "trophy." + error;
        }
        return null;
    };

    /**
     * Creates a TrophyRewardedToUserEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TrophyRewardedToUserEvent} TrophyRewardedToUserEvent
     */
    TrophyRewardedToUserEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.TrophyRewardedToUserEvent)
            return object;
        var message = new $root.TrophyRewardedToUserEvent();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".TrophyRewardedToUserEvent.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a TrophyRewardedToUserEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TrophyRewardedToUserEvent
     * @static
     * @param {TrophyRewardedToUserEvent} message TrophyRewardedToUserEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TrophyRewardedToUserEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.trophy = null;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = $root.Trophy.toObject(message.trophy, options);
        return object;
    };

    /**
     * Converts this TrophyRewardedToUserEvent to JSON.
     * @function toJSON
     * @memberof TrophyRewardedToUserEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TrophyRewardedToUserEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TrophyRewardedToUserEvent;
})();

$root.TrophyRewardedToAllEvent = (function() {

    /**
     * Properties of a TrophyRewardedToAllEvent.
     * @exports ITrophyRewardedToAllEvent
     * @interface ITrophyRewardedToAllEvent
     * @property {ITrophy|null} [trophy] TrophyRewardedToAllEvent trophy
     */

    /**
     * Constructs a new TrophyRewardedToAllEvent.
     * @exports TrophyRewardedToAllEvent
     * @classdesc Represents a TrophyRewardedToAllEvent.
     * @implements ITrophyRewardedToAllEvent
     * @constructor
     * @param {ITrophyRewardedToAllEvent=} [properties] Properties to set
     */
    function TrophyRewardedToAllEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TrophyRewardedToAllEvent trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof TrophyRewardedToAllEvent
     * @instance
     */
    TrophyRewardedToAllEvent.prototype.trophy = null;

    /**
     * Creates a new TrophyRewardedToAllEvent instance using the specified properties.
     * @function create
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {ITrophyRewardedToAllEvent=} [properties] Properties to set
     * @returns {TrophyRewardedToAllEvent} TrophyRewardedToAllEvent instance
     */
    TrophyRewardedToAllEvent.create = function create(properties) {
        return new TrophyRewardedToAllEvent(properties);
    };

    /**
     * Encodes the specified TrophyRewardedToAllEvent message. Does not implicitly {@link TrophyRewardedToAllEvent.verify|verify} messages.
     * @function encode
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {ITrophyRewardedToAllEvent} message TrophyRewardedToAllEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TrophyRewardedToAllEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TrophyRewardedToAllEvent message, length delimited. Does not implicitly {@link TrophyRewardedToAllEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {ITrophyRewardedToAllEvent} message TrophyRewardedToAllEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TrophyRewardedToAllEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TrophyRewardedToAllEvent message from the specified reader or buffer.
     * @function decode
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TrophyRewardedToAllEvent} TrophyRewardedToAllEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TrophyRewardedToAllEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TrophyRewardedToAllEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
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
     * Decodes a TrophyRewardedToAllEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TrophyRewardedToAllEvent} TrophyRewardedToAllEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TrophyRewardedToAllEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TrophyRewardedToAllEvent message.
     * @function verify
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TrophyRewardedToAllEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.trophy != null && message.hasOwnProperty("trophy")) {
            var error = $root.Trophy.verify(message.trophy);
            if (error)
                return "trophy." + error;
        }
        return null;
    };

    /**
     * Creates a TrophyRewardedToAllEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TrophyRewardedToAllEvent} TrophyRewardedToAllEvent
     */
    TrophyRewardedToAllEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.TrophyRewardedToAllEvent)
            return object;
        var message = new $root.TrophyRewardedToAllEvent();
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".TrophyRewardedToAllEvent.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a TrophyRewardedToAllEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TrophyRewardedToAllEvent
     * @static
     * @param {TrophyRewardedToAllEvent} message TrophyRewardedToAllEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TrophyRewardedToAllEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.trophy = null;
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = $root.Trophy.toObject(message.trophy, options);
        return object;
    };

    /**
     * Converts this TrophyRewardedToAllEvent to JSON.
     * @function toJSON
     * @memberof TrophyRewardedToAllEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TrophyRewardedToAllEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TrophyRewardedToAllEvent;
})();

$root.NewChatMessageEvent = (function() {

    /**
     * Properties of a NewChatMessageEvent.
     * @exports INewChatMessageEvent
     * @interface INewChatMessageEvent
     * @property {IChatMessage|null} [chatMessage] NewChatMessageEvent chatMessage
     */

    /**
     * Constructs a new NewChatMessageEvent.
     * @exports NewChatMessageEvent
     * @classdesc Represents a NewChatMessageEvent.
     * @implements INewChatMessageEvent
     * @constructor
     * @param {INewChatMessageEvent=} [properties] Properties to set
     */
    function NewChatMessageEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewChatMessageEvent chatMessage.
     * @member {IChatMessage|null|undefined} chatMessage
     * @memberof NewChatMessageEvent
     * @instance
     */
    NewChatMessageEvent.prototype.chatMessage = null;

    /**
     * Creates a new NewChatMessageEvent instance using the specified properties.
     * @function create
     * @memberof NewChatMessageEvent
     * @static
     * @param {INewChatMessageEvent=} [properties] Properties to set
     * @returns {NewChatMessageEvent} NewChatMessageEvent instance
     */
    NewChatMessageEvent.create = function create(properties) {
        return new NewChatMessageEvent(properties);
    };

    /**
     * Encodes the specified NewChatMessageEvent message. Does not implicitly {@link NewChatMessageEvent.verify|verify} messages.
     * @function encode
     * @memberof NewChatMessageEvent
     * @static
     * @param {INewChatMessageEvent} message NewChatMessageEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewChatMessageEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chatMessage != null && Object.hasOwnProperty.call(message, "chatMessage"))
            $root.ChatMessage.encode(message.chatMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NewChatMessageEvent message, length delimited. Does not implicitly {@link NewChatMessageEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewChatMessageEvent
     * @static
     * @param {INewChatMessageEvent} message NewChatMessageEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewChatMessageEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewChatMessageEvent message from the specified reader or buffer.
     * @function decode
     * @memberof NewChatMessageEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewChatMessageEvent} NewChatMessageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewChatMessageEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewChatMessageEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chatMessage = $root.ChatMessage.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewChatMessageEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewChatMessageEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewChatMessageEvent} NewChatMessageEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewChatMessageEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewChatMessageEvent message.
     * @function verify
     * @memberof NewChatMessageEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewChatMessageEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
            var error = $root.ChatMessage.verify(message.chatMessage);
            if (error)
                return "chatMessage." + error;
        }
        return null;
    };

    /**
     * Creates a NewChatMessageEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewChatMessageEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewChatMessageEvent} NewChatMessageEvent
     */
    NewChatMessageEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.NewChatMessageEvent)
            return object;
        var message = new $root.NewChatMessageEvent();
        if (object.chatMessage != null) {
            if (typeof object.chatMessage !== "object")
                throw TypeError(".NewChatMessageEvent.chatMessage: object expected");
            message.chatMessage = $root.ChatMessage.fromObject(object.chatMessage);
        }
        return message;
    };

    /**
     * Creates a plain object from a NewChatMessageEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewChatMessageEvent
     * @static
     * @param {NewChatMessageEvent} message NewChatMessageEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewChatMessageEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.chatMessage = null;
        if (message.chatMessage != null && message.hasOwnProperty("chatMessage"))
            object.chatMessage = $root.ChatMessage.toObject(message.chatMessage, options);
        return object;
    };

    /**
     * Converts this NewChatMessageEvent to JSON.
     * @function toJSON
     * @memberof NewChatMessageEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewChatMessageEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NewChatMessageEvent;
})();

$root.ClassState = (function() {

    /**
     * Properties of a ClassState.
     * @exports IClassState
     * @interface IClassState
     * @property {Object.<string,IUser>|null} [users] ClassState users
     * @property {Object.<string,IDevice>|null} [devices] ClassState devices
     * @property {Array.<IChatMessage>|null} [chatMessages] ClassState chatMessages
     * @property {IContent|null} [content] ClassState content
     * @property {string|null} [hostUserId] ClassState hostUserId
     * @property {number|Long|null} [classEndedTime] ClassState classEndedTime
     */

    /**
     * Constructs a new ClassState.
     * @exports ClassState
     * @classdesc Represents a ClassState.
     * @implements IClassState
     * @constructor
     * @param {IClassState=} [properties] Properties to set
     */
    function ClassState(properties) {
        this.users = {};
        this.devices = {};
        this.chatMessages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClassState users.
     * @member {Object.<string,IUser>} users
     * @memberof ClassState
     * @instance
     */
    ClassState.prototype.users = $util.emptyObject;

    /**
     * ClassState devices.
     * @member {Object.<string,IDevice>} devices
     * @memberof ClassState
     * @instance
     */
    ClassState.prototype.devices = $util.emptyObject;

    /**
     * ClassState chatMessages.
     * @member {Array.<IChatMessage>} chatMessages
     * @memberof ClassState
     * @instance
     */
    ClassState.prototype.chatMessages = $util.emptyArray;

    /**
     * ClassState content.
     * @member {IContent|null|undefined} content
     * @memberof ClassState
     * @instance
     */
    ClassState.prototype.content = null;

    /**
     * ClassState hostUserId.
     * @member {string} hostUserId
     * @memberof ClassState
     * @instance
     */
    ClassState.prototype.hostUserId = "";

    /**
     * ClassState classEndedTime.
     * @member {number|Long} classEndedTime
     * @memberof ClassState
     * @instance
     */
    ClassState.prototype.classEndedTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new ClassState instance using the specified properties.
     * @function create
     * @memberof ClassState
     * @static
     * @param {IClassState=} [properties] Properties to set
     * @returns {ClassState} ClassState instance
     */
    ClassState.create = function create(properties) {
        return new ClassState(properties);
    };

    /**
     * Encodes the specified ClassState message. Does not implicitly {@link ClassState.verify|verify} messages.
     * @function encode
     * @memberof ClassState
     * @static
     * @param {IClassState} message ClassState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.users != null && Object.hasOwnProperty.call(message, "users"))
            for (var keys = Object.keys(message.users), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.User.encode(message.users[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.devices != null && Object.hasOwnProperty.call(message, "devices"))
            for (var keys = Object.keys(message.devices), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Device.encode(message.devices[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.chatMessages != null && message.chatMessages.length)
            for (var i = 0; i < message.chatMessages.length; ++i)
                $root.ChatMessage.encode(message.chatMessages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.hostUserId != null && Object.hasOwnProperty.call(message, "hostUserId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.hostUserId);
        if (message.classEndedTime != null && Object.hasOwnProperty.call(message, "classEndedTime"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.classEndedTime);
        return writer;
    };

    /**
     * Encodes the specified ClassState message, length delimited. Does not implicitly {@link ClassState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassState
     * @static
     * @param {IClassState} message ClassState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassState message from the specified reader or buffer.
     * @function decode
     * @memberof ClassState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassState} ClassState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassState(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (message.users === $util.emptyObject)
                    message.users = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.User.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.users[key] = value;
                break;
            case 2:
                if (message.devices === $util.emptyObject)
                    message.devices = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.Device.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.devices[key] = value;
                break;
            case 3:
                if (!(message.chatMessages && message.chatMessages.length))
                    message.chatMessages = [];
                message.chatMessages.push($root.ChatMessage.decode(reader, reader.uint32()));
                break;
            case 4:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            case 5:
                message.hostUserId = reader.string();
                break;
            case 6:
                message.classEndedTime = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClassState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassState} ClassState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassState message.
     * @function verify
     * @memberof ClassState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.users != null && message.hasOwnProperty("users")) {
            if (!$util.isObject(message.users))
                return "users: object expected";
            var key = Object.keys(message.users);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.User.verify(message.users[key[i]]);
                if (error)
                    return "users." + error;
            }
        }
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!$util.isObject(message.devices))
                return "devices: object expected";
            var key = Object.keys(message.devices);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Device.verify(message.devices[key[i]]);
                if (error)
                    return "devices." + error;
            }
        }
        if (message.chatMessages != null && message.hasOwnProperty("chatMessages")) {
            if (!Array.isArray(message.chatMessages))
                return "chatMessages: array expected";
            for (var i = 0; i < message.chatMessages.length; ++i) {
                var error = $root.ChatMessage.verify(message.chatMessages[i]);
                if (error)
                    return "chatMessages." + error;
            }
        }
        if (message.content != null && message.hasOwnProperty("content")) {
            var error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
        }
        if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
            if (!$util.isString(message.hostUserId))
                return "hostUserId: string expected";
        if (message.classEndedTime != null && message.hasOwnProperty("classEndedTime"))
            if (!$util.isInteger(message.classEndedTime) && !(message.classEndedTime && $util.isInteger(message.classEndedTime.low) && $util.isInteger(message.classEndedTime.high)))
                return "classEndedTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a ClassState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassState} ClassState
     */
    ClassState.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassState)
            return object;
        var message = new $root.ClassState();
        if (object.users) {
            if (typeof object.users !== "object")
                throw TypeError(".ClassState.users: object expected");
            message.users = {};
            for (var keys = Object.keys(object.users), i = 0; i < keys.length; ++i) {
                if (typeof object.users[keys[i]] !== "object")
                    throw TypeError(".ClassState.users: object expected");
                message.users[keys[i]] = $root.User.fromObject(object.users[keys[i]]);
            }
        }
        if (object.devices) {
            if (typeof object.devices !== "object")
                throw TypeError(".ClassState.devices: object expected");
            message.devices = {};
            for (var keys = Object.keys(object.devices), i = 0; i < keys.length; ++i) {
                if (typeof object.devices[keys[i]] !== "object")
                    throw TypeError(".ClassState.devices: object expected");
                message.devices[keys[i]] = $root.Device.fromObject(object.devices[keys[i]]);
            }
        }
        if (object.chatMessages) {
            if (!Array.isArray(object.chatMessages))
                throw TypeError(".ClassState.chatMessages: array expected");
            message.chatMessages = [];
            for (var i = 0; i < object.chatMessages.length; ++i) {
                if (typeof object.chatMessages[i] !== "object")
                    throw TypeError(".ClassState.chatMessages: object expected");
                message.chatMessages[i] = $root.ChatMessage.fromObject(object.chatMessages[i]);
            }
        }
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".ClassState.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        if (object.hostUserId != null)
            message.hostUserId = String(object.hostUserId);
        if (object.classEndedTime != null)
            if ($util.Long)
                (message.classEndedTime = $util.Long.fromValue(object.classEndedTime)).unsigned = true;
            else if (typeof object.classEndedTime === "string")
                message.classEndedTime = parseInt(object.classEndedTime, 10);
            else if (typeof object.classEndedTime === "number")
                message.classEndedTime = object.classEndedTime;
            else if (typeof object.classEndedTime === "object")
                message.classEndedTime = new $util.LongBits(object.classEndedTime.low >>> 0, object.classEndedTime.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a ClassState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassState
     * @static
     * @param {ClassState} message ClassState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.chatMessages = [];
        if (options.objects || options.defaults) {
            object.users = {};
            object.devices = {};
        }
        if (options.defaults) {
            object.content = null;
            object.hostUserId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.classEndedTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.classEndedTime = options.longs === String ? "0" : 0;
        }
        var keys2;
        if (message.users && (keys2 = Object.keys(message.users)).length) {
            object.users = {};
            for (var j = 0; j < keys2.length; ++j)
                object.users[keys2[j]] = $root.User.toObject(message.users[keys2[j]], options);
        }
        if (message.devices && (keys2 = Object.keys(message.devices)).length) {
            object.devices = {};
            for (var j = 0; j < keys2.length; ++j)
                object.devices[keys2[j]] = $root.Device.toObject(message.devices[keys2[j]], options);
        }
        if (message.chatMessages && message.chatMessages.length) {
            object.chatMessages = [];
            for (var j = 0; j < message.chatMessages.length; ++j)
                object.chatMessages[j] = $root.ChatMessage.toObject(message.chatMessages[j], options);
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
            object.hostUserId = message.hostUserId;
        if (message.classEndedTime != null && message.hasOwnProperty("classEndedTime"))
            if (typeof message.classEndedTime === "number")
                object.classEndedTime = options.longs === String ? String(message.classEndedTime) : message.classEndedTime;
            else
                object.classEndedTime = options.longs === String ? $util.Long.prototype.toString.call(message.classEndedTime) : options.longs === Number ? new $util.LongBits(message.classEndedTime.low >>> 0, message.classEndedTime.high >>> 0).toNumber(true) : message.classEndedTime;
        return object;
    };

    /**
     * Converts this ClassState to JSON.
     * @function toJSON
     * @memberof ClassState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassState;
})();

$root.User = (function() {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {string|null} [id] User id
     * @property {string|null} [name] User name
     * @property {Array.<ITrophy>|null} [trophies] User trophies
     * @property {Array.<string>|null} [deviceIds] User deviceIds
     */

    /**
     * Constructs a new User.
     * @exports User
     * @classdesc Represents a User.
     * @implements IUser
     * @constructor
     * @param {IUser=} [properties] Properties to set
     */
    function User(properties) {
        this.trophies = [];
        this.deviceIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * User id.
     * @member {string} id
     * @memberof User
     * @instance
     */
    User.prototype.id = "";

    /**
     * User name.
     * @member {string} name
     * @memberof User
     * @instance
     */
    User.prototype.name = "";

    /**
     * User trophies.
     * @member {Array.<ITrophy>} trophies
     * @memberof User
     * @instance
     */
    User.prototype.trophies = $util.emptyArray;

    /**
     * User deviceIds.
     * @member {Array.<string>} deviceIds
     * @memberof User
     * @instance
     */
    User.prototype.deviceIds = $util.emptyArray;

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof User
     * @static
     * @param {IUser=} [properties] Properties to set
     * @returns {User} User instance
     */
    User.create = function create(properties) {
        return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @function encode
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.trophies != null && message.trophies.length)
            for (var i = 0; i < message.trophies.length; ++i)
                $root.Trophy.encode(message.trophies[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.deviceIds != null && message.deviceIds.length)
            for (var i = 0; i < message.deviceIds.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceIds[i]);
        return writer;
    };

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @function encodeDelimited
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                if (!(message.trophies && message.trophies.length))
                    message.trophies = [];
                message.trophies.push($root.Trophy.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.deviceIds && message.deviceIds.length))
                    message.deviceIds = [];
                message.deviceIds.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a User message.
     * @function verify
     * @memberof User
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.trophies != null && message.hasOwnProperty("trophies")) {
            if (!Array.isArray(message.trophies))
                return "trophies: array expected";
            for (var i = 0; i < message.trophies.length; ++i) {
                var error = $root.Trophy.verify(message.trophies[i]);
                if (error)
                    return "trophies." + error;
            }
        }
        if (message.deviceIds != null && message.hasOwnProperty("deviceIds")) {
            if (!Array.isArray(message.deviceIds))
                return "deviceIds: array expected";
            for (var i = 0; i < message.deviceIds.length; ++i)
                if (!$util.isString(message.deviceIds[i]))
                    return "deviceIds: string[] expected";
        }
        return null;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User} User
     */
    User.fromObject = function fromObject(object) {
        if (object instanceof $root.User)
            return object;
        var message = new $root.User();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.trophies) {
            if (!Array.isArray(object.trophies))
                throw TypeError(".User.trophies: array expected");
            message.trophies = [];
            for (var i = 0; i < object.trophies.length; ++i) {
                if (typeof object.trophies[i] !== "object")
                    throw TypeError(".User.trophies: object expected");
                message.trophies[i] = $root.Trophy.fromObject(object.trophies[i]);
            }
        }
        if (object.deviceIds) {
            if (!Array.isArray(object.deviceIds))
                throw TypeError(".User.deviceIds: array expected");
            message.deviceIds = [];
            for (var i = 0; i < object.deviceIds.length; ++i)
                message.deviceIds[i] = String(object.deviceIds[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User
     * @static
     * @param {User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.trophies = [];
            object.deviceIds = [];
        }
        if (options.defaults) {
            object.id = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.trophies && message.trophies.length) {
            object.trophies = [];
            for (var j = 0; j < message.trophies.length; ++j)
                object.trophies[j] = $root.Trophy.toObject(message.trophies[j], options);
        }
        if (message.deviceIds && message.deviceIds.length) {
            object.deviceIds = [];
            for (var j = 0; j < message.deviceIds.length; ++j)
                object.deviceIds[j] = message.deviceIds[j];
        }
        return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return User;
})();

$root.Trophy = (function() {

    /**
     * Properties of a Trophy.
     * @exports ITrophy
     * @interface ITrophy
     * @property {number|Long|null} [timestamp] Trophy timestamp
     * @property {string|null} [type] Trophy type
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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Trophy timestamp.
     * @member {number|Long} timestamp
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Trophy type.
     * @member {string} type
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.type = "";

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
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trophy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.uint64();
                break;
            case 2:
                message.type = reader.string();
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
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
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
        var message = new $root.Trophy();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.type != null)
            message.type = String(object.type);
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
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.type = "";
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
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

$root.Device = (function() {

    /**
     * Properties of a Device.
     * @exports IDevice
     * @interface IDevice
     * @property {string|null} [id] Device id
     * @property {string|null} [userId] Device userId
     * @property {string|null} [activityStreamId] Device activityStreamId
     * @property {Array.<string>|null} [webRtcStreamIds] Device webRtcStreamIds
     */

    /**
     * Constructs a new Device.
     * @exports Device
     * @classdesc Represents a Device.
     * @implements IDevice
     * @constructor
     * @param {IDevice=} [properties] Properties to set
     */
    function Device(properties) {
        this.webRtcStreamIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Device id.
     * @member {string} id
     * @memberof Device
     * @instance
     */
    Device.prototype.id = "";

    /**
     * Device userId.
     * @member {string} userId
     * @memberof Device
     * @instance
     */
    Device.prototype.userId = "";

    /**
     * Device activityStreamId.
     * @member {string} activityStreamId
     * @memberof Device
     * @instance
     */
    Device.prototype.activityStreamId = "";

    /**
     * Device webRtcStreamIds.
     * @member {Array.<string>} webRtcStreamIds
     * @memberof Device
     * @instance
     */
    Device.prototype.webRtcStreamIds = $util.emptyArray;

    /**
     * Creates a new Device instance using the specified properties.
     * @function create
     * @memberof Device
     * @static
     * @param {IDevice=} [properties] Properties to set
     * @returns {Device} Device instance
     */
    Device.create = function create(properties) {
        return new Device(properties);
    };

    /**
     * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
     * @function encode
     * @memberof Device
     * @static
     * @param {IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.activityStreamId);
        if (message.webRtcStreamIds != null && message.webRtcStreamIds.length)
            for (var i = 0; i < message.webRtcStreamIds.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.webRtcStreamIds[i]);
        return writer;
    };

    /**
     * Encodes the specified Device message, length delimited. Does not implicitly {@link Device.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Device
     * @static
     * @param {IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @function decode
     * @memberof Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Device();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.userId = reader.string();
                break;
            case 3:
                message.activityStreamId = reader.string();
                break;
            case 4:
                if (!(message.webRtcStreamIds && message.webRtcStreamIds.length))
                    message.webRtcStreamIds = [];
                message.webRtcStreamIds.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Device message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Device message.
     * @function verify
     * @memberof Device
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Device.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        if (message.webRtcStreamIds != null && message.hasOwnProperty("webRtcStreamIds")) {
            if (!Array.isArray(message.webRtcStreamIds))
                return "webRtcStreamIds: array expected";
            for (var i = 0; i < message.webRtcStreamIds.length; ++i)
                if (!$util.isString(message.webRtcStreamIds[i]))
                    return "webRtcStreamIds: string[] expected";
        }
        return null;
    };

    /**
     * Creates a Device message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Device
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Device} Device
     */
    Device.fromObject = function fromObject(object) {
        if (object instanceof $root.Device)
            return object;
        var message = new $root.Device();
        if (object.id != null)
            message.id = String(object.id);
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        if (object.webRtcStreamIds) {
            if (!Array.isArray(object.webRtcStreamIds))
                throw TypeError(".Device.webRtcStreamIds: array expected");
            message.webRtcStreamIds = [];
            for (var i = 0; i < object.webRtcStreamIds.length; ++i)
                message.webRtcStreamIds[i] = String(object.webRtcStreamIds[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a Device message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Device
     * @static
     * @param {Device} message Device
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Device.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.webRtcStreamIds = [];
        if (options.defaults) {
            object.id = "";
            object.userId = "";
            object.activityStreamId = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        if (message.webRtcStreamIds && message.webRtcStreamIds.length) {
            object.webRtcStreamIds = [];
            for (var j = 0; j < message.webRtcStreamIds.length; ++j)
                object.webRtcStreamIds[j] = message.webRtcStreamIds[j];
        }
        return object;
    };

    /**
     * Converts this Device to JSON.
     * @function toJSON
     * @memberof Device
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Device.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Device;
})();

$root.ChatMessage = (function() {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {string|null} [userId] ChatMessage userId
     * @property {number|Long|null} [timestamp] ChatMessage timestamp
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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage userId.
     * @member {string} userId
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.userId = "";

    /**
     * ChatMessage timestamp.
     * @member {number|Long} timestamp
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

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
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
                message.timestamp = reader.uint64();
                break;
            case 3:
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
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
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
        var message = new $root.ChatMessage();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
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
        var object = {};
        if (options.defaults) {
            object.userId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.text = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
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

$root.Content = (function() {

    /**
     * Properties of a Content.
     * @exports IContent
     * @interface IContent
     * @property {ContentType|null} [type] Content type
     * @property {string|null} [contentLocation] Content contentLocation
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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
     * Content contentLocation.
     * @member {string} contentLocation
     * @memberof Content
     * @instance
     */
    Content.prototype.contentLocation = "";

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
        if (message.contentLocation != null && Object.hasOwnProperty.call(message, "contentLocation"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.contentLocation);
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Content();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.contentLocation = reader.string();
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
            case 7:
                break;
            }
        if (message.contentLocation != null && message.hasOwnProperty("contentLocation"))
            if (!$util.isString(message.contentLocation))
                return "contentLocation: string expected";
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
        var message = new $root.Content();
        switch (object.type) {
        case "Blank":
        case 0:
            message.type = 0;
            break;
        case "Stream":
        case 1:
            message.type = 1;
            break;
        case "Activity":
        case 2:
            message.type = 2;
            break;
        case "Video":
        case 3:
            message.type = 3;
            break;
        case "Audio":
        case 4:
            message.type = 4;
            break;
        case "Image":
        case 5:
            message.type = 5;
            break;
        case "Camera":
        case 6:
            message.type = 6;
            break;
        case "Screen":
        case 7:
            message.type = 7;
            break;
        }
        if (object.contentLocation != null)
            message.contentLocation = String(object.contentLocation);
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
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "Blank" : 0;
            object.contentLocation = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ContentType[message.type] : message.type;
        if (message.contentLocation != null && message.hasOwnProperty("contentLocation"))
            object.contentLocation = message.contentLocation;
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
 * @property {number} Stream=1 Stream value
 * @property {number} Activity=2 Activity value
 * @property {number} Video=3 Video value
 * @property {number} Audio=4 Audio value
 * @property {number} Image=5 Image value
 * @property {number} Camera=6 Camera value
 * @property {number} Screen=7 Screen value
 */
$root.ContentType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Blank"] = 0;
    values[valuesById[1] = "Stream"] = 1;
    values[valuesById[2] = "Activity"] = 2;
    values[valuesById[3] = "Video"] = 3;
    values[valuesById[4] = "Audio"] = 4;
    values[valuesById[5] = "Image"] = 5;
    values[valuesById[6] = "Camera"] = 6;
    values[valuesById[7] = "Screen"] = 7;
    return values;
})();

module.exports = $root;
