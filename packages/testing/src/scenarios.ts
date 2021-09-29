import pb from 'kidsloop-live-serialization';
import { nanoid } from 'nanoid';
import Chai, { expect } from 'chai';
import {
  tokens,
  NUMBER_OF_CLIENTS,
  websockets,
  results,
  currentScenario,
  scenarioTimings,
} from './index';

export const STANDARD_PROPAGATION_DELAY = 2500;

const CLIENT_QUEUE = [];

function generateRandomClientIndex(): number {
  return Math.floor(Math.random() * NUMBER_OF_CLIENTS);
}

export interface Scenario {
  name: string;
  action?: pb.IAction;

  // The changes you expect MUST be made to the state object
  // Each assertion should be within a try/catch block and
  // errors should be pushed into an array which is returned
  expected?: (state: pb.IState) => Chai.Assertion[];

  // If target == -1, send to all clients, if >= 0 then index into the connected
  // clients at that index and send it from that client
  // For now, teacher == index 0
  // If an array is passed, then send the message from the clients at the index
  // of each array
  target: number | number[];
  delay: number;

  // If the assertions should be ignored on the targets, then set this to true
  ignoreAssertions?: boolean;

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
  (): Scenario => {
    const message = `Concurrent message ${nanoid()}`;
    return {
      name: 'Send concurrent chat messages',
      action: wrapAction({
        sendChatMessage: { message },
      }),
      delay: STANDARD_PROPAGATION_DELAY,
      target: [generateRandomClientIndex(), generateRandomClientIndex()],
      expected: (state: pb.IState): Chai.Assertion[] => {
        const assertions = [];
        try {
          expect(state.chatMessages).to.have.lengthOf(3);
        } catch (e) {
          assertions.push(e.toString());
        }
        try {
          const counter = state.chatMessages?.filter(
            (msg) => msg.message === message
          ).length;
          expect(counter).equals(2);
        } catch (e) {
          assertions.push(e.toString());
        }
        return assertions;
      },
    };
  },
  (): Scenario => {
    let target = generateRandomClientIndex();
    const name = 'Random user disconnects';
    // Don't want to disconnect the teacher
    target = target === 0 ? 1 : target;
    CLIENT_QUEUE.push(target);
    const userId = tokens[target].userid;
    return {
      name,
      delay: STANDARD_PROPAGATION_DELAY,
      target,
      ignoreAssertions: true,
      before: async () => {
        // This is needed because we don't send a websocket request here
        // so this doesn't automatically get updated
        scenarioTimings[currentScenario] = { name, time: new Date().getTime() };
        websockets[target].terminate();
        delete websockets[target];
        // Need to update this, as the websocket won't automatically update it
        // as there is no longer a websocket instance
        results[target][currentScenario] = {
          scenario: currentScenario,
          name,
          time: NaN,
        };
      },
      expected: (state: pb.IState): Chai.Assertion[] => {
        const assertions = [];
        try {
          expect(state.participants![userId].devices).to.be.undefined;
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
