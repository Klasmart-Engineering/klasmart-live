// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const DOMEvent = $root.DOMEvent = (() => {

    /**
     * Properties of a DOMEvent.
     * @exports IDOMEvent
     * @interface IDOMEvent
     * @property {number|null} [n] DOMEvent n
     * @property {string|null} [event] DOMEvent event
     * @property {boolean|null} [isCheckout] DOMEvent isCheckout
     */

    /**
     * Constructs a new DOMEvent.
     * @exports DOMEvent
     * @classdesc Represents a DOMEvent.
     * @implements IDOMEvent
     * @constructor
     * @param {IDOMEvent=} [properties] Properties to set
     */
    function DOMEvent(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DOMEvent n.
     * @member {number} n
     * @memberof DOMEvent
     * @instance
     */
    DOMEvent.prototype.n = 0;

    /**
     * DOMEvent event.
     * @member {string} event
     * @memberof DOMEvent
     * @instance
     */
    DOMEvent.prototype.event = "";

    /**
     * DOMEvent isCheckout.
     * @member {boolean} isCheckout
     * @memberof DOMEvent
     * @instance
     */
    DOMEvent.prototype.isCheckout = false;

    /**
     * Creates a new DOMEvent instance using the specified properties.
     * @function create
     * @memberof DOMEvent
     * @static
     * @param {IDOMEvent=} [properties] Properties to set
     * @returns {DOMEvent} DOMEvent instance
     */
    DOMEvent.create = function create(properties) {
        return new DOMEvent(properties);
    };

    /**
     * Encodes the specified DOMEvent message. Does not implicitly {@link DOMEvent.verify|verify} messages.
     * @function encode
     * @memberof DOMEvent
     * @static
     * @param {IDOMEvent} message DOMEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DOMEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.n != null && Object.hasOwnProperty.call(message, "n"))
            writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.n);
        if (message.event != null && Object.hasOwnProperty.call(message, "event"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.event);
        if (message.isCheckout != null && Object.hasOwnProperty.call(message, "isCheckout"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isCheckout);
        return writer;
    };

    /**
     * Encodes the specified DOMEvent message, length delimited. Does not implicitly {@link DOMEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DOMEvent
     * @static
     * @param {IDOMEvent} message DOMEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DOMEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DOMEvent message from the specified reader or buffer.
     * @function decode
     * @memberof DOMEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DOMEvent} DOMEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DOMEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DOMEvent();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.n = reader.uint32();
                break;
            case 1:
                message.event = reader.string();
                break;
            case 2:
                message.isCheckout = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DOMEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DOMEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DOMEvent} DOMEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DOMEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DOMEvent message.
     * @function verify
     * @memberof DOMEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DOMEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.n != null && message.hasOwnProperty("n"))
            if (!$util.isInteger(message.n))
                return "n: integer expected";
        if (message.event != null && message.hasOwnProperty("event"))
            if (!$util.isString(message.event))
                return "event: string expected";
        if (message.isCheckout != null && message.hasOwnProperty("isCheckout"))
            if (typeof message.isCheckout !== "boolean")
                return "isCheckout: boolean expected";
        return null;
    };

    /**
     * Creates a DOMEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DOMEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DOMEvent} DOMEvent
     */
    DOMEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.DOMEvent)
            return object;
        let message = new $root.DOMEvent();
        if (object.n != null)
            message.n = object.n >>> 0;
        if (object.event != null)
            message.event = String(object.event);
        if (object.isCheckout != null)
            message.isCheckout = Boolean(object.isCheckout);
        return message;
    };

    /**
     * Creates a plain object from a DOMEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DOMEvent
     * @static
     * @param {DOMEvent} message DOMEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DOMEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.n = 0;
            object.event = "";
            object.isCheckout = false;
        }
        if (message.n != null && message.hasOwnProperty("n"))
            object.n = message.n;
        if (message.event != null && message.hasOwnProperty("event"))
            object.event = message.event;
        if (message.isCheckout != null && message.hasOwnProperty("isCheckout"))
            object.isCheckout = message.isCheckout;
        return object;
    };

    /**
     * Converts this DOMEvent to JSON.
     * @function toJSON
     * @memberof DOMEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DOMEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DOMEvent;
})();

export const ReportRequest = $root.ReportRequest = (() => {

    /**
     * Properties of a ReportRequest.
     * @exports IReportRequest
     * @interface IReportRequest
     * @property {string|null} [session] ReportRequest session
     * @property {Array.<IDOMEvent>|null} [events] ReportRequest events
     */

    /**
     * Constructs a new ReportRequest.
     * @exports ReportRequest
     * @classdesc Represents a ReportRequest.
     * @implements IReportRequest
     * @constructor
     * @param {IReportRequest=} [properties] Properties to set
     */
    function ReportRequest(properties) {
        this.events = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReportRequest session.
     * @member {string} session
     * @memberof ReportRequest
     * @instance
     */
    ReportRequest.prototype.session = "";

    /**
     * ReportRequest events.
     * @member {Array.<IDOMEvent>} events
     * @memberof ReportRequest
     * @instance
     */
    ReportRequest.prototype.events = $util.emptyArray;

    /**
     * Creates a new ReportRequest instance using the specified properties.
     * @function create
     * @memberof ReportRequest
     * @static
     * @param {IReportRequest=} [properties] Properties to set
     * @returns {ReportRequest} ReportRequest instance
     */
    ReportRequest.create = function create(properties) {
        return new ReportRequest(properties);
    };

    /**
     * Encodes the specified ReportRequest message. Does not implicitly {@link ReportRequest.verify|verify} messages.
     * @function encode
     * @memberof ReportRequest
     * @static
     * @param {IReportRequest} message ReportRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.session != null && Object.hasOwnProperty.call(message, "session"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.session);
        if (message.events != null && message.events.length)
            for (let i = 0; i < message.events.length; ++i)
                $root.DOMEvent.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ReportRequest message, length delimited. Does not implicitly {@link ReportRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReportRequest
     * @static
     * @param {IReportRequest} message ReportRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReportRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReportRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReportRequest} ReportRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReportRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.session = reader.string();
                break;
            case 1:
                if (!(message.events && message.events.length))
                    message.events = [];
                message.events.push($root.DOMEvent.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReportRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReportRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReportRequest} ReportRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReportRequest message.
     * @function verify
     * @memberof ReportRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReportRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.session != null && message.hasOwnProperty("session"))
            if (!$util.isString(message.session))
                return "session: string expected";
        if (message.events != null && message.hasOwnProperty("events")) {
            if (!Array.isArray(message.events))
                return "events: array expected";
            for (let i = 0; i < message.events.length; ++i) {
                let error = $root.DOMEvent.verify(message.events[i]);
                if (error)
                    return "events." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ReportRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReportRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReportRequest} ReportRequest
     */
    ReportRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ReportRequest)
            return object;
        let message = new $root.ReportRequest();
        if (object.session != null)
            message.session = String(object.session);
        if (object.events) {
            if (!Array.isArray(object.events))
                throw TypeError(".ReportRequest.events: array expected");
            message.events = [];
            for (let i = 0; i < object.events.length; ++i) {
                if (typeof object.events[i] !== "object")
                    throw TypeError(".ReportRequest.events: object expected");
                message.events[i] = $root.DOMEvent.fromObject(object.events[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ReportRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReportRequest
     * @static
     * @param {ReportRequest} message ReportRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReportRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.events = [];
        if (options.defaults)
            object.session = "";
        if (message.session != null && message.hasOwnProperty("session"))
            object.session = message.session;
        if (message.events && message.events.length) {
            object.events = [];
            for (let j = 0; j < message.events.length; ++j)
                object.events[j] = $root.DOMEvent.toObject(message.events[j], options);
        }
        return object;
    };

    /**
     * Converts this ReportRequest to JSON.
     * @function toJSON
     * @memberof ReportRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReportRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReportRequest;
})();

export const ReportResponse = $root.ReportResponse = (() => {

    /**
     * Properties of a ReportResponse.
     * @exports IReportResponse
     * @interface IReportResponse
     * @property {string|null} [setStreamId] ReportResponse setStreamId
     * @property {string|null} [setSession] ReportResponse setSession
     * @property {number|null} [acknowledge] ReportResponse acknowledge
     */

    /**
     * Constructs a new ReportResponse.
     * @exports ReportResponse
     * @classdesc Represents a ReportResponse.
     * @implements IReportResponse
     * @constructor
     * @param {IReportResponse=} [properties] Properties to set
     */
    function ReportResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReportResponse setStreamId.
     * @member {string} setStreamId
     * @memberof ReportResponse
     * @instance
     */
    ReportResponse.prototype.setStreamId = "";

    /**
     * ReportResponse setSession.
     * @member {string} setSession
     * @memberof ReportResponse
     * @instance
     */
    ReportResponse.prototype.setSession = "";

    /**
     * ReportResponse acknowledge.
     * @member {number} acknowledge
     * @memberof ReportResponse
     * @instance
     */
    ReportResponse.prototype.acknowledge = 0;

    /**
     * Creates a new ReportResponse instance using the specified properties.
     * @function create
     * @memberof ReportResponse
     * @static
     * @param {IReportResponse=} [properties] Properties to set
     * @returns {ReportResponse} ReportResponse instance
     */
    ReportResponse.create = function create(properties) {
        return new ReportResponse(properties);
    };

    /**
     * Encodes the specified ReportResponse message. Does not implicitly {@link ReportResponse.verify|verify} messages.
     * @function encode
     * @memberof ReportResponse
     * @static
     * @param {IReportResponse} message ReportResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.setStreamId != null && Object.hasOwnProperty.call(message, "setStreamId"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.setStreamId);
        if (message.setSession != null && Object.hasOwnProperty.call(message, "setSession"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.setSession);
        if (message.acknowledge != null && Object.hasOwnProperty.call(message, "acknowledge"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.acknowledge);
        return writer;
    };

    /**
     * Encodes the specified ReportResponse message, length delimited. Does not implicitly {@link ReportResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReportResponse
     * @static
     * @param {IReportResponse} message ReportResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReportResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReportResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReportResponse} ReportResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReportResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.setStreamId = reader.string();
                break;
            case 1:
                message.setSession = reader.string();
                break;
            case 2:
                message.acknowledge = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReportResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReportResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReportResponse} ReportResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReportResponse message.
     * @function verify
     * @memberof ReportResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReportResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.setStreamId != null && message.hasOwnProperty("setStreamId"))
            if (!$util.isString(message.setStreamId))
                return "setStreamId: string expected";
        if (message.setSession != null && message.hasOwnProperty("setSession"))
            if (!$util.isString(message.setSession))
                return "setSession: string expected";
        if (message.acknowledge != null && message.hasOwnProperty("acknowledge"))
            if (!$util.isInteger(message.acknowledge))
                return "acknowledge: integer expected";
        return null;
    };

    /**
     * Creates a ReportResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReportResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReportResponse} ReportResponse
     */
    ReportResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReportResponse)
            return object;
        let message = new $root.ReportResponse();
        if (object.setStreamId != null)
            message.setStreamId = String(object.setStreamId);
        if (object.setSession != null)
            message.setSession = String(object.setSession);
        if (object.acknowledge != null)
            message.acknowledge = object.acknowledge >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ReportResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReportResponse
     * @static
     * @param {ReportResponse} message ReportResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReportResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.setStreamId = "";
            object.setSession = "";
            object.acknowledge = 0;
        }
        if (message.setStreamId != null && message.hasOwnProperty("setStreamId"))
            object.setStreamId = message.setStreamId;
        if (message.setSession != null && message.hasOwnProperty("setSession"))
            object.setSession = message.setSession;
        if (message.acknowledge != null && message.hasOwnProperty("acknowledge"))
            object.acknowledge = message.acknowledge;
        return object;
    };

    /**
     * Converts this ReportResponse to JSON.
     * @function toJSON
     * @memberof ReportResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReportResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReportResponse;
})();

export const ReviewRequest = $root.ReviewRequest = (() => {

    /**
     * Properties of a ReviewRequest.
     * @exports IReviewRequest
     * @interface IReviewRequest
     * @property {number|null} [n] ReviewRequest n
     */

    /**
     * Constructs a new ReviewRequest.
     * @exports ReviewRequest
     * @classdesc Represents a ReviewRequest.
     * @implements IReviewRequest
     * @constructor
     * @param {IReviewRequest=} [properties] Properties to set
     */
    function ReviewRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReviewRequest n.
     * @member {number} n
     * @memberof ReviewRequest
     * @instance
     */
    ReviewRequest.prototype.n = 0;

    /**
     * Creates a new ReviewRequest instance using the specified properties.
     * @function create
     * @memberof ReviewRequest
     * @static
     * @param {IReviewRequest=} [properties] Properties to set
     * @returns {ReviewRequest} ReviewRequest instance
     */
    ReviewRequest.create = function create(properties) {
        return new ReviewRequest(properties);
    };

    /**
     * Encodes the specified ReviewRequest message. Does not implicitly {@link ReviewRequest.verify|verify} messages.
     * @function encode
     * @memberof ReviewRequest
     * @static
     * @param {IReviewRequest} message ReviewRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReviewRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.n != null && Object.hasOwnProperty.call(message, "n"))
            writer.uint32(/* id 0, wireType 0 =*/0).uint32(message.n);
        return writer;
    };

    /**
     * Encodes the specified ReviewRequest message, length delimited. Does not implicitly {@link ReviewRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReviewRequest
     * @static
     * @param {IReviewRequest} message ReviewRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReviewRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReviewRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReviewRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReviewRequest} ReviewRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReviewRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReviewRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.n = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReviewRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReviewRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReviewRequest} ReviewRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReviewRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReviewRequest message.
     * @function verify
     * @memberof ReviewRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReviewRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.n != null && message.hasOwnProperty("n"))
            if (!$util.isInteger(message.n))
                return "n: integer expected";
        return null;
    };

    /**
     * Creates a ReviewRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReviewRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReviewRequest} ReviewRequest
     */
    ReviewRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ReviewRequest)
            return object;
        let message = new $root.ReviewRequest();
        if (object.n != null)
            message.n = object.n >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ReviewRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReviewRequest
     * @static
     * @param {ReviewRequest} message ReviewRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReviewRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.n = 0;
        if (message.n != null && message.hasOwnProperty("n"))
            object.n = message.n;
        return object;
    };

    /**
     * Converts this ReviewRequest to JSON.
     * @function toJSON
     * @memberof ReviewRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReviewRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReviewRequest;
})();

export const ReviewResponse = $root.ReviewResponse = (() => {

    /**
     * Properties of a ReviewResponse.
     * @exports IReviewResponse
     * @interface IReviewResponse
     * @property {Array.<string>|null} [event] ReviewResponse event
     * @property {number|null} [n] ReviewResponse n
     */

    /**
     * Constructs a new ReviewResponse.
     * @exports ReviewResponse
     * @classdesc Represents a ReviewResponse.
     * @implements IReviewResponse
     * @constructor
     * @param {IReviewResponse=} [properties] Properties to set
     */
    function ReviewResponse(properties) {
        this.event = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReviewResponse event.
     * @member {Array.<string>} event
     * @memberof ReviewResponse
     * @instance
     */
    ReviewResponse.prototype.event = $util.emptyArray;

    /**
     * ReviewResponse n.
     * @member {number} n
     * @memberof ReviewResponse
     * @instance
     */
    ReviewResponse.prototype.n = 0;

    /**
     * Creates a new ReviewResponse instance using the specified properties.
     * @function create
     * @memberof ReviewResponse
     * @static
     * @param {IReviewResponse=} [properties] Properties to set
     * @returns {ReviewResponse} ReviewResponse instance
     */
    ReviewResponse.create = function create(properties) {
        return new ReviewResponse(properties);
    };

    /**
     * Encodes the specified ReviewResponse message. Does not implicitly {@link ReviewResponse.verify|verify} messages.
     * @function encode
     * @memberof ReviewResponse
     * @static
     * @param {IReviewResponse} message ReviewResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReviewResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.event != null && message.event.length)
            for (let i = 0; i < message.event.length; ++i)
                writer.uint32(/* id 0, wireType 2 =*/2).string(message.event[i]);
        if (message.n != null && Object.hasOwnProperty.call(message, "n"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.n);
        return writer;
    };

    /**
     * Encodes the specified ReviewResponse message, length delimited. Does not implicitly {@link ReviewResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReviewResponse
     * @static
     * @param {IReviewResponse} message ReviewResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReviewResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReviewResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReviewResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReviewResponse} ReviewResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReviewResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReviewResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                if (!(message.event && message.event.length))
                    message.event = [];
                message.event.push(reader.string());
                break;
            case 1:
                message.n = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReviewResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReviewResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReviewResponse} ReviewResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReviewResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReviewResponse message.
     * @function verify
     * @memberof ReviewResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReviewResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.event != null && message.hasOwnProperty("event")) {
            if (!Array.isArray(message.event))
                return "event: array expected";
            for (let i = 0; i < message.event.length; ++i)
                if (!$util.isString(message.event[i]))
                    return "event: string[] expected";
        }
        if (message.n != null && message.hasOwnProperty("n"))
            if (!$util.isInteger(message.n))
                return "n: integer expected";
        return null;
    };

    /**
     * Creates a ReviewResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReviewResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReviewResponse} ReviewResponse
     */
    ReviewResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReviewResponse)
            return object;
        let message = new $root.ReviewResponse();
        if (object.event) {
            if (!Array.isArray(object.event))
                throw TypeError(".ReviewResponse.event: array expected");
            message.event = [];
            for (let i = 0; i < object.event.length; ++i)
                message.event[i] = String(object.event[i]);
        }
        if (object.n != null)
            message.n = object.n >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ReviewResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReviewResponse
     * @static
     * @param {ReviewResponse} message ReviewResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReviewResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.event = [];
        if (options.defaults)
            object.n = 0;
        if (message.event && message.event.length) {
            object.event = [];
            for (let j = 0; j < message.event.length; ++j)
                object.event[j] = message.event[j];
        }
        if (message.n != null && message.hasOwnProperty("n"))
            object.n = message.n;
        return object;
    };

    /**
     * Converts this ReviewResponse to JSON.
     * @function toJSON
     * @memberof ReviewResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReviewResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReviewResponse;
})();