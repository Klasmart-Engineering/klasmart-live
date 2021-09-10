import pb from 'kidsloop-live-serialization';
import { generateStateDiff } from './diff';

describe('State Diffing', () => {
  it('generates an empty diff when both diffs are default', () => {
    const state: pb.IState = {
      participants: {},
      host: null,
      chatMessages: [],
      content: pb.ContentType.Blank,
      endTimestamp: null,
    };
    const result = generateStateDiff(state, state);
    expect(result).toEqual([]);
  });

  describe('participants', () => {
    it('adds a new participant', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        participants: {
          'Test User': {
            name: 'Test Name',
            devices: {
              'Test Device': {
                activity: {
                  id: 'Test Activity',
                  streamId: 'Test Stream',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream',
                    label: 'RTC Stream',
                    tracks: [
                      {
                        id: 'Test Track',
                        sfu: 'test.sfu.com/test',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
        },
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          addParticipants: {
            participants: latest.participants,
          },
        },
      ]);
    });

    it('removes an existing participant', () => {
      const initial: pb.IState = {
        participants: {
          'Test User': {
            name: 'Test Name',
            devices: {
              'Test Device': {
                activity: {
                  id: 'Test Activity',
                  streamId: 'Test Stream',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream',
                    label: 'RTC Stream',
                    tracks: [
                      {
                        id: 'Test Track',
                        sfu: 'test.sfu.com/test',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
        },
        host: null,
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        participants: {},
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          removeParticipants: {
            participants: ['Test User'],
          },
        },
      ]);
    });

    it('works out changes to an existing participant', () => {
      const initial: pb.IState = {
        participants: {
          'Test User': {
            name: 'Test Name',
            devices: {
              'Test Device': {
                activity: {
                  id: 'Test Activity',
                  streamId: 'Test Stream',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream',
                    label: 'RTC Stream',
                    tracks: [
                      {
                        id: 'Test Track',
                        sfu: 'test.sfu.com/test',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
        },
        host: null,
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        participants: {
          'Test User': {
            name: 'Test Name',
            devices: {
              'Test Device': {
                activity: {
                  id: 'Test Activity',
                  streamId: 'Test Stream',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream 2',
                    label: 'RTC Stream 2',
                    tracks: [
                      {
                        id: 'Test Track 2',
                        sfu: 'test.sfu.com/testing',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
        },
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          addParticipants: {
            participants: latest.participants,
          },
        },
      ]);
    });

    it('works out multiple additions, changes and removals', () => {
      const initial: pb.IState = {
        participants: {
          'Test User': {
            name: 'Test Name',
            devices: {
              'Test Device': {
                activity: {
                  id: 'Test Activity',
                  streamId: 'Test Stream',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream',
                    label: 'RTC Stream',
                    tracks: [
                      {
                        id: 'Test Track',
                        sfu: 'test.sfu.com/test',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
          'Test User 2': {
            name: 'Test Name',
            devices: {
              'Test Device': {
                activity: {
                  id: 'Test Activity',
                  streamId: 'Test Stream',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream',
                    label: 'RTC Stream',
                    tracks: [
                      {
                        id: 'Test Track',
                        sfu: 'test.sfu.com/test',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
        },
        host: null,
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        participants: {
          'Test User': {
            name: 'Test Name',
            devices: {
              'Test Device 1a': {
                activity: {
                  id: 'Test Activity 1a',
                  streamId: 'Test Stream',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream 1a',
                    label: 'RTC Stream 1a',
                    tracks: [
                      {
                        id: 'Test Track 1a',
                        sfu: 'test.sfu.com/testing',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
          'Test User 3': {
            name: 'Test Name 3',
            devices: {
              'Test Device 3': {
                activity: {
                  id: 'Test Activity 3',
                  streamId: 'Test Stream 3',
                },
                webRTCStreams: [
                  {
                    id: 'Test RTC Stream 3',
                    label: 'RTC Stream 3',
                    tracks: [
                      {
                        id: 'Test Track 3',
                        sfu: 'test.sfu.com/test 3',
                      },
                    ],
                  },
                ],
              },
            },
            trophies: [],
          },
        },
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          addParticipants: {
            participants: latest.participants,
          },
        },
        {
          removeParticipants: {
            participants: ['Test User 2'],
          },
        },
      ]);
    });
  });

  describe('chat messages', () => {
    it('correctly appends the first message', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const newMessages = [
        { message: 'Test Message', fromUser: 'Test User', timestamp: 123456 },
      ];
      const latest: pb.IState = {
        ...initial,
        chatMessages: newMessages,
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          appendChatMessage: {
            messages: newMessages,
          },
        },
      ]);
    });

    it('correct appends the multiple messages', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const newMessages = [
        {
          message: 'Test Message 1',
          fromUser: 'Test User',
          timestamp: 123456,
        },
        {
          message: 'Test Message 2',
          fromUser: 'Test User 2',
          timestamp: 123457,
        },
      ];
      const latest: pb.IState = {
        ...initial,
        chatMessages: newMessages,
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          appendChatMessage: {
            messages: newMessages,
          },
        },
      ]);
    });

    it('correct appends the multiple messages after the first', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [
          {
            message: 'Test Message 1',
            fromUser: 'Test User',
            timestamp: 123456,
          },
        ],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const newMessages = [
        {
          message: 'Test Message 2',
          fromUser: 'Test User 2',
          timestamp: 123457,
        },
        {
          message: 'Test Message 3',
          fromUser: 'Test User 3',
          timestamp: 123458,
        },
      ];
      const latest: pb.IState = {
        ...initial,
        chatMessages: [
          {
            message: 'Test Message 1',
            fromUser: 'Test User',
            timestamp: 123456,
          },
          ...newMessages,
        ],
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          appendChatMessage: {
            messages: newMessages,
          },
        },
      ]);
    });

    it('correct appends the messages with a non-0 index', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [
          {
            message: 'Test Message 1',
            fromUser: 'Test User',
            timestamp: 123456,
          },
          {
            message: 'Test Message 2',
            fromUser: 'Test User 2',
            timestamp: 123457,
          },
        ],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const newMessages = [
        {
          message: 'Test Message 3',
          fromUser: 'Test User 3',
          timestamp: 123458,
        }
      ];
      const latest: pb.IState = {
        ...initial,
        chatMessages: [
          {
            message: 'Test Message 1',
            fromUser: 'Test User',
            timestamp: 123456,
          },
          {
            message: 'Test Message 2',
            fromUser: 'Test User 2',
            timestamp: 123457,
          },
          ...newMessages,
        ],
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          appendChatMessage: {
            messages: newMessages,
          },
        },
      ]);
    });

    describe('host', () => {
      it('can be set to an ID', () => {
        const initial: pb.IState = {
          participants: {},
          host: null,
          chatMessages: [],
          content: pb.ContentType.Blank,
          endTimestamp: null,
        };
        const latest: pb.IState = {
          ...initial,
          host: 'Test Host',
        };
        const result = generateStateDiff(initial, latest);
        expect(result).toEqual([
          {
            changeHost: {
              hostId: latest.host,
            },
          },
        ]);
      });
    });

    it('can be set to null', () => {
      const initial: pb.IState = {
        participants: {},
        host: 'Test Host',
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        host: null,
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          changeHost: {
            hostId: latest.host,
          },
        },
      ]);
    });
  });

  describe('content', () => {
    it('can be set to a content type', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [],
        content: pb.ContentType.Blank,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        content: pb.ContentType.Video,
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          changeContent: {
            content: latest.content,
          },
        },
      ]);
    });

    it('can be set to blank', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [],
        content: pb.ContentType.Audio,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        content: pb.ContentType.Blank,
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          changeContent: {
            content: latest.content,
          },
        },
      ]);
    });
  });

  describe('end timestamp', () => {
    it("doesn't send an event when null", () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [],
        content: pb.ContentType.Audio,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([]);
    });

    it('correctly sends a classEnded notification when populated', () => {
      const initial: pb.IState = {
        participants: {},
        host: null,
        chatMessages: [],
        content: pb.ContentType.Audio,
        endTimestamp: null,
      };
      const latest: pb.IState = {
        ...initial,
        endTimestamp: 12345,
      };
      const result = generateStateDiff(initial, latest);
      expect(result).toEqual([
        {
          classEnded: {},
        },
      ]);
    });
  });
});
