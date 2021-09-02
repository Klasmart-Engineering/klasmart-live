import { GetStaticProps } from 'next'
import { Provider, useSelector } from 'react-redux'
import { LiveClassState } from "kidsloop-live-state"
import { useEffect } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

const liveClass = new LiveClassState()

export default function RoomTest() {
  useEffect(() => {
    const roomId = window ? window.location.hash.slice(1) : undefined
    const url = new URL("wss://live.kidsloop.dev/api/room")
    if(roomId) { url.pathname += `/${roomId}` }
    liveClass.connect(url.toString())
  }, [])

  return <Provider store={liveClass.getStore()}>
    <ShowState />
  </Provider>
}


function ShowState() {
  const state = useSelector((s) => JSON.stringify(s))
  return <>{state}</>
}