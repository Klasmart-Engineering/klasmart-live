import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useEffect, useMemo, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import pb from 'kidsloop-live-serialization';


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

let heartbeatHandler;
let heartbeatID = 0;

export default function Home() {
  const url = "wss://live.kidsloop.dev/api/room";

  const {
    sendMessage,
    lastMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(url, {
    protocols: ['live'],
    onOpen: () => {
      (getWebSocket() as WebSocket).binaryType = 'arraybuffer';
      heartbeatHandler = setInterval(() => {
        const message = pb.Action.encode({id: `${heartbeatID++}`, heartbeat: {}}).finish()
        sendMessage(message);
      }, 1000)
    },
    onClose: () => {
      clearInterval(heartbeatHandler);
    }
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const acknowledgement = lastMessage ? pb.ActionAcknowledgement.decode(new Uint8Array(lastMessage.data)).toJSON() : {};

  return <>
    Status: {connectionStatus}
    <br/>
    Num Heartbeats: { acknowledgement.id || 0 }
  </>
}
