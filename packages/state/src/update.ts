import {
    IDeviceUpdate,
    IRoomUpdate,
    IStateUpdate,
    ITrophy,
    IUserUpdate,
    IWebRTCStreamUpdate
} from 'kidsloop-live-serialization';
import { ActivityStream, ChatMessage, Device, Room, State, TrophyMessage, User, WebRTCStream } from './state';


type PBMap<V> = ({ [k: string]: V }) | null
type Reducer<State, Update = State> = (id: string, current?: State, update?: Update) => State | undefined
function updateMap<State, Update = State>(combine: Reducer<State, Update>, current?: Map<string,State>, update?: PBMap<Update>, removeKeys?: Set<string>): Map<string, State> {
    const combined = new Map<string, State>()

    if(current) {
        for(const [k,v] of current.entries()) {
            if(removeKeys && removeKeys.has(k)) { continue }
            combined.set(k,v)
        }
    }

    if(update) {
        for (const [k,v] of Object.entries(update)) {
            const current = combined.get(k)
            const next = combine(k, current, v);
            if(next) { combined.set(k,next) }
        }
    }

    return combined 
}

function updateWebRTCTracks(current?: Set<string>, trackIDs?: string[] | null, removeTrackIDs?: string[] | null) {
    const tracks = new Set(current?.values())

    if(removeTrackIDs) {
        for(const trackId of removeTrackIDs) {
            tracks.delete(trackId)
        }
    }

    if(trackIDs) {
        for(const trackId of trackIDs) {
            tracks.add(trackId)
        }
    }

    return tracks
}

function updateWebRTCStream(id: string, current?: WebRTCStream, update?: IWebRTCStreamUpdate): WebRTCStream | undefined {
    if(!current && !update) { return }
    
    const sfu = current?.sfu || update?.sfu
    if(!sfu) { console.error(`Stream(${id}) does not have sfu`); return }
    if(current?.sfu && update?.sfu && current.sfu !== update.sfu) { console.error(`Subsequent update for WebRTCStream(${id}) has changed sfu`) }

    const label = current?.label || update?.label
    if(!label) { console.error(`Initial message for WebRTCStream(${id}) does not have label`) }

    return {
        id,
        sfu,
        label: label || "Unknown Stream",
        tracks: updateWebRTCTracks(current?.tracks, update?.trackIDs, update?.removeTrackIDs),
    }
}

function updateActivityStream(deviceId: string, current?: ActivityStream, update?: IDeviceUpdate | null) {
    if(!update) { return current }
    const {activityId, activityStreamId} = update

    if(activityId && activityStreamId) {
        return { activityId, streamId: activityStreamId }
    }

    if(activityId) { console.error(`Update for Device(${deviceId}) specified activityId(${activityId}) without streamId`) }
    if(activityStreamId) { console.error(`Update for Device(${deviceId}) specified activityStreamId(${activityStreamId}) without activityId`) }

    return current
}

function updateDevice(id:string, current?: Device, update?: IDeviceUpdate | null): Device | undefined {
    if(!current && !update) { return }

    const removeWebRTCStreamIds = update?.removeWebRTCStreamIDs ? new Set(update.removeWebRTCStreamIDs) : undefined

    return {
        id,
        activityStream: updateActivityStream(id, current?.activityStream, update),
        webRTCStreams: updateMap(updateWebRTCStream, current?.webRTCStreams, update?.webRTCStreams, removeWebRTCStreamIds),
    }
}



function updateTrophies(userId: string, current?: TrophyMessage[], update?: ITrophy[] | null): TrophyMessage[] {
    const trophies: TrophyMessage[] = current ? [...current] : []

    if (!update) { return  trophies }

    for(const { timestamp, trophy } of update) {
        if(!timestamp || !trophy) { console.error(`TrophyMessage for User(${userId}) is invalid {${timestamp}, ${trophy}}`) }
        trophies.push({
            timestamp: timestamp || Date.now(),
            trophy: trophy || "defaultTrophy"
        })
    }

    return trophies
}

function updateUser(id: string, current?: User, update?: IUserUpdate): User | undefined {
    if(!current && !update) { return }
    
    const name = update?.name || current?.name
    if(!name) { console.error(`Initial update for User(${id}) is missing name`) }
    
    const removeDeviceIds = update?.removeDeviceIDs ? new Set(update?.removeDeviceIDs) : undefined

    return {
        id,
        name: name || "Unknown User",
        devices: updateMap(updateDevice, current?.devices, update?.devices, removeDeviceIds),
        trophies: updateTrophies(id, current?.trophies, update?.trophies),
    }
}




function pushChatMessages(newMessages: ChatMessage[], userUpdates: PBMap<IUserUpdate> | undefined): void {
    if(!userUpdates) { return }

    for(const [userId, {chatMessages}] of Object.entries(userUpdates)) {
        if(!chatMessages) { continue }
        for(const { message, timestamp } of chatMessages) {
            if(!timestamp || typeof message !== "string") { console.error(`ChatMessage from User(${userId}) is invalid {${timestamp}, ${message}}`) }
            newMessages.push({
                userId,
                message: message || "",
                timestamp: timestamp || Date.now(),
            })
        }
    }
}

function updateChat(current?: ChatMessage[], teacherUpdates?: PBMap<IUserUpdate>, studentUpdates?: PBMap<IUserUpdate>): ChatMessage[] {
    const chat: ChatMessage[] = []
    if(teacherUpdates) { pushChatMessages(chat, teacherUpdates) }
    if(studentUpdates) { pushChatMessages(chat, studentUpdates) }
    chat.sort((a,b) => a.timestamp - b.timestamp)

    if(current) { chat.unshift(...current) }
    return chat
}

function updateRoom(current: Room, update?: IRoomUpdate | null): Room {
    if(!update) { return current }
    return {
        chat: updateChat(current.chat, update.teachers, update.students),
        teachers: updateMap(updateUser, current.teachers, update.teachers),
        students: updateMap(updateUser, current.students, update.students),
        endTimestamp: update.endTimestamp || current.endTimestamp,
        host: update.host || current.host,
        content: current.content || update.content,
    };
}

export default function updateState(current: State, { actionCount, room }: IStateUpdate): State {
    const count = actionCount || 1;
    return {
        actionCount: current.actionCount + count,
        room: updateRoom(current.room, room),
    };
}