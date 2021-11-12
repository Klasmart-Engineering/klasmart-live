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
     * @property {string|null} [requestId] ClassRequest requestId
     * @property {IEndClassCommand|null} [endClass] ClassRequest endClass
     * @property {ISetHostCommand|null} [setHost] ClassRequest setHost
     * @property {ISetContentCommand|null} [setContent] ClassRequest setContent
     * @property {ISetActivityStreamIdCommand|null} [setActvityStreamId] ClassRequest setActvityStreamId
     * @property {IRewardTrophyToUserCommand|null} [rewardTrophyToUser] ClassRequest rewardTrophyToUser
     * @property {IRewardTrophyToAllCommand|null} [rewardTrophyToAll] ClassRequest rewardTrophyToAll
     * @property {ISendChatMessageCommand|null} [sendChatMessage] ClassRequest sendChatMessage
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
     * ClassRequest requestId.
     * @member {string} requestId
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.requestId = "";

    /**
     * ClassRequest endClass.
     * @member {IEndClassCommand|null|undefined} endClass
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.endClass = null;

    /**
     * ClassRequest setHost.
     * @member {ISetHostCommand|null|undefined} setHost
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.setHost = null;

    /**
     * ClassRequest setContent.
     * @member {ISetContentCommand|null|undefined} setContent
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.setContent = null;

    /**
     * ClassRequest setActvityStreamId.
     * @member {ISetActivityStreamIdCommand|null|undefined} setActvityStreamId
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.setActvityStreamId = null;

    /**
     * ClassRequest rewardTrophyToUser.
     * @member {IRewardTrophyToUserCommand|null|undefined} rewardTrophyToUser
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.rewardTrophyToUser = null;

    /**
     * ClassRequest rewardTrophyToAll.
     * @member {IRewardTrophyToAllCommand|null|undefined} rewardTrophyToAll
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.rewardTrophyToAll = null;

    /**
     * ClassRequest sendChatMessage.
     * @member {ISendChatMessageCommand|null|undefined} sendChatMessage
     * @memberof ClassRequest
     * @instance
     */
    ClassRequest.prototype.sendChatMessage = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClassRequest command.
     * @member {"endClass"|"setHost"|"setContent"|"setActvityStreamId"|"rewardTrophyToUser"|"rewardTrophyToAll"|"sendChatMessage"|undefined} command
     * @memberof ClassRequest
     * @instance
     */
    Object.defineProperty(ClassRequest.prototype, "command", {
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
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.endClass != null && Object.hasOwnProperty.call(message, "endClass"))
            $root.EndClassCommand.encode(message.endClass, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.setHost != null && Object.hasOwnProperty.call(message, "setHost"))
            $root.SetHostCommand.encode(message.setHost, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.setContent != null && Object.hasOwnProperty.call(message, "setContent"))
            $root.SetContentCommand.encode(message.setContent, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.setActvityStreamId != null && Object.hasOwnProperty.call(message, "setActvityStreamId"))
            $root.SetActivityStreamIdCommand.encode(message.setActvityStreamId, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.rewardTrophyToUser != null && Object.hasOwnProperty.call(message, "rewardTrophyToUser"))
            $root.RewardTrophyToUserCommand.encode(message.rewardTrophyToUser, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.rewardTrophyToAll != null && Object.hasOwnProperty.call(message, "rewardTrophyToAll"))
            $root.RewardTrophyToAllCommand.encode(message.rewardTrophyToAll, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.sendChatMessage != null && Object.hasOwnProperty.call(message, "sendChatMessage"))
            $root.SendChatMessageCommand.encode(message.sendChatMessage, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
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
                message.requestId = reader.string();
                break;
            case 6:
                message.endClass = $root.EndClassCommand.decode(reader, reader.uint32());
                break;
            case 7:
                message.setHost = $root.SetHostCommand.decode(reader, reader.uint32());
                break;
            case 8:
                message.setContent = $root.SetContentCommand.decode(reader, reader.uint32());
                break;
            case 9:
                message.setActvityStreamId = $root.SetActivityStreamIdCommand.decode(reader, reader.uint32());
                break;
            case 10:
                message.rewardTrophyToUser = $root.RewardTrophyToUserCommand.decode(reader, reader.uint32());
                break;
            case 11:
                message.rewardTrophyToAll = $root.RewardTrophyToAllCommand.decode(reader, reader.uint32());
                break;
            case 12:
                message.sendChatMessage = $root.SendChatMessageCommand.decode(reader, reader.uint32());
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
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isString(message.requestId))
                return "requestId: string expected";
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            properties.command = 1;
            {
                var error = $root.EndClassCommand.verify(message.endClass);
                if (error)
                    return "endClass." + error;
            }
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.SetHostCommand.verify(message.setHost);
                if (error)
                    return "setHost." + error;
            }
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.SetContentCommand.verify(message.setContent);
                if (error)
                    return "setContent." + error;
            }
        }
        if (message.setActvityStreamId != null && message.hasOwnProperty("setActvityStreamId")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.SetActivityStreamIdCommand.verify(message.setActvityStreamId);
                if (error)
                    return "setActvityStreamId." + error;
            }
        }
        if (message.rewardTrophyToUser != null && message.hasOwnProperty("rewardTrophyToUser")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.RewardTrophyToUserCommand.verify(message.rewardTrophyToUser);
                if (error)
                    return "rewardTrophyToUser." + error;
            }
        }
        if (message.rewardTrophyToAll != null && message.hasOwnProperty("rewardTrophyToAll")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.RewardTrophyToAllCommand.verify(message.rewardTrophyToAll);
                if (error)
                    return "rewardTrophyToAll." + error;
            }
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            if (properties.command === 1)
                return "command: multiple values";
            properties.command = 1;
            {
                var error = $root.SendChatMessageCommand.verify(message.sendChatMessage);
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
        if (object.requestId != null)
            message.requestId = String(object.requestId);
        if (object.endClass != null) {
            if (typeof object.endClass !== "object")
                throw TypeError(".ClassRequest.endClass: object expected");
            message.endClass = $root.EndClassCommand.fromObject(object.endClass);
        }
        if (object.setHost != null) {
            if (typeof object.setHost !== "object")
                throw TypeError(".ClassRequest.setHost: object expected");
            message.setHost = $root.SetHostCommand.fromObject(object.setHost);
        }
        if (object.setContent != null) {
            if (typeof object.setContent !== "object")
                throw TypeError(".ClassRequest.setContent: object expected");
            message.setContent = $root.SetContentCommand.fromObject(object.setContent);
        }
        if (object.setActvityStreamId != null) {
            if (typeof object.setActvityStreamId !== "object")
                throw TypeError(".ClassRequest.setActvityStreamId: object expected");
            message.setActvityStreamId = $root.SetActivityStreamIdCommand.fromObject(object.setActvityStreamId);
        }
        if (object.rewardTrophyToUser != null) {
            if (typeof object.rewardTrophyToUser !== "object")
                throw TypeError(".ClassRequest.rewardTrophyToUser: object expected");
            message.rewardTrophyToUser = $root.RewardTrophyToUserCommand.fromObject(object.rewardTrophyToUser);
        }
        if (object.rewardTrophyToAll != null) {
            if (typeof object.rewardTrophyToAll !== "object")
                throw TypeError(".ClassRequest.rewardTrophyToAll: object expected");
            message.rewardTrophyToAll = $root.RewardTrophyToAllCommand.fromObject(object.rewardTrophyToAll);
        }
        if (object.sendChatMessage != null) {
            if (typeof object.sendChatMessage !== "object")
                throw TypeError(".ClassRequest.sendChatMessage: object expected");
            message.sendChatMessage = $root.SendChatMessageCommand.fromObject(object.sendChatMessage);
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
            object.requestId = "";
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            object.endClass = $root.EndClassCommand.toObject(message.endClass, options);
            if (options.oneofs)
                object.command = "endClass";
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            object.setHost = $root.SetHostCommand.toObject(message.setHost, options);
            if (options.oneofs)
                object.command = "setHost";
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            object.setContent = $root.SetContentCommand.toObject(message.setContent, options);
            if (options.oneofs)
                object.command = "setContent";
        }
        if (message.setActvityStreamId != null && message.hasOwnProperty("setActvityStreamId")) {
            object.setActvityStreamId = $root.SetActivityStreamIdCommand.toObject(message.setActvityStreamId, options);
            if (options.oneofs)
                object.command = "setActvityStreamId";
        }
        if (message.rewardTrophyToUser != null && message.hasOwnProperty("rewardTrophyToUser")) {
            object.rewardTrophyToUser = $root.RewardTrophyToUserCommand.toObject(message.rewardTrophyToUser, options);
            if (options.oneofs)
                object.command = "rewardTrophyToUser";
        }
        if (message.rewardTrophyToAll != null && message.hasOwnProperty("rewardTrophyToAll")) {
            object.rewardTrophyToAll = $root.RewardTrophyToAllCommand.toObject(message.rewardTrophyToAll, options);
            if (options.oneofs)
                object.command = "rewardTrophyToAll";
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            object.sendChatMessage = $root.SendChatMessageCommand.toObject(message.sendChatMessage, options);
            if (options.oneofs)
                object.command = "sendChatMessage";
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

$root.ClassMessage = (function() {

    /**
     * Properties of a ClassMessage.
     * @exports IClassMessage
     * @interface IClassMessage
     * @property {IClassResponse|null} [response] ClassMessage response
     * @property {IJoinEvent|null} [joinEvent] ClassMessage joinEvent
     * @property {IDeviceConnectedEvent|null} [deviceConnected] ClassMessage deviceConnected
     * @property {IDeviceDisconnectedEvent|null} [deviceDisconnected] ClassMessage deviceDisconnected
     * @property {IClassEndedEvent|null} [classEnded] ClassMessage classEnded
     * @property {IHostChangedEvent|null} [hostChanged] ClassMessage hostChanged
     * @property {IContentChangedEvent|null} [contentChanged] ClassMessage contentChanged
     * @property {IActivityStreamIdChangedEvent|null} [actvityStreamIdChanged] ClassMessage actvityStreamIdChanged
     * @property {ITrophyRewardedToUserEvent|null} [trophyRewardedToUser] ClassMessage trophyRewardedToUser
     * @property {ITrophyRewardedToAllEvent|null} [trophyRewardedToAll] ClassMessage trophyRewardedToAll
     * @property {INewChatMessageEvent|null} [newChatMessage] ClassMessage newChatMessage
     */

    /**
     * Constructs a new ClassMessage.
     * @exports ClassMessage
     * @classdesc Represents a ClassMessage.
     * @implements IClassMessage
     * @constructor
     * @param {IClassMessage=} [properties] Properties to set
     */
    function ClassMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClassMessage response.
     * @member {IClassResponse|null|undefined} response
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.response = null;

    /**
     * ClassMessage joinEvent.
     * @member {IJoinEvent|null|undefined} joinEvent
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.joinEvent = null;

    /**
     * ClassMessage deviceConnected.
     * @member {IDeviceConnectedEvent|null|undefined} deviceConnected
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.deviceConnected = null;

    /**
     * ClassMessage deviceDisconnected.
     * @member {IDeviceDisconnectedEvent|null|undefined} deviceDisconnected
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.deviceDisconnected = null;

    /**
     * ClassMessage classEnded.
     * @member {IClassEndedEvent|null|undefined} classEnded
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.classEnded = null;

    /**
     * ClassMessage hostChanged.
     * @member {IHostChangedEvent|null|undefined} hostChanged
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.hostChanged = null;

    /**
     * ClassMessage contentChanged.
     * @member {IContentChangedEvent|null|undefined} contentChanged
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.contentChanged = null;

    /**
     * ClassMessage actvityStreamIdChanged.
     * @member {IActivityStreamIdChangedEvent|null|undefined} actvityStreamIdChanged
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.actvityStreamIdChanged = null;

    /**
     * ClassMessage trophyRewardedToUser.
     * @member {ITrophyRewardedToUserEvent|null|undefined} trophyRewardedToUser
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.trophyRewardedToUser = null;

    /**
     * ClassMessage trophyRewardedToAll.
     * @member {ITrophyRewardedToAllEvent|null|undefined} trophyRewardedToAll
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.trophyRewardedToAll = null;

    /**
     * ClassMessage newChatMessage.
     * @member {INewChatMessageEvent|null|undefined} newChatMessage
     * @memberof ClassMessage
     * @instance
     */
    ClassMessage.prototype.newChatMessage = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClassMessage event.
     * @member {"joinEvent"|"deviceConnected"|"deviceDisconnected"|"classEnded"|"hostChanged"|"contentChanged"|"actvityStreamIdChanged"|"trophyRewardedToUser"|"trophyRewardedToAll"|"newChatMessage"|undefined} event
     * @memberof ClassMessage
     * @instance
     */
    Object.defineProperty(ClassMessage.prototype, "event", {
        get: $util.oneOfGetter($oneOfFields = ["joinEvent", "deviceConnected", "deviceDisconnected", "classEnded", "hostChanged", "contentChanged", "actvityStreamIdChanged", "trophyRewardedToUser", "trophyRewardedToAll", "newChatMessage"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClassMessage instance using the specified properties.
     * @function create
     * @memberof ClassMessage
     * @static
     * @param {IClassMessage=} [properties] Properties to set
     * @returns {ClassMessage} ClassMessage instance
     */
    ClassMessage.create = function create(properties) {
        return new ClassMessage(properties);
    };

    /**
     * Encodes the specified ClassMessage message. Does not implicitly {@link ClassMessage.verify|verify} messages.
     * @function encode
     * @memberof ClassMessage
     * @static
     * @param {IClassMessage} message ClassMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.ClassResponse.encode(message.response, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.joinEvent != null && Object.hasOwnProperty.call(message, "joinEvent"))
            $root.JoinEvent.encode(message.joinEvent, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.deviceConnected != null && Object.hasOwnProperty.call(message, "deviceConnected"))
            $root.DeviceConnectedEvent.encode(message.deviceConnected, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.deviceDisconnected != null && Object.hasOwnProperty.call(message, "deviceDisconnected"))
            $root.DeviceDisconnectedEvent.encode(message.deviceDisconnected, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.classEnded != null && Object.hasOwnProperty.call(message, "classEnded"))
            $root.ClassEndedEvent.encode(message.classEnded, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.hostChanged != null && Object.hasOwnProperty.call(message, "hostChanged"))
            $root.HostChangedEvent.encode(message.hostChanged, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.contentChanged != null && Object.hasOwnProperty.call(message, "contentChanged"))
            $root.ContentChangedEvent.encode(message.contentChanged, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.actvityStreamIdChanged != null && Object.hasOwnProperty.call(message, "actvityStreamIdChanged"))
            $root.ActivityStreamIdChangedEvent.encode(message.actvityStreamIdChanged, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.trophyRewardedToUser != null && Object.hasOwnProperty.call(message, "trophyRewardedToUser"))
            $root.TrophyRewardedToUserEvent.encode(message.trophyRewardedToUser, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.trophyRewardedToAll != null && Object.hasOwnProperty.call(message, "trophyRewardedToAll"))
            $root.TrophyRewardedToAllEvent.encode(message.trophyRewardedToAll, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.newChatMessage != null && Object.hasOwnProperty.call(message, "newChatMessage"))
            $root.NewChatMessageEvent.encode(message.newChatMessage, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClassMessage message, length delimited. Does not implicitly {@link ClassMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassMessage
     * @static
     * @param {IClassMessage} message ClassMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ClassMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassMessage} ClassMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.response = $root.ClassResponse.decode(reader, reader.uint32());
                break;
            case 3:
                message.joinEvent = $root.JoinEvent.decode(reader, reader.uint32());
                break;
            case 4:
                message.deviceConnected = $root.DeviceConnectedEvent.decode(reader, reader.uint32());
                break;
            case 5:
                message.deviceDisconnected = $root.DeviceDisconnectedEvent.decode(reader, reader.uint32());
                break;
            case 6:
                message.classEnded = $root.ClassEndedEvent.decode(reader, reader.uint32());
                break;
            case 7:
                message.hostChanged = $root.HostChangedEvent.decode(reader, reader.uint32());
                break;
            case 8:
                message.contentChanged = $root.ContentChangedEvent.decode(reader, reader.uint32());
                break;
            case 9:
                message.actvityStreamIdChanged = $root.ActivityStreamIdChangedEvent.decode(reader, reader.uint32());
                break;
            case 10:
                message.trophyRewardedToUser = $root.TrophyRewardedToUserEvent.decode(reader, reader.uint32());
                break;
            case 11:
                message.trophyRewardedToAll = $root.TrophyRewardedToAllEvent.decode(reader, reader.uint32());
                break;
            case 12:
                message.newChatMessage = $root.NewChatMessageEvent.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClassMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassMessage} ClassMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassMessage message.
     * @function verify
     * @memberof ClassMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.response != null && message.hasOwnProperty("response")) {
            var error = $root.ClassResponse.verify(message.response);
            if (error)
                return "response." + error;
        }
        if (message.joinEvent != null && message.hasOwnProperty("joinEvent")) {
            properties.event = 1;
            {
                var error = $root.JoinEvent.verify(message.joinEvent);
                if (error)
                    return "joinEvent." + error;
            }
        }
        if (message.deviceConnected != null && message.hasOwnProperty("deviceConnected")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.DeviceConnectedEvent.verify(message.deviceConnected);
                if (error)
                    return "deviceConnected." + error;
            }
        }
        if (message.deviceDisconnected != null && message.hasOwnProperty("deviceDisconnected")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.DeviceDisconnectedEvent.verify(message.deviceDisconnected);
                if (error)
                    return "deviceDisconnected." + error;
            }
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.ClassEndedEvent.verify(message.classEnded);
                if (error)
                    return "classEnded." + error;
            }
        }
        if (message.hostChanged != null && message.hasOwnProperty("hostChanged")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.HostChangedEvent.verify(message.hostChanged);
                if (error)
                    return "hostChanged." + error;
            }
        }
        if (message.contentChanged != null && message.hasOwnProperty("contentChanged")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.ContentChangedEvent.verify(message.contentChanged);
                if (error)
                    return "contentChanged." + error;
            }
        }
        if (message.actvityStreamIdChanged != null && message.hasOwnProperty("actvityStreamIdChanged")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.ActivityStreamIdChangedEvent.verify(message.actvityStreamIdChanged);
                if (error)
                    return "actvityStreamIdChanged." + error;
            }
        }
        if (message.trophyRewardedToUser != null && message.hasOwnProperty("trophyRewardedToUser")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.TrophyRewardedToUserEvent.verify(message.trophyRewardedToUser);
                if (error)
                    return "trophyRewardedToUser." + error;
            }
        }
        if (message.trophyRewardedToAll != null && message.hasOwnProperty("trophyRewardedToAll")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.TrophyRewardedToAllEvent.verify(message.trophyRewardedToAll);
                if (error)
                    return "trophyRewardedToAll." + error;
            }
        }
        if (message.newChatMessage != null && message.hasOwnProperty("newChatMessage")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.NewChatMessageEvent.verify(message.newChatMessage);
                if (error)
                    return "newChatMessage." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClassMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassMessage} ClassMessage
     */
    ClassMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassMessage)
            return object;
        var message = new $root.ClassMessage();
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".ClassMessage.response: object expected");
            message.response = $root.ClassResponse.fromObject(object.response);
        }
        if (object.joinEvent != null) {
            if (typeof object.joinEvent !== "object")
                throw TypeError(".ClassMessage.joinEvent: object expected");
            message.joinEvent = $root.JoinEvent.fromObject(object.joinEvent);
        }
        if (object.deviceConnected != null) {
            if (typeof object.deviceConnected !== "object")
                throw TypeError(".ClassMessage.deviceConnected: object expected");
            message.deviceConnected = $root.DeviceConnectedEvent.fromObject(object.deviceConnected);
        }
        if (object.deviceDisconnected != null) {
            if (typeof object.deviceDisconnected !== "object")
                throw TypeError(".ClassMessage.deviceDisconnected: object expected");
            message.deviceDisconnected = $root.DeviceDisconnectedEvent.fromObject(object.deviceDisconnected);
        }
        if (object.classEnded != null) {
            if (typeof object.classEnded !== "object")
                throw TypeError(".ClassMessage.classEnded: object expected");
            message.classEnded = $root.ClassEndedEvent.fromObject(object.classEnded);
        }
        if (object.hostChanged != null) {
            if (typeof object.hostChanged !== "object")
                throw TypeError(".ClassMessage.hostChanged: object expected");
            message.hostChanged = $root.HostChangedEvent.fromObject(object.hostChanged);
        }
        if (object.contentChanged != null) {
            if (typeof object.contentChanged !== "object")
                throw TypeError(".ClassMessage.contentChanged: object expected");
            message.contentChanged = $root.ContentChangedEvent.fromObject(object.contentChanged);
        }
        if (object.actvityStreamIdChanged != null) {
            if (typeof object.actvityStreamIdChanged !== "object")
                throw TypeError(".ClassMessage.actvityStreamIdChanged: object expected");
            message.actvityStreamIdChanged = $root.ActivityStreamIdChangedEvent.fromObject(object.actvityStreamIdChanged);
        }
        if (object.trophyRewardedToUser != null) {
            if (typeof object.trophyRewardedToUser !== "object")
                throw TypeError(".ClassMessage.trophyRewardedToUser: object expected");
            message.trophyRewardedToUser = $root.TrophyRewardedToUserEvent.fromObject(object.trophyRewardedToUser);
        }
        if (object.trophyRewardedToAll != null) {
            if (typeof object.trophyRewardedToAll !== "object")
                throw TypeError(".ClassMessage.trophyRewardedToAll: object expected");
            message.trophyRewardedToAll = $root.TrophyRewardedToAllEvent.fromObject(object.trophyRewardedToAll);
        }
        if (object.newChatMessage != null) {
            if (typeof object.newChatMessage !== "object")
                throw TypeError(".ClassMessage.newChatMessage: object expected");
            message.newChatMessage = $root.NewChatMessageEvent.fromObject(object.newChatMessage);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClassMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassMessage
     * @static
     * @param {ClassMessage} message ClassMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.response = null;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.ClassResponse.toObject(message.response, options);
        if (message.joinEvent != null && message.hasOwnProperty("joinEvent")) {
            object.joinEvent = $root.JoinEvent.toObject(message.joinEvent, options);
            if (options.oneofs)
                object.event = "joinEvent";
        }
        if (message.deviceConnected != null && message.hasOwnProperty("deviceConnected")) {
            object.deviceConnected = $root.DeviceConnectedEvent.toObject(message.deviceConnected, options);
            if (options.oneofs)
                object.event = "deviceConnected";
        }
        if (message.deviceDisconnected != null && message.hasOwnProperty("deviceDisconnected")) {
            object.deviceDisconnected = $root.DeviceDisconnectedEvent.toObject(message.deviceDisconnected, options);
            if (options.oneofs)
                object.event = "deviceDisconnected";
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            object.classEnded = $root.ClassEndedEvent.toObject(message.classEnded, options);
            if (options.oneofs)
                object.event = "classEnded";
        }
        if (message.hostChanged != null && message.hasOwnProperty("hostChanged")) {
            object.hostChanged = $root.HostChangedEvent.toObject(message.hostChanged, options);
            if (options.oneofs)
                object.event = "hostChanged";
        }
        if (message.contentChanged != null && message.hasOwnProperty("contentChanged")) {
            object.contentChanged = $root.ContentChangedEvent.toObject(message.contentChanged, options);
            if (options.oneofs)
                object.event = "contentChanged";
        }
        if (message.actvityStreamIdChanged != null && message.hasOwnProperty("actvityStreamIdChanged")) {
            object.actvityStreamIdChanged = $root.ActivityStreamIdChangedEvent.toObject(message.actvityStreamIdChanged, options);
            if (options.oneofs)
                object.event = "actvityStreamIdChanged";
        }
        if (message.trophyRewardedToUser != null && message.hasOwnProperty("trophyRewardedToUser")) {
            object.trophyRewardedToUser = $root.TrophyRewardedToUserEvent.toObject(message.trophyRewardedToUser, options);
            if (options.oneofs)
                object.event = "trophyRewardedToUser";
        }
        if (message.trophyRewardedToAll != null && message.hasOwnProperty("trophyRewardedToAll")) {
            object.trophyRewardedToAll = $root.TrophyRewardedToAllEvent.toObject(message.trophyRewardedToAll, options);
            if (options.oneofs)
                object.event = "trophyRewardedToAll";
        }
        if (message.newChatMessage != null && message.hasOwnProperty("newChatMessage")) {
            object.newChatMessage = $root.NewChatMessageEvent.toObject(message.newChatMessage, options);
            if (options.oneofs)
                object.event = "newChatMessage";
        }
        return object;
    };

    /**
     * Converts this ClassMessage to JSON.
     * @function toJSON
     * @memberof ClassMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassMessage;
})();

$root.EndClassCommand = (function() {

    /**
     * Properties of an EndClassCommand.
     * @exports IEndClassCommand
     * @interface IEndClassCommand
     */

    /**
     * Constructs a new EndClassCommand.
     * @exports EndClassCommand
     * @classdesc Represents an EndClassCommand.
     * @implements IEndClassCommand
     * @constructor
     * @param {IEndClassCommand=} [properties] Properties to set
     */
    function EndClassCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EndClassCommand instance using the specified properties.
     * @function create
     * @memberof EndClassCommand
     * @static
     * @param {IEndClassCommand=} [properties] Properties to set
     * @returns {EndClassCommand} EndClassCommand instance
     */
    EndClassCommand.create = function create(properties) {
        return new EndClassCommand(properties);
    };

    /**
     * Encodes the specified EndClassCommand message. Does not implicitly {@link EndClassCommand.verify|verify} messages.
     * @function encode
     * @memberof EndClassCommand
     * @static
     * @param {IEndClassCommand} message EndClassCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClassCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EndClassCommand message, length delimited. Does not implicitly {@link EndClassCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EndClassCommand
     * @static
     * @param {IEndClassCommand} message EndClassCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClassCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EndClassCommand message from the specified reader or buffer.
     * @function decode
     * @memberof EndClassCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EndClassCommand} EndClassCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClassCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EndClassCommand();
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
     * Decodes an EndClassCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EndClassCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EndClassCommand} EndClassCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClassCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EndClassCommand message.
     * @function verify
     * @memberof EndClassCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EndClassCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EndClassCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EndClassCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EndClassCommand} EndClassCommand
     */
    EndClassCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.EndClassCommand)
            return object;
        return new $root.EndClassCommand();
    };

    /**
     * Creates a plain object from an EndClassCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EndClassCommand
     * @static
     * @param {EndClassCommand} message EndClassCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EndClassCommand.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EndClassCommand to JSON.
     * @function toJSON
     * @memberof EndClassCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EndClassCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EndClassCommand;
})();

$root.SetHostCommand = (function() {

    /**
     * Properties of a SetHostCommand.
     * @exports ISetHostCommand
     * @interface ISetHostCommand
     * @property {string|null} [hostDeviceId] SetHostCommand hostDeviceId
     */

    /**
     * Constructs a new SetHostCommand.
     * @exports SetHostCommand
     * @classdesc Represents a SetHostCommand.
     * @implements ISetHostCommand
     * @constructor
     * @param {ISetHostCommand=} [properties] Properties to set
     */
    function SetHostCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetHostCommand hostDeviceId.
     * @member {string} hostDeviceId
     * @memberof SetHostCommand
     * @instance
     */
    SetHostCommand.prototype.hostDeviceId = "";

    /**
     * Creates a new SetHostCommand instance using the specified properties.
     * @function create
     * @memberof SetHostCommand
     * @static
     * @param {ISetHostCommand=} [properties] Properties to set
     * @returns {SetHostCommand} SetHostCommand instance
     */
    SetHostCommand.create = function create(properties) {
        return new SetHostCommand(properties);
    };

    /**
     * Encodes the specified SetHostCommand message. Does not implicitly {@link SetHostCommand.verify|verify} messages.
     * @function encode
     * @memberof SetHostCommand
     * @static
     * @param {ISetHostCommand} message SetHostCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHostCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hostDeviceId != null && Object.hasOwnProperty.call(message, "hostDeviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostDeviceId);
        return writer;
    };

    /**
     * Encodes the specified SetHostCommand message, length delimited. Does not implicitly {@link SetHostCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetHostCommand
     * @static
     * @param {ISetHostCommand} message SetHostCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHostCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetHostCommand message from the specified reader or buffer.
     * @function decode
     * @memberof SetHostCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetHostCommand} SetHostCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHostCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetHostCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hostDeviceId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetHostCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetHostCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetHostCommand} SetHostCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHostCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetHostCommand message.
     * @function verify
     * @memberof SetHostCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetHostCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hostDeviceId != null && message.hasOwnProperty("hostDeviceId"))
            if (!$util.isString(message.hostDeviceId))
                return "hostDeviceId: string expected";
        return null;
    };

    /**
     * Creates a SetHostCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetHostCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetHostCommand} SetHostCommand
     */
    SetHostCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.SetHostCommand)
            return object;
        var message = new $root.SetHostCommand();
        if (object.hostDeviceId != null)
            message.hostDeviceId = String(object.hostDeviceId);
        return message;
    };

    /**
     * Creates a plain object from a SetHostCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetHostCommand
     * @static
     * @param {SetHostCommand} message SetHostCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetHostCommand.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.hostDeviceId = "";
        if (message.hostDeviceId != null && message.hasOwnProperty("hostDeviceId"))
            object.hostDeviceId = message.hostDeviceId;
        return object;
    };

    /**
     * Converts this SetHostCommand to JSON.
     * @function toJSON
     * @memberof SetHostCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetHostCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetHostCommand;
})();

$root.SetContentCommand = (function() {

    /**
     * Properties of a SetContentCommand.
     * @exports ISetContentCommand
     * @interface ISetContentCommand
     * @property {IContent|null} [content] SetContentCommand content
     */

    /**
     * Constructs a new SetContentCommand.
     * @exports SetContentCommand
     * @classdesc Represents a SetContentCommand.
     * @implements ISetContentCommand
     * @constructor
     * @param {ISetContentCommand=} [properties] Properties to set
     */
    function SetContentCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetContentCommand content.
     * @member {IContent|null|undefined} content
     * @memberof SetContentCommand
     * @instance
     */
    SetContentCommand.prototype.content = null;

    /**
     * Creates a new SetContentCommand instance using the specified properties.
     * @function create
     * @memberof SetContentCommand
     * @static
     * @param {ISetContentCommand=} [properties] Properties to set
     * @returns {SetContentCommand} SetContentCommand instance
     */
    SetContentCommand.create = function create(properties) {
        return new SetContentCommand(properties);
    };

    /**
     * Encodes the specified SetContentCommand message. Does not implicitly {@link SetContentCommand.verify|verify} messages.
     * @function encode
     * @memberof SetContentCommand
     * @static
     * @param {ISetContentCommand} message SetContentCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContentCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetContentCommand message, length delimited. Does not implicitly {@link SetContentCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetContentCommand
     * @static
     * @param {ISetContentCommand} message SetContentCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContentCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetContentCommand message from the specified reader or buffer.
     * @function decode
     * @memberof SetContentCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetContentCommand} SetContentCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContentCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetContentCommand();
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
     * Decodes a SetContentCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetContentCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetContentCommand} SetContentCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContentCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetContentCommand message.
     * @function verify
     * @memberof SetContentCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetContentCommand.verify = function verify(message) {
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
     * Creates a SetContentCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetContentCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetContentCommand} SetContentCommand
     */
    SetContentCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.SetContentCommand)
            return object;
        var message = new $root.SetContentCommand();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".SetContentCommand.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetContentCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetContentCommand
     * @static
     * @param {SetContentCommand} message SetContentCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetContentCommand.toObject = function toObject(message, options) {
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
     * Converts this SetContentCommand to JSON.
     * @function toJSON
     * @memberof SetContentCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetContentCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetContentCommand;
})();

$root.SetActivityStreamIdCommand = (function() {

    /**
     * Properties of a SetActivityStreamIdCommand.
     * @exports ISetActivityStreamIdCommand
     * @interface ISetActivityStreamIdCommand
     * @property {string|null} [activityStreamId] SetActivityStreamIdCommand activityStreamId
     */

    /**
     * Constructs a new SetActivityStreamIdCommand.
     * @exports SetActivityStreamIdCommand
     * @classdesc Represents a SetActivityStreamIdCommand.
     * @implements ISetActivityStreamIdCommand
     * @constructor
     * @param {ISetActivityStreamIdCommand=} [properties] Properties to set
     */
    function SetActivityStreamIdCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetActivityStreamIdCommand activityStreamId.
     * @member {string} activityStreamId
     * @memberof SetActivityStreamIdCommand
     * @instance
     */
    SetActivityStreamIdCommand.prototype.activityStreamId = "";

    /**
     * Creates a new SetActivityStreamIdCommand instance using the specified properties.
     * @function create
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {ISetActivityStreamIdCommand=} [properties] Properties to set
     * @returns {SetActivityStreamIdCommand} SetActivityStreamIdCommand instance
     */
    SetActivityStreamIdCommand.create = function create(properties) {
        return new SetActivityStreamIdCommand(properties);
    };

    /**
     * Encodes the specified SetActivityStreamIdCommand message. Does not implicitly {@link SetActivityStreamIdCommand.verify|verify} messages.
     * @function encode
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {ISetActivityStreamIdCommand} message SetActivityStreamIdCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivityStreamIdCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.activityStreamId);
        return writer;
    };

    /**
     * Encodes the specified SetActivityStreamIdCommand message, length delimited. Does not implicitly {@link SetActivityStreamIdCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {ISetActivityStreamIdCommand} message SetActivityStreamIdCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivityStreamIdCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetActivityStreamIdCommand message from the specified reader or buffer.
     * @function decode
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetActivityStreamIdCommand} SetActivityStreamIdCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivityStreamIdCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetActivityStreamIdCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
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
     * Decodes a SetActivityStreamIdCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetActivityStreamIdCommand} SetActivityStreamIdCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivityStreamIdCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetActivityStreamIdCommand message.
     * @function verify
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetActivityStreamIdCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        return null;
    };

    /**
     * Creates a SetActivityStreamIdCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetActivityStreamIdCommand} SetActivityStreamIdCommand
     */
    SetActivityStreamIdCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.SetActivityStreamIdCommand)
            return object;
        var message = new $root.SetActivityStreamIdCommand();
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        return message;
    };

    /**
     * Creates a plain object from a SetActivityStreamIdCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetActivityStreamIdCommand
     * @static
     * @param {SetActivityStreamIdCommand} message SetActivityStreamIdCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetActivityStreamIdCommand.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.activityStreamId = "";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        return object;
    };

    /**
     * Converts this SetActivityStreamIdCommand to JSON.
     * @function toJSON
     * @memberof SetActivityStreamIdCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetActivityStreamIdCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetActivityStreamIdCommand;
})();

$root.RewardTrophyToUserCommand = (function() {

    /**
     * Properties of a RewardTrophyToUserCommand.
     * @exports IRewardTrophyToUserCommand
     * @interface IRewardTrophyToUserCommand
     * @property {string|null} [userId] RewardTrophyToUserCommand userId
     * @property {ITrophy|null} [trophy] RewardTrophyToUserCommand trophy
     */

    /**
     * Constructs a new RewardTrophyToUserCommand.
     * @exports RewardTrophyToUserCommand
     * @classdesc Represents a RewardTrophyToUserCommand.
     * @implements IRewardTrophyToUserCommand
     * @constructor
     * @param {IRewardTrophyToUserCommand=} [properties] Properties to set
     */
    function RewardTrophyToUserCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RewardTrophyToUserCommand userId.
     * @member {string} userId
     * @memberof RewardTrophyToUserCommand
     * @instance
     */
    RewardTrophyToUserCommand.prototype.userId = "";

    /**
     * RewardTrophyToUserCommand trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof RewardTrophyToUserCommand
     * @instance
     */
    RewardTrophyToUserCommand.prototype.trophy = null;

    /**
     * Creates a new RewardTrophyToUserCommand instance using the specified properties.
     * @function create
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {IRewardTrophyToUserCommand=} [properties] Properties to set
     * @returns {RewardTrophyToUserCommand} RewardTrophyToUserCommand instance
     */
    RewardTrophyToUserCommand.create = function create(properties) {
        return new RewardTrophyToUserCommand(properties);
    };

    /**
     * Encodes the specified RewardTrophyToUserCommand message. Does not implicitly {@link RewardTrophyToUserCommand.verify|verify} messages.
     * @function encode
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {IRewardTrophyToUserCommand} message RewardTrophyToUserCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToUserCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RewardTrophyToUserCommand message, length delimited. Does not implicitly {@link RewardTrophyToUserCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {IRewardTrophyToUserCommand} message RewardTrophyToUserCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToUserCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RewardTrophyToUserCommand message from the specified reader or buffer.
     * @function decode
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RewardTrophyToUserCommand} RewardTrophyToUserCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToUserCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RewardTrophyToUserCommand();
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
     * Decodes a RewardTrophyToUserCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RewardTrophyToUserCommand} RewardTrophyToUserCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToUserCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RewardTrophyToUserCommand message.
     * @function verify
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RewardTrophyToUserCommand.verify = function verify(message) {
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
     * Creates a RewardTrophyToUserCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RewardTrophyToUserCommand} RewardTrophyToUserCommand
     */
    RewardTrophyToUserCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.RewardTrophyToUserCommand)
            return object;
        var message = new $root.RewardTrophyToUserCommand();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".RewardTrophyToUserCommand.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a RewardTrophyToUserCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RewardTrophyToUserCommand
     * @static
     * @param {RewardTrophyToUserCommand} message RewardTrophyToUserCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RewardTrophyToUserCommand.toObject = function toObject(message, options) {
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
     * Converts this RewardTrophyToUserCommand to JSON.
     * @function toJSON
     * @memberof RewardTrophyToUserCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RewardTrophyToUserCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RewardTrophyToUserCommand;
})();

$root.RewardTrophyToAllCommand = (function() {

    /**
     * Properties of a RewardTrophyToAllCommand.
     * @exports IRewardTrophyToAllCommand
     * @interface IRewardTrophyToAllCommand
     * @property {ITrophy|null} [trophy] RewardTrophyToAllCommand trophy
     */

    /**
     * Constructs a new RewardTrophyToAllCommand.
     * @exports RewardTrophyToAllCommand
     * @classdesc Represents a RewardTrophyToAllCommand.
     * @implements IRewardTrophyToAllCommand
     * @constructor
     * @param {IRewardTrophyToAllCommand=} [properties] Properties to set
     */
    function RewardTrophyToAllCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RewardTrophyToAllCommand trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof RewardTrophyToAllCommand
     * @instance
     */
    RewardTrophyToAllCommand.prototype.trophy = null;

    /**
     * Creates a new RewardTrophyToAllCommand instance using the specified properties.
     * @function create
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {IRewardTrophyToAllCommand=} [properties] Properties to set
     * @returns {RewardTrophyToAllCommand} RewardTrophyToAllCommand instance
     */
    RewardTrophyToAllCommand.create = function create(properties) {
        return new RewardTrophyToAllCommand(properties);
    };

    /**
     * Encodes the specified RewardTrophyToAllCommand message. Does not implicitly {@link RewardTrophyToAllCommand.verify|verify} messages.
     * @function encode
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {IRewardTrophyToAllCommand} message RewardTrophyToAllCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToAllCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RewardTrophyToAllCommand message, length delimited. Does not implicitly {@link RewardTrophyToAllCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {IRewardTrophyToAllCommand} message RewardTrophyToAllCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RewardTrophyToAllCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RewardTrophyToAllCommand message from the specified reader or buffer.
     * @function decode
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RewardTrophyToAllCommand} RewardTrophyToAllCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToAllCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RewardTrophyToAllCommand();
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
     * Decodes a RewardTrophyToAllCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RewardTrophyToAllCommand} RewardTrophyToAllCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RewardTrophyToAllCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RewardTrophyToAllCommand message.
     * @function verify
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RewardTrophyToAllCommand.verify = function verify(message) {
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
     * Creates a RewardTrophyToAllCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RewardTrophyToAllCommand} RewardTrophyToAllCommand
     */
    RewardTrophyToAllCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.RewardTrophyToAllCommand)
            return object;
        var message = new $root.RewardTrophyToAllCommand();
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".RewardTrophyToAllCommand.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a RewardTrophyToAllCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RewardTrophyToAllCommand
     * @static
     * @param {RewardTrophyToAllCommand} message RewardTrophyToAllCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RewardTrophyToAllCommand.toObject = function toObject(message, options) {
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
     * Converts this RewardTrophyToAllCommand to JSON.
     * @function toJSON
     * @memberof RewardTrophyToAllCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RewardTrophyToAllCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RewardTrophyToAllCommand;
})();

$root.SendChatMessageCommand = (function() {

    /**
     * Properties of a SendChatMessageCommand.
     * @exports ISendChatMessageCommand
     * @interface ISendChatMessageCommand
     * @property {string|null} [text] SendChatMessageCommand text
     */

    /**
     * Constructs a new SendChatMessageCommand.
     * @exports SendChatMessageCommand
     * @classdesc Represents a SendChatMessageCommand.
     * @implements ISendChatMessageCommand
     * @constructor
     * @param {ISendChatMessageCommand=} [properties] Properties to set
     */
    function SendChatMessageCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendChatMessageCommand text.
     * @member {string} text
     * @memberof SendChatMessageCommand
     * @instance
     */
    SendChatMessageCommand.prototype.text = "";

    /**
     * Creates a new SendChatMessageCommand instance using the specified properties.
     * @function create
     * @memberof SendChatMessageCommand
     * @static
     * @param {ISendChatMessageCommand=} [properties] Properties to set
     * @returns {SendChatMessageCommand} SendChatMessageCommand instance
     */
    SendChatMessageCommand.create = function create(properties) {
        return new SendChatMessageCommand(properties);
    };

    /**
     * Encodes the specified SendChatMessageCommand message. Does not implicitly {@link SendChatMessageCommand.verify|verify} messages.
     * @function encode
     * @memberof SendChatMessageCommand
     * @static
     * @param {ISendChatMessageCommand} message SendChatMessageCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessageCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified SendChatMessageCommand message, length delimited. Does not implicitly {@link SendChatMessageCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendChatMessageCommand
     * @static
     * @param {ISendChatMessageCommand} message SendChatMessageCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessageCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendChatMessageCommand message from the specified reader or buffer.
     * @function decode
     * @memberof SendChatMessageCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendChatMessageCommand} SendChatMessageCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessageCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendChatMessageCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
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
     * Decodes a SendChatMessageCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendChatMessageCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendChatMessageCommand} SendChatMessageCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessageCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendChatMessageCommand message.
     * @function verify
     * @memberof SendChatMessageCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendChatMessageCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a SendChatMessageCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendChatMessageCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendChatMessageCommand} SendChatMessageCommand
     */
    SendChatMessageCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.SendChatMessageCommand)
            return object;
        var message = new $root.SendChatMessageCommand();
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a SendChatMessageCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendChatMessageCommand
     * @static
     * @param {SendChatMessageCommand} message SendChatMessageCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendChatMessageCommand.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.text = "";
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this SendChatMessageCommand to JSON.
     * @function toJSON
     * @memberof SendChatMessageCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendChatMessageCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendChatMessageCommand;
})();

$root.JoinEvent = (function() {

    /**
     * Properties of a JoinEvent.
     * @exports IJoinEvent
     * @interface IJoinEvent
     * @property {IClassState|null} [state] JoinEvent state
     * @property {string|null} [deviceId] JoinEvent deviceId
     */

    /**
     * Constructs a new JoinEvent.
     * @exports JoinEvent
     * @classdesc Represents a JoinEvent.
     * @implements IJoinEvent
     * @constructor
     * @param {IJoinEvent=} [properties] Properties to set
     */
    function JoinEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinEvent state.
     * @member {IClassState|null|undefined} state
     * @memberof JoinEvent
     * @instance
     */
    JoinEvent.prototype.state = null;

    /**
     * JoinEvent deviceId.
     * @member {string} deviceId
     * @memberof JoinEvent
     * @instance
     */
    JoinEvent.prototype.deviceId = "";

    /**
     * Creates a new JoinEvent instance using the specified properties.
     * @function create
     * @memberof JoinEvent
     * @static
     * @param {IJoinEvent=} [properties] Properties to set
     * @returns {JoinEvent} JoinEvent instance
     */
    JoinEvent.create = function create(properties) {
        return new JoinEvent(properties);
    };

    /**
     * Encodes the specified JoinEvent message. Does not implicitly {@link JoinEvent.verify|verify} messages.
     * @function encode
     * @memberof JoinEvent
     * @static
     * @param {IJoinEvent} message JoinEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            $root.ClassState.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceId);
        return writer;
    };

    /**
     * Encodes the specified JoinEvent message, length delimited. Does not implicitly {@link JoinEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinEvent
     * @static
     * @param {IJoinEvent} message JoinEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinEvent message from the specified reader or buffer.
     * @function decode
     * @memberof JoinEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinEvent} JoinEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.state = $root.ClassState.decode(reader, reader.uint32());
                break;
            case 2:
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
     * Decodes a JoinEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinEvent} JoinEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JoinEvent message.
     * @function verify
     * @memberof JoinEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JoinEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state")) {
            var error = $root.ClassState.verify(message.state);
            if (error)
                return "state." + error;
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        return null;
    };

    /**
     * Creates a JoinEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinEvent} JoinEvent
     */
    JoinEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinEvent)
            return object;
        var message = new $root.JoinEvent();
        if (object.state != null) {
            if (typeof object.state !== "object")
                throw TypeError(".JoinEvent.state: object expected");
            message.state = $root.ClassState.fromObject(object.state);
        }
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        return message;
    };

    /**
     * Creates a plain object from a JoinEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinEvent
     * @static
     * @param {JoinEvent} message JoinEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.state = null;
            object.deviceId = "";
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = $root.ClassState.toObject(message.state, options);
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        return object;
    };

    /**
     * Converts this JoinEvent to JSON.
     * @function toJSON
     * @memberof JoinEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JoinEvent;
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
     * @property {string|null} [role] DeviceConnectedEvent role
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
     * DeviceConnectedEvent role.
     * @member {string} role
     * @memberof DeviceConnectedEvent
     * @instance
     */
    DeviceConnectedEvent.prototype.role = "";

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
        if (message.role != null && Object.hasOwnProperty.call(message, "role"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.role);
        if (message.device != null && Object.hasOwnProperty.call(message, "device"))
            $root.Device.encode(message.device, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                message.role = reader.string();
                break;
            case 3:
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
        if (message.role != null && message.hasOwnProperty("role"))
            if (!$util.isString(message.role))
                return "role: string expected";
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
        if (object.role != null)
            message.role = String(object.role);
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
            object.role = "";
            object.device = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.role != null && message.hasOwnProperty("role"))
            object.role = message.role;
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
     * @property {string|null} [hostDeviceId] HostChangedEvent hostDeviceId
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
     * HostChangedEvent hostDeviceId.
     * @member {string} hostDeviceId
     * @memberof HostChangedEvent
     * @instance
     */
    HostChangedEvent.prototype.hostDeviceId = "";

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
        if (message.hostDeviceId != null && Object.hasOwnProperty.call(message, "hostDeviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostDeviceId);
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
                message.hostDeviceId = reader.string();
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
        if (message.hostDeviceId != null && message.hasOwnProperty("hostDeviceId"))
            if (!$util.isString(message.hostDeviceId))
                return "hostDeviceId: string expected";
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
        if (object.hostDeviceId != null)
            message.hostDeviceId = String(object.hostDeviceId);
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
            object.hostDeviceId = "";
        if (message.hostDeviceId != null && message.hasOwnProperty("hostDeviceId"))
            object.hostDeviceId = message.hostDeviceId;
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
     * @property {string|null} [hostDeviceId] ClassState hostDeviceId
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
     * ClassState hostDeviceId.
     * @member {string} hostDeviceId
     * @memberof ClassState
     * @instance
     */
    ClassState.prototype.hostDeviceId = "";

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
        if (message.hostDeviceId != null && Object.hasOwnProperty.call(message, "hostDeviceId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.hostDeviceId);
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
                message.hostDeviceId = reader.string();
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
        if (message.hostDeviceId != null && message.hasOwnProperty("hostDeviceId"))
            if (!$util.isString(message.hostDeviceId))
                return "hostDeviceId: string expected";
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
        if (object.hostDeviceId != null)
            message.hostDeviceId = String(object.hostDeviceId);
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
            object.hostDeviceId = "";
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
        if (message.hostDeviceId != null && message.hasOwnProperty("hostDeviceId"))
            object.hostDeviceId = message.hostDeviceId;
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
     * @property {string|null} [role] User role
     * @property {Array.<string>|null} [deviceIds] User deviceIds
     * @property {Array.<ITrophy>|null} [trophies] User trophies
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
        this.deviceIds = [];
        this.trophies = [];
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
     * User role.
     * @member {string} role
     * @memberof User
     * @instance
     */
    User.prototype.role = "";

    /**
     * User deviceIds.
     * @member {Array.<string>} deviceIds
     * @memberof User
     * @instance
     */
    User.prototype.deviceIds = $util.emptyArray;

    /**
     * User trophies.
     * @member {Array.<ITrophy>} trophies
     * @memberof User
     * @instance
     */
    User.prototype.trophies = $util.emptyArray;

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
        if (message.role != null && Object.hasOwnProperty.call(message, "role"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.role);
        if (message.deviceIds != null && message.deviceIds.length)
            for (var i = 0; i < message.deviceIds.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceIds[i]);
        if (message.trophies != null && message.trophies.length)
            for (var i = 0; i < message.trophies.length; ++i)
                $root.Trophy.encode(message.trophies[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                message.role = reader.string();
                break;
            case 4:
                if (!(message.deviceIds && message.deviceIds.length))
                    message.deviceIds = [];
                message.deviceIds.push(reader.string());
                break;
            case 5:
                if (!(message.trophies && message.trophies.length))
                    message.trophies = [];
                message.trophies.push($root.Trophy.decode(reader, reader.uint32()));
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
        if (message.role != null && message.hasOwnProperty("role"))
            if (!$util.isString(message.role))
                return "role: string expected";
        if (message.deviceIds != null && message.hasOwnProperty("deviceIds")) {
            if (!Array.isArray(message.deviceIds))
                return "deviceIds: array expected";
            for (var i = 0; i < message.deviceIds.length; ++i)
                if (!$util.isString(message.deviceIds[i]))
                    return "deviceIds: string[] expected";
        }
        if (message.trophies != null && message.hasOwnProperty("trophies")) {
            if (!Array.isArray(message.trophies))
                return "trophies: array expected";
            for (var i = 0; i < message.trophies.length; ++i) {
                var error = $root.Trophy.verify(message.trophies[i]);
                if (error)
                    return "trophies." + error;
            }
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
        if (object.role != null)
            message.role = String(object.role);
        if (object.deviceIds) {
            if (!Array.isArray(object.deviceIds))
                throw TypeError(".User.deviceIds: array expected");
            message.deviceIds = [];
            for (var i = 0; i < object.deviceIds.length; ++i)
                message.deviceIds[i] = String(object.deviceIds[i]);
        }
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
            object.deviceIds = [];
            object.trophies = [];
        }
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.role = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.role != null && message.hasOwnProperty("role"))
            object.role = message.role;
        if (message.deviceIds && message.deviceIds.length) {
            object.deviceIds = [];
            for (var j = 0; j < message.deviceIds.length; ++j)
                object.deviceIds[j] = message.deviceIds[j];
        }
        if (message.trophies && message.trophies.length) {
            object.trophies = [];
            for (var j = 0; j < message.trophies.length; ++j)
                object.trophies[j] = $root.Trophy.toObject(message.trophies[j], options);
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
     * @property {string|null} [type] Content type
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
     * @member {string} type
     * @memberof Content
     * @instance
     */
    Content.prototype.type = "";

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
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
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
                message.type = reader.string();
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
            if (!$util.isString(message.type))
                return "type: string expected";
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
        if (object.type != null)
            message.type = String(object.type);
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
            object.type = "";
            object.contentLocation = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
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

module.exports = $root;
