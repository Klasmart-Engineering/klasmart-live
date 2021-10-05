export type ValueOf<T> = T[keyof T];

export type NewType<T, NewTypeName> = T & { __TYPE__: NewTypeName };

export const keys = <O>(o: O): (keyof O)[] => {
  return Object.keys(o) as (keyof O)[];
};

export const values = <O>(o: O): (ValueOf<O>)[] => {
  return Object.values(o) as (ValueOf<O>)[];
};

export const entries = <O>(o: O): ([keyof O, ValueOf<O>])[] => {
  return Object.values(o) as ([keyof O, ValueOf<O>])[];
};