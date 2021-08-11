/* eslint-disable */

import {
  action,
  autorun,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";

type ID = string;
type Payload = undefined;
interface Token {
  userId: ID;
  isTeacher: boolean;
}
interface State {
  teachers: Map<ID, Participant>;
  students: Map<ID, Participant>;
  host?: ID;
  chat: ChatMessage[];
  content?: Content;
}

enum Actions {
  GetState,
  ListenState,
  UserJoin,
  UserLeave,
  ChatMessage, // Do we want to support deleting a chat message?
  SetHost, // Only available to the current host? any teacher? -> should run off reaction of lost websocket connection
  SetContent,
  AddActivityStream,
  RemoveActivityStream,
  AddRtcStream,
  RemoveRtcStream,
  AddTrophy,
}

class Action {
  public action: Actions;
  public payload: Payload;

  public constructor(a: Actions, p: Payload = undefined) {
    this.action = a;
    this.payload = p;
  }
}

export class Room implements State {
  public teachers: Map<ID, Participant>;
  public students: Map<ID, Participant>;
  public host?: ID;
  public chat: ChatMessage[];
  public content?: Content;

  public constructor(
    teachers = new Map<ID, Participant>(),
    students = new Map<ID, Participant>(),
    chat: ChatMessage[] = [],
    host?: ID,
    content?: Content
  ) {
    this.teachers = teachers;
    this.students = students;
    this.chat = chat;
    this.host = host;
    this.content = content;

    makeObservable(this, {
      teachers: observable,
      students: observable,
      host: observable,
      chat: observable,
      content: observable,

      userJoin: action,
      userLeave: action,
      getStudents: computed,
    });

    autorun(() => console.log("I'm running my side effects here"));
  }

  get state(): State {
    return {
      teachers: this.teachers,
      students: this.students,
      chat: this.chat,
      host: this.host,
      content: this.content,
    };
  }

  get getStudents(): Map<ID, Participant> {
    return this.students;
  }

  public userJoin(token: Token, participant: Participant): void {
    if (token.isTeacher) {
      this.teachers.set(participant.id, participant);
    } else {
      this.students.set(participant.id, participant);
    }
  }

  public userLeave(token: Token, participantId: ID): void {
    if (token.isTeacher) {
      this.teachers.delete(participantId);
    } else {
      this.students.delete(participantId);
    }
  }
}

export class Participant {
  public id: ID;
  public name: string;
  public activityStreams: Map<ID, ID>;
  public webRTCStreams: Map<ID, WebRTCStream>;
  public trophy: TrophyMessage[];

  public constructor(
    id: ID,
    name: string,
    activityStreams = new Map<ID, ID>(),
    webRTCStreams = new Map<ID, WebRTCStream>(),
    trophy: TrophyMessage[] = []
  ) {
    this.id = id;
    this.name = name;
    this.activityStreams = activityStreams;
    this.webRTCStreams = webRTCStreams;
    this.trophy = trophy;
    makeAutoObservable(this);
  }
}

class WebRTCStream {
  public constructor(
    private id: ID,
    private label: string,
    private tracks: ID[]
  ) {
    makeAutoObservable(this);
  }
}

class ChatMessage {
  public constructor(
    private user: ID,
    private message: string,
    private timestamp = Date.now()
  ) {
    makeAutoObservable(this);
  }
}

class TrophyMessage {
  public constructor(
    private tropy: ID,
    private user?: ID,
    private timestamp = Date.now()
  ) {
    makeAutoObservable(this);
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
  public constructor(private type: ContentType, private id: ID) {
    makeAutoObservable(this);
  }
}
