import pb from 'kidsloop-live-serialization';
import { nanoid } from 'nanoid';
import Chai, { expect } from 'chai';

export const STANDARD_PROPAGATION_DELAY = 2500;

export interface Scenario {
  name: string;
  action?: pb.IAction;

  // The changes you expect MUST be made to the state object
  expected?: (state: pb.IState) => Chai.Assertion[];

  // -2 = random, -1 = all, <= 0 is a specific entry
  target: number;
  delay: number;

  before?: () => Promise<void>;
  after?: () => Promise<void>;
}

export const SCENARIOS: Scenario[] = [
  (() => {
    const id = nanoid();
    const message = `Test Message: ${id}`;
    return {
      name: 'Send initial chat message',
      action: wrapAction({
        sendChatMessage: { message },
      }),
      delay: STANDARD_PROPAGATION_DELAY,
      target: -2,
      expected: (state: pb.IState): Chai.Assertion[] => {
        const assertions = [];
        try {
          expect(state.chatMessages).to.have.lengthOf(1);
        } catch (e) {
          assertions.push(e);
        }
        try {
          expect(state.chatMessages![0]).include({ message });
        } catch (e) {
          assertions.push(e);
        }
        return assertions;
      },
    };
  })(),
];

function wrapAction<T>(payload: T): pb.IAction {
  return {
    id: nanoid(),
    ...payload,
  };
}
