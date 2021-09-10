export {
  roomReducer,
  Actions,
  INITIAL_ROOM_STATE,
  generateStateDiff,
} from './roomSlice';
export { RootState } from './store';

export type ID = string;
export interface Context {
  userId: ID;
  isTeacher: boolean;
  name: string;
}

export type ContextPayload<T> = {
  context: Context;
  payload: T;
};