import Head from "next/head";
import { GetStaticProps } from "next";
import { useEffect, useMemo, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import pb from "kidsloop-live-serialization";
import { nanoid } from "nanoid";

const HEARTBEAT_INTERVAL = 3500;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Home() {
  let url = "wss://live.kidsloop.dev/api/room";
  let acknowledgement: pb.IActionAcknowledgement = {};
  let latestMessage: pb.IStateDiff[] = [];
  let heartbeatHandler;

  useEffect(() => {
    if (window) url += `/${window.location.hash.slice(1)}`;
  }, []);

  const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(
    url,
    {
      protocols: ["live"],
      onOpen: () => {
        (getWebSocket() as WebSocket).binaryType = "arraybuffer";
        heartbeatHandler = setInterval(() => {
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
          latestMessage = pb.StateChanges.decode(bytes).changes;
          console.log("State Changes: ", latestMessage);
        } catch (_error) {
          try {
            acknowledgement = pb.ActionAcknowledgement.decode(bytes);
            console.log("Ack: ", acknowledgement);
            if (acknowledgement.error) {
              throw new Error(acknowledgement.error);
            }
          } catch (e) {
            console.error("Error: ", e);
          }
        }
      },
      onClose: () => {
        clearInterval(heartbeatHandler);
      },
    }
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <>
      Status: {connectionStatus}
      <br />
      Latest Acknowledgement:
      {JSON.stringify(acknowledgement)}
      <br />
      Latest Message:
      {JSON.stringify(latestMessage)}
    </>
  );
}
