import Head from 'next/head'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { }
  }
}

export default function Home() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <Head>
        <link rel="icon" type="image/png" href="favicon.ico" />
        <link
          crossOrigin="anonymous"
          rel="stylesheet"
          id="flatsome-googlefonts-css"
          href="//fonts.googleapis.com/css?family=Noto+Sans+KR%3Aregular%2C900%2C500%7CNoto+Sans%3Aregular%2C700%7CDancing+Script%3Aregular%2C400&amp;display=swap&amp;ver=3.9" type="text/css" media="all"
        />
      </Head>
      <img
        alt="Is it a bird? Is it a 'k'? It's Kidsloop."
        src="/kidsloop.svg"
      />
      <h1
      style={{
        fontFamily: "Noto Sans KR; sans-serif",
        fontSize: "4em",
        color: "#6ad",
        margin: 0,
      }}
      >
        Kidsloop Live
      </h1>
      <h2
        style={{
          fontWeight: 300,
          fontFamily: "Noto Sans KR, sans-serif",
          color: "#555",
        }}
      >
        Development test site
      </h2>
    </div>
  )
}
