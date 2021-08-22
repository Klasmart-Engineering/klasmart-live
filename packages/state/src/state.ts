/* eslint-disable */
import { Map } from "immutable";
type ID = string;

class Room {
  public constructor(
    private teachers = Map<ID, Participant>(),
    private students = Map<ID, Participant>(),
    private host?: ID,
    private chat: ChatMessage[] = [],
    private content?: Content
  ) {}

  public join(participant: Participant): void {}
  public leave(participant: ID): void {}
}

export class Participant {
  public id: ID;
  public name: string;
  public activityStreams: { [key: string]: ID };
  public webRTCStreams: { [key: string]: WebRTCStream };
  public trophies: TrophyMessage[];

  public constructor(
    id: ID,
    name: string,
    activityStreams: { [key: string]: ID } = {},
    webRTCStreams: { [key: string]: WebRTCStream } = {},
    trophies: TrophyMessage[] = []
  ) {
    this.id = id;
    this.name = name;
    this.activityStreams = activityStreams;
    this.webRTCStreams = webRTCStreams;
    this.trophies = trophies;
  }

  // getUserId(): ID {
  //   return this.id;
  // }
}

export class WebRTCStream {
  public constructor(
    private id: ID,
    private label: string,
    private tracks: ID[]
  ) {}
}

export interface ChatMessage {
  message: string;
  timestamp: number;
}

export interface Message extends ChatMessage {
  userId: ID;
}

// export class ChatMessage {
//   public constructor(
//     private user: ID,
//     private message: string,
//     private timestamp = Date.now()
//   ) {}
// }
//

export interface TrophyMessage {
  trophy: ID;
  timestamp: number;
  user?: ID;
}

// export class TrophyMessage {
//   public constructor(
//     private trophy: ID,
//     private user?: ID,
//     private timestamp = Date.now()
//   ) {}
// }

enum ContentType {
  Video,
  Audio,
  Image,
  H5P,
  WebRTCStream,
}

class Content {
  public constructor(private type: ContentType, private id: ID) {}
}
