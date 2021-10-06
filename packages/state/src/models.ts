/* eslint-disable @typescript-eslint/no-empty-interface */

import { NewType } from './types';

export enum FeedbackType {
  END_CLASS,
  LEAVE_CLASS,
}

export enum QuickFeedbackType {
  VIDEO,
  AUDIO,
  PRESENTATION,
  OTHER,
}

export interface QuickFeedback {
  type: QuickFeedbackType;
  stars: number | null;
}

export interface PageEventIn {
  sequenceNumber: number
  isKeyframe: boolean
  eventsSinceKeyframe: number
  eventData: string
}

export enum ContentType {
  Blank = 'Blank',

  // ActivityStreamID
  Stream = 'Stream', // Consume a DOM (Activity) stream
  // URLs
  Activity = 'Activity', //Produce a DOM (Activity) Stream
  Video = 'Video', // 
  Audio = 'Audio',
  Image = 'Image',
  //WebRTC Stream IDs
  Camera = 'Camera',
  Screen = 'Screen',
}

export type UserID = NewType<string, 'UserID'>;
export const userId = (value?: string): UserID => (value || '') as UserID;

export type DeviceID = NewType<string, 'DeviceID'>
export const deviceId = (value?: string): DeviceID => (value || '') as DeviceID;

export type ActivityStreamID = NewType<string, 'ActivityStreamID'>
export const activityStreamId = (value?: string): ActivityStreamID => (value || '') as ActivityStreamID;

export type WebRTCStreamID = NewType<string, 'WebRTCStreamID'>
export const webRtcStreamId = (value?: string): WebRTCStreamID => (value || '') as WebRTCStreamID;

export type Timestamp = NewType<number, 'Timestamp'>
export const timestamp = (value?: number): Timestamp => (value || Date.now()) as Timestamp;

export type TrophyType = NewType<string, 'TrophyType'>
export const trophyType = (value?: string): TrophyType => (value || '') as TrophyType;


// Class State
// Change to Union
export interface Content {
  type: ContentType
  contentLocation?: string
}

export interface Trophy {
  timestamp: Timestamp
  type: TrophyType
}

export interface UserState {
  id: UserID
  name: string
  trophies: Trophy[]
  deviceIds: DeviceID[] 
}

export interface DeviceState {
  id: DeviceID
  userId: UserID
  activityStreamID?: ActivityStreamID
  webRTCStreamIDs: WebRTCStreamID[]
}

export interface ChatMessageState {
  userId: UserID
  timestamp: Timestamp
  text: string
}

export interface ClassState {
  users: Record<UserID, UserState>
  devices: Record<DeviceID, DeviceState>

  chatMessages: ChatMessageState[]
  content: Content
  hostUserId: UserID
  classEndTime?: Timestamp
}

export interface Session {
  id: string,
  name: string,
  streamId: string
  isTeacher: boolean
  isHost: boolean
  joinedAt: number
}

export interface ChatMessageNotification {
  id: string
  session: Session
  message: string
}

export interface ContentNotification {
  type: ContentType,
  contentId: string
}

export interface SessionNotification {
  // webRTC: WebRTC
}

export interface TrophyNotification {
  from: string
  user: string
  kind: string
}

export interface VideoSynchronize { }
export interface WhiteboardStateOut { }
export interface WhiteboardEventOut { }
export interface ClassNotification {
  chatMessage: ChatMessageNotification
  join: Session
  leave: Session
  content: ContentNotification
  trophy: TrophyNotification

  //webRTC deprecated?
  sfu: string
  session: SessionNotification
}
