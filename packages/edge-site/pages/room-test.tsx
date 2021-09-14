import { GetStaticProps } from 'next';
import { useRef, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import pb from 'kidsloop-live-serialization';
import { nanoid } from 'nanoid';
import { selectRoom } from '../src/store';
import { Client } from 'kidsloop-live-state';
import { useAppDispatch, useAppSelector } from '../src/hooks';

const { Actions } = Client;

const HEARTBEAT_INTERVAL = 3500;
const URL_PATH = 'api/room';

const isBrowser = () => typeof window !== 'undefined';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

function getWebSocketAddress(id?: string) {
  const url = new URL(`wss://${window.location.host}/${URL_PATH}`);
  if (id) url.pathname += `/${id}`;
  return url.toString();
}

export const Home: React.FC = () => {
  if (!isBrowser()) {
    return <></>;
  }

  const state = useAppSelector(selectRoom);
  const dispatch = useAppDispatch();

  const heartbeatHandler = useRef(null);

  const [messageHistory, setMessageHistory] = useState([]);
  const [newChat, setNewChat] = useState('');

  const id = window.location.hash.slice(1);

  if (state.roomId) {
    location.hash = state.roomId;
  }

  const { sendMessage, readyState, getWebSocket } = useWebSocket(
    getWebSocketAddress(id),
    {
      protocols: ['live'],
      onOpen: () => {
        const ws = getWebSocket() as WebSocket;
        ws.binaryType = 'arraybuffer';
        console.log(`connected to ws at: ${ws.url}`);
        heartbeatHandler.current = setInterval(() => {
          const message = pb.Action.encode({
            id: nanoid(),
            heartbeat: {},
          }).finish();
          sendMessage(message);
        }, HEARTBEAT_INTERVAL);
      },
      onMessage: ({ data }) => {
        const bytes = new Uint8Array(data);
        try {
          const { changes } = pb.StateChanges.decode(bytes);
          if (!changes) return;
          changes.forEach((change) => {
            const update = new pb.StateDiff(change);
            // this is required to remove the internal protobuf data
            const tempObject = pb.StateDiff.toObject(update);
            const action = update.action;
            const payload = tempObject[action];
            dispatch(Actions[action](payload));
          });
          setMessageHistory([changes, ...messageHistory]);
        } catch (_error) {
          try {
            const acknowledgement = pb.ActionAcknowledgement.decode(bytes);
            if (acknowledgement.error) {
              throw new Error(acknowledgement.error);
            }
          } catch (e) {
            console.error('Error: ', e);
          }
        }
      },
      onClose: () => {
        clearInterval((heartbeatHandler.current = null));
      },
    }
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const onChatInputChange = (e) => setNewChat(e.target.value);
  const onChatInputKeyDown = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    const message = pb.Action.encode({
      id: nanoid(),
      sendChatMessage: {
        message: newChat,
      },
    }).finish();
    sendMessage(message);
    setNewChat('');
  };

  const reversedMessages = [...state.chatMessages].reverse();

  return (
    <>
      <p>Status: {connectionStatus}</p>
      <div style={{ width: '50%', float: 'left' }}>
        <h3>Chat:</h3>
        <input
          value={newChat}
          onChange={onChatInputChange}
          onKeyDown={onChatInputKeyDown}
        />
        <ol reversed={true}>
          {reversedMessages.map(({ fromUser, message }) => (
            <li>
              {state.participants[fromUser]?.name.replace(
                '@kidsloop.live',
                ''
              ) || 'Anon'}
              : {message}
            </li>
          ))}
        </ol>
      </div>
      <div style={{ width: '50%', float: 'left' }}>
        <h3>Participants</h3>
        <ol>
          {Object.values(state.participants).map((user) => (
            <li> {JSON.stringify(user.name.replace('@kidsloop.live', ''))} </li>
          ))}
        </ol>
        <h3>Message History:</h3>
        <ol reversed={true}>
          {messageHistory.map((message) => (
            <li>{JSON.stringify(message)}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Home;
