import {
    IDeviceUpdate,
    IRoomUpdate,
    IStateUpdate,
    IUserUpdate,
    IWebRTCStreamUpdate
} from 'kidsloop-live-serialization';
import { ActivityStream, Device, Room, State, TrophyMessage, User, WebRTCStream } from './state';


type PBMap<V> = ({ [k: string]: V }) | null
type Reducer<State, Action = State> = (id: string, current?: State, action?: Action) => State | undefined
function reduceMap<State, Action = State>(combine: Reducer<State, Action>, current?: Map<string,State>, action?: PBMap<Action>, removeKeys?: Set<string>): Map<string, State> {
    const combined = new Map<string, State>()

    if(current) {
        for(const [k,v] of current.entries()) {
            if(removeKeys && removeKeys.has(k)) { continue }
            combined.set(k,v)
        }
    }

    if(action) {
        for (const [k,v] of Object.entries(action)) {
            const current = combined.get(k)
            const next = combine(k, current, v);
            if(next) { combined.set(k,next) }
        }
    }

    return combined 
}

function reduceWebRTCStream(id: string, current?: WebRTCStream, action?: IWebRTCStreamUpdate): WebRTCStream | undefined {
    if(!current && !action) { return }
    
    const sfu = current?.sfu || action?.sfu
    if(!sfu) { console.error(`Stream(${id}) does not have sfu`); return }

    if(current?.sfu && action?.sfu && current.sfu !== action.sfu) {
        console.error(`Subsequent message for WebRTCStream(${id}) has changed sfu`)
    }

    const tracks = current?.tracks || new Set<string>()

    if(action) {
        const { removeTrackIDs, trackIDs } = action
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
    }    
    const label = current?.label || action?.label
    if(!label) { console.error(`Initial message for WebRTCStream(${id}) does not have label`) }

    return {
        id,
        sfu,
        label: label || "Unknown Stream",
        tracks,
    }
}

function reduceDevice(id:string, current?: Device, action?: IDeviceUpdate | null): Device | undefined {
    if(!current && !action) { return }
    let removeWebRTCStreamIds: Set<string> | undefined
    let activityStream: ActivityStream | undefined

    if(action) {        
        const {activityId, activityStreamId} = action
        if(activityId && activityStreamId) {
            activityStream = { activityId, streamId: activityStreamId }
        } else {
            if(action.activityId) { console.error(`activityId(${action?.activityId}) specified without streamId`) }
            if(action.activityStreamId) { console.error(`activityStreamId(${action?.activityStreamId}) specified without activityId`) }
        }

        if(action.removeWebRTCStreamIDs) { removeWebRTCStreamIds = new Set(action.removeWebRTCStreamIDs) }
        
    }
    const webRTCStreams = reduceMap(reduceWebRTCStream, current?.webRTCStreams, action?.webRTCStreams, removeWebRTCStreamIds),

    return {
        id,
        activityStream,
        webRTCStreams,
    }
}

function reduceUser(id: string, current?: User, action?: IUserUpdate): User | undefined {
    if(!current && !action) { return }

    const trophies: TrophyMessage[] = current?.trophies ? [...current.trophies] : []
    if (action?.trophies) {
        for(const { timestamp, trophy } of action.trophies) {
            if(!timestamp || !trophy) { console.error(`TrophyMessage for User(${id}) is invalid {${timestamp}, ${trophy}}`) }
            trophies.push({
                timestamp: timestamp || Date.now(),
                trophy: trophy || "defaultTrophy"
            })
        }
    }

    const removeDeviceIds = action?.removeDeviceIDs ? new Set(action?.removeDeviceIDs) : undefined
    const devices = reduceMap(reduceDevice, current?.devices, action?.devices, removeDeviceIds)

    const name = action?.name || current?.name
    if(!name) { console.error(`Initial update action for User(${id}) is missing name`) }

    return {
        id,
        devices,
        name: name || "Unknown User",
        trophies,
    }
}

function reduceRoom(current: Room, action: IRoomUpdate): Room {
    const teachers = reduceMap(reduceUser, current.teachers, action.teachers) 
    const students = reduceMap(reduceUser, current.students, action.students)  
    return {
        teachers,
        students,
        endTimestamp: action.endTimestamp || current.endTimestamp,
        host: action.host || current.host,
        content: current.content || action.content,
        chat: [],
    };
}

export default function reduce(current: State, {actionCount, room}: IStateUpdate): State {
    const count = actionCount || 1;
    return {
        actionCount: current.actionCount + count,
        room: room ? reduceRoom(current.room, room) : current.room,
    };
}



// export default function reduce(current: State, {actionCount, room}: IStateUpdate): State {
//     return produce(current, (next) => {
        
//         next.actionCount += actionCount || 1
//         if(room) {
//             const {content} = room
//             if(content && content.contentType) {
//                 next.content.contentType = content.contentType ?? undefined
//                 next.content.contentType = content.contentType ?? undefined
//             }

//         }

//     })
// }
