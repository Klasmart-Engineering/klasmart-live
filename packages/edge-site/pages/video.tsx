import { SfuID } from 'kidsloop-live-state/network/sfu';
import {useCamera, useSendMediaStream} from 'kidsloop-live-state/ui';
import { useEffect, useRef } from 'react';
import {UseAsyncReturn} from 'react-async-hook';

export default function Video(): JSX.Element {
  const camera = useCamera();
  const send = useSendMediaStream();
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <h1>
        Kidsloop Live
      </h1>
      <button onClick={() => camera.execute()} disabled={camera.loading}>Get Camera</button>
      <button onClick={() => camera.result && send.execute('test-sfu' as SfuID, camera.result)} disabled={!camera.result || send.loading}>Send Camera</button>
      {/* <button onClick={} disabled={true}>Recieve Camera</button> */}
      <AsyncViewMediaStream media={camera} />
      <textarea value={JSON.stringify(send.result)} readOnly/>
    </div>
  );
}


function AsyncViewMediaStream({media}:{media: UseAsyncReturn<MediaStream>}) {
  if(media.error) { return <div>Unable to get media: {media.error.toString()}</div>; }
  if(!media.result || media.loading) { return <div>Waiting for media</div>; }
  
  return <ViewMediaStream mediaStream={media.result}/>;
}

function ViewMediaStream({mediaStream}: {mediaStream: MediaStream}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log(mediaStream);
  useEffect(() => {
    if(!videoRef.current) { return; }
    videoRef.current.srcObject = mediaStream;
  }, [mediaStream, videoRef.current]);
  return <video
    ref={videoRef}
    width={100}
    height={100}
    autoPlay
    muted
    style={{
      transform: 'scaleX(-1)',
    }}
  />;
}