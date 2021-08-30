import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

export default function Report() {
  const [IDs,setIDs] = useState<string[]>([])
  const [reportWindow, setReportWindow] = useState<Window>(null)

  function onClose() { setReportWindow(null) }
  function onMessage({data}: MessageEvent<any>) { setIDs((ids) => [...ids, data.toString()]) }
  function open(id: string) {
    const reviewWindow = window.open(`/review.html#${id}`)
    reviewWindow.addEventListener("close", () => setIDs((ids) => ids.filter((x) => x!==id)))
  }

  useEffect(() => {
    if(!reportWindow) { return }
    reportWindow.addEventListener("close", onClose)
    reportWindow.addEventListener("message", onMessage)
    return () => {
      reportWindow.removeEventListener("message", onMessage)
      reportWindow.removeEventListener("close", onClose)
    }
  }, [reportWindow])

  return <>
    <button onClick={(e) => setReportWindow(() => window.open("/h5p/play/605891d02af9710014707a44"))}>New</button>
    <br />
    <br />
    {
      IDs.map((id) => (
        <>
          <button key={id} onClick={() => open(id)}>
            View {id.slice(0,8)}
          </button>
          <br />
        </>
        )
      )
    }
  </>
}
