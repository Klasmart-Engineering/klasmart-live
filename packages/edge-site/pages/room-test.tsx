import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useEffect, useMemo, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

let heartbeatHandler;

export default function Home() {
  const url = "wss://live.kidsloop.dev/api/room";

  const {
    sendMessage,
    lastMessage,
    readyState,
  } = useWebSocket(url, {
    onOpen: () => {
      heartbeatHandler = setInterval(() => sendMessage('heartbeat'), 1000);
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

  return <>
    Status: {connectionStatus}
    <br/>
    { lastMessage?.data }
  </>
}
