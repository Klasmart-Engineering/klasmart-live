import { GetStaticProps } from 'next'
import { Provider, useSelector } from 'react-redux'
import { store, Transport } from "kidsloop-live-state"
import { useEffect, useMemo } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

let global: Transport | undefined

export default function RoomTest() {
  useEffect(() => {
    if(global) { return }
    
    const roomId = window?.location.hash.slice(1)
    const url = new URL("wss://live.kidsloop.dev/api/room")
    if(roomId) { url.pathname += `/${roomId}` }
    global = new Transport(
      url.toString(),
      store.dispatch,
    )
  }, [])
  return <Provider store={store}>
    <ShowState />
  </Provider>
}


function ShowState() {
  const state = useSelector((s) => JSON.stringify(s))
  return <>{state}</>
}