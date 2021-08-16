/* eslint-disable */
import { GetUserId } from "./roomSlice";
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
  public constructor(
    private id: ID,
    private name: string,
    private activityStreams: { [key: string]: ID } = {},
    private webRTCStreams: { [key: string]: WebRTCStream } = {},
    private trophy: TrophyMessage[] = []
  ) {
    // makeAutoObservable(this);
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

export class TrophyMessage {
  public constructor(
    private tropy: ID,
    private user?: ID,
    private timestamp = Date.now()
  ) {}
}

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
