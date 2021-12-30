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

  const toggleCamera = () => (camera.isSending ? camera.stop : camera.start).execute();
  const toggleMicrophone = () => (microphone.isSending ? microphone.stop : microphone.start).execute();

  return <div>
    <ViewMediaStream mediaStream={camera.stream} />
    <div>
      <button onClick={toggleCamera} >{camera.isSending ? '🎥' : 'X'}</button>
      {
          camera.paused && <>
            <span>{camera.paused.localPause ? '⏸️' : '▶️'}</span>
            <span>{camera.paused.globalPause ? '🚫' : '⭕'}</span>
          </>
      }
    </div>
    <div>
      <button onClick={toggleMicrophone}>{microphone.isSending ? '📞': 'X'}</button>
      {
        microphone.paused && <>
            <span>{microphone.paused.localPause ? '⏸️' : '▶️'}</span>
            <span>{microphone.paused.globalPause ? '🚫' : '⭕'}</span>
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
  const {
    track,
    paused,
    localPause,
    globalPause,
  } = useTrack(location);

  const toggleLocal = useCallback(() => localPause.execute(!paused?.localPause), [paused?.localPause]);
  const toggleGlobal = useCallback(() => globalPause.execute(!paused?.globalPause), [paused?.globalPause]);

  return <div>
    {
      !track.result
        ? (track.loading ? '🔁' : 'X')
        : (track.result.kind === 'audio' ? '📞' : '🎥')
    }
    <span onClick={toggleLocal}>
      {localPause.loading ? '🔁' : (paused?.localPause ? '⏸️' : '▶️')}
    </span>
    <span onClick={toggleGlobal}>
      {globalPause.loading ? '🔁' : (paused?.globalPause ? '🚫' : '⭕')}
    </span>
  </div>;
}
