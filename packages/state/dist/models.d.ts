import { NewType } from './types';
export declare enum FeedbackType {
    END_CLASS = 0,
    LEAVE_CLASS = 1
}
export declare enum QuickFeedbackType {
    VIDEO = 0,
    AUDIO = 1,
    PRESENTATION = 2,
    OTHER = 3
}
export interface QuickFeedback {
    type: QuickFeedbackType;
    stars: number | null;
}
export interface PageEventIn {
    sequenceNumber: number;
    isKeyframe: boolean;
    eventsSinceKeyframe: number;
    eventData: string;
}
export declare enum ContentType {
    Blank = "Blank",
    Stream = "Stream",
    Activity = "Activity",
    Video = "Video",
    Audio = "Audio",
    Image = "Image",
    Camera = "Camera",
    Screen = "Screen"
}
export declare type UserID = NewType<string, 'UserID'>;
export declare const userId: (value?: string | undefined) => UserID;
export declare type DeviceID = NewType<string, 'DeviceID'>;
export declare const deviceId: (value?: string | undefined) => DeviceID;
export declare type ActivityStreamID = NewType<string, 'ActivityStreamID'>;
export declare const activityStreamId: (value?: string | undefined) => ActivityStreamID;
export declare type WebRTCStreamID = NewType<string, 'WebRTCStreamID'>;
export declare const webRtcStreamId: (value?: string | undefined) => WebRTCStreamID;
export declare type Timestamp = NewType<number, 'Timestamp'>;
export declare const timestamp: (value?: number | undefined) => Timestamp;
export declare type TrophyType = NewType<string, 'TrophyType'>;
export declare const trophyType: (value?: string | undefined) => TrophyType;
export interface Content {
    type: ContentType;
    contentLocation?: string;
}
export interface Trophy {
    time: Timestamp;
    type: TrophyType;
}
export interface UserState {
    id: UserID;
    name: string;
    trophies: Trophy[];
}
export interface DeviceState {
    id: DeviceID;
    activityStreamID: ActivityStreamID;
    webRTCStreamIDs: WebRTCStreamID[];
}
export interface ChatMessageState {
    userId: UserID;
    timestamp: Timestamp;
    text: string;
}
export interface ClassState {
    users: Record<UserID, UserState>;
    devices: Record<DeviceID, DeviceState>;
    chatMessages: ChatMessageState[];
    content: Content;
    hostUserId: UserID;
    classEndTime?: Timestamp;
}
export interface Session {
    id: string;
    name: string;
    streamId: string;
    isTeacher: boolean;
    isHost: boolean;
    joinedAt: number;
}
export interface ChatMessageNotification {
    id: string;
    session: Session;
    message: string;
}
export interface ContentNotification {
    type: ContentType;
    contentId: string;
}
export interface SessionNotification {
}
export interface TrophyNotification {
    from: string;
    user: string;
    kind: string;
}
export interface VideoSynchronize {
}
export interface WhiteboardStateOut {
}
export interface WhiteboardEventOut {
}
export interface ClassNotification {
    chatMessage: ChatMessageNotification;
    join: Session;
    leave: Session;
    content: ContentNotification;
    trophy: TrophyNotification;
    sfu: string;
    session: SessionNotification;
}
//# sourceMappingURL=models.d.ts.map