import pb from 'kidsloop-live-serialization';
import { nanoid } from 'nanoid';
import Chai, { expect } from 'chai';
import { tokens, NUMBER_OF_CLIENTS } from './index';

export const STANDARD_PROPAGATION_DELAY = 2500;

function generateRandomClientIndex(): number {
  return Math.floor(Math.random() * NUMBER_OF_CLIENTS);
}

export interface Scenario {
  name: string;
  action?: pb.IAction;

  // The changes you expect MUST be made to the state object
  expected?: (state: pb.IState) => Chai.Assertion[];

  // If target == -1, send to all clients, if >= 0 then index into the connected
  // clients at that index and send it from that client
  // For now, teacher == index 0
  target: number;
  delay: number;

  before?: () => Promise<void>;
  after?: () => Promise<void>;
}

export const SCENARIOS: (() => Scenario)[] = [
  (): Scenario => {
    const id = tokens[0].sub;
    return {
      name: 'Set host',
      action: wrapAction({
        setHost: { id },
      }),
      delay: STANDARD_PROPAGATION_DELAY,
      target: 0,
      expected: (state: pb.IState): Chai.Assertion[] => {
        const assertions = [];
        try {
          expect(state.host).equals(id);
        } catch (e) {
          assertions.push(e.toString());
        }
        return assertions;
      },
    };
  },
  (): Scenario => {
    const id = nanoid();
    const message = `Test Message: ${id}`;
    return {
      name: 'Send initial chat message',
      action: wrapAction({
        sendChatMessage: { message },
      }),
      delay: STANDARD_PROPAGATION_DELAY,
      target: generateRandomClientIndex(),
      expected: (state: pb.IState): Chai.Assertion[] => {
        const assertions = [];
        try {
          expect(state.chatMessages).to.have.lengthOf(1);
        } catch (e) {
          assertions.push(e.toString());
        }
        try {
          expect(state.chatMessages![0]).include({ message });
        } catch (e) {
          assertions.push(e.toString());
        }
        return assertions;
      },
    };
  },
  (): Scenario => {
    const content = {
      type: pb.ContentType.H5P,
      id: 'Test Content 1',
      url: 'test.content.com/test-1',
    };
    return {
      name: 'Set Content',
      action: wrapAction({
        setContent: { content },
      }),
      delay: STANDARD_PROPAGATION_DELAY,
      target: 0,
      expected: (state: pb.IState): Chai.Assertion[] => {
        const assertions = [];
        try {
          expect(state.content).to.deep.equal(content);
        } catch (e) {
          assertions.push(e.toString());
        }
        return assertions;
      },
    };
  },
];

function wrapAction<T>(payload: T): pb.IAction {
  return {
    id: nanoid(),
    ...payload,
  };
}
