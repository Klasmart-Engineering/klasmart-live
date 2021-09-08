import { GetStaticProps } from "next";
import { Provider, useSelector } from "react-redux";
import { store } from "kidsloop-live-state";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function RoomTest() {
  let ws: WebSocket;
  useEffect(() => {
    const roomId = window ? window.location.hash.slice(1) : undefined;
    const url = new URL("wss://live.kidsloop.dev/api/room");
    if (roomId) {
      url.hostname += `/${roomId}`;
    }
    ws = new WebSocket(url.toString(), ["live"]);
    ws.binaryType = "arraybuffer";
    ws.addEventListener("open", (evt) => {
      console.log("On Open", evt);
    });
    ws.addEventListener("message", (evt) => {
      console.log("On message", evt);
    });
    ws.addEventListener("close", (evt) => {
      console.log("On close", evt);
    });
    ws.addEventListener("error", (evt) => {
      console.log("On error", evt);
    });
    console.log(ws);
  }, []);

  return (
    <Provider store={store}>
      <ShowState />
    </Provider>
  );
}

function ShowState() {
  const state = useSelector((s) => s)["room"];
  return (
    <>
      <h1>Room State</h1>
      {Object.entries(state).map(([k, v]) => (
        <div>
          <b>{JSON.stringify(k).replaceAll('"', "")}</b>: {JSON.stringify(v)}
        </div>
      ))}
    </>
  );
}
