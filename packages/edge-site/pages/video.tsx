import { TrackLocation, useCamera, useMicrophone, useStream, useTrack } from 'kidsloop-live-state/ui';
import { useCallback, useEffect, useRef, useState } from 'react';

export async function getInitialProps() {
  return { props: { } };
}



export default function Video(): JSX.Element {
  const [idsText, setIdsText] = useState<string>();
  const [streams, setStreams] = useState<Array<{audio: TrackLocation, video: TrackLocation}>>([]);
  const addStream = () => {
    try {
      const input = JSON.parse(idsText);
      if (!input || typeof input !== 'object') { return; }
      const {audio, video} = input;
      if (typeof audio !== 'object') { return; }
      if (typeof video !== 'object') { return; }
      setStreams((ids) => [...ids, {audio, video}]);
    } catch {/* Ignore */}
  };

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
      <MyCamera />
      <h1>
        Kidsloop Live
      </h1>
      <textarea defaultValue='Paste IDs here' value={idsText} onChange={e => setIdsText(e.target.value)} />
      <button onClick={addStream}>Add</button>
      {streams.map(({audio, video}, i) => <WebRtcMediaStream key={i} audio={audio} video={video} />)}
    </div>
  );
}

function MyCamera() {
  const camera = useCamera();
  const microphone = useMicrophone();

  const toggleCamera = () => (camera.paused.locally !== true ? camera.start : camera.stop).execute();
  const toggleMicrophone = () => (microphone.paused.locally !== true ? microphone.start : microphone.stop).execute();

  return <div>
    <ViewMediaStream mediaStream={camera.stream} />
    <div>
      <button onClick={toggleCamera} >{camera.paused.locally !== undefined ? '🎥' : 'X'}</button>
      {
          camera.paused && <>
            <span>{camera.paused.locally ? '⏸️' : '▶️'}</span>
            <span>{camera.paused.atBroadcast ? '🚫' : '⭕'}</span>
          </>
      }
    </div>
    <div>
      <button onClick={toggleMicrophone}>{microphone.paused.locally !== undefined ? '📞': 'X'}</button>
      {
        microphone.paused && <>
            <span>{microphone.paused.locally ? '⏸️' : '▶️'}</span>
            <span>{microphone.paused.atBroadcast ? '🚫' : '⭕'}</span>
        </>
      }
    </div>
    <textarea value={JSON.stringify({ video: camera.location, audio: microphone.location })} readOnly />
    <textarea value={JSON.stringify({ camera, microphone }, undefined, 2)} readOnly />
  </div>;
}


function WebRtcMediaStream({ audio, video }: { audio?: TrackLocation, video?: TrackLocation }) {
  const mediaStream = useStream(audio, video);
  return <>
    <ViewMediaStream mediaStream={mediaStream} />
    <Track location={video} />
    <Track location={audio} />
  </>;
}

function ViewMediaStream({ mediaStream }: { mediaStream: MediaStream }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!videoRef.current) { return; }
    videoRef.current.srcObject = mediaStream;
  }, [mediaStream, videoRef.current]);
  return <video
    ref={videoRef}
    width="50%"
    height="50%"
    autoPlay
    muted
    style={{
      transform: 'scaleX(-1)',
    }}
  />;
}

function Track({ location }: { location: TrackLocation }) {
  const track = useTrack(location);

  return <div>
    {!track.kind ? '?' : undefined}
    {track.kind === 'audio' ? '📞' : undefined}
    {track.kind === 'video' ? '🎥' : undefined}
    <button onClick={() => track.start.execute()}>Start</button>
    <button onClick={() => track.stop.execute()}>Stop</button>
    <button onClick={() => track.globalPause.execute(true)}>Global Pause</button>
    <button onClick={() => track.globalPause.execute(false)}>Global Resume</button>
    <textarea value={JSON.stringify({ track }, undefined, 2)} readOnly />
  </div>;
}
