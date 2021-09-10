export * as Server from './server';
export * as Client from './client';

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