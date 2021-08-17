import {
    IAction, IState, IRoom, IRoomAction, IUser, IDevice, IUserAction, IDeviceAction, IWebRTCStream, IWebRTCStreamAction, IWebRTCTrack, WebRTCTrack,
} from 'kidsloop-live-serialization';

type PBMap<V> = ({ [k: string]: V }) | null | undefined
type Reducer<State, Action = State> = (current: State, action: Action) => State
function reduceMap<State, Action = State>(combine: Reducer<State, Action>, current?: PBMap<State>, action?: PBMap<Action>, removeKeys?: Set<string>): PBMap<State> {
    if (!action) { return current; }
    const combined: PBMap<State> = { ...current };

    if (removeKeys) {
        for (const key of removeKeys) { delete combined[key] }
    }

    for (const [id, value] of Object.entries(action)) {
        const current: State | undefined = combined[id]
        const next = combine(current, value);
        if (next) { combined[id] = next }
    }
    return combined;
}

function reduceWebRTCTrack(current?: IWebRTCTrack, action?: IWebRTCTrack | null): IWebRTCTrack {
    return { sfu: action?.sfu || current?.sfu }
}


function reduceWebRTCStream(current?: IWebRTCStream | null, action?: IWebRTCStreamAction): IWebRTCStream {
    const removeTrackIds = action?.removeTrackIDs ? new Set(action?.removeTrackIDs) : undefined

    return {
        label: current?.label || action?.label, // Allow label change? // action?.label || current.label,
        tracks: reduceMap(reduceWebRTCTrack, current?.tracks, action?.tracks, removeTrackIds),
    }
}

function reduceDevice(current: IDevice, action?: IDeviceAction | null): IDevice {
    const removeWebRTCStreamIds = action?.removeWebRTCStreamIDs ? new Set(action?.removeWebRTCStreamIDs) : undefined
    return {
        activityId: action?.activityId || current.activityId,
        activityStreamId: action?.activityStreamId || current.activityStreamId,
        webRTCStreams: reduceMap(reduceWebRTCStream, current.webRTCStreams, action?.webRTCStreams, removeWebRTCStreamIds),
    }
}

function reduceUser(current?: IUser | null, action?: IUserAction | null): IUser {
    const chatMessages = []
    if (current?.chatMessages) { chatMessages.push(...current.chatMessages) }
    if (action?.chatMessages) { chatMessages.push(...action.chatMessages) }

    const trophies = []
    if (current?.trophies) { trophies.push(...current.trophies) }
    if (action?.trophies) { trophies.push(...action.trophies) }

    const removeDeviceIds = action?.removeDeviceIDs ? new Set(action?.removeDeviceIDs) : undefined

    return {
        chatMessages,
        devices: reduceMap(reduceDevice, current?.devices, action?.devices, removeDeviceIds),
        name: current?.name || action?.name, // Allow name change? // action?.name || current.name,
        trophies,
    }
}

function reduceRoom(current?: IRoom | null, action?: IRoomAction | null): IRoom {
    return {
        teachers: reduceMap(reduceUser, current?.teachers, action?.teachers),
        students: reduceMap(reduceUser, current?.teachers, action?.teachers),
        content: action?.content || current?.content,
        endTimestamp: action?.endTimestamp || current?.endTimestamp,
        host: action?.host || current?.host,
    };
}

export default function reduce(current: IState, action: IAction): IState {
    const previousCount = current.transitions || 0;
    const count = action.actionCount || 1;
    return {
        transitions: previousCount + count,
        room: reduceRoom(current.room, action.actions),
    };
}
