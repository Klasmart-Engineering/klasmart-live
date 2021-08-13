/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Action = $root.Action = (() => {

    /**
     * Properties of an Action.
     * @exports IAction
     * @interface IAction
     * @property {number|null} [actionCount] Action actionCount
     * @property {IRoomAction|null} [actions] Action actions
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
     * Action actionCount.
     * @member {number} actionCount
     * @memberof Action
     * @instance
     */
    Action.prototype.actionCount = 0;

    /**
     * Action actions.
     * @member {IRoomAction|null|undefined} actions
     * @memberof Action
     * @instance
     */
    Action.prototype.actions = null;

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
        if (message.actionCount != null && Object.hasOwnProperty.call(message, "actionCount"))
            writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.actionCount);
        if (message.actions != null && Object.hasOwnProperty.call(message, "actions"))
            $root.RoomAction.encode(message.actions, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                message.actionCount = reader.uint32();
                break;
            case 1:
                message.actions = $root.RoomAction.decode(reader, reader.uint32());
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
        if (message.actionCount != null && message.hasOwnProperty("actionCount"))
            if (!$util.isInteger(message.actionCount))
                return "actionCount: integer expected";
        if (message.actions != null && message.hasOwnProperty("actions")) {
            let error = $root.RoomAction.verify(message.actions);
            if (error)
                return "actions." + error;
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
        if (object.actionCount != null)
            message.actionCount = object.actionCount >>> 0;
        if (object.actions != null) {
            if (typeof object.actions !== "object")
                throw TypeError(".Action.actions: object expected");
            message.actions = $root.RoomAction.fromObject(object.actions);
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
            object.actionCount = 0;
            object.actions = null;
        }
        if (message.actionCount != null && message.hasOwnProperty("actionCount"))
            object.actionCount = message.actionCount;
        if (message.actions != null && message.hasOwnProperty("actions"))
            object.actions = $root.RoomAction.toObject(message.actions, options);
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

export const RoomAction = $root.RoomAction = (() => {

    /**
     * Properties of a RoomAction.
     * @exports IRoomAction
     * @interface IRoomAction
     * @property {Array.<IUserAction>|null} [teachers] RoomAction teachers
     * @property {Array.<IUserAction>|null} [students] RoomAction students
     * @property {string|null} [host] RoomAction host
     * @property {IContent|null} [content] RoomAction content
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
        this.teachers = [];
        this.students = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomAction teachers.
     * @member {Array.<IUserAction>} teachers
     * @memberof RoomAction
     * @instance
     */
    RoomAction.prototype.teachers = $util.emptyArray;

    /**
     * RoomAction students.
     * @member {Array.<IUserAction>} students
     * @memberof RoomAction
     * @instance
     */
    RoomAction.prototype.students = $util.emptyArray;

    /**
     * RoomAction host.
     * @member {string} host
     * @memberof RoomAction
     * @instance
     */
    RoomAction.prototype.host = "";

    /**
     * RoomAction content.
     * @member {IContent|null|undefined} content
     * @memberof RoomAction
     * @instance
     */
    RoomAction.prototype.content = null;

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
        if (message.teachers != null && message.teachers.length)
            for (let i = 0; i < message.teachers.length; ++i)
                $root.UserAction.encode(message.teachers[i], writer.uint32(/* id 0, wireType 2 =*/2).fork()).ldelim();
        if (message.students != null && message.students.length)
            for (let i = 0; i < message.students.length; ++i)
                $root.UserAction.encode(message.students[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.endTimestamp != null && Object.hasOwnProperty.call(message, "endTimestamp"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.endTimestamp);
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
            case 0:
                if (!(message.teachers && message.teachers.length))
                    message.teachers = [];
                message.teachers.push($root.UserAction.decode(reader, reader.uint32()));
                break;
            case 1:
                if (!(message.students && message.students.length))
                    message.students = [];
                message.students.push($root.UserAction.decode(reader, reader.uint32()));
                break;
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
        if (message.teachers != null && message.hasOwnProperty("teachers")) {
            if (!Array.isArray(message.teachers))
                return "teachers: array expected";
            for (let i = 0; i < message.teachers.length; ++i) {
                let error = $root.UserAction.verify(message.teachers[i]);
                if (error)
                    return "teachers." + error;
            }
        }
        if (message.students != null && message.hasOwnProperty("students")) {
            if (!Array.isArray(message.students))
                return "students: array expected";
            for (let i = 0; i < message.students.length; ++i) {
                let error = $root.UserAction.verify(message.students[i]);
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
        if (object.teachers) {
            if (!Array.isArray(object.teachers))
                throw TypeError(".RoomAction.teachers: array expected");
            message.teachers = [];
            for (let i = 0; i < object.teachers.length; ++i) {
                if (typeof object.teachers[i] !== "object")
                    throw TypeError(".RoomAction.teachers: object expected");
                message.teachers[i] = $root.UserAction.fromObject(object.teachers[i]);
            }
        }
        if (object.students) {
            if (!Array.isArray(object.students))
                throw TypeError(".RoomAction.students: array expected");
            message.students = [];
            for (let i = 0; i < object.students.length; ++i) {
                if (typeof object.students[i] !== "object")
                    throw TypeError(".RoomAction.students: object expected");
                message.students[i] = $root.UserAction.fromObject(object.students[i]);
            }
        }
        if (object.host != null)
            message.host = String(object.host);
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".RoomAction.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
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
        if (options.arrays || options.defaults) {
            object.teachers = [];
            object.students = [];
        }
        if (options.defaults) {
            object.host = "";
            object.content = null;
            object.endTimestamp = 0;
        }
        if (message.teachers && message.teachers.length) {
            object.teachers = [];
            for (let j = 0; j < message.teachers.length; ++j)
                object.teachers[j] = $root.UserAction.toObject(message.teachers[j], options);
        }
        if (message.students && message.students.length) {
            object.students = [];
            for (let j = 0; j < message.students.length; ++j)
                object.students[j] = $root.UserAction.toObject(message.students[j], options);
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
     * @property {string|null} [id] UserAction id
     * @property {string|null} [name] UserAction name
     * @property {Array.<IDeviceAction>|null} [devices] UserAction devices
     * @property {Array.<string>|null} [removeDeviceIDs] UserAction removeDeviceIDs
     * @property {Array.<ITrophy>|null} [trophies] UserAction trophies
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
        this.devices = [];
        this.removeDeviceIDs = [];
        this.trophies = [];
        this.chatMessages = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserAction id.
     * @member {string} id
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.id = "";

    /**
     * UserAction name.
     * @member {string} name
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.name = "";

    /**
     * UserAction devices.
     * @member {Array.<IDeviceAction>} devices
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.devices = $util.emptyArray;

    /**
     * UserAction removeDeviceIDs.
     * @member {Array.<string>} removeDeviceIDs
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.removeDeviceIDs = $util.emptyArray;

    /**
     * UserAction trophies.
     * @member {Array.<ITrophy>} trophies
     * @memberof UserAction
     * @instance
     */
    UserAction.prototype.trophies = $util.emptyArray;

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
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.devices != null && message.devices.length)
            for (let i = 0; i < message.devices.length; ++i)
                $root.DeviceAction.encode(message.devices[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.removeDeviceIDs != null && message.removeDeviceIDs.length)
            for (let i = 0; i < message.removeDeviceIDs.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.removeDeviceIDs[i]);
        if (message.trophies != null && message.trophies.length)
            for (let i = 0; i < message.trophies.length; ++i)
                $root.Trophy.encode(message.trophies[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.chatMessages != null && message.chatMessages.length)
            for (let i = 0; i < message.chatMessages.length; ++i)
                $root.ChatMessage.encode(message.chatMessages[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
            case 0:
                message.id = reader.string();
                break;
            case 1:
                message.name = reader.string();
                break;
            case 2:
                if (!(message.devices && message.devices.length))
                    message.devices = [];
                message.devices.push($root.DeviceAction.decode(reader, reader.uint32()));
                break;
            case 3:
                if (!(message.removeDeviceIDs && message.removeDeviceIDs.length))
                    message.removeDeviceIDs = [];
                message.removeDeviceIDs.push(reader.string());
                break;
            case 4:
                if (!(message.trophies && message.trophies.length))
                    message.trophies = [];
                message.trophies.push($root.Trophy.decode(reader, reader.uint32()));
                break;
            case 5:
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
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!Array.isArray(message.devices))
                return "devices: array expected";
            for (let i = 0; i < message.devices.length; ++i) {
                let error = $root.DeviceAction.verify(message.devices[i]);
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
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.devices) {
            if (!Array.isArray(object.devices))
                throw TypeError(".UserAction.devices: array expected");
            message.devices = [];
            for (let i = 0; i < object.devices.length; ++i) {
                if (typeof object.devices[i] !== "object")
                    throw TypeError(".UserAction.devices: object expected");
                message.devices[i] = $root.DeviceAction.fromObject(object.devices[i]);
            }
        }
        if (object.removeDeviceIDs) {
            if (!Array.isArray(object.removeDeviceIDs))
                throw TypeError(".UserAction.removeDeviceIDs: array expected");
            message.removeDeviceIDs = [];
            for (let i = 0; i < object.removeDeviceIDs.length; ++i)
                message.removeDeviceIDs[i] = String(object.removeDeviceIDs[i]);
        }
        if (object.trophies) {
            if (!Array.isArray(object.trophies))
                throw TypeError(".UserAction.trophies: array expected");
            message.trophies = [];
            for (let i = 0; i < object.trophies.length; ++i) {
                if (typeof object.trophies[i] !== "object")
                    throw TypeError(".UserAction.trophies: object expected");
                message.trophies[i] = $root.Trophy.fromObject(object.trophies[i]);
            }
        }
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
        if (options.arrays || options.defaults) {
            object.devices = [];
            object.removeDeviceIDs = [];
            object.trophies = [];
            object.chatMessages = [];
        }
        if (options.defaults) {
            object.id = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.devices && message.devices.length) {
            object.devices = [];
            for (let j = 0; j < message.devices.length; ++j)
                object.devices[j] = $root.DeviceAction.toObject(message.devices[j], options);
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
     * @property {string|null} [id] DeviceAction id
     * @property {string|null} [activityId] DeviceAction activityId
     * @property {string|null} [activityStreamId] DeviceAction activityStreamId
     * @property {Array.<IWebRTCStreamAction>|null} [webRTCStreams] DeviceAction webRTCStreams
     * @property {Array.<string>|null} [removeWebRTCStreamIDs] DeviceAction removeWebRTCStreamIDs
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
        this.webRTCStreams = [];
        this.removeWebRTCStreamIDs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceAction id.
     * @member {string} id
     * @memberof DeviceAction
     * @instance
     */
    DeviceAction.prototype.id = "";

    /**
     * DeviceAction activityId.
     * @member {string} activityId
     * @memberof DeviceAction
     * @instance
     */
    DeviceAction.prototype.activityId = "";

    /**
     * DeviceAction activityStreamId.
     * @member {string} activityStreamId
     * @memberof DeviceAction
     * @instance
     */
    DeviceAction.prototype.activityStreamId = "";

    /**
     * DeviceAction webRTCStreams.
     * @member {Array.<IWebRTCStreamAction>} webRTCStreams
     * @memberof DeviceAction
     * @instance
     */
    DeviceAction.prototype.webRTCStreams = $util.emptyArray;

    /**
     * DeviceAction removeWebRTCStreamIDs.
     * @member {Array.<string>} removeWebRTCStreamIDs
     * @memberof DeviceAction
     * @instance
     */
    DeviceAction.prototype.removeWebRTCStreamIDs = $util.emptyArray;

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
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.id);
        if (message.activityId != null && Object.hasOwnProperty.call(message, "activityId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.activityId);
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.activityStreamId);
        if (message.webRTCStreams != null && message.webRTCStreams.length)
            for (let i = 0; i < message.webRTCStreams.length; ++i)
                $root.WebRTCStreamAction.encode(message.webRTCStreams[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.removeWebRTCStreamIDs != null && message.removeWebRTCStreamIDs.length)
            for (let i = 0; i < message.removeWebRTCStreamIDs.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.removeWebRTCStreamIDs[i]);
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
            case 0:
                message.id = reader.string();
                break;
            case 1:
                message.activityId = reader.string();
                break;
            case 2:
                message.activityStreamId = reader.string();
                break;
            case 3:
                if (!(message.webRTCStreams && message.webRTCStreams.length))
                    message.webRTCStreams = [];
                message.webRTCStreams.push($root.WebRTCStreamAction.decode(reader, reader.uint32()));
                break;
            case 4:
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
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            if (!$util.isString(message.activityId))
                return "activityId: string expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        if (message.webRTCStreams != null && message.hasOwnProperty("webRTCStreams")) {
            if (!Array.isArray(message.webRTCStreams))
                return "webRTCStreams: array expected";
            for (let i = 0; i < message.webRTCStreams.length; ++i) {
                let error = $root.WebRTCStreamAction.verify(message.webRTCStreams[i]);
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
        if (object.id != null)
            message.id = String(object.id);
        if (object.activityId != null)
            message.activityId = String(object.activityId);
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        if (object.webRTCStreams) {
            if (!Array.isArray(object.webRTCStreams))
                throw TypeError(".DeviceAction.webRTCStreams: array expected");
            message.webRTCStreams = [];
            for (let i = 0; i < object.webRTCStreams.length; ++i) {
                if (typeof object.webRTCStreams[i] !== "object")
                    throw TypeError(".DeviceAction.webRTCStreams: object expected");
                message.webRTCStreams[i] = $root.WebRTCStreamAction.fromObject(object.webRTCStreams[i]);
            }
        }
        if (object.removeWebRTCStreamIDs) {
            if (!Array.isArray(object.removeWebRTCStreamIDs))
                throw TypeError(".DeviceAction.removeWebRTCStreamIDs: array expected");
            message.removeWebRTCStreamIDs = [];
            for (let i = 0; i < object.removeWebRTCStreamIDs.length; ++i)
                message.removeWebRTCStreamIDs[i] = String(object.removeWebRTCStreamIDs[i]);
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
        if (options.arrays || options.defaults) {
            object.webRTCStreams = [];
            object.removeWebRTCStreamIDs = [];
        }
        if (options.defaults) {
            object.id = "";
            object.activityId = "";
            object.activityStreamId = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            object.activityId = message.activityId;
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        if (message.webRTCStreams && message.webRTCStreams.length) {
            object.webRTCStreams = [];
            for (let j = 0; j < message.webRTCStreams.length; ++j)
                object.webRTCStreams[j] = $root.WebRTCStreamAction.toObject(message.webRTCStreams[j], options);
        }
        if (message.removeWebRTCStreamIDs && message.removeWebRTCStreamIDs.length) {
            object.removeWebRTCStreamIDs = [];
            for (let j = 0; j < message.removeWebRTCStreamIDs.length; ++j)
                object.removeWebRTCStreamIDs[j] = message.removeWebRTCStreamIDs[j];
        }
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

export const WebRTCStreamAction = $root.WebRTCStreamAction = (() => {

    /**
     * Properties of a WebRTCStreamAction.
     * @exports IWebRTCStreamAction
     * @interface IWebRTCStreamAction
     * @property {string|null} [id] WebRTCStreamAction id
     * @property {string|null} [label] WebRTCStreamAction label
     * @property {Array.<IWebRTCTrack>|null} [tracks] WebRTCStreamAction tracks
     * @property {Array.<string>|null} [removeTrackIDs] WebRTCStreamAction removeTrackIDs
     */

    /**
     * Constructs a new WebRTCStreamAction.
     * @exports WebRTCStreamAction
     * @classdesc Represents a WebRTCStreamAction.
     * @implements IWebRTCStreamAction
     * @constructor
     * @param {IWebRTCStreamAction=} [properties] Properties to set
     */
    function WebRTCStreamAction(properties) {
        this.tracks = [];
        this.removeTrackIDs = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WebRTCStreamAction id.
     * @member {string} id
     * @memberof WebRTCStreamAction
     * @instance
     */
    WebRTCStreamAction.prototype.id = "";

    /**
     * WebRTCStreamAction label.
     * @member {string} label
     * @memberof WebRTCStreamAction
     * @instance
     */
    WebRTCStreamAction.prototype.label = "";

    /**
     * WebRTCStreamAction tracks.
     * @member {Array.<IWebRTCTrack>} tracks
     * @memberof WebRTCStreamAction
     * @instance
     */
    WebRTCStreamAction.prototype.tracks = $util.emptyArray;

    /**
     * WebRTCStreamAction removeTrackIDs.
     * @member {Array.<string>} removeTrackIDs
     * @memberof WebRTCStreamAction
     * @instance
     */
    WebRTCStreamAction.prototype.removeTrackIDs = $util.emptyArray;

    /**
     * Creates a new WebRTCStreamAction instance using the specified properties.
     * @function create
     * @memberof WebRTCStreamAction
     * @static
     * @param {IWebRTCStreamAction=} [properties] Properties to set
     * @returns {WebRTCStreamAction} WebRTCStreamAction instance
     */
    WebRTCStreamAction.create = function create(properties) {
        return new WebRTCStreamAction(properties);
    };

    /**
     * Encodes the specified WebRTCStreamAction message. Does not implicitly {@link WebRTCStreamAction.verify|verify} messages.
     * @function encode
     * @memberof WebRTCStreamAction
     * @static
     * @param {IWebRTCStreamAction} message WebRTCStreamAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStreamAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.id);
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
        if (message.tracks != null && message.tracks.length)
            for (let i = 0; i < message.tracks.length; ++i)
                $root.WebRTCTrack.encode(message.tracks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.removeTrackIDs != null && message.removeTrackIDs.length)
            for (let i = 0; i < message.removeTrackIDs.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.removeTrackIDs[i]);
        return writer;
    };

    /**
     * Encodes the specified WebRTCStreamAction message, length delimited. Does not implicitly {@link WebRTCStreamAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WebRTCStreamAction
     * @static
     * @param {IWebRTCStreamAction} message WebRTCStreamAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WebRTCStreamAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WebRTCStreamAction message from the specified reader or buffer.
     * @function decode
     * @memberof WebRTCStreamAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WebRTCStreamAction} WebRTCStreamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStreamAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCStreamAction();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.string();
                break;
            case 1:
                message.label = reader.string();
                break;
            case 2:
                if (!(message.tracks && message.tracks.length))
                    message.tracks = [];
                message.tracks.push($root.WebRTCTrack.decode(reader, reader.uint32()));
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
     * Decodes a WebRTCStreamAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WebRTCStreamAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WebRTCStreamAction} WebRTCStreamAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WebRTCStreamAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WebRTCStreamAction message.
     * @function verify
     * @memberof WebRTCStreamAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WebRTCStreamAction.verify = function verify(message) {
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
            for (let i = 0; i < message.tracks.length; ++i) {
                let error = $root.WebRTCTrack.verify(message.tracks[i]);
                if (error)
                    return "tracks." + error;
            }
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
     * Creates a WebRTCStreamAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WebRTCStreamAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WebRTCStreamAction} WebRTCStreamAction
     */
    WebRTCStreamAction.fromObject = function fromObject(object) {
        if (object instanceof $root.WebRTCStreamAction)
            return object;
        let message = new $root.WebRTCStreamAction();
        if (object.id != null)
            message.id = String(object.id);
        if (object.label != null)
            message.label = String(object.label);
        if (object.tracks) {
            if (!Array.isArray(object.tracks))
                throw TypeError(".WebRTCStreamAction.tracks: array expected");
            message.tracks = [];
            for (let i = 0; i < object.tracks.length; ++i) {
                if (typeof object.tracks[i] !== "object")
                    throw TypeError(".WebRTCStreamAction.tracks: object expected");
                message.tracks[i] = $root.WebRTCTrack.fromObject(object.tracks[i]);
            }
        }
        if (object.removeTrackIDs) {
            if (!Array.isArray(object.removeTrackIDs))
                throw TypeError(".WebRTCStreamAction.removeTrackIDs: array expected");
            message.removeTrackIDs = [];
            for (let i = 0; i < object.removeTrackIDs.length; ++i)
                message.removeTrackIDs[i] = String(object.removeTrackIDs[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a WebRTCStreamAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WebRTCStreamAction
     * @static
     * @param {WebRTCStreamAction} message WebRTCStreamAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WebRTCStreamAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.tracks = [];
            object.removeTrackIDs = [];
        }
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
            for (let j = 0; j < message.tracks.length; ++j)
                object.tracks[j] = $root.WebRTCTrack.toObject(message.tracks[j], options);
        }
        if (message.removeTrackIDs && message.removeTrackIDs.length) {
            object.removeTrackIDs = [];
            for (let j = 0; j < message.removeTrackIDs.length; ++j)
                object.removeTrackIDs[j] = message.removeTrackIDs[j];
        }
        return object;
    };

    /**
     * Converts this WebRTCStreamAction to JSON.
     * @function toJSON
     * @memberof WebRTCStreamAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WebRTCStreamAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WebRTCStreamAction;
})();

export const State = $root.State = (() => {

    /**
     * Properties of a State.
     * @exports IState
     * @interface IState
     * @property {number|null} [transitions] State transitions
     * @property {IRoom|null} [room] State room
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
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * State transitions.
     * @member {number} transitions
     * @memberof State
     * @instance
     */
    State.prototype.transitions = 0;

    /**
     * State room.
     * @member {IRoom|null|undefined} room
     * @memberof State
     * @instance
     */
    State.prototype.room = null;

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
        if (message.transitions != null && Object.hasOwnProperty.call(message, "transitions"))
            writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.transitions);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            $root.Room.encode(message.room, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.State();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.transitions = reader.uint32();
                break;
            case 1:
                message.room = $root.Room.decode(reader, reader.uint32());
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
        if (message.transitions != null && message.hasOwnProperty("transitions"))
            if (!$util.isInteger(message.transitions))
                return "transitions: integer expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            let error = $root.Room.verify(message.room);
            if (error)
                return "room." + error;
        }
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
        let message = new $root.State();
        if (object.transitions != null)
            message.transitions = object.transitions >>> 0;
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".State.room: object expected");
            message.room = $root.Room.fromObject(object.room);
        }
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
        let object = {};
        if (options.defaults) {
            object.transitions = 0;
            object.room = null;
        }
        if (message.transitions != null && message.hasOwnProperty("transitions"))
            object.transitions = message.transitions;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.Room.toObject(message.room, options);
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

export const Room = $root.Room = (() => {

    /**
     * Properties of a Room.
     * @exports IRoom
     * @interface IRoom
     * @property {Array.<IUser>|null} [teachers] Room teachers
     * @property {Array.<IUser>|null} [students] Room students
     * @property {string|null} [host] Room host
     * @property {IContent|null} [content] Room content
     * @property {number|null} [endTimestamp] Room endTimestamp
     */

    /**
     * Constructs a new Room.
     * @exports Room
     * @classdesc Represents a Room.
     * @implements IRoom
     * @constructor
     * @param {IRoom=} [properties] Properties to set
     */
    function Room(properties) {
        this.teachers = [];
        this.students = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Room teachers.
     * @member {Array.<IUser>} teachers
     * @memberof Room
     * @instance
     */
    Room.prototype.teachers = $util.emptyArray;

    /**
     * Room students.
     * @member {Array.<IUser>} students
     * @memberof Room
     * @instance
     */
    Room.prototype.students = $util.emptyArray;

    /**
     * Room host.
     * @member {string} host
     * @memberof Room
     * @instance
     */
    Room.prototype.host = "";

    /**
     * Room content.
     * @member {IContent|null|undefined} content
     * @memberof Room
     * @instance
     */
    Room.prototype.content = null;

    /**
     * Room endTimestamp.
     * @member {number} endTimestamp
     * @memberof Room
     * @instance
     */
    Room.prototype.endTimestamp = 0;

    /**
     * Creates a new Room instance using the specified properties.
     * @function create
     * @memberof Room
     * @static
     * @param {IRoom=} [properties] Properties to set
     * @returns {Room} Room instance
     */
    Room.create = function create(properties) {
        return new Room(properties);
    };

    /**
     * Encodes the specified Room message. Does not implicitly {@link Room.verify|verify} messages.
     * @function encode
     * @memberof Room
     * @static
     * @param {IRoom} message Room message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Room.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.teachers != null && message.teachers.length)
            for (let i = 0; i < message.teachers.length; ++i)
                $root.User.encode(message.teachers[i], writer.uint32(/* id 0, wireType 2 =*/2).fork()).ldelim();
        if (message.students != null && message.students.length)
            for (let i = 0; i < message.students.length; ++i)
                $root.User.encode(message.students[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            $root.Content.encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.endTimestamp != null && Object.hasOwnProperty.call(message, "endTimestamp"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.endTimestamp);
        return writer;
    };

    /**
     * Encodes the specified Room message, length delimited. Does not implicitly {@link Room.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Room
     * @static
     * @param {IRoom} message Room message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Room.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Room message from the specified reader or buffer.
     * @function decode
     * @memberof Room
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Room} Room
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Room.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Room();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                if (!(message.teachers && message.teachers.length))
                    message.teachers = [];
                message.teachers.push($root.User.decode(reader, reader.uint32()));
                break;
            case 1:
                if (!(message.students && message.students.length))
                    message.students = [];
                message.students.push($root.User.decode(reader, reader.uint32()));
                break;
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
     * Decodes a Room message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Room
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Room} Room
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Room.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Room message.
     * @function verify
     * @memberof Room
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Room.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.teachers != null && message.hasOwnProperty("teachers")) {
            if (!Array.isArray(message.teachers))
                return "teachers: array expected";
            for (let i = 0; i < message.teachers.length; ++i) {
                let error = $root.User.verify(message.teachers[i]);
                if (error)
                    return "teachers." + error;
            }
        }
        if (message.students != null && message.hasOwnProperty("students")) {
            if (!Array.isArray(message.students))
                return "students: array expected";
            for (let i = 0; i < message.students.length; ++i) {
                let error = $root.User.verify(message.students[i]);
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
     * Creates a Room message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Room
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Room} Room
     */
    Room.fromObject = function fromObject(object) {
        if (object instanceof $root.Room)
            return object;
        let message = new $root.Room();
        if (object.teachers) {
            if (!Array.isArray(object.teachers))
                throw TypeError(".Room.teachers: array expected");
            message.teachers = [];
            for (let i = 0; i < object.teachers.length; ++i) {
                if (typeof object.teachers[i] !== "object")
                    throw TypeError(".Room.teachers: object expected");
                message.teachers[i] = $root.User.fromObject(object.teachers[i]);
            }
        }
        if (object.students) {
            if (!Array.isArray(object.students))
                throw TypeError(".Room.students: array expected");
            message.students = [];
            for (let i = 0; i < object.students.length; ++i) {
                if (typeof object.students[i] !== "object")
                    throw TypeError(".Room.students: object expected");
                message.students[i] = $root.User.fromObject(object.students[i]);
            }
        }
        if (object.host != null)
            message.host = String(object.host);
        if (object.content != null) {
            if (typeof object.content !== "object")
                throw TypeError(".Room.content: object expected");
            message.content = $root.Content.fromObject(object.content);
        }
        if (object.endTimestamp != null)
            message.endTimestamp = object.endTimestamp >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Room message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Room
     * @static
     * @param {Room} message Room
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Room.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.teachers = [];
            object.students = [];
        }
        if (options.defaults) {
            object.host = "";
            object.content = null;
            object.endTimestamp = 0;
        }
        if (message.teachers && message.teachers.length) {
            object.teachers = [];
            for (let j = 0; j < message.teachers.length; ++j)
                object.teachers[j] = $root.User.toObject(message.teachers[j], options);
        }
        if (message.students && message.students.length) {
            object.students = [];
            for (let j = 0; j < message.students.length; ++j)
                object.students[j] = $root.User.toObject(message.students[j], options);
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
     * Converts this Room to JSON.
     * @function toJSON
     * @memberof Room
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Room.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Room;
})();

export const User = $root.User = (() => {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {string|null} [id] User id
     * @property {string|null} [name] User name
     * @property {Array.<IDevice>|null} [devices] User devices
     * @property {Array.<ITrophy>|null} [trophies] User trophies
     * @property {Array.<IChatMessage>|null} [chatMessages] User chatMessages
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
        this.devices = [];
        this.trophies = [];
        this.chatMessages = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
     * User devices.
     * @member {Array.<IDevice>} devices
     * @memberof User
     * @instance
     */
    User.prototype.devices = $util.emptyArray;

    /**
     * User trophies.
     * @member {Array.<ITrophy>} trophies
     * @memberof User
     * @instance
     */
    User.prototype.trophies = $util.emptyArray;

    /**
     * User chatMessages.
     * @member {Array.<IChatMessage>} chatMessages
     * @memberof User
     * @instance
     */
    User.prototype.chatMessages = $util.emptyArray;

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
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.devices != null && message.devices.length)
            for (let i = 0; i < message.devices.length; ++i)
                $root.Device.encode(message.devices[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.trophies != null && message.trophies.length)
            for (let i = 0; i < message.trophies.length; ++i)
                $root.Trophy.encode(message.trophies[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.chatMessages != null && message.chatMessages.length)
            for (let i = 0; i < message.chatMessages.length; ++i)
                $root.ChatMessage.encode(message.chatMessages[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.string();
                break;
            case 1:
                message.name = reader.string();
                break;
            case 2:
                if (!(message.devices && message.devices.length))
                    message.devices = [];
                message.devices.push($root.Device.decode(reader, reader.uint32()));
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
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!Array.isArray(message.devices))
                return "devices: array expected";
            for (let i = 0; i < message.devices.length; ++i) {
                let error = $root.Device.verify(message.devices[i]);
                if (error)
                    return "devices." + error;
            }
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
        let message = new $root.User();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.devices) {
            if (!Array.isArray(object.devices))
                throw TypeError(".User.devices: array expected");
            message.devices = [];
            for (let i = 0; i < object.devices.length; ++i) {
                if (typeof object.devices[i] !== "object")
                    throw TypeError(".User.devices: object expected");
                message.devices[i] = $root.Device.fromObject(object.devices[i]);
            }
        }
        if (object.trophies) {
            if (!Array.isArray(object.trophies))
                throw TypeError(".User.trophies: array expected");
            message.trophies = [];
            for (let i = 0; i < object.trophies.length; ++i) {
                if (typeof object.trophies[i] !== "object")
                    throw TypeError(".User.trophies: object expected");
                message.trophies[i] = $root.Trophy.fromObject(object.trophies[i]);
            }
        }
        if (object.chatMessages) {
            if (!Array.isArray(object.chatMessages))
                throw TypeError(".User.chatMessages: array expected");
            message.chatMessages = [];
            for (let i = 0; i < object.chatMessages.length; ++i) {
                if (typeof object.chatMessages[i] !== "object")
                    throw TypeError(".User.chatMessages: object expected");
                message.chatMessages[i] = $root.ChatMessage.fromObject(object.chatMessages[i]);
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
        let object = {};
        if (options.arrays || options.defaults) {
            object.devices = [];
            object.trophies = [];
            object.chatMessages = [];
        }
        if (options.defaults) {
            object.id = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.devices && message.devices.length) {
            object.devices = [];
            for (let j = 0; j < message.devices.length; ++j)
                object.devices[j] = $root.Device.toObject(message.devices[j], options);
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

export const Device = $root.Device = (() => {

    /**
     * Properties of a Device.
     * @exports IDevice
     * @interface IDevice
     * @property {string|null} [id] Device id
     * @property {string|null} [activityId] Device activityId
     * @property {string|null} [activityStreamId] Device activityStreamId
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
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
     * Device activityId.
     * @member {string} activityId
     * @memberof Device
     * @instance
     */
    Device.prototype.activityId = "";

    /**
     * Device activityStreamId.
     * @member {string} activityStreamId
     * @memberof Device
     * @instance
     */
    Device.prototype.activityStreamId = "";

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
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.id);
        if (message.activityId != null && Object.hasOwnProperty.call(message, "activityId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.activityId);
        if (message.activityStreamId != null && Object.hasOwnProperty.call(message, "activityStreamId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.activityStreamId);
        if (message.webRTCStreams != null && message.webRTCStreams.length)
            for (let i = 0; i < message.webRTCStreams.length; ++i)
                $root.WebRTCStream.encode(message.webRTCStreams[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Device();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.string();
                break;
            case 1:
                message.activityId = reader.string();
                break;
            case 2:
                message.activityStreamId = reader.string();
                break;
            case 3:
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
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            if (!$util.isString(message.activityId))
                return "activityId: string expected";
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            if (!$util.isString(message.activityStreamId))
                return "activityStreamId: string expected";
        if (message.webRTCStreams != null && message.hasOwnProperty("webRTCStreams")) {
            if (!Array.isArray(message.webRTCStreams))
                return "webRTCStreams: array expected";
            for (let i = 0; i < message.webRTCStreams.length; ++i) {
                let error = $root.WebRTCStream.verify(message.webRTCStreams[i]);
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
        let message = new $root.Device();
        if (object.id != null)
            message.id = String(object.id);
        if (object.activityId != null)
            message.activityId = String(object.activityId);
        if (object.activityStreamId != null)
            message.activityStreamId = String(object.activityStreamId);
        if (object.webRTCStreams) {
            if (!Array.isArray(object.webRTCStreams))
                throw TypeError(".Device.webRTCStreams: array expected");
            message.webRTCStreams = [];
            for (let i = 0; i < object.webRTCStreams.length; ++i) {
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
        let object = {};
        if (options.arrays || options.defaults)
            object.webRTCStreams = [];
        if (options.defaults) {
            object.id = "";
            object.activityId = "";
            object.activityStreamId = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.activityId != null && message.hasOwnProperty("activityId"))
            object.activityId = message.activityId;
        if (message.activityStreamId != null && message.hasOwnProperty("activityStreamId"))
            object.activityStreamId = message.activityStreamId;
        if (message.webRTCStreams && message.webRTCStreams.length) {
            object.webRTCStreams = [];
            for (let j = 0; j < message.webRTCStreams.length; ++j)
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

export const WebRTCStream = $root.WebRTCStream = (() => {

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
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.id);
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
        if (message.tracks != null && message.tracks.length)
            for (let i = 0; i < message.tracks.length; ++i)
                $root.WebRTCTrack.encode(message.tracks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCStream();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.string();
                break;
            case 1:
                message.label = reader.string();
                break;
            case 2:
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
            for (let i = 0; i < message.tracks.length; ++i) {
                let error = $root.WebRTCTrack.verify(message.tracks[i]);
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
        let message = new $root.WebRTCStream();
        if (object.id != null)
            message.id = String(object.id);
        if (object.label != null)
            message.label = String(object.label);
        if (object.tracks) {
            if (!Array.isArray(object.tracks))
                throw TypeError(".WebRTCStream.tracks: array expected");
            message.tracks = [];
            for (let i = 0; i < object.tracks.length; ++i) {
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
        let object = {};
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
            for (let j = 0; j < message.tracks.length; ++j)
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

export const WebRTCTrack = $root.WebRTCTrack = (() => {

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
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.id);
        if (message.sfu != null && Object.hasOwnProperty.call(message, "sfu"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sfu);
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
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WebRTCTrack();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.string();
                break;
            case 1:
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
        let message = new $root.WebRTCTrack();
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
        let object = {};
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

export const Trophy = $root.Trophy = (() => {

    /**
     * Properties of a Trophy.
     * @exports ITrophy
     * @interface ITrophy
     * @property {string|null} [tropy] Trophy tropy
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
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Trophy tropy.
     * @member {string} tropy
     * @memberof Trophy
     * @instance
     */
    Trophy.prototype.tropy = "";

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
        if (message.tropy != null && Object.hasOwnProperty.call(message, "tropy"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.tropy);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
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
                message.tropy = reader.string();
                break;
            case 1:
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
        if (message.tropy != null && message.hasOwnProperty("tropy"))
            if (!$util.isString(message.tropy))
                return "tropy: string expected";
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
        let message = new $root.Trophy();
        if (object.tropy != null)
            message.tropy = String(object.tropy);
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
        let object = {};
        if (options.defaults) {
            object.tropy = "";
            object.timestamp = 0;
        }
        if (message.tropy != null && message.hasOwnProperty("tropy"))
            object.tropy = message.tropy;
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

export const ChatMessage = $root.ChatMessage = (() => {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {string|null} [message] ChatMessage message
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
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.message);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
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
                message.message = reader.string();
                break;
            case 1:
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
        let message = new $root.ChatMessage();
        if (object.message != null)
            message.message = String(object.message);
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
        let object = {};
        if (options.defaults) {
            object.message = "";
            object.timestamp = 0;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
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

export const Content = $root.Content = (() => {

    /**
     * Properties of a Content.
     * @exports IContent
     * @interface IContent
     * @property {Content.Type|null} [type] Content type
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
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Content type.
     * @member {Content.Type} type
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
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.type);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
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
                message.type = reader.int32();
                break;
            case 1:
                message.id = reader.string();
                break;
            case 2:
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
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "Blank" : 0;
            object.id = "";
            object.url = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Content.Type[message.type] : message.type;
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

    /**
     * Type enum.
     * @name Content.Type
     * @enum {number}
     * @property {number} Blank=0 Blank value
     * @property {number} WebRTCStream=1 WebRTCStream value
     * @property {number} ActivityStream=2 ActivityStream value
     * @property {number} H5P=3 H5P value
     * @property {number} Image=4 Image value
     * @property {number} Video=5 Video value
     * @property {number} Audio=6 Audio value
     */
    Content.Type = (function() {
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

    return Content;
})();

export { $root as default };
