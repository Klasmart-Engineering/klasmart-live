/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Action = (function() {

    /**
     * Properties of an Action.
     * @exports IAction
     * @interface IAction
     * @property {string|null} [id] Action id
     * @property {ISetDevice|null} [setDevice] Action setDevice
     * @property {IRemoveDevice|null} [removeDevice] Action removeDevice
     * @property {ISetWebRTCStream|null} [setWebRtcStream] Action setWebRtcStream
     * @property {ISetActivity|null} [setActivity] Action setActivity
     * @property {ISetHost|null} [setHost] Action setHost
     * @property {IAddTrophy|null} [addTrophy] Action addTrophy
     * @property {ISetContent|null} [setContent] Action setContent
     * @property {ISendChatMessage|null} [sendChatMessage] Action sendChatMessage
     * @property {IUserJoin|null} [userJoin] Action userJoin
     * @property {IUserLeave|null} [userLeave] Action userLeave
     * @property {IEndClass|null} [endClass] Action endClass
     * @property {IHeartbeat|null} [heartbeat] Action heartbeat
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
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Action id.
     * @member {string} id
     * @memberof Action
     * @instance
     */
    Action.prototype.id = "";

    /**
     * Action setDevice.
     * @member {ISetDevice|null|undefined} setDevice
     * @memberof Action
     * @instance
     */
    Action.prototype.setDevice = null;

    /**
     * Action removeDevice.
     * @member {IRemoveDevice|null|undefined} removeDevice
     * @memberof Action
     * @instance
     */
    Action.prototype.removeDevice = null;

    /**
     * Action setWebRtcStream.
     * @member {ISetWebRTCStream|null|undefined} setWebRtcStream
     * @memberof Action
     * @instance
     */
    Action.prototype.setWebRtcStream = null;

    /**
     * Action setActivity.
     * @member {ISetActivity|null|undefined} setActivity
     * @memberof Action
     * @instance
     */
    Action.prototype.setActivity = null;

    /**
     * Action setHost.
     * @member {ISetHost|null|undefined} setHost
     * @memberof Action
     * @instance
     */
    Action.prototype.setHost = null;

    /**
     * Action addTrophy.
     * @member {IAddTrophy|null|undefined} addTrophy
     * @memberof Action
     * @instance
     */
    Action.prototype.addTrophy = null;

    /**
     * Action setContent.
     * @member {ISetContent|null|undefined} setContent
     * @memberof Action
     * @instance
     */
    Action.prototype.setContent = null;

    /**
     * Action sendChatMessage.
     * @member {ISendChatMessage|null|undefined} sendChatMessage
     * @memberof Action
     * @instance
     */
    Action.prototype.sendChatMessage = null;

    /**
     * Action userJoin.
     * @member {IUserJoin|null|undefined} userJoin
     * @memberof Action
     * @instance
     */
    Action.prototype.userJoin = null;

    /**
     * Action userLeave.
     * @member {IUserLeave|null|undefined} userLeave
     * @memberof Action
     * @instance
     */
    Action.prototype.userLeave = null;

    /**
     * Action endClass.
     * @member {IEndClass|null|undefined} endClass
     * @memberof Action
     * @instance
     */
    Action.prototype.endClass = null;

    /**
     * Action heartbeat.
     * @member {IHeartbeat|null|undefined} heartbeat
     * @memberof Action
     * @instance
     */
    Action.prototype.heartbeat = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Action action.
     * @member {"setDevice"|"removeDevice"|"setWebRtcStream"|"setActivity"|"setHost"|"addTrophy"|"setContent"|"sendChatMessage"|"userJoin"|"userLeave"|"endClass"|"heartbeat"|undefined} action
     * @memberof Action
     * @instance
     */
    Object.defineProperty(Action.prototype, "action", {
        get: $util.oneOfGetter($oneOfFields = ["setDevice", "removeDevice", "setWebRtcStream", "setActivity", "setHost", "addTrophy", "setContent", "sendChatMessage", "userJoin", "userLeave", "endClass", "heartbeat"]),
        set: $util.oneOfSetter($oneOfFields)
    });

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
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.heartbeat != null && Object.hasOwnProperty.call(message, "heartbeat"))
            $root.Heartbeat.encode(message.heartbeat, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.setDevice != null && Object.hasOwnProperty.call(message, "setDevice"))
            $root.SetDevice.encode(message.setDevice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.removeDevice != null && Object.hasOwnProperty.call(message, "removeDevice"))
            $root.RemoveDevice.encode(message.removeDevice, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.setWebRtcStream != null && Object.hasOwnProperty.call(message, "setWebRtcStream"))
            $root.SetWebRTCStream.encode(message.setWebRtcStream, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.setActivity != null && Object.hasOwnProperty.call(message, "setActivity"))
            $root.SetActivity.encode(message.setActivity, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.setHost != null && Object.hasOwnProperty.call(message, "setHost"))
            $root.SetHost.encode(message.setHost, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.addTrophy != null && Object.hasOwnProperty.call(message, "addTrophy"))
            $root.AddTrophy.encode(message.addTrophy, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.setContent != null && Object.hasOwnProperty.call(message, "setContent"))
            $root.SetContent.encode(message.setContent, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.sendChatMessage != null && Object.hasOwnProperty.call(message, "sendChatMessage"))
            $root.SendChatMessage.encode(message.sendChatMessage, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.userJoin != null && Object.hasOwnProperty.call(message, "userJoin"))
            $root.UserJoin.encode(message.userJoin, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.userLeave != null && Object.hasOwnProperty.call(message, "userLeave"))
            $root.UserLeave.encode(message.userLeave, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.endClass != null && Object.hasOwnProperty.call(message, "endClass"))
            $root.EndClass.encode(message.endClass, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Action();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 3:
                message.setDevice = $root.SetDevice.decode(reader, reader.uint32());
                break;
            case 4:
                message.removeDevice = $root.RemoveDevice.decode(reader, reader.uint32());
                break;
            case 5:
                message.setWebRtcStream = $root.SetWebRTCStream.decode(reader, reader.uint32());
                break;
            case 6:
                message.setActivity = $root.SetActivity.decode(reader, reader.uint32());
                break;
            case 7:
                message.setHost = $root.SetHost.decode(reader, reader.uint32());
                break;
            case 8:
                message.addTrophy = $root.AddTrophy.decode(reader, reader.uint32());
                break;
            case 9:
                message.setContent = $root.SetContent.decode(reader, reader.uint32());
                break;
            case 10:
                message.sendChatMessage = $root.SendChatMessage.decode(reader, reader.uint32());
                break;
            case 11:
                message.userJoin = $root.UserJoin.decode(reader, reader.uint32());
                break;
            case 12:
                message.userLeave = $root.UserLeave.decode(reader, reader.uint32());
                break;
            case 13:
                message.endClass = $root.EndClass.decode(reader, reader.uint32());
                break;
            case 2:
                message.heartbeat = $root.Heartbeat.decode(reader, reader.uint32());
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
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.setDevice != null && message.hasOwnProperty("setDevice")) {
            properties.action = 1;
            {
                var error = $root.SetDevice.verify(message.setDevice);
                if (error)
                    return "setDevice." + error;
            }
        }
        if (message.removeDevice != null && message.hasOwnProperty("removeDevice")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.RemoveDevice.verify(message.removeDevice);
                if (error)
                    return "removeDevice." + error;
            }
        }
        if (message.setWebRtcStream != null && message.hasOwnProperty("setWebRtcStream")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetWebRTCStream.verify(message.setWebRtcStream);
                if (error)
                    return "setWebRtcStream." + error;
            }
        }
        if (message.setActivity != null && message.hasOwnProperty("setActivity")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetActivity.verify(message.setActivity);
                if (error)
                    return "setActivity." + error;
            }
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetHost.verify(message.setHost);
                if (error)
                    return "setHost." + error;
            }
        }
        if (message.addTrophy != null && message.hasOwnProperty("addTrophy")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.AddTrophy.verify(message.addTrophy);
                if (error)
                    return "addTrophy." + error;
            }
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SetContent.verify(message.setContent);
                if (error)
                    return "setContent." + error;
            }
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.SendChatMessage.verify(message.sendChatMessage);
                if (error)
                    return "sendChatMessage." + error;
            }
        }
        if (message.userJoin != null && message.hasOwnProperty("userJoin")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.UserJoin.verify(message.userJoin);
                if (error)
                    return "userJoin." + error;
            }
        }
        if (message.userLeave != null && message.hasOwnProperty("userLeave")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.UserLeave.verify(message.userLeave);
                if (error)
                    return "userLeave." + error;
            }
        }
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.EndClass.verify(message.endClass);
                if (error)
                    return "endClass." + error;
            }
        }
        if (message.heartbeat != null && message.hasOwnProperty("heartbeat")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.Heartbeat.verify(message.heartbeat);
                if (error)
                    return "heartbeat." + error;
            }
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
        var message = new $root.Action();
        if (object.id != null)
            message.id = String(object.id);
        if (object.setDevice != null) {
            if (typeof object.setDevice !== "object")
                throw TypeError(".Action.setDevice: object expected");
            message.setDevice = $root.SetDevice.fromObject(object.setDevice);
        }
        if (object.removeDevice != null) {
            if (typeof object.removeDevice !== "object")
                throw TypeError(".Action.removeDevice: object expected");
            message.removeDevice = $root.RemoveDevice.fromObject(object.removeDevice);
        }
        if (object.setWebRtcStream != null) {
            if (typeof object.setWebRtcStream !== "object")
                throw TypeError(".Action.setWebRtcStream: object expected");
            message.setWebRtcStream = $root.SetWebRTCStream.fromObject(object.setWebRtcStream);
        }
        if (object.setActivity != null) {
            if (typeof object.setActivity !== "object")
                throw TypeError(".Action.setActivity: object expected");
            message.setActivity = $root.SetActivity.fromObject(object.setActivity);
        }
        if (object.setHost != null) {
            if (typeof object.setHost !== "object")
                throw TypeError(".Action.setHost: object expected");
            message.setHost = $root.SetHost.fromObject(object.setHost);
        }
        if (object.addTrophy != null) {
            if (typeof object.addTrophy !== "object")
                throw TypeError(".Action.addTrophy: object expected");
            message.addTrophy = $root.AddTrophy.fromObject(object.addTrophy);
        }
        if (object.setContent != null) {
            if (typeof object.setContent !== "object")
                throw TypeError(".Action.setContent: object expected");
            message.setContent = $root.SetContent.fromObject(object.setContent);
        }
        if (object.sendChatMessage != null) {
            if (typeof object.sendChatMessage !== "object")
                throw TypeError(".Action.sendChatMessage: object expected");
            message.sendChatMessage = $root.SendChatMessage.fromObject(object.sendChatMessage);
        }
        if (object.userJoin != null) {
            if (typeof object.userJoin !== "object")
                throw TypeError(".Action.userJoin: object expected");
            message.userJoin = $root.UserJoin.fromObject(object.userJoin);
        }
        if (object.userLeave != null) {
            if (typeof object.userLeave !== "object")
                throw TypeError(".Action.userLeave: object expected");
            message.userLeave = $root.UserLeave.fromObject(object.userLeave);
        }
        if (object.endClass != null) {
            if (typeof object.endClass !== "object")
                throw TypeError(".Action.endClass: object expected");
            message.endClass = $root.EndClass.fromObject(object.endClass);
        }
        if (object.heartbeat != null) {
            if (typeof object.heartbeat !== "object")
                throw TypeError(".Action.heartbeat: object expected");
            message.heartbeat = $root.Heartbeat.fromObject(object.heartbeat);
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
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.heartbeat != null && message.hasOwnProperty("heartbeat")) {
            object.heartbeat = $root.Heartbeat.toObject(message.heartbeat, options);
            if (options.oneofs)
                object.action = "heartbeat";
        }
        if (message.setDevice != null && message.hasOwnProperty("setDevice")) {
            object.setDevice = $root.SetDevice.toObject(message.setDevice, options);
            if (options.oneofs)
                object.action = "setDevice";
        }
        if (message.removeDevice != null && message.hasOwnProperty("removeDevice")) {
            object.removeDevice = $root.RemoveDevice.toObject(message.removeDevice, options);
            if (options.oneofs)
                object.action = "removeDevice";
        }
        if (message.setWebRtcStream != null && message.hasOwnProperty("setWebRtcStream")) {
            object.setWebRtcStream = $root.SetWebRTCStream.toObject(message.setWebRtcStream, options);
            if (options.oneofs)
                object.action = "setWebRtcStream";
        }
        if (message.setActivity != null && message.hasOwnProperty("setActivity")) {
            object.setActivity = $root.SetActivity.toObject(message.setActivity, options);
            if (options.oneofs)
                object.action = "setActivity";
        }
        if (message.setHost != null && message.hasOwnProperty("setHost")) {
            object.setHost = $root.SetHost.toObject(message.setHost, options);
            if (options.oneofs)
                object.action = "setHost";
        }
        if (message.addTrophy != null && message.hasOwnProperty("addTrophy")) {
            object.addTrophy = $root.AddTrophy.toObject(message.addTrophy, options);
            if (options.oneofs)
                object.action = "addTrophy";
        }
        if (message.setContent != null && message.hasOwnProperty("setContent")) {
            object.setContent = $root.SetContent.toObject(message.setContent, options);
            if (options.oneofs)
                object.action = "setContent";
        }
        if (message.sendChatMessage != null && message.hasOwnProperty("sendChatMessage")) {
            object.sendChatMessage = $root.SendChatMessage.toObject(message.sendChatMessage, options);
            if (options.oneofs)
                object.action = "sendChatMessage";
        }
        if (message.userJoin != null && message.hasOwnProperty("userJoin")) {
            object.userJoin = $root.UserJoin.toObject(message.userJoin, options);
            if (options.oneofs)
                object.action = "userJoin";
        }
        if (message.userLeave != null && message.hasOwnProperty("userLeave")) {
            object.userLeave = $root.UserLeave.toObject(message.userLeave, options);
            if (options.oneofs)
                object.action = "userLeave";
        }
        if (message.endClass != null && message.hasOwnProperty("endClass")) {
            object.endClass = $root.EndClass.toObject(message.endClass, options);
            if (options.oneofs)
                object.action = "endClass";
        }
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

$root.ActionAcknowledgement = (function() {

    /**
     * Properties of an ActionAcknowledgement.
     * @exports IActionAcknowledgement
     * @interface IActionAcknowledgement
     * @property {string|null} [id] ActionAcknowledgement id
     * @property {string|null} [error] ActionAcknowledgement error
     * @property {number|null} [code] ActionAcknowledgement code
     */

    /**
     * Constructs a new ActionAcknowledgement.
     * @exports ActionAcknowledgement
     * @classdesc Represents an ActionAcknowledgement.
     * @implements IActionAcknowledgement
     * @constructor
     * @param {IActionAcknowledgement=} [properties] Properties to set
     */
    function ActionAcknowledgement(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActionAcknowledgement id.
     * @member {string} id
     * @memberof ActionAcknowledgement
     * @instance
     */
    ActionAcknowledgement.prototype.id = "";

    /**
     * ActionAcknowledgement error.
     * @member {string} error
     * @memberof ActionAcknowledgement
     * @instance
     */
    ActionAcknowledgement.prototype.error = "";

    /**
     * ActionAcknowledgement code.
     * @member {number} code
     * @memberof ActionAcknowledgement
     * @instance
     */
    ActionAcknowledgement.prototype.code = 0;

    /**
     * Creates a new ActionAcknowledgement instance using the specified properties.
     * @function create
     * @memberof ActionAcknowledgement
     * @static
     * @param {IActionAcknowledgement=} [properties] Properties to set
     * @returns {ActionAcknowledgement} ActionAcknowledgement instance
     */
    ActionAcknowledgement.create = function create(properties) {
        return new ActionAcknowledgement(properties);
    };

    /**
     * Encodes the specified ActionAcknowledgement message. Does not implicitly {@link ActionAcknowledgement.verify|verify} messages.
     * @function encode
     * @memberof ActionAcknowledgement
     * @static
     * @param {IActionAcknowledgement} message ActionAcknowledgement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionAcknowledgement.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.code);
        return writer;
    };

    /**
     * Encodes the specified ActionAcknowledgement message, length delimited. Does not implicitly {@link ActionAcknowledgement.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActionAcknowledgement
     * @static
     * @param {IActionAcknowledgement} message ActionAcknowledgement message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionAcknowledgement.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActionAcknowledgement message from the specified reader or buffer.
     * @function decode
     * @memberof ActionAcknowledgement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActionAcknowledgement} ActionAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionAcknowledgement.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionAcknowledgement();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.error = reader.string();
                break;
            case 3:
                message.code = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActionAcknowledgement message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActionAcknowledgement
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActionAcknowledgement} ActionAcknowledgement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionAcknowledgement.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActionAcknowledgement message.
     * @function verify
     * @memberof ActionAcknowledgement
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActionAcknowledgement.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.error != null && message.hasOwnProperty("error"))
            if (!$util.isString(message.error))
                return "error: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };

    /**
     * Creates an ActionAcknowledgement message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActionAcknowledgement
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActionAcknowledgement} ActionAcknowledgement
     */
    ActionAcknowledgement.fromObject = function fromObject(object) {
        if (object instanceof $root.ActionAcknowledgement)
            return object;
        var message = new $root.ActionAcknowledgement();
        if (object.id != null)
            message.id = String(object.id);
        if (object.error != null)
            message.error = String(object.error);
        if (object.code != null)
            message.code = object.code >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an ActionAcknowledgement message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActionAcknowledgement
     * @static
     * @param {ActionAcknowledgement} message ActionAcknowledgement
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActionAcknowledgement.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.error = "";
            object.code = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.error != null && message.hasOwnProperty("error"))
            object.error = message.error;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };

    /**
     * Converts this ActionAcknowledgement to JSON.
     * @function toJSON
     * @memberof ActionAcknowledgement
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActionAcknowledgement.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActionAcknowledgement;
})();

$root.UserJoin = (function() {

    /**
     * Properties of a UserJoin.
     * @exports IUserJoin
     * @interface IUserJoin
     */

    /**
     * Constructs a new UserJoin.
     * @exports UserJoin
     * @classdesc Represents a UserJoin.
     * @implements IUserJoin
     * @constructor
     * @param {IUserJoin=} [properties] Properties to set
     */
    function UserJoin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UserJoin instance using the specified properties.
     * @function create
     * @memberof UserJoin
     * @static
     * @param {IUserJoin=} [properties] Properties to set
     * @returns {UserJoin} UserJoin instance
     */
    UserJoin.create = function create(properties) {
        return new UserJoin(properties);
    };

    /**
     * Encodes the specified UserJoin message. Does not implicitly {@link UserJoin.verify|verify} messages.
     * @function encode
     * @memberof UserJoin
     * @static
     * @param {IUserJoin} message UserJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserJoin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified UserJoin message, length delimited. Does not implicitly {@link UserJoin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserJoin
     * @static
     * @param {IUserJoin} message UserJoin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserJoin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserJoin message from the specified reader or buffer.
     * @function decode
     * @memberof UserJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserJoin} UserJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserJoin.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserJoin();
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
     * Decodes a UserJoin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserJoin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserJoin} UserJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserJoin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserJoin message.
     * @function verify
     * @memberof UserJoin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserJoin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a UserJoin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserJoin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserJoin} UserJoin
     */
    UserJoin.fromObject = function fromObject(object) {
        if (object instanceof $root.UserJoin)
            return object;
        return new $root.UserJoin();
    };

    /**
     * Creates a plain object from a UserJoin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserJoin
     * @static
     * @param {UserJoin} message UserJoin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserJoin.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this UserJoin to JSON.
     * @function toJSON
     * @memberof UserJoin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserJoin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserJoin;
})();

$root.UserLeave = (function() {

    /**
     * Properties of a UserLeave.
     * @exports IUserLeave
     * @interface IUserLeave
     */

    /**
     * Constructs a new UserLeave.
     * @exports UserLeave
     * @classdesc Represents a UserLeave.
     * @implements IUserLeave
     * @constructor
     * @param {IUserLeave=} [properties] Properties to set
     */
    function UserLeave(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UserLeave instance using the specified properties.
     * @function create
     * @memberof UserLeave
     * @static
     * @param {IUserLeave=} [properties] Properties to set
     * @returns {UserLeave} UserLeave instance
     */
    UserLeave.create = function create(properties) {
        return new UserLeave(properties);
    };

    /**
     * Encodes the specified UserLeave message. Does not implicitly {@link UserLeave.verify|verify} messages.
     * @function encode
     * @memberof UserLeave
     * @static
     * @param {IUserLeave} message UserLeave message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserLeave.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link UserLeave.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserLeave
     * @static
     * @param {IUserLeave} message UserLeave message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserLeave message from the specified reader or buffer.
     * @function decode
     * @memberof UserLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserLeave} UserLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserLeave.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserLeave();
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
     * Decodes a UserLeave message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserLeave
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserLeave} UserLeave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserLeave.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserLeave message.
     * @function verify
     * @memberof UserLeave
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserLeave.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserLeave
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserLeave} UserLeave
     */
    UserLeave.fromObject = function fromObject(object) {
        if (object instanceof $root.UserLeave)
            return object;
        return new $root.UserLeave();
    };

    /**
     * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserLeave
     * @static
     * @param {UserLeave} message UserLeave
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserLeave.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this UserLeave to JSON.
     * @function toJSON
     * @memberof UserLeave
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserLeave.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserLeave;
})();

$root.EndClass = (function() {

    /**
     * Properties of an EndClass.
     * @exports IEndClass
     * @interface IEndClass
     */

    /**
     * Constructs a new EndClass.
     * @exports EndClass
     * @classdesc Represents an EndClass.
     * @implements IEndClass
     * @constructor
     * @param {IEndClass=} [properties] Properties to set
     */
    function EndClass(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EndClass instance using the specified properties.
     * @function create
     * @memberof EndClass
     * @static
     * @param {IEndClass=} [properties] Properties to set
     * @returns {EndClass} EndClass instance
     */
    EndClass.create = function create(properties) {
        return new EndClass(properties);
    };

    /**
     * Encodes the specified EndClass message. Does not implicitly {@link EndClass.verify|verify} messages.
     * @function encode
     * @memberof EndClass
     * @static
     * @param {IEndClass} message EndClass message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClass.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EndClass message, length delimited. Does not implicitly {@link EndClass.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EndClass
     * @static
     * @param {IEndClass} message EndClass message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EndClass.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EndClass message from the specified reader or buffer.
     * @function decode
     * @memberof EndClass
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EndClass} EndClass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClass.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EndClass();
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
     * Decodes an EndClass message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EndClass
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EndClass} EndClass
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EndClass.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EndClass message.
     * @function verify
     * @memberof EndClass
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EndClass.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EndClass message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EndClass
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EndClass} EndClass
     */
    EndClass.fromObject = function fromObject(object) {
        if (object instanceof $root.EndClass)
            return object;
        return new $root.EndClass();
    };

    /**
     * Creates a plain object from an EndClass message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EndClass
     * @static
     * @param {EndClass} message EndClass
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EndClass.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EndClass to JSON.
     * @function toJSON
     * @memberof EndClass
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EndClass.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EndClass;
})();

$root.Heartbeat = (function() {

    /**
     * Properties of a Heartbeat.
     * @exports IHeartbeat
     * @interface IHeartbeat
     */

    /**
     * Constructs a new Heartbeat.
     * @exports Heartbeat
     * @classdesc Represents a Heartbeat.
     * @implements IHeartbeat
     * @constructor
     * @param {IHeartbeat=} [properties] Properties to set
     */
    function Heartbeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Heartbeat instance using the specified properties.
     * @function create
     * @memberof Heartbeat
     * @static
     * @param {IHeartbeat=} [properties] Properties to set
     * @returns {Heartbeat} Heartbeat instance
     */
    Heartbeat.create = function create(properties) {
        return new Heartbeat(properties);
    };

    /**
     * Encodes the specified Heartbeat message. Does not implicitly {@link Heartbeat.verify|verify} messages.
     * @function encode
     * @memberof Heartbeat
     * @static
     * @param {IHeartbeat} message Heartbeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heartbeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link Heartbeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Heartbeat
     * @static
     * @param {IHeartbeat} message Heartbeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Heartbeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Heartbeat message from the specified reader or buffer.
     * @function decode
     * @memberof Heartbeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Heartbeat} Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heartbeat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Heartbeat();
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
     * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Heartbeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Heartbeat} Heartbeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Heartbeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Heartbeat message.
     * @function verify
     * @memberof Heartbeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Heartbeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Heartbeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Heartbeat} Heartbeat
     */
    Heartbeat.fromObject = function fromObject(object) {
        if (object instanceof $root.Heartbeat)
            return object;
        return new $root.Heartbeat();
    };

    /**
     * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Heartbeat
     * @static
     * @param {Heartbeat} message Heartbeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Heartbeat.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Heartbeat to JSON.
     * @function toJSON
     * @memberof Heartbeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Heartbeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Heartbeat;
})();

$root.SetDevice = (function() {

    /**
     * Properties of a SetDevice.
     * @exports ISetDevice
     * @interface ISetDevice
     * @property {string|null} [deviceId] SetDevice deviceId
     * @property {IDevice|null} [device] SetDevice device
     */

    /**
     * Constructs a new SetDevice.
     * @exports SetDevice
     * @classdesc Represents a SetDevice.
     * @implements ISetDevice
     * @constructor
     * @param {ISetDevice=} [properties] Properties to set
     */
    function SetDevice(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetDevice deviceId.
     * @member {string} deviceId
     * @memberof SetDevice
     * @instance
     */
    SetDevice.prototype.deviceId = "";

    /**
     * SetDevice device.
     * @member {IDevice|null|undefined} device
     * @memberof SetDevice
     * @instance
     */
    SetDevice.prototype.device = null;

    /**
     * Creates a new SetDevice instance using the specified properties.
     * @function create
     * @memberof SetDevice
     * @static
     * @param {ISetDevice=} [properties] Properties to set
     * @returns {SetDevice} SetDevice instance
     */
    SetDevice.create = function create(properties) {
        return new SetDevice(properties);
    };

    /**
     * Encodes the specified SetDevice message. Does not implicitly {@link SetDevice.verify|verify} messages.
     * @function encode
     * @memberof SetDevice
     * @static
     * @param {ISetDevice} message SetDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetDevice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.device != null && Object.hasOwnProperty.call(message, "device"))
            $root.Device.encode(message.device, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetDevice message, length delimited. Does not implicitly {@link SetDevice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetDevice
     * @static
     * @param {ISetDevice} message SetDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetDevice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetDevice message from the specified reader or buffer.
     * @function decode
     * @memberof SetDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetDevice} SetDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
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
     * Decodes a SetDevice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetDevice} SetDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetDevice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetDevice message.
     * @function verify
     * @memberof SetDevice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetDevice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.device != null && message.hasOwnProperty("device")) {
            var error = $root.Device.verify(message.device);
            if (error)
                return "device." + error;
        }
        return null;
    };

    /**
     * Creates a SetDevice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetDevice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetDevice} SetDevice
     */
    SetDevice.fromObject = function fromObject(object) {
        if (object instanceof $root.SetDevice)
            return object;
        var message = new $root.SetDevice();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.device != null) {
            if (typeof object.device !== "object")
                throw TypeError(".SetDevice.device: object expected");
            message.device = $root.Device.fromObject(object.device);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetDevice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetDevice
     * @static
     * @param {SetDevice} message SetDevice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetDevice.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deviceId = "";
            object.device = null;
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.device != null && message.hasOwnProperty("device"))
            object.device = $root.Device.toObject(message.device, options);
        return object;
    };

    /**
     * Converts this SetDevice to JSON.
     * @function toJSON
     * @memberof SetDevice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetDevice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetDevice;
})();

$root.RemoveDevice = (function() {

    /**
     * Properties of a RemoveDevice.
     * @exports IRemoveDevice
     * @interface IRemoveDevice
     * @property {string|null} [id] RemoveDevice id
     */

    /**
     * Constructs a new RemoveDevice.
     * @exports RemoveDevice
     * @classdesc Represents a RemoveDevice.
     * @implements IRemoveDevice
     * @constructor
     * @param {IRemoveDevice=} [properties] Properties to set
     */
    function RemoveDevice(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoveDevice id.
     * @member {string} id
     * @memberof RemoveDevice
     * @instance
     */
    RemoveDevice.prototype.id = "";

    /**
     * Creates a new RemoveDevice instance using the specified properties.
     * @function create
     * @memberof RemoveDevice
     * @static
     * @param {IRemoveDevice=} [properties] Properties to set
     * @returns {RemoveDevice} RemoveDevice instance
     */
    RemoveDevice.create = function create(properties) {
        return new RemoveDevice(properties);
    };

    /**
     * Encodes the specified RemoveDevice message. Does not implicitly {@link RemoveDevice.verify|verify} messages.
     * @function encode
     * @memberof RemoveDevice
     * @static
     * @param {IRemoveDevice} message RemoveDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveDevice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified RemoveDevice message, length delimited. Does not implicitly {@link RemoveDevice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoveDevice
     * @static
     * @param {IRemoveDevice} message RemoveDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveDevice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoveDevice message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveDevice} RemoveDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveDevice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveDevice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
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
     * Decodes a RemoveDevice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoveDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveDevice} RemoveDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveDevice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoveDevice message.
     * @function verify
     * @memberof RemoveDevice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoveDevice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a RemoveDevice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoveDevice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveDevice} RemoveDevice
     */
    RemoveDevice.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoveDevice)
            return object;
        var message = new $root.RemoveDevice();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a RemoveDevice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoveDevice
     * @static
     * @param {RemoveDevice} message RemoveDevice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoveDevice.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this RemoveDevice to JSON.
     * @function toJSON
     * @memberof RemoveDevice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoveDevice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RemoveDevice;
})();

$root.SetWebRTCStream = (function() {

    /**
     * Properties of a SetWebRTCStream.
     * @exports ISetWebRTCStream
     * @interface ISetWebRTCStream
     * @property {string|null} [deviceId] SetWebRTCStream deviceId
     * @property {Array.<IWebRTCStream>|null} [streams] SetWebRTCStream streams
     */

    /**
     * Constructs a new SetWebRTCStream.
     * @exports SetWebRTCStream
     * @classdesc Represents a SetWebRTCStream.
     * @implements ISetWebRTCStream
     * @constructor
     * @param {ISetWebRTCStream=} [properties] Properties to set
     */
    function SetWebRTCStream(properties) {
        this.streams = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetWebRTCStream deviceId.
     * @member {string} deviceId
     * @memberof SetWebRTCStream
     * @instance
     */
    SetWebRTCStream.prototype.deviceId = "";

    /**
     * SetWebRTCStream streams.
     * @member {Array.<IWebRTCStream>} streams
     * @memberof SetWebRTCStream
     * @instance
     */
    SetWebRTCStream.prototype.streams = $util.emptyArray;

    /**
     * Creates a new SetWebRTCStream instance using the specified properties.
     * @function create
     * @memberof SetWebRTCStream
     * @static
     * @param {ISetWebRTCStream=} [properties] Properties to set
     * @returns {SetWebRTCStream} SetWebRTCStream instance
     */
    SetWebRTCStream.create = function create(properties) {
        return new SetWebRTCStream(properties);
    };

    /**
     * Encodes the specified SetWebRTCStream message. Does not implicitly {@link SetWebRTCStream.verify|verify} messages.
     * @function encode
     * @memberof SetWebRTCStream
     * @static
     * @param {ISetWebRTCStream} message SetWebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetWebRTCStream.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.streams != null && message.streams.length)
            for (var i = 0; i < message.streams.length; ++i)
                $root.WebRTCStream.encode(message.streams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetWebRTCStream message, length delimited. Does not implicitly {@link SetWebRTCStream.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetWebRTCStream
     * @static
     * @param {ISetWebRTCStream} message SetWebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetWebRTCStream.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetWebRTCStream message from the specified reader or buffer.
     * @function decode
     * @memberof SetWebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetWebRTCStream} SetWebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetWebRTCStream.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetWebRTCStream();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            case 2:
                if (!(message.streams && message.streams.length))
                    message.streams = [];
                message.streams.push($root.WebRTCStream.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetWebRTCStream message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetWebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetWebRTCStream} SetWebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetWebRTCStream.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetWebRTCStream message.
     * @function verify
     * @memberof SetWebRTCStream
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetWebRTCStream.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.streams != null && message.hasOwnProperty("streams")) {
            if (!Array.isArray(message.streams))
                return "streams: array expected";
            for (var i = 0; i < message.streams.length; ++i) {
                var error = $root.WebRTCStream.verify(message.streams[i]);
                if (error)
                    return "streams." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SetWebRTCStream message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetWebRTCStream
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetWebRTCStream} SetWebRTCStream
     */
    SetWebRTCStream.fromObject = function fromObject(object) {
        if (object instanceof $root.SetWebRTCStream)
            return object;
        var message = new $root.SetWebRTCStream();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.streams) {
            if (!Array.isArray(object.streams))
                throw TypeError(".SetWebRTCStream.streams: array expected");
            message.streams = [];
            for (var i = 0; i < object.streams.length; ++i) {
                if (typeof object.streams[i] !== "object")
                    throw TypeError(".SetWebRTCStream.streams: object expected");
                message.streams[i] = $root.WebRTCStream.fromObject(object.streams[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SetWebRTCStream message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetWebRTCStream
     * @static
     * @param {SetWebRTCStream} message SetWebRTCStream
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetWebRTCStream.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.streams = [];
        if (options.defaults)
            object.deviceId = "";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.streams && message.streams.length) {
            object.streams = [];
            for (var j = 0; j < message.streams.length; ++j)
                object.streams[j] = $root.WebRTCStream.toObject(message.streams[j], options);
        }
        return object;
    };

    /**
     * Converts this SetWebRTCStream to JSON.
     * @function toJSON
     * @memberof SetWebRTCStream
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetWebRTCStream.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetWebRTCStream;
})();

$root.SetActivity = (function() {

    /**
     * Properties of a SetActivity.
     * @exports ISetActivity
     * @interface ISetActivity
     * @property {string|null} [deviceId] SetActivity deviceId
     * @property {IActivity|null} [activity] SetActivity activity
     */

    /**
     * Constructs a new SetActivity.
     * @exports SetActivity
     * @classdesc Represents a SetActivity.
     * @implements ISetActivity
     * @constructor
     * @param {ISetActivity=} [properties] Properties to set
     */
    function SetActivity(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetActivity deviceId.
     * @member {string} deviceId
     * @memberof SetActivity
     * @instance
     */
    SetActivity.prototype.deviceId = "";

    /**
     * SetActivity activity.
     * @member {IActivity|null|undefined} activity
     * @memberof SetActivity
     * @instance
     */
    SetActivity.prototype.activity = null;

    /**
     * Creates a new SetActivity instance using the specified properties.
     * @function create
     * @memberof SetActivity
     * @static
     * @param {ISetActivity=} [properties] Properties to set
     * @returns {SetActivity} SetActivity instance
     */
    SetActivity.create = function create(properties) {
        return new SetActivity(properties);
    };

    /**
     * Encodes the specified SetActivity message. Does not implicitly {@link SetActivity.verify|verify} messages.
     * @function encode
     * @memberof SetActivity
     * @static
     * @param {ISetActivity} message SetActivity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivity.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
        if (message.activity != null && Object.hasOwnProperty.call(message, "activity"))
            $root.Activity.encode(message.activity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetActivity message, length delimited. Does not implicitly {@link SetActivity.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetActivity
     * @static
     * @param {ISetActivity} message SetActivity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetActivity.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetActivity message from the specified reader or buffer.
     * @function decode
     * @memberof SetActivity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetActivity} SetActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivity.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetActivity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.deviceId = reader.string();
                break;
            case 2:
                message.activity = $root.Activity.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetActivity message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetActivity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetActivity} SetActivity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetActivity.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetActivity message.
     * @function verify
     * @memberof SetActivity
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetActivity.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isString(message.deviceId))
                return "deviceId: string expected";
        if (message.activity != null && message.hasOwnProperty("activity")) {
            var error = $root.Activity.verify(message.activity);
            if (error)
                return "activity." + error;
        }
        return null;
    };

    /**
     * Creates a SetActivity message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetActivity
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetActivity} SetActivity
     */
    SetActivity.fromObject = function fromObject(object) {
        if (object instanceof $root.SetActivity)
            return object;
        var message = new $root.SetActivity();
        if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
        if (object.activity != null) {
            if (typeof object.activity !== "object")
                throw TypeError(".SetActivity.activity: object expected");
            message.activity = $root.Activity.fromObject(object.activity);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetActivity message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetActivity
     * @static
     * @param {SetActivity} message SetActivity
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetActivity.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deviceId = "";
            object.activity = null;
        }
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.activity != null && message.hasOwnProperty("activity"))
            object.activity = $root.Activity.toObject(message.activity, options);
        return object;
    };

    /**
     * Converts this SetActivity to JSON.
     * @function toJSON
     * @memberof SetActivity
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetActivity.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetActivity;
})();

$root.SetHost = (function() {

    /**
     * Properties of a SetHost.
     * @exports ISetHost
     * @interface ISetHost
     * @property {string|null} [id] SetHost id
     */

    /**
     * Constructs a new SetHost.
     * @exports SetHost
     * @classdesc Represents a SetHost.
     * @implements ISetHost
     * @constructor
     * @param {ISetHost=} [properties] Properties to set
     */
    function SetHost(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetHost id.
     * @member {string} id
     * @memberof SetHost
     * @instance
     */
    SetHost.prototype.id = "";

    /**
     * Creates a new SetHost instance using the specified properties.
     * @function create
     * @memberof SetHost
     * @static
     * @param {ISetHost=} [properties] Properties to set
     * @returns {SetHost} SetHost instance
     */
    SetHost.create = function create(properties) {
        return new SetHost(properties);
    };

    /**
     * Encodes the specified SetHost message. Does not implicitly {@link SetHost.verify|verify} messages.
     * @function encode
     * @memberof SetHost
     * @static
     * @param {ISetHost} message SetHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHost.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified SetHost message, length delimited. Does not implicitly {@link SetHost.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetHost
     * @static
     * @param {ISetHost} message SetHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetHost.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetHost message from the specified reader or buffer.
     * @function decode
     * @memberof SetHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetHost} SetHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHost.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetHost();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
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
     * Decodes a SetHost message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetHost} SetHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetHost.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetHost message.
     * @function verify
     * @memberof SetHost
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetHost.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a SetHost message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetHost
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetHost} SetHost
     */
    SetHost.fromObject = function fromObject(object) {
        if (object instanceof $root.SetHost)
            return object;
        var message = new $root.SetHost();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a SetHost message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetHost
     * @static
     * @param {SetHost} message SetHost
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetHost.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this SetHost to JSON.
     * @function toJSON
     * @memberof SetHost
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetHost.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetHost;
})();

$root.AddTrophy = (function() {

    /**
     * Properties of an AddTrophy.
     * @exports IAddTrophy
     * @interface IAddTrophy
     * @property {string|null} [trophyId] AddTrophy trophyId
     * @property {number|Long|null} [timestamp] AddTrophy timestamp
     * @property {string|null} [userId] AddTrophy userId
     */

    /**
     * Constructs a new AddTrophy.
     * @exports AddTrophy
     * @classdesc Represents an AddTrophy.
     * @implements IAddTrophy
     * @constructor
     * @param {IAddTrophy=} [properties] Properties to set
     */
    function AddTrophy(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AddTrophy trophyId.
     * @member {string} trophyId
     * @memberof AddTrophy
     * @instance
     */
    AddTrophy.prototype.trophyId = "";

    /**
     * AddTrophy timestamp.
     * @member {number|Long} timestamp
     * @memberof AddTrophy
     * @instance
     */
    AddTrophy.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AddTrophy userId.
     * @member {string} userId
     * @memberof AddTrophy
     * @instance
     */
    AddTrophy.prototype.userId = "";

    /**
     * Creates a new AddTrophy instance using the specified properties.
     * @function create
     * @memberof AddTrophy
     * @static
     * @param {IAddTrophy=} [properties] Properties to set
     * @returns {AddTrophy} AddTrophy instance
     */
    AddTrophy.create = function create(properties) {
        return new AddTrophy(properties);
    };

    /**
     * Encodes the specified AddTrophy message. Does not implicitly {@link AddTrophy.verify|verify} messages.
     * @function encode
     * @memberof AddTrophy
     * @static
     * @param {IAddTrophy} message AddTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddTrophy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophyId != null && Object.hasOwnProperty.call(message, "trophyId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.trophyId);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
        return writer;
    };

    /**
     * Encodes the specified AddTrophy message, length delimited. Does not implicitly {@link AddTrophy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddTrophy
     * @static
     * @param {IAddTrophy} message AddTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddTrophy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AddTrophy message from the specified reader or buffer.
     * @function decode
     * @memberof AddTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddTrophy} AddTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddTrophy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AddTrophy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.trophyId = reader.string();
                break;
            case 2:
                message.timestamp = reader.uint64();
                break;
            case 3:
                message.userId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AddTrophy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddTrophy} AddTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddTrophy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AddTrophy message.
     * @function verify
     * @memberof AddTrophy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AddTrophy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.trophyId != null && message.hasOwnProperty("trophyId"))
            if (!$util.isString(message.trophyId))
                return "trophyId: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        return null;
    };

    /**
     * Creates an AddTrophy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddTrophy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddTrophy} AddTrophy
     */
    AddTrophy.fromObject = function fromObject(object) {
        if (object instanceof $root.AddTrophy)
            return object;
        var message = new $root.AddTrophy();
        if (object.trophyId != null)
            message.trophyId = String(object.trophyId);
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        if (object.userId != null)
            message.userId = String(object.userId);
        return message;
    };

    /**
     * Creates a plain object from an AddTrophy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddTrophy
     * @static
     * @param {AddTrophy} message AddTrophy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AddTrophy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.trophyId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.userId = "";
        }
        if (message.trophyId != null && message.hasOwnProperty("trophyId"))
            object.trophyId = message.trophyId;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this AddTrophy to JSON.
     * @function toJSON
     * @memberof AddTrophy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AddTrophy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AddTrophy;
})();

$root.SetContent = (function() {

    /**
     * Properties of a SetContent.
     * @exports ISetContent
     * @interface ISetContent
     * @property {IContent|null} [content] SetContent content
     */

    /**
     * Constructs a new SetContent.
     * @exports SetContent
     * @classdesc Represents a SetContent.
     * @implements ISetContent
     * @constructor
     * @param {ISetContent=} [properties] Properties to set
     */
    function SetContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetContent content.
     * @member {IContent|null|undefined} content
     * @memberof SetContent
     * @instance
     */
    SetContent.prototype.content = null;

    /**
     * Creates a new SetContent instance using the specified properties.
     * @function create
     * @memberof SetContent
     * @static
     * @param {ISetContent=} [properties] Properties to set
     * @returns {SetContent} SetContent instance
     */
    SetContent.create = function create(properties) {
        return new SetContent(properties);
    };

    /**
     * Encodes the specified SetContent message. Does not implicitly {@link SetContent.verify|verify} messages.
     * @function encode
     * @memberof SetContent
     * @static
     * @param {ISetContent} message SetContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SetContent message, length delimited. Does not implicitly {@link SetContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetContent
     * @static
     * @param {ISetContent} message SetContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetContent message from the specified reader or buffer.
     * @function decode
     * @memberof SetContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetContent} SetContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetContent();
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
     * Decodes a SetContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetContent} SetContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetContent message.
     * @function verify
     * @memberof SetContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetContent.verify = function verify(message) {
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
     * Creates a SetContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetContent} SetContent
     */
    SetContent.fromObject = function fromObject(object) {
        if (object instanceof $root.SetContent)
            return object;
        var message = new $root.SetContent();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".SetContent.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        return message;
    };

    /**
     * Creates a plain object from a SetContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetContent
     * @static
     * @param {SetContent} message SetContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetContent.toObject = function toObject(message, options) {
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
     * Converts this SetContent to JSON.
     * @function toJSON
     * @memberof SetContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetContent;
})();

$root.SendChatMessage = (function() {

    /**
     * Properties of a SendChatMessage.
     * @exports ISendChatMessage
     * @interface ISendChatMessage
     * @property {string|null} [message] SendChatMessage message
     */

    /**
     * Constructs a new SendChatMessage.
     * @exports SendChatMessage
     * @classdesc Represents a SendChatMessage.
     * @implements ISendChatMessage
     * @constructor
     * @param {ISendChatMessage=} [properties] Properties to set
     */
    function SendChatMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SendChatMessage message.
     * @member {string} message
     * @memberof SendChatMessage
     * @instance
     */
    SendChatMessage.prototype.message = "";

    /**
     * Creates a new SendChatMessage instance using the specified properties.
     * @function create
     * @memberof SendChatMessage
     * @static
     * @param {ISendChatMessage=} [properties] Properties to set
     * @returns {SendChatMessage} SendChatMessage instance
     */
    SendChatMessage.create = function create(properties) {
        return new SendChatMessage(properties);
    };

    /**
     * Encodes the specified SendChatMessage message. Does not implicitly {@link SendChatMessage.verify|verify} messages.
     * @function encode
     * @memberof SendChatMessage
     * @static
     * @param {ISendChatMessage} message SendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified SendChatMessage message, length delimited. Does not implicitly {@link SendChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SendChatMessage
     * @static
     * @param {ISendChatMessage} message SendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SendChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SendChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof SendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SendChatMessage} SendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SendChatMessage();
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
     * Decodes a SendChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SendChatMessage} SendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SendChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SendChatMessage message.
     * @function verify
     * @memberof SendChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SendChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a SendChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SendChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SendChatMessage} SendChatMessage
     */
    SendChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.SendChatMessage)
            return object;
        var message = new $root.SendChatMessage();
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a SendChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SendChatMessage
     * @static
     * @param {SendChatMessage} message SendChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SendChatMessage.toObject = function toObject(message, options) {
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
     * Converts this SendChatMessage to JSON.
     * @function toJSON
     * @memberof SendChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SendChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SendChatMessage;
})();

$root.StateChanges = (function() {

    /**
     * Properties of a StateChanges.
     * @exports IStateChanges
     * @interface IStateChanges
     * @property {Array.<IStateDiff>|null} [changes] StateChanges changes
     */

    /**
     * Constructs a new StateChanges.
     * @exports StateChanges
     * @classdesc Represents a StateChanges.
     * @implements IStateChanges
     * @constructor
     * @param {IStateChanges=} [properties] Properties to set
     */
    function StateChanges(properties) {
        this.changes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StateChanges changes.
     * @member {Array.<IStateDiff>} changes
     * @memberof StateChanges
     * @instance
     */
    StateChanges.prototype.changes = $util.emptyArray;

    /**
     * Creates a new StateChanges instance using the specified properties.
     * @function create
     * @memberof StateChanges
     * @static
     * @param {IStateChanges=} [properties] Properties to set
     * @returns {StateChanges} StateChanges instance
     */
    StateChanges.create = function create(properties) {
        return new StateChanges(properties);
    };

    /**
     * Encodes the specified StateChanges message. Does not implicitly {@link StateChanges.verify|verify} messages.
     * @function encode
     * @memberof StateChanges
     * @static
     * @param {IStateChanges} message StateChanges message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateChanges.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.changes != null && message.changes.length)
            for (var i = 0; i < message.changes.length; ++i)
                $root.StateDiff.encode(message.changes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StateChanges message, length delimited. Does not implicitly {@link StateChanges.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StateChanges
     * @static
     * @param {IStateChanges} message StateChanges message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateChanges.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StateChanges message from the specified reader or buffer.
     * @function decode
     * @memberof StateChanges
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StateChanges} StateChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateChanges.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StateChanges();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.changes && message.changes.length))
                    message.changes = [];
                message.changes.push($root.StateDiff.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StateChanges message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StateChanges
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StateChanges} StateChanges
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateChanges.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StateChanges message.
     * @function verify
     * @memberof StateChanges
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StateChanges.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.changes != null && message.hasOwnProperty("changes")) {
            if (!Array.isArray(message.changes))
                return "changes: array expected";
            for (var i = 0; i < message.changes.length; ++i) {
                var error = $root.StateDiff.verify(message.changes[i]);
                if (error)
                    return "changes." + error;
            }
        }
        return null;
    };

    /**
     * Creates a StateChanges message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StateChanges
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StateChanges} StateChanges
     */
    StateChanges.fromObject = function fromObject(object) {
        if (object instanceof $root.StateChanges)
            return object;
        var message = new $root.StateChanges();
        if (object.changes) {
            if (!Array.isArray(object.changes))
                throw TypeError(".StateChanges.changes: array expected");
            message.changes = [];
            for (var i = 0; i < object.changes.length; ++i) {
                if (typeof object.changes[i] !== "object")
                    throw TypeError(".StateChanges.changes: object expected");
                message.changes[i] = $root.StateDiff.fromObject(object.changes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a StateChanges message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StateChanges
     * @static
     * @param {StateChanges} message StateChanges
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StateChanges.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.changes = [];
        if (message.changes && message.changes.length) {
            object.changes = [];
            for (var j = 0; j < message.changes.length; ++j)
                object.changes[j] = $root.StateDiff.toObject(message.changes[j], options);
        }
        return object;
    };

    /**
     * Converts this StateChanges to JSON.
     * @function toJSON
     * @memberof StateChanges
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StateChanges.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StateChanges;
})();

$root.StateDiff = (function() {

    /**
     * Properties of a StateDiff.
     * @exports IStateDiff
     * @interface IStateDiff
     * @property {IState|null} [setState] StateDiff setState
     * @property {IAddParticipants|null} [addParticipants] StateDiff addParticipants
     * @property {IRemoveParticipants|null} [removeParticipants] StateDiff removeParticipants
     * @property {IChangeContent|null} [changeContent] StateDiff changeContent
     * @property {IChangeHost|null} [changeHost] StateDiff changeHost
     * @property {IAppendChatMessage|null} [appendChatMessage] StateDiff appendChatMessage
     * @property {IReceiveTrophy|null} [receiveTrophy] StateDiff receiveTrophy
     * @property {IClassEnded|null} [classEnded] StateDiff classEnded
     */

    /**
     * Constructs a new StateDiff.
     * @exports StateDiff
     * @classdesc Represents a StateDiff.
     * @implements IStateDiff
     * @constructor
     * @param {IStateDiff=} [properties] Properties to set
     */
    function StateDiff(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StateDiff setState.
     * @member {IState|null|undefined} setState
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.setState = null;

    /**
     * StateDiff addParticipants.
     * @member {IAddParticipants|null|undefined} addParticipants
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.addParticipants = null;

    /**
     * StateDiff removeParticipants.
     * @member {IRemoveParticipants|null|undefined} removeParticipants
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.removeParticipants = null;

    /**
     * StateDiff changeContent.
     * @member {IChangeContent|null|undefined} changeContent
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.changeContent = null;

    /**
     * StateDiff changeHost.
     * @member {IChangeHost|null|undefined} changeHost
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.changeHost = null;

    /**
     * StateDiff appendChatMessage.
     * @member {IAppendChatMessage|null|undefined} appendChatMessage
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.appendChatMessage = null;

    /**
     * StateDiff receiveTrophy.
     * @member {IReceiveTrophy|null|undefined} receiveTrophy
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.receiveTrophy = null;

    /**
     * StateDiff classEnded.
     * @member {IClassEnded|null|undefined} classEnded
     * @memberof StateDiff
     * @instance
     */
    StateDiff.prototype.classEnded = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * StateDiff action.
     * @member {"setState"|"addParticipants"|"removeParticipants"|"changeContent"|"changeHost"|"appendChatMessage"|"receiveTrophy"|"classEnded"|undefined} action
     * @memberof StateDiff
     * @instance
     */
    Object.defineProperty(StateDiff.prototype, "action", {
        get: $util.oneOfGetter($oneOfFields = ["setState", "addParticipants", "removeParticipants", "changeContent", "changeHost", "appendChatMessage", "receiveTrophy", "classEnded"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new StateDiff instance using the specified properties.
     * @function create
     * @memberof StateDiff
     * @static
     * @param {IStateDiff=} [properties] Properties to set
     * @returns {StateDiff} StateDiff instance
     */
    StateDiff.create = function create(properties) {
        return new StateDiff(properties);
    };

    /**
     * Encodes the specified StateDiff message. Does not implicitly {@link StateDiff.verify|verify} messages.
     * @function encode
     * @memberof StateDiff
     * @static
     * @param {IStateDiff} message StateDiff message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateDiff.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.setState != null && Object.hasOwnProperty.call(message, "setState"))
            $root.State.encode(message.setState, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.addParticipants != null && Object.hasOwnProperty.call(message, "addParticipants"))
            $root.AddParticipants.encode(message.addParticipants, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.removeParticipants != null && Object.hasOwnProperty.call(message, "removeParticipants"))
            $root.RemoveParticipants.encode(message.removeParticipants, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.changeContent != null && Object.hasOwnProperty.call(message, "changeContent"))
            $root.ChangeContent.encode(message.changeContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.changeHost != null && Object.hasOwnProperty.call(message, "changeHost"))
            $root.ChangeHost.encode(message.changeHost, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.appendChatMessage != null && Object.hasOwnProperty.call(message, "appendChatMessage"))
            $root.AppendChatMessage.encode(message.appendChatMessage, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.receiveTrophy != null && Object.hasOwnProperty.call(message, "receiveTrophy"))
            $root.ReceiveTrophy.encode(message.receiveTrophy, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.classEnded != null && Object.hasOwnProperty.call(message, "classEnded"))
            $root.ClassEnded.encode(message.classEnded, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StateDiff message, length delimited. Does not implicitly {@link StateDiff.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StateDiff
     * @static
     * @param {IStateDiff} message StateDiff message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StateDiff.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StateDiff message from the specified reader or buffer.
     * @function decode
     * @memberof StateDiff
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StateDiff} StateDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateDiff.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StateDiff();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.setState = $root.State.decode(reader, reader.uint32());
                break;
            case 2:
                message.addParticipants = $root.AddParticipants.decode(reader, reader.uint32());
                break;
            case 3:
                message.removeParticipants = $root.RemoveParticipants.decode(reader, reader.uint32());
                break;
            case 4:
                message.changeContent = $root.ChangeContent.decode(reader, reader.uint32());
                break;
            case 5:
                message.changeHost = $root.ChangeHost.decode(reader, reader.uint32());
                break;
            case 6:
                message.appendChatMessage = $root.AppendChatMessage.decode(reader, reader.uint32());
                break;
            case 7:
                message.receiveTrophy = $root.ReceiveTrophy.decode(reader, reader.uint32());
                break;
            case 16:
                message.classEnded = $root.ClassEnded.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StateDiff message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StateDiff
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StateDiff} StateDiff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StateDiff.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StateDiff message.
     * @function verify
     * @memberof StateDiff
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StateDiff.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.setState != null && message.hasOwnProperty("setState")) {
            properties.action = 1;
            {
                var error = $root.State.verify(message.setState);
                if (error)
                    return "setState." + error;
            }
        }
        if (message.addParticipants != null && message.hasOwnProperty("addParticipants")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.AddParticipants.verify(message.addParticipants);
                if (error)
                    return "addParticipants." + error;
            }
        }
        if (message.removeParticipants != null && message.hasOwnProperty("removeParticipants")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.RemoveParticipants.verify(message.removeParticipants);
                if (error)
                    return "removeParticipants." + error;
            }
        }
        if (message.changeContent != null && message.hasOwnProperty("changeContent")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ChangeContent.verify(message.changeContent);
                if (error)
                    return "changeContent." + error;
            }
        }
        if (message.changeHost != null && message.hasOwnProperty("changeHost")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ChangeHost.verify(message.changeHost);
                if (error)
                    return "changeHost." + error;
            }
        }
        if (message.appendChatMessage != null && message.hasOwnProperty("appendChatMessage")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.AppendChatMessage.verify(message.appendChatMessage);
                if (error)
                    return "appendChatMessage." + error;
            }
        }
        if (message.receiveTrophy != null && message.hasOwnProperty("receiveTrophy")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ReceiveTrophy.verify(message.receiveTrophy);
                if (error)
                    return "receiveTrophy." + error;
            }
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            if (properties.action === 1)
                return "action: multiple values";
            properties.action = 1;
            {
                var error = $root.ClassEnded.verify(message.classEnded);
                if (error)
                    return "classEnded." + error;
            }
        }
        return null;
    };

    /**
     * Creates a StateDiff message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StateDiff
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StateDiff} StateDiff
     */
    StateDiff.fromObject = function fromObject(object) {
        if (object instanceof $root.StateDiff)
            return object;
        var message = new $root.StateDiff();
        if (object.setState != null) {
            if (typeof object.setState !== "object")
                throw TypeError(".StateDiff.setState: object expected");
            message.setState = $root.State.fromObject(object.setState);
        }
        if (object.addParticipants != null) {
            if (typeof object.addParticipants !== "object")
                throw TypeError(".StateDiff.addParticipants: object expected");
            message.addParticipants = $root.AddParticipants.fromObject(object.addParticipants);
        }
        if (object.removeParticipants != null) {
            if (typeof object.removeParticipants !== "object")
                throw TypeError(".StateDiff.removeParticipants: object expected");
            message.removeParticipants = $root.RemoveParticipants.fromObject(object.removeParticipants);
        }
        if (object.changeContent != null) {
            if (typeof object.changeContent !== "object")
                throw TypeError(".StateDiff.changeContent: object expected");
            message.changeContent = $root.ChangeContent.fromObject(object.changeContent);
        }
        if (object.changeHost != null) {
            if (typeof object.changeHost !== "object")
                throw TypeError(".StateDiff.changeHost: object expected");
            message.changeHost = $root.ChangeHost.fromObject(object.changeHost);
        }
        if (object.appendChatMessage != null) {
            if (typeof object.appendChatMessage !== "object")
                throw TypeError(".StateDiff.appendChatMessage: object expected");
            message.appendChatMessage = $root.AppendChatMessage.fromObject(object.appendChatMessage);
        }
        if (object.receiveTrophy != null) {
            if (typeof object.receiveTrophy !== "object")
                throw TypeError(".StateDiff.receiveTrophy: object expected");
            message.receiveTrophy = $root.ReceiveTrophy.fromObject(object.receiveTrophy);
        }
        if (object.classEnded != null) {
            if (typeof object.classEnded !== "object")
                throw TypeError(".StateDiff.classEnded: object expected");
            message.classEnded = $root.ClassEnded.fromObject(object.classEnded);
        }
        return message;
    };

    /**
     * Creates a plain object from a StateDiff message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StateDiff
     * @static
     * @param {StateDiff} message StateDiff
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StateDiff.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.setState != null && message.hasOwnProperty("setState")) {
            object.setState = $root.State.toObject(message.setState, options);
            if (options.oneofs)
                object.action = "setState";
        }
        if (message.addParticipants != null && message.hasOwnProperty("addParticipants")) {
            object.addParticipants = $root.AddParticipants.toObject(message.addParticipants, options);
            if (options.oneofs)
                object.action = "addParticipants";
        }
        if (message.removeParticipants != null && message.hasOwnProperty("removeParticipants")) {
            object.removeParticipants = $root.RemoveParticipants.toObject(message.removeParticipants, options);
            if (options.oneofs)
                object.action = "removeParticipants";
        }
        if (message.changeContent != null && message.hasOwnProperty("changeContent")) {
            object.changeContent = $root.ChangeContent.toObject(message.changeContent, options);
            if (options.oneofs)
                object.action = "changeContent";
        }
        if (message.changeHost != null && message.hasOwnProperty("changeHost")) {
            object.changeHost = $root.ChangeHost.toObject(message.changeHost, options);
            if (options.oneofs)
                object.action = "changeHost";
        }
        if (message.appendChatMessage != null && message.hasOwnProperty("appendChatMessage")) {
            object.appendChatMessage = $root.AppendChatMessage.toObject(message.appendChatMessage, options);
            if (options.oneofs)
                object.action = "appendChatMessage";
        }
        if (message.receiveTrophy != null && message.hasOwnProperty("receiveTrophy")) {
            object.receiveTrophy = $root.ReceiveTrophy.toObject(message.receiveTrophy, options);
            if (options.oneofs)
                object.action = "receiveTrophy";
        }
        if (message.classEnded != null && message.hasOwnProperty("classEnded")) {
            object.classEnded = $root.ClassEnded.toObject(message.classEnded, options);
            if (options.oneofs)
                object.action = "classEnded";
        }
        return object;
    };

    /**
     * Converts this StateDiff to JSON.
     * @function toJSON
     * @memberof StateDiff
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StateDiff.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StateDiff;
})();

$root.Participant = (function() {

    /**
     * Properties of a Participant.
     * @exports IParticipant
     * @interface IParticipant
     * @property {string|null} [name] Participant name
     * @property {Object.<string,IDevice>|null} [devices] Participant devices
     * @property {Array.<ITrophy>|null} [trophies] Participant trophies
     */

    /**
     * Constructs a new Participant.
     * @exports Participant
     * @classdesc Represents a Participant.
     * @implements IParticipant
     * @constructor
     * @param {IParticipant=} [properties] Properties to set
     */
    function Participant(properties) {
        this.devices = {};
        this.trophies = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Participant name.
     * @member {string} name
     * @memberof Participant
     * @instance
     */
    Participant.prototype.name = "";

    /**
     * Participant devices.
     * @member {Object.<string,IDevice>} devices
     * @memberof Participant
     * @instance
     */
    Participant.prototype.devices = $util.emptyObject;

    /**
     * Participant trophies.
     * @member {Array.<ITrophy>} trophies
     * @memberof Participant
     * @instance
     */
    Participant.prototype.trophies = $util.emptyArray;

    /**
     * Creates a new Participant instance using the specified properties.
     * @function create
     * @memberof Participant
     * @static
     * @param {IParticipant=} [properties] Properties to set
     * @returns {Participant} Participant instance
     */
    Participant.create = function create(properties) {
        return new Participant(properties);
    };

    /**
     * Encodes the specified Participant message. Does not implicitly {@link Participant.verify|verify} messages.
     * @function encode
     * @memberof Participant
     * @static
     * @param {IParticipant} message Participant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Participant.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.devices != null && Object.hasOwnProperty.call(message, "devices"))
            for (var keys = Object.keys(message.devices), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                $root.Device.encode(message.devices[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.trophies != null && message.trophies.length)
            for (var i = 0; i < message.trophies.length; ++i)
                $root.Trophy.encode(message.trophies[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Participant message, length delimited. Does not implicitly {@link Participant.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Participant
     * @static
     * @param {IParticipant} message Participant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Participant.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Participant message from the specified reader or buffer.
     * @function decode
     * @memberof Participant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Participant} Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Participant.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Participant(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                if (message.devices === $util.emptyObject)
                    message.devices = {};
                var end2 = reader.uint32() + reader.pos;
                key = 0;
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.uint32();
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
     * Decodes a Participant message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Participant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Participant} Participant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Participant.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Participant message.
     * @function verify
     * @memberof Participant
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Participant.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!$util.isObject(message.devices))
                return "devices: object expected";
            var key = Object.keys(message.devices);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "devices: integer key{k:uint32} expected";
                {
                    var error = $root.Device.verify(message.devices[key[i]]);
                    if (error)
                        return "devices." + error;
                }
            }
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
     * Creates a Participant message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Participant
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Participant} Participant
     */
    Participant.fromObject = function fromObject(object) {
        if (object instanceof $root.Participant)
            return object;
        var message = new $root.Participant();
        if (object.name != null)
            message.name = String(object.name);
        if (object.devices) {
            if (typeof object.devices !== "object")
                throw TypeError(".Participant.devices: object expected");
            message.devices = {};
            for (var keys = Object.keys(object.devices), i = 0; i < keys.length; ++i) {
                if (typeof object.devices[keys[i]] !== "object")
                    throw TypeError(".Participant.devices: object expected");
                message.devices[keys[i]] = $root.Device.fromObject(object.devices[keys[i]]);
            }
        }
        if (object.trophies) {
            if (!Array.isArray(object.trophies))
                throw TypeError(".Participant.trophies: array expected");
            message.trophies = [];
            for (var i = 0; i < object.trophies.length; ++i) {
                if (typeof object.trophies[i] !== "object")
                    throw TypeError(".Participant.trophies: object expected");
                message.trophies[i] = $root.Trophy.fromObject(object.trophies[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Participant message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Participant
     * @static
     * @param {Participant} message Participant
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Participant.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.trophies = [];
        if (options.objects || options.defaults)
            object.devices = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        var keys2;
        if (message.devices && (keys2 = Object.keys(message.devices)).length) {
            object.devices = {};
            for (var j = 0; j < keys2.length; ++j)
                object.devices[keys2[j]] = $root.Device.toObject(message.devices[keys2[j]], options);
        }
        if (message.trophies && message.trophies.length) {
            object.trophies = [];
            for (var j = 0; j < message.trophies.length; ++j)
                object.trophies[j] = $root.Trophy.toObject(message.trophies[j], options);
        }
        return object;
    };

    /**
     * Converts this Participant to JSON.
     * @function toJSON
     * @memberof Participant
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Participant.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Participant;
})();

$root.State = (function() {

    /**
     * Properties of a State.
     * @exports IState
     * @interface IState
     * @property {string|null} [roomId] State roomId
     * @property {Object.<string,IParticipant>|null} [participants] State participants
     * @property {string|null} [host] State host
     * @property {IContent|null} [content] State content
     * @property {Array.<IChatMessage>|null} [chatMessages] State chatMessages
     * @property {number|null} [endTimestamp] State endTimestamp
     */

    /**
     * Constructs a new State.
     * @exports State
     * @classdesc Represents a State.
     * @implements IState
     * @constructor
     * @param {IState=} [properties] Properties to set
     */
    function State(properties) {
        this.participants = {};
        this.chatMessages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * State roomId.
     * @member {string} roomId
     * @memberof State
     * @instance
     */
    State.prototype.roomId = "";

    /**
     * State participants.
     * @member {Object.<string,IParticipant>} participants
     * @memberof State
     * @instance
     */
    State.prototype.participants = $util.emptyObject;

    /**
     * State host.
     * @member {string} host
     * @memberof State
     * @instance
     */
    State.prototype.host = "";

    /**
     * State content.
     * @member {IContent|null|undefined} content
     * @memberof State
     * @instance
     */
    State.prototype.content = null;

    /**
     * State chatMessages.
     * @member {Array.<IChatMessage>} chatMessages
     * @memberof State
     * @instance
     */
    State.prototype.chatMessages = $util.emptyArray;

    /**
     * State endTimestamp.
     * @member {number} endTimestamp
     * @memberof State
     * @instance
     */
    State.prototype.endTimestamp = 0;

    /**
     * Creates a new State instance using the specified properties.
     * @function create
     * @memberof State
     * @static
     * @param {IState=} [properties] Properties to set
     * @returns {State} State instance
     */
    State.create = function create(properties) {
        return new State(properties);
    };

    /**
     * Encodes the specified State message. Does not implicitly {@link State.verify|verify} messages.
     * @function encode
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
        if (message.participants != null && Object.hasOwnProperty.call(message, "participants"))
            for (var keys = Object.keys(message.participants), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Participant.encode(message.participants[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.host);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.chatMessages != null && message.chatMessages.length)
            for (var i = 0; i < message.chatMessages.length; ++i)
                $root.ChatMessage.encode(message.chatMessages[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.endTimestamp != null && Object.hasOwnProperty.call(message, "endTimestamp"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.endTimestamp);
        return writer;
    };

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link State.verify|verify} messages.
     * @function encodeDelimited
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a State message from the specified reader or buffer.
     * @function decode
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.State(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.roomId = reader.string();
                break;
            case 2:
                if (message.participants === $util.emptyObject)
                    message.participants = {};
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
                        value = $root.Participant.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.participants[key] = value;
                break;
            case 3:
                message.host = reader.string();
                break;
            case 4:
                message.content = $root.Content.decode(reader, reader.uint32());
                break;
            case 5:
                if (!(message.chatMessages && message.chatMessages.length))
                    message.chatMessages = [];
                message.chatMessages.push($root.ChatMessage.decode(reader, reader.uint32()));
                break;
            case 6:
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
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a State message.
     * @function verify
     * @memberof State
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    State.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isString(message.roomId))
                return "roomId: string expected";
        if (message.participants != null && message.hasOwnProperty("participants")) {
            if (!$util.isObject(message.participants))
                return "participants: object expected";
            var key = Object.keys(message.participants);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Participant.verify(message.participants[key[i]]);
                if (error)
                    return "participants." + error;
            }
        }
        if (message.host != null && message.hasOwnProperty("host"))
            if (!$util.isString(message.host))
                return "host: string expected";
        if (message.content != null && message.hasOwnProperty("content")) {
            var error = $root.Content.verify(message.content);
            if (error)
                return "content." + error;
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
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            if (!$util.isInteger(message.endTimestamp))
                return "endTimestamp: integer expected";
        return null;
    };

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof State
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {State} State
     */
    State.fromObject = function fromObject(object) {
        if (object instanceof $root.State)
            return object;
        var message = new $root.State();
        if (object.roomId != null)
            message.roomId = String(object.roomId);
        if (object.participants) {
            if (typeof object.participants !== "object")
                throw TypeError(".State.participants: object expected");
            message.participants = {};
            for (var keys = Object.keys(object.participants), i = 0; i < keys.length; ++i) {
                if (typeof object.participants[keys[i]] !== "object")
                    throw TypeError(".State.participants: object expected");
                message.participants[keys[i]] = $root.Participant.fromObject(object.participants[keys[i]]);
            }
        }
        if (object.host != null)
            message.host = String(object.host);
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".State.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        if (object.chatMessages) {
            if (!Array.isArray(object.chatMessages))
                throw TypeError(".State.chatMessages: array expected");
            message.chatMessages = [];
            for (var i = 0; i < object.chatMessages.length; ++i) {
                if (typeof object.chatMessages[i] !== "object")
                    throw TypeError(".State.chatMessages: object expected");
                message.chatMessages[i] = $root.ChatMessage.fromObject(object.chatMessages[i]);
            }
        }
        if (object.endTimestamp != null)
            message.endTimestamp = object.endTimestamp >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @function toObject
     * @memberof State
     * @static
     * @param {State} message State
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    State.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.chatMessages = [];
        if (options.objects || options.defaults)
            object.participants = {};
        if (options.defaults) {
            object.roomId = "";
            object.host = "";
            object.content = null;
            object.endTimestamp = 0;
        }
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        var keys2;
        if (message.participants && (keys2 = Object.keys(message.participants)).length) {
            object.participants = {};
            for (var j = 0; j < keys2.length; ++j)
                object.participants[keys2[j]] = $root.Participant.toObject(message.participants[keys2[j]], options);
        }
        if (message.host != null && message.hasOwnProperty("host"))
            object.host = message.host;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = $root.Content.toObject(message.content, options);
        if (message.chatMessages && message.chatMessages.length) {
            object.chatMessages = [];
            for (var j = 0; j < message.chatMessages.length; ++j)
                object.chatMessages[j] = $root.ChatMessage.toObject(message.chatMessages[j], options);
        }
        if (message.endTimestamp != null && message.hasOwnProperty("endTimestamp"))
            object.endTimestamp = message.endTimestamp;
        return object;
    };

    /**
     * Converts this State to JSON.
     * @function toJSON
     * @memberof State
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    State.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return State;
})();

$root.AddParticipants = (function() {

    /**
     * Properties of an AddParticipants.
     * @exports IAddParticipants
     * @interface IAddParticipants
     * @property {Object.<string,IParticipant>|null} [participants] AddParticipants participants
     */

    /**
     * Constructs a new AddParticipants.
     * @exports AddParticipants
     * @classdesc Represents an AddParticipants.
     * @implements IAddParticipants
     * @constructor
     * @param {IAddParticipants=} [properties] Properties to set
     */
    function AddParticipants(properties) {
        this.participants = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AddParticipants participants.
     * @member {Object.<string,IParticipant>} participants
     * @memberof AddParticipants
     * @instance
     */
    AddParticipants.prototype.participants = $util.emptyObject;

    /**
     * Creates a new AddParticipants instance using the specified properties.
     * @function create
     * @memberof AddParticipants
     * @static
     * @param {IAddParticipants=} [properties] Properties to set
     * @returns {AddParticipants} AddParticipants instance
     */
    AddParticipants.create = function create(properties) {
        return new AddParticipants(properties);
    };

    /**
     * Encodes the specified AddParticipants message. Does not implicitly {@link AddParticipants.verify|verify} messages.
     * @function encode
     * @memberof AddParticipants
     * @static
     * @param {IAddParticipants} message AddParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddParticipants.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.participants != null && Object.hasOwnProperty.call(message, "participants"))
            for (var keys = Object.keys(message.participants), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Participant.encode(message.participants[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified AddParticipants message, length delimited. Does not implicitly {@link AddParticipants.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddParticipants
     * @static
     * @param {IAddParticipants} message AddParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AddParticipants.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AddParticipants message from the specified reader or buffer.
     * @function decode
     * @memberof AddParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddParticipants} AddParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddParticipants.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AddParticipants(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (message.participants === $util.emptyObject)
                    message.participants = {};
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
                        value = $root.Participant.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.participants[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AddParticipants message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddParticipants} AddParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AddParticipants.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AddParticipants message.
     * @function verify
     * @memberof AddParticipants
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AddParticipants.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.participants != null && message.hasOwnProperty("participants")) {
            if (!$util.isObject(message.participants))
                return "participants: object expected";
            var key = Object.keys(message.participants);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Participant.verify(message.participants[key[i]]);
                if (error)
                    return "participants." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AddParticipants message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddParticipants
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddParticipants} AddParticipants
     */
    AddParticipants.fromObject = function fromObject(object) {
        if (object instanceof $root.AddParticipants)
            return object;
        var message = new $root.AddParticipants();
        if (object.participants) {
            if (typeof object.participants !== "object")
                throw TypeError(".AddParticipants.participants: object expected");
            message.participants = {};
            for (var keys = Object.keys(object.participants), i = 0; i < keys.length; ++i) {
                if (typeof object.participants[keys[i]] !== "object")
                    throw TypeError(".AddParticipants.participants: object expected");
                message.participants[keys[i]] = $root.Participant.fromObject(object.participants[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AddParticipants message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddParticipants
     * @static
     * @param {AddParticipants} message AddParticipants
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AddParticipants.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.participants = {};
        var keys2;
        if (message.participants && (keys2 = Object.keys(message.participants)).length) {
            object.participants = {};
            for (var j = 0; j < keys2.length; ++j)
                object.participants[keys2[j]] = $root.Participant.toObject(message.participants[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this AddParticipants to JSON.
     * @function toJSON
     * @memberof AddParticipants
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AddParticipants.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AddParticipants;
})();

$root.RemoveParticipants = (function() {

    /**
     * Properties of a RemoveParticipants.
     * @exports IRemoveParticipants
     * @interface IRemoveParticipants
     * @property {Array.<string>|null} [participants] RemoveParticipants participants
     */

    /**
     * Constructs a new RemoveParticipants.
     * @exports RemoveParticipants
     * @classdesc Represents a RemoveParticipants.
     * @implements IRemoveParticipants
     * @constructor
     * @param {IRemoveParticipants=} [properties] Properties to set
     */
    function RemoveParticipants(properties) {
        this.participants = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoveParticipants participants.
     * @member {Array.<string>} participants
     * @memberof RemoveParticipants
     * @instance
     */
    RemoveParticipants.prototype.participants = $util.emptyArray;

    /**
     * Creates a new RemoveParticipants instance using the specified properties.
     * @function create
     * @memberof RemoveParticipants
     * @static
     * @param {IRemoveParticipants=} [properties] Properties to set
     * @returns {RemoveParticipants} RemoveParticipants instance
     */
    RemoveParticipants.create = function create(properties) {
        return new RemoveParticipants(properties);
    };

    /**
     * Encodes the specified RemoveParticipants message. Does not implicitly {@link RemoveParticipants.verify|verify} messages.
     * @function encode
     * @memberof RemoveParticipants
     * @static
     * @param {IRemoveParticipants} message RemoveParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveParticipants.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.participants != null && message.participants.length)
            for (var i = 0; i < message.participants.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.participants[i]);
        return writer;
    };

    /**
     * Encodes the specified RemoveParticipants message, length delimited. Does not implicitly {@link RemoveParticipants.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoveParticipants
     * @static
     * @param {IRemoveParticipants} message RemoveParticipants message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveParticipants.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoveParticipants message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveParticipants} RemoveParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveParticipants.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveParticipants();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.participants && message.participants.length))
                    message.participants = [];
                message.participants.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RemoveParticipants message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoveParticipants
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveParticipants} RemoveParticipants
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveParticipants.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoveParticipants message.
     * @function verify
     * @memberof RemoveParticipants
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoveParticipants.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.participants != null && message.hasOwnProperty("participants")) {
            if (!Array.isArray(message.participants))
                return "participants: array expected";
            for (var i = 0; i < message.participants.length; ++i)
                if (!$util.isString(message.participants[i]))
                    return "participants: string[] expected";
        }
        return null;
    };

    /**
     * Creates a RemoveParticipants message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoveParticipants
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveParticipants} RemoveParticipants
     */
    RemoveParticipants.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoveParticipants)
            return object;
        var message = new $root.RemoveParticipants();
        if (object.participants) {
            if (!Array.isArray(object.participants))
                throw TypeError(".RemoveParticipants.participants: array expected");
            message.participants = [];
            for (var i = 0; i < object.participants.length; ++i)
                message.participants[i] = String(object.participants[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a RemoveParticipants message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoveParticipants
     * @static
     * @param {RemoveParticipants} message RemoveParticipants
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoveParticipants.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.participants = [];
        if (message.participants && message.participants.length) {
            object.participants = [];
            for (var j = 0; j < message.participants.length; ++j)
                object.participants[j] = message.participants[j];
        }
        return object;
    };

    /**
     * Converts this RemoveParticipants to JSON.
     * @function toJSON
     * @memberof RemoveParticipants
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoveParticipants.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RemoveParticipants;
})();

$root.ChangeContent = (function() {

    /**
     * Properties of a ChangeContent.
     * @exports IChangeContent
     * @interface IChangeContent
     * @property {IContent|null} [content] ChangeContent content
     */

    /**
     * Constructs a new ChangeContent.
     * @exports ChangeContent
     * @classdesc Represents a ChangeContent.
     * @implements IChangeContent
     * @constructor
     * @param {IChangeContent=} [properties] Properties to set
     */
    function ChangeContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeContent content.
     * @member {IContent|null|undefined} content
     * @memberof ChangeContent
     * @instance
     */
    ChangeContent.prototype.content = null;

    /**
     * Creates a new ChangeContent instance using the specified properties.
     * @function create
     * @memberof ChangeContent
     * @static
     * @param {IChangeContent=} [properties] Properties to set
     * @returns {ChangeContent} ChangeContent instance
     */
    ChangeContent.create = function create(properties) {
        return new ChangeContent(properties);
    };

    /**
     * Encodes the specified ChangeContent message. Does not implicitly {@link ChangeContent.verify|verify} messages.
     * @function encode
     * @memberof ChangeContent
     * @static
     * @param {IChangeContent} message ChangeContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChangeContent message, length delimited. Does not implicitly {@link ChangeContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeContent
     * @static
     * @param {IChangeContent} message ChangeContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeContent message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeContent} ChangeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeContent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeContent();
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
     * Decodes a ChangeContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeContent} ChangeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeContent message.
     * @function verify
     * @memberof ChangeContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeContent.verify = function verify(message) {
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
     * Creates a ChangeContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeContent} ChangeContent
     */
    ChangeContent.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeContent)
            return object;
        var message = new $root.ChangeContent();
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".ChangeContent.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChangeContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeContent
     * @static
     * @param {ChangeContent} message ChangeContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeContent.toObject = function toObject(message, options) {
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
     * Converts this ChangeContent to JSON.
     * @function toJSON
     * @memberof ChangeContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChangeContent;
})();

$root.ChangeHost = (function() {

    /**
     * Properties of a ChangeHost.
     * @exports IChangeHost
     * @interface IChangeHost
     * @property {string|null} [hostId] ChangeHost hostId
     */

    /**
     * Constructs a new ChangeHost.
     * @exports ChangeHost
     * @classdesc Represents a ChangeHost.
     * @implements IChangeHost
     * @constructor
     * @param {IChangeHost=} [properties] Properties to set
     */
    function ChangeHost(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangeHost hostId.
     * @member {string} hostId
     * @memberof ChangeHost
     * @instance
     */
    ChangeHost.prototype.hostId = "";

    /**
     * Creates a new ChangeHost instance using the specified properties.
     * @function create
     * @memberof ChangeHost
     * @static
     * @param {IChangeHost=} [properties] Properties to set
     * @returns {ChangeHost} ChangeHost instance
     */
    ChangeHost.create = function create(properties) {
        return new ChangeHost(properties);
    };

    /**
     * Encodes the specified ChangeHost message. Does not implicitly {@link ChangeHost.verify|verify} messages.
     * @function encode
     * @memberof ChangeHost
     * @static
     * @param {IChangeHost} message ChangeHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeHost.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hostId != null && Object.hasOwnProperty.call(message, "hostId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hostId);
        return writer;
    };

    /**
     * Encodes the specified ChangeHost message, length delimited. Does not implicitly {@link ChangeHost.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangeHost
     * @static
     * @param {IChangeHost} message ChangeHost message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangeHost.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangeHost message from the specified reader or buffer.
     * @function decode
     * @memberof ChangeHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangeHost} ChangeHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeHost.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangeHost();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hostId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangeHost message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangeHost
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangeHost} ChangeHost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangeHost.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangeHost message.
     * @function verify
     * @memberof ChangeHost
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangeHost.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hostId != null && message.hasOwnProperty("hostId"))
            if (!$util.isString(message.hostId))
                return "hostId: string expected";
        return null;
    };

    /**
     * Creates a ChangeHost message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangeHost
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangeHost} ChangeHost
     */
    ChangeHost.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangeHost)
            return object;
        var message = new $root.ChangeHost();
        if (object.hostId != null)
            message.hostId = String(object.hostId);
        return message;
    };

    /**
     * Creates a plain object from a ChangeHost message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangeHost
     * @static
     * @param {ChangeHost} message ChangeHost
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangeHost.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.hostId = "";
        if (message.hostId != null && message.hasOwnProperty("hostId"))
            object.hostId = message.hostId;
        return object;
    };

    /**
     * Converts this ChangeHost to JSON.
     * @function toJSON
     * @memberof ChangeHost
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangeHost.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ChangeHost;
})();

$root.AppendChatMessage = (function() {

    /**
     * Properties of an AppendChatMessage.
     * @exports IAppendChatMessage
     * @interface IAppendChatMessage
     * @property {Array.<IChatMessage>|null} [messages] AppendChatMessage messages
     */

    /**
     * Constructs a new AppendChatMessage.
     * @exports AppendChatMessage
     * @classdesc Represents an AppendChatMessage.
     * @implements IAppendChatMessage
     * @constructor
     * @param {IAppendChatMessage=} [properties] Properties to set
     */
    function AppendChatMessage(properties) {
        this.messages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppendChatMessage messages.
     * @member {Array.<IChatMessage>} messages
     * @memberof AppendChatMessage
     * @instance
     */
    AppendChatMessage.prototype.messages = $util.emptyArray;

    /**
     * Creates a new AppendChatMessage instance using the specified properties.
     * @function create
     * @memberof AppendChatMessage
     * @static
     * @param {IAppendChatMessage=} [properties] Properties to set
     * @returns {AppendChatMessage} AppendChatMessage instance
     */
    AppendChatMessage.create = function create(properties) {
        return new AppendChatMessage(properties);
    };

    /**
     * Encodes the specified AppendChatMessage message. Does not implicitly {@link AppendChatMessage.verify|verify} messages.
     * @function encode
     * @memberof AppendChatMessage
     * @static
     * @param {IAppendChatMessage} message AppendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppendChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messages != null && message.messages.length)
            for (var i = 0; i < message.messages.length; ++i)
                $root.ChatMessage.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AppendChatMessage message, length delimited. Does not implicitly {@link AppendChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppendChatMessage
     * @static
     * @param {IAppendChatMessage} message AppendChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppendChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppendChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof AppendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppendChatMessage} AppendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppendChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppendChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.messages && message.messages.length))
                    message.messages = [];
                message.messages.push($root.ChatMessage.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppendChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppendChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppendChatMessage} AppendChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppendChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppendChatMessage message.
     * @function verify
     * @memberof AppendChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppendChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messages != null && message.hasOwnProperty("messages")) {
            if (!Array.isArray(message.messages))
                return "messages: array expected";
            for (var i = 0; i < message.messages.length; ++i) {
                var error = $root.ChatMessage.verify(message.messages[i]);
                if (error)
                    return "messages." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AppendChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppendChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppendChatMessage} AppendChatMessage
     */
    AppendChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.AppendChatMessage)
            return object;
        var message = new $root.AppendChatMessage();
        if (object.messages) {
            if (!Array.isArray(object.messages))
                throw TypeError(".AppendChatMessage.messages: array expected");
            message.messages = [];
            for (var i = 0; i < object.messages.length; ++i) {
                if (typeof object.messages[i] !== "object")
                    throw TypeError(".AppendChatMessage.messages: object expected");
                message.messages[i] = $root.ChatMessage.fromObject(object.messages[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AppendChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppendChatMessage
     * @static
     * @param {AppendChatMessage} message AppendChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppendChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.messages = [];
        if (message.messages && message.messages.length) {
            object.messages = [];
            for (var j = 0; j < message.messages.length; ++j)
                object.messages[j] = $root.ChatMessage.toObject(message.messages[j], options);
        }
        return object;
    };

    /**
     * Converts this AppendChatMessage to JSON.
     * @function toJSON
     * @memberof AppendChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppendChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppendChatMessage;
})();

$root.ReceiveTrophy = (function() {

    /**
     * Properties of a ReceiveTrophy.
     * @exports IReceiveTrophy
     * @interface IReceiveTrophy
     * @property {ITrophy|null} [trophy] ReceiveTrophy trophy
     */

    /**
     * Constructs a new ReceiveTrophy.
     * @exports ReceiveTrophy
     * @classdesc Represents a ReceiveTrophy.
     * @implements IReceiveTrophy
     * @constructor
     * @param {IReceiveTrophy=} [properties] Properties to set
     */
    function ReceiveTrophy(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReceiveTrophy trophy.
     * @member {ITrophy|null|undefined} trophy
     * @memberof ReceiveTrophy
     * @instance
     */
    ReceiveTrophy.prototype.trophy = null;

    /**
     * Creates a new ReceiveTrophy instance using the specified properties.
     * @function create
     * @memberof ReceiveTrophy
     * @static
     * @param {IReceiveTrophy=} [properties] Properties to set
     * @returns {ReceiveTrophy} ReceiveTrophy instance
     */
    ReceiveTrophy.create = function create(properties) {
        return new ReceiveTrophy(properties);
    };

    /**
     * Encodes the specified ReceiveTrophy message. Does not implicitly {@link ReceiveTrophy.verify|verify} messages.
     * @function encode
     * @memberof ReceiveTrophy
     * @static
     * @param {IReceiveTrophy} message ReceiveTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveTrophy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            $root.Trophy.encode(message.trophy, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ReceiveTrophy message, length delimited. Does not implicitly {@link ReceiveTrophy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReceiveTrophy
     * @static
     * @param {IReceiveTrophy} message ReceiveTrophy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReceiveTrophy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReceiveTrophy message from the specified reader or buffer.
     * @function decode
     * @memberof ReceiveTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReceiveTrophy} ReceiveTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveTrophy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReceiveTrophy();
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
     * Decodes a ReceiveTrophy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReceiveTrophy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReceiveTrophy} ReceiveTrophy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReceiveTrophy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReceiveTrophy message.
     * @function verify
     * @memberof ReceiveTrophy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReceiveTrophy.verify = function verify(message) {
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
     * Creates a ReceiveTrophy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReceiveTrophy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReceiveTrophy} ReceiveTrophy
     */
    ReceiveTrophy.fromObject = function fromObject(object) {
        if (object instanceof $root.ReceiveTrophy)
            return object;
        var message = new $root.ReceiveTrophy();
        if (object.trophy != null) {
            if (typeof object.trophy !== "object")
                throw TypeError(".ReceiveTrophy.trophy: object expected");
            message.trophy = $root.Trophy.fromObject(object.trophy);
        }
        return message;
    };

    /**
     * Creates a plain object from a ReceiveTrophy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReceiveTrophy
     * @static
     * @param {ReceiveTrophy} message ReceiveTrophy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReceiveTrophy.toObject = function toObject(message, options) {
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
     * Converts this ReceiveTrophy to JSON.
     * @function toJSON
     * @memberof ReceiveTrophy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReceiveTrophy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReceiveTrophy;
})();

$root.ClassEnded = (function() {

    /**
     * Properties of a ClassEnded.
     * @exports IClassEnded
     * @interface IClassEnded
     */

    /**
     * Constructs a new ClassEnded.
     * @exports ClassEnded
     * @classdesc Represents a ClassEnded.
     * @implements IClassEnded
     * @constructor
     * @param {IClassEnded=} [properties] Properties to set
     */
    function ClassEnded(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ClassEnded instance using the specified properties.
     * @function create
     * @memberof ClassEnded
     * @static
     * @param {IClassEnded=} [properties] Properties to set
     * @returns {ClassEnded} ClassEnded instance
     */
    ClassEnded.create = function create(properties) {
        return new ClassEnded(properties);
    };

    /**
     * Encodes the specified ClassEnded message. Does not implicitly {@link ClassEnded.verify|verify} messages.
     * @function encode
     * @memberof ClassEnded
     * @static
     * @param {IClassEnded} message ClassEnded message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEnded.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ClassEnded message, length delimited. Does not implicitly {@link ClassEnded.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClassEnded
     * @static
     * @param {IClassEnded} message ClassEnded message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClassEnded.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClassEnded message from the specified reader or buffer.
     * @function decode
     * @memberof ClassEnded
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClassEnded} ClassEnded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEnded.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClassEnded();
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
     * Decodes a ClassEnded message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClassEnded
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClassEnded} ClassEnded
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClassEnded.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClassEnded message.
     * @function verify
     * @memberof ClassEnded
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClassEnded.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ClassEnded message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClassEnded
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClassEnded} ClassEnded
     */
    ClassEnded.fromObject = function fromObject(object) {
        if (object instanceof $root.ClassEnded)
            return object;
        return new $root.ClassEnded();
    };

    /**
     * Creates a plain object from a ClassEnded message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClassEnded
     * @static
     * @param {ClassEnded} message ClassEnded
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClassEnded.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ClassEnded to JSON.
     * @function toJSON
     * @memberof ClassEnded
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClassEnded.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClassEnded;
})();

$root.Device = (function() {

    /**
     * Properties of a Device.
     * @exports IDevice
     * @interface IDevice
     * @property {IActivity|null} [activity] Device activity
     * @property {Array.<IWebRTCStream>|null} [webRTCStreams] Device webRTCStreams
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
        this.webRTCStreams = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Device activity.
     * @member {IActivity|null|undefined} activity
     * @memberof Device
     * @instance
     */
    Device.prototype.activity = null;

    /**
     * Device webRTCStreams.
     * @member {Array.<IWebRTCStream>} webRTCStreams
     * @memberof Device
     * @instance
     */
    Device.prototype.webRTCStreams = $util.emptyArray;

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
        if (message.activity != null && Object.hasOwnProperty.call(message, "activity"))
            $root.Activity.encode(message.activity, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.webRTCStreams != null && message.webRTCStreams.length)
            for (var i = 0; i < message.webRTCStreams.length; ++i)
                $root.WebRTCStream.encode(message.webRTCStreams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                message.activity = $root.Activity.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.webRTCStreams && message.webRTCStreams.length))
                    message.webRTCStreams = [];
                message.webRTCStreams.push($root.WebRTCStream.decode(reader, reader.uint32()));
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
        if (message.activity != null && message.hasOwnProperty("activity")) {
            var error = $root.Activity.verify(message.activity);
            if (error)
                return "activity." + error;
        }
        if (message.webRTCStreams != null && message.hasOwnProperty("webRTCStreams")) {
            if (!Array.isArray(message.webRTCStreams))
                return "webRTCStreams: array expected";
            for (var i = 0; i < message.webRTCStreams.length; ++i) {
                var error = $root.WebRTCStream.verify(message.webRTCStreams[i]);
                if (error)
                    return "webRTCStreams." + error;
            }
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
        if (object.activity != null) {
            if (typeof object.activity !== "object")
                throw TypeError(".Device.activity: object expected");
            message.activity = $root.Activity.fromObject(object.activity);
        }
        if (object.webRTCStreams) {
            if (!Array.isArray(object.webRTCStreams))
                throw TypeError(".Device.webRTCStreams: array expected");
            message.webRTCStreams = [];
            for (var i = 0; i < object.webRTCStreams.length; ++i) {
                if (typeof object.webRTCStreams[i] !== "object")
                    throw TypeError(".Device.webRTCStreams: object expected");
                message.webRTCStreams[i] = $root.WebRTCStream.fromObject(object.webRTCStreams[i]);
            }
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
            object.webRTCStreams = [];
        if (options.defaults)
            object.activity = null;
        if (message.activity != null && message.hasOwnProperty("activity"))
            object.activity = $root.Activity.toObject(message.activity, options);
        if (message.webRTCStreams && message.webRTCStreams.length) {
            object.webRTCStreams = [];
            for (var j = 0; j < message.webRTCStreams.length; ++j)
                object.webRTCStreams[j] = $root.WebRTCStream.toObject(message.webRTCStreams[j], options);
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

$root.Activity = (function() {

    /**
     * Properties of an Activity.
     * @exports IActivity
     * @interface IActivity
     * @property {string|null} [id] Activity id
     * @property {string|null} [streamId] Activity streamId
     */

    /**
     * Constructs a new Activity.
     * @exports Activity
     * @classdesc Represents an Activity.
     * @implements IActivity
     * @constructor
     * @param {IActivity=} [properties] Properties to set
     */
    function Activity(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Activity id.
     * @member {string} id
     * @memberof Activity
     * @instance
     */
    Activity.prototype.id = "";

    /**
     * Activity streamId.
     * @member {string} streamId
     * @memberof Activity
     * @instance
     */
    Activity.prototype.streamId = "";

    /**
     * Creates a new Activity instance using the specified properties.
     * @function create
     * @memberof Activity
     * @static
     * @param {IActivity=} [properties] Properties to set
     * @returns {Activity} Activity instance
     */
    Activity.create = function create(properties) {
        return new Activity(properties);
    };

    /**
     * Encodes the specified Activity message. Does not implicitly {@link Activity.verify|verify} messages.
     * @function encode
     * @memberof Activity
     * @static
     * @param {IActivity} message Activity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Activity.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.streamId);
        return writer;
    };

    /**
     * Encodes the specified Activity message, length delimited. Does not implicitly {@link Activity.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Activity
     * @static
     * @param {IActivity} message Activity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Activity.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Activity message from the specified reader or buffer.
     * @function decode
     * @memberof Activity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Activity} Activity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Activity.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Activity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
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
     * Decodes an Activity message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Activity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Activity} Activity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Activity.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Activity message.
     * @function verify
     * @memberof Activity
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Activity.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.streamId != null && message.hasOwnProperty("streamId"))
            if (!$util.isString(message.streamId))
                return "streamId: string expected";
        return null;
    };

    /**
     * Creates an Activity message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Activity
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Activity} Activity
     */
    Activity.fromObject = function fromObject(object) {
        if (object instanceof $root.Activity)
            return object;
        var message = new $root.Activity();
        if (object.id != null)
            message.id = String(object.id);
        if (object.streamId != null)
            message.streamId = String(object.streamId);
        return message;
    };

    /**
     * Creates a plain object from an Activity message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Activity
     * @static
     * @param {Activity} message Activity
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Activity.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.streamId = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
        return object;
    };

    /**
     * Converts this Activity to JSON.
     * @function toJSON
     * @memberof Activity
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Activity.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Activity;
})();

$root.WebRTCStream = (function() {

    /**
     * Properties of a WebRTCStream.
     * @exports IWebRTCStream
     * @interface IWebRTCStream
     * @property {string|null} [id] WebRTCStream id
     * @property {string|null} [label] WebRTCStream label
     * @property {Array.<IWebRTCTrack>|null} [tracks] WebRTCStream tracks
     */

    /**
     * Constructs a new WebRTCStream.
     * @exports WebRTCStream
     * @classdesc Represents a WebRTCStream.
     * @implements IWebRTCStream
     * @constructor
     * @param {IWebRTCStream=} [properties] Properties to set
     */
    function WebRTCStream(properties) {
        this.tracks = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WebRTCStream id.
     * @member {string} id
     * @memberof WebRTCStream
     * @instance
     */
    WebRTCStream.prototype.id = "";

    /**
     * WebRTCStream label.
     * @member {string} label
     * @memberof WebRTCStream
     * @instance
     */
    WebRTCStream.prototype.label = "";

    /**
     * WebRTCStream tracks.
     * @member {Array.<IWebRTCTrack>} tracks
     * @memberof WebRTCStream
     * @instance
     */
    WebRTCStream.prototype.tracks = $util.emptyArray;

    /**
     * Creates a new WebRTCStream instance using the specified properties.
     * @function create
     * @memberof WebRTCStream
     * @static
     * @param {IWebRTCStream=} [properties] Properties to set
     * @returns {WebRTCStream} WebRTCStream instance
     */
    WebRTCStream.create = function create(properties) {
        return new WebRTCStream(properties);
    };

    /**
     * Encodes the specified WebRTCStream message. Does not implicitly {@link WebRTCStream.verify|verify} messages.
     * @function encode
     * @memberof WebRTCStream
     * @static
     * @param {IWebRTCStream} message WebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStream.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
        if (message.tracks != null && message.tracks.length)
            for (var i = 0; i < message.tracks.length; ++i)
                $root.WebRTCTrack.encode(message.tracks[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified WebRTCStream message, length delimited. Does not implicitly {@link WebRTCStream.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WebRTCStream
     * @static
     * @param {IWebRTCStream} message WebRTCStream message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStream.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WebRTCStream message from the specified reader or buffer.
     * @function decode
     * @memberof WebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WebRTCStream} WebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStream.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCStream();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.label = reader.string();
                break;
            case 3:
                if (!(message.tracks && message.tracks.length))
                    message.tracks = [];
                message.tracks.push($root.WebRTCTrack.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WebRTCStream message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WebRTCStream
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WebRTCStream} WebRTCStream
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStream.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WebRTCStream message.
     * @function verify
     * @memberof WebRTCStream
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WebRTCStream.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.label != null && message.hasOwnProperty("label"))
            if (!$util.isString(message.label))
                return "label: string expected";
        if (message.tracks != null && message.hasOwnProperty("tracks")) {
            if (!Array.isArray(message.tracks))
                return "tracks: array expected";
            for (var i = 0; i < message.tracks.length; ++i) {
                var error = $root.WebRTCTrack.verify(message.tracks[i]);
                if (error)
                    return "tracks." + error;
            }
        }
        return null;
    };

    /**
     * Creates a WebRTCStream message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WebRTCStream
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WebRTCStream} WebRTCStream
     */
    WebRTCStream.fromObject = function fromObject(object) {
        if (object instanceof $root.WebRTCStream)
            return object;
        var message = new $root.WebRTCStream();
        if (object.id != null)
            message.id = String(object.id);
        if (object.label != null)
            message.label = String(object.label);
        if (object.tracks) {
            if (!Array.isArray(object.tracks))
                throw TypeError(".WebRTCStream.tracks: array expected");
            message.tracks = [];
            for (var i = 0; i < object.tracks.length; ++i) {
                if (typeof object.tracks[i] !== "object")
                    throw TypeError(".WebRTCStream.tracks: object expected");
                message.tracks[i] = $root.WebRTCTrack.fromObject(object.tracks[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a WebRTCStream message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WebRTCStream
     * @static
     * @param {WebRTCStream} message WebRTCStream
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WebRTCStream.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.tracks = [];
        if (options.defaults) {
            object.id = "";
            object.label = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = message.label;
        if (message.tracks && message.tracks.length) {
            object.tracks = [];
            for (var j = 0; j < message.tracks.length; ++j)
                object.tracks[j] = $root.WebRTCTrack.toObject(message.tracks[j], options);
        }
        return object;
    };

    /**
     * Converts this WebRTCStream to JSON.
     * @function toJSON
     * @memberof WebRTCStream
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WebRTCStream.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WebRTCStream;
})();

$root.WebRTCTrack = (function() {

    /**
     * Properties of a WebRTCTrack.
     * @exports IWebRTCTrack
     * @interface IWebRTCTrack
     * @property {string|null} [id] WebRTCTrack id
     * @property {string|null} [sfu] WebRTCTrack sfu
     */

    /**
     * Constructs a new WebRTCTrack.
     * @exports WebRTCTrack
     * @classdesc Represents a WebRTCTrack.
     * @implements IWebRTCTrack
     * @constructor
     * @param {IWebRTCTrack=} [properties] Properties to set
     */
    function WebRTCTrack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WebRTCTrack id.
     * @member {string} id
     * @memberof WebRTCTrack
     * @instance
     */
    WebRTCTrack.prototype.id = "";

    /**
     * WebRTCTrack sfu.
     * @member {string} sfu
     * @memberof WebRTCTrack
     * @instance
     */
    WebRTCTrack.prototype.sfu = "";

    /**
     * Creates a new WebRTCTrack instance using the specified properties.
     * @function create
     * @memberof WebRTCTrack
     * @static
     * @param {IWebRTCTrack=} [properties] Properties to set
     * @returns {WebRTCTrack} WebRTCTrack instance
     */
    WebRTCTrack.create = function create(properties) {
        return new WebRTCTrack(properties);
    };

    /**
     * Encodes the specified WebRTCTrack message. Does not implicitly {@link WebRTCTrack.verify|verify} messages.
     * @function encode
     * @memberof WebRTCTrack
     * @static
     * @param {IWebRTCTrack} message WebRTCTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCTrack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.sfu != null && Object.hasOwnProperty.call(message, "sfu"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sfu);
        return writer;
    };

    /**
     * Encodes the specified WebRTCTrack message, length delimited. Does not implicitly {@link WebRTCTrack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WebRTCTrack
     * @static
     * @param {IWebRTCTrack} message WebRTCTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCTrack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WebRTCTrack message from the specified reader or buffer.
     * @function decode
     * @memberof WebRTCTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WebRTCTrack} WebRTCTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCTrack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCTrack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.sfu = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WebRTCTrack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WebRTCTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WebRTCTrack} WebRTCTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCTrack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WebRTCTrack message.
     * @function verify
     * @memberof WebRTCTrack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WebRTCTrack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.sfu != null && message.hasOwnProperty("sfu"))
            if (!$util.isString(message.sfu))
                return "sfu: string expected";
        return null;
    };

    /**
     * Creates a WebRTCTrack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WebRTCTrack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WebRTCTrack} WebRTCTrack
     */
    WebRTCTrack.fromObject = function fromObject(object) {
        if (object instanceof $root.WebRTCTrack)
            return object;
        var message = new $root.WebRTCTrack();
        if (object.id != null)
            message.id = String(object.id);
        if (object.sfu != null)
            message.sfu = String(object.sfu);
        return message;
    };

    /**
     * Creates a plain object from a WebRTCTrack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WebRTCTrack
     * @static
     * @param {WebRTCTrack} message WebRTCTrack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WebRTCTrack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.sfu = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.sfu != null && message.hasOwnProperty("sfu"))
            object.sfu = message.sfu;
        return object;
    };

    /**
     * Converts this WebRTCTrack to JSON.
     * @function toJSON
     * @memberof WebRTCTrack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WebRTCTrack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WebRTCTrack;
})();

$root.Trophy = (function() {

    /**
     * Properties of a Trophy.
     * @exports ITrophy
     * @interface ITrophy
     * @property {string|null} [trophy] Trophy trophy
     * @property {number|null} [timestamp] Trophy timestamp
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
     * Trophy trophy.
     * @member {string} trophy
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.trophy = "";

    /**
     * Trophy timestamp.
     * @member {number} timestamp
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.timestamp = 0;

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
        if (message.trophy != null && Object.hasOwnProperty.call(message, "trophy"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.trophy);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
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
                message.trophy = reader.string();
                break;
            case 2:
                message.timestamp = reader.uint32();
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
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            if (!$util.isString(message.trophy))
                return "trophy: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
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
        if (object.trophy != null)
            message.trophy = String(object.trophy);
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
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
            object.trophy = "";
            object.timestamp = 0;
        }
        if (message.trophy != null && message.hasOwnProperty("trophy"))
            object.trophy = message.trophy;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
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

$root.ChatMessage = (function() {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {string|null} [message] ChatMessage message
     * @property {string|null} [fromUser] ChatMessage fromUser
     * @property {number|null} [timestamp] ChatMessage timestamp
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
     * ChatMessage message.
     * @member {string} message
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.message = "";

    /**
     * ChatMessage fromUser.
     * @member {string} fromUser
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.fromUser = "";

    /**
     * ChatMessage timestamp.
     * @member {number} timestamp
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.timestamp = 0;

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
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        if (message.fromUser != null && Object.hasOwnProperty.call(message, "fromUser"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromUser);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestamp);
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
                message.message = reader.string();
                break;
            case 2:
                message.fromUser = reader.string();
                break;
            case 3:
                message.timestamp = reader.uint32();
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
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.fromUser != null && message.hasOwnProperty("fromUser"))
            if (!$util.isString(message.fromUser))
                return "fromUser: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
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
        if (object.message != null)
            message.message = String(object.message);
        if (object.fromUser != null)
            message.fromUser = String(object.fromUser);
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
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
            object.message = "";
            object.fromUser = "";
            object.timestamp = 0;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.fromUser != null && message.hasOwnProperty("fromUser"))
            object.fromUser = message.fromUser;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
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

/**
 * ContentType enum.
 * @exports ContentType
 * @enum {number}
 * @property {number} Blank=0 Blank value
 * @property {number} WebRtcStream=1 WebRtcStream value
 * @property {number} ActivityStream=2 ActivityStream value
 * @property {number} H5P=3 H5P value
 * @property {number} Image=4 Image value
 * @property {number} Video=5 Video value
 * @property {number} Audio=6 Audio value
 */
$root.ContentType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Blank"] = 0;
    values[valuesById[1] = "WebRtcStream"] = 1;
    values[valuesById[2] = "ActivityStream"] = 2;
    values[valuesById[3] = "H5P"] = 3;
    values[valuesById[4] = "Image"] = 4;
    values[valuesById[5] = "Video"] = 5;
    values[valuesById[6] = "Audio"] = 6;
    return values;
})();

$root.Content = (function() {

    /**
     * Properties of a Content.
     * @exports IContent
     * @interface IContent
     * @property {ContentType|null} [type] Content type
     * @property {string|null} [id] Content id
     * @property {string|null} [url] Content url
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
     * Content id.
     * @member {string} id
     * @memberof Content
     * @instance
     */
    Content.prototype.id = "";

    /**
     * Content url.
     * @member {string} url
     * @memberof Content
     * @instance
     */
    Content.prototype.url = "";

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
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
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
                message.id = reader.string();
                break;
            case 3:
                message.url = reader.string();
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
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
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
        case "WebRtcStream":
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
        if (object.id != null)
            message.id = String(object.id);
        if (object.url != null)
            message.url = String(object.url);
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
            object.id = "";
            object.url = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ContentType[message.type] : message.type;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
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
