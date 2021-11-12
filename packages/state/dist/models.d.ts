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
export declare const newUserId: (value: string) => UserID;
export declare type DeviceID = NewType<string, 'DeviceID'>;
export declare const newDeviceId: (value: string) => DeviceID;
export declare type ActivityStreamID = NewType<string, 'ActivityStreamID'>;
export declare const newActivityStreamId: (value: string) => ActivityStreamID;
export declare type WebRTCStreamID = NewType<string, 'WebRTCStreamID'>;
export declare const newWebRtcStreamId: (value: string) => WebRTCStreamID;
export declare type Timestamp = NewType<number, 'Timestamp'>;
export declare const newTimestamp: (value: number) => Timestamp;
export declare type TrophyType = NewType<string, 'TrophyType'>;
export declare const newTrophyType: (value: string) => TrophyType;
export declare type UserRole = NewType<string, 'UserRole'>;
export declare const newUserRole: (role: string) => UserRole;
export interface Content {
    type: ContentType;
    contentLocation?: string;
}
export interface Trophy {
    timestamp: Timestamp;
    type: TrophyType;
}
export interface UserState {
    id: UserID;
    name: string;
    role: UserRole;
    trophies: Trophy[];
    deviceIds: DeviceID[];
}
export interface DeviceState {
    id: DeviceID;
    userId: UserID;
    activityStreamID?: ActivityStreamID;
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
    hostDeviceId?: DeviceID;
    classEndTime?: Timestamp;
}
export interface ChatMessageNotification {
    id: string;
    user: UserState;
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
    join: DeviceState;
    leave: DeviceState;
    content: ContentNotification;
    trophy: TrophyNotification;
    sfu: string;
    session: SessionNotification;
}
//# sourceMappingURL=models.d.ts.map