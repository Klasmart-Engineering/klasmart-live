import { GetStaticProps } from 'next'
import { IframeHTMLAttributes, useEffect, useRef, useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

export default function Report() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [url,setUrl] = useState("/h5p/play/605891d02af9710014707a44")
  const [ID,setID] = useState("Waiting for ID...")

  function onMessage({data}: MessageEvent<any>) {
    console.log(data)
    setID(data.toString())
  }

  useEffect(() => {
    const iframeWindow = iframeRef.current?.contentWindow
    if(!iframeWindow) { return }

    iframeWindow.addEventListener("message", onMessage)
    return () => iframeWindow.removeEventListener("message", onMessage)
  }, [iframeRef.current?.contentWindow])

  return <>
    <div>{ID}</div>
    <iframe ref={iframeRef} src={url} />
  </>
}
