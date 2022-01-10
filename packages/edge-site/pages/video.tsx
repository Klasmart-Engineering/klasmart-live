import { TrackLocation, useCamera, useMicrophone, useStream, useTrack } from 'kidsloop-live-state/ui';
import { useCallback, useEffect, useRef, useState } from 'react';

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

  const toggleCamera = () => (camera.paused.locally ? camera.start : camera.stop).execute();
  const toggleMicrophone = () => (microphone.paused.locally ? microphone.start : microphone.stop).execute();

  return <div>
    <ViewMediaStream mediaStream={camera.stream} />
    <div>
      <button onClick={toggleCamera} >{camera.paused.locally ? '🎥' : 'X'}</button>
      {
          camera.paused && <>
            <span>{camera.paused.locally ? '⏸️' : '▶️'}</span>
            <span>{camera.paused.atBroadcast ? '🚫' : '⭕'}</span>
          </>
      }
    </div>
    <div>
      <button onClick={toggleMicrophone}>{microphone.paused.locally ? '📞': 'X'}</button>
      {
        microphone.paused && <>
            <span>{microphone.paused.locally ? '⏸️' : '▶️'}</span>
            <span>{microphone.paused.atBroadcast ? '🚫' : '⭕'}</span>
        </>
      }
    </div>
    <textarea value={JSON.stringify({ video: camera.location, audio: microphone.location })} readOnly />
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

  const toggleLocal = useCallback(() => (track.pause.locally ? track.start : track.stop).execute(), []);
  const toggleGlobal = useCallback(() => track.globalPause.execute(!track.pause.atBroadcast), []);

  return <div>
    {track.kind === 'audio' ? '📞' : undefined}
    {track.kind === 'video' ? '🎥' : undefined}
    {!track.kind ? 'X' : undefined}
    <span onClick={toggleLocal}>
      {track.pause.locally === undefined ? '🔁' : (track.pause.locally ? '⏸️' : '▶️')}
    </span>
    <span onClick={toggleGlobal}>
      {track.pause.atBroadcast === undefined ? '🔁' : (track.pause.atBroadcast ? '🚫' : '⭕')}
    </span>
  </div>;
}
