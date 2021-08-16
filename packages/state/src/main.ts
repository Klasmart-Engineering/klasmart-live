import { store } from './store';
import { userJoin } from './roomSlice';
import { Participant } from './state';

const dummy = {
  token: {
    userId: '1234',
    isTeacher: false,
  },
  payload: new Participant('1234', 'Bob'),
};

store.dispatch(userJoin(dummy));

console.log(store.getState());
