import { ContentType } from "kidsloop-live-serialization"
type ID = string

export interface State {
    actionCount: number
    room: Room
}

export interface Room {
    teachers: Map<ID, User>
    students: Map<ID, User>
    chat: ChatMessage[]
    content: Content
    host?: ID
    endTimestamp?: number
}

export interface User {
    id: ID
    name: string
    devices: Map<ID, Device>
    trophies: TrophyMessage[]
}

export interface Device {
    id: ID
    activityStream?: ActivityStream,
    webRTCStreams: Map<ID, WebRTCStream>
}

export interface ActivityStream {
    activityId: ID
    streamId: ID
}

export interface WebRTCStream {
    id: ID
    label: string
    sfu: string
    tracks: Set<ID>
}

export interface ChatMessage {
    user: ID
    message:string
    timestamp: number
}

export interface TrophyMessage {
    trophy: ID //Turn into enum?
    timestamp: number
}

export interface Content {
    contentType: ContentType,
    id?: string,
}

export const intitalState: State = {
    actionCount: 0,
    room: {
        teachers: new Map<ID, User>(),
        students: new Map<ID, User>(),
        chat: [],
        content: { contentType: ContentType.Blank },
    },
}