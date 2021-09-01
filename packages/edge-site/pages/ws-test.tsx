import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useEffect, useMemo, useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

export default function Home() {
  const [connected, setConnected] = useState(false)
  const [messages, setMessage] = useState<string[]>([])

  useEffect(() => {
    const id = (window)?.location.hash.slice(1)
    const url = new URL("wss://live.kidsloop.dev/api/ws")
    if(id) { url.pathname += `/${id}` }
    const ws = new WebSocket(url.toString())
    ws.addEventListener("open", () => setConnected(true))
    ws.addEventListener("close", () => setConnected(false))
    ws.addEventListener("message", ({data}) => setMessage([...messages, data]))
    if(window) {
      window.addEventListener("beforeunload", () => ws.close(4200))
    }
    return () => ws.close()
  }, [])

  return <>
    Connected: {connected}
    <ol>
      { messages.map((m, i) => <li key={i}>{m}</li>) }
    </ol>
  </>
}
