/* eslint-disable */
import { makeAutoObservable } from 'mobx';

type ID = string

class Room {
    public constructor(
        private teachers = new Map<ID, Participant>(),
        private students = new Map<ID, Participant>(),
        private host?: ID,
        private chat: ChatMessage[] = [],
        private content?: Content,
  ) {
    makeAutoObservable(this)
  }

  public join(participant: Participant): void { }
  public leave(participant: ID): void { }
}

class Participant {
    public constructor(
        private id: ID,
        private name: string,
        private activityStreams = new Map<ID, ID>(),
        private webRTCStreams = new Map<ID, WebRTCStream>(),
        private trophy: TrophyMessage[] = [],
    ) {
        makeAutoObservable(this)
    }
}

class WebRTCStream {
    public constructor(
        private id: ID,
        private label: string,
        private tracks: ID[],
    ) {
        makeAutoObservable(this)
    }
}

class ChatMessage {
    public constructor(
        private user: ID,
        private message:string,
        private timestamp = Date.now(),
    ) {
        makeAutoObservable(this)
    }
}

class TrophyMessage {
    public constructor(
        private tropy: ID,
        private user?: ID,
        private timestamp = Date.now(),
    ) {
        makeAutoObservable(this)
    }
}

enum ContentType {
    Video,
    Audio,
    Image,
    H5P,
    WebRTCStream,
}

class Content {
    public constructor(
        private type: ContentType,
        private id: ID,
    ) {
        makeAutoObservable(this)

    }
}
