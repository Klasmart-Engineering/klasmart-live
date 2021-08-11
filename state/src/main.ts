import { Room, Participant } from "./state";
import { autorun } from "mobx";

const state = new Room();

state.userJoin(
  { userId: "1234", isTeacher: false },
  new Participant("1234", "Test")
);

console.log(state.state);
