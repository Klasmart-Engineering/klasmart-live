import { ProducerID, SfuID } from 'kidsloop-live-state/network/sfu';
import {useCamera, useGloballyPauseMediaStream, useLocallyPauseMediaTrack, useMediaTrackIsPaused, useWebRtcState, WebRtcContext} from 'kidsloop-live-state/ui';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import {useAsync, UseAsyncReturn} from 'react-async-hook';

export default function Video(): JSX.Element {
  const camera = useCamera();
  const webrtc = useContext(WebRtcContext);
  const [sendingTracks, setSendingTracks] = useState<Promise<[SfuID, ProducerID, MediaStreamTrack]>[]>([]);
  const [trackIds, setTrackIds] = useState<ProducerID[]>([]);
  const send = () => {
    if(!camera.result) { return [];}
    setTrackIds([]);
    const tracks = camera.result.getTracks();
    const sfuId = 'test-sfu' as SfuID;
    const trackPromises = tracks.map(async t => {
      const producer = await webrtc.sendTrack(sfuId, t);
      setTrackIds((trackIds) => [...trackIds, producer.id as ProducerID]);
      return [
        sfuId,
        producer.id,
        producer.track,
      ] as [SfuID, ProducerID, MediaStreamTrack];
    });
    setSendingTracks(trackPromises);
  };
  const [idsText, setIdsText] = useState('Paste IDs here');
  const ids = useMemo(() => {
    try{
      return JSON.parse(idsText);
    } catch {
      return undefined;
    }
  }, [idsText]);

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
      <button onClick={() => camera.result && send()} disabled={!camera.result && !!sendingTracks}>Send Camera</button>
      <AsyncViewMediaStream media={camera} />
      {
        sendingTracks.map((t,i) => <Async key={i} promise={t} element={([sfuId, producerId, t]) => <Track sfuId={sfuId} producerId={producerId} track={t}/>}/>)
      }
      <textarea value={JSON.stringify(trackIds)} readOnly/>
      <textarea value={idsText} onChange={e => setIdsText(e.target.value)}/>
      {
        ids instanceof Array && ids.every(id => typeof id === 'string')
          ? <WebRtcMediaStream ids={ids}/>
          : <>Invalid Ids: {JSON.stringify(ids)}</>
      }
    </div>
  );
}

function WebRtcMediaStream({ids}:{ids: ProducerID[]}) {
  const webrtc = useContext(WebRtcContext);
  const mediaStream = useMemo(() => new MediaStream(), []);
  const trackPromises = useMemo(() => 
    ids.map(id => [
      'test-sfu' as SfuID,
      id,
      webrtc.getTrack('test-sfu' as SfuID, id)
    ] as [SfuID, ProducerID, Promise<MediaStreamTrack>])
  , ids);
  useEffect(() => {
    trackPromises.map(([,,trackPromise]) => 
      trackPromise.then(t => {
        mediaStream.addTrack(t);
        t.addEventListener('ended', () => mediaStream.removeTrack(t));
      })
    );
  },trackPromises);
  return <>
    <ViewMediaStream mediaStream={mediaStream}/>
    {
      trackPromises.map(([sfuId,producerId, t]) => <Async
          key={`${sfuId}-${producerId}`}
          promise={t} 
          element={track => <Track sfuId={sfuId} producerId={producerId} track={track}/>} 
        />
      )
    }
  </>;
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
    autoPlay
    muted
    style={{
      transform: 'scaleX(-1)',
    }}
  />;
}

function Async<T>({promise,element}:{promise: Promise<T>, element: (t: T) => JSX.Element}) {
  const {loading, result, error} = useAsync(() => promise, []);
  if(loading) {return <>Loading...</>;}
  if(error) {return <>Error...</>;}
  return element(result);
}

function Track({sfuId, producerId, track}:{sfuId: SfuID, producerId: ProducerID, track: MediaStreamTrack}) {
  const {globalPause,  localPause} = useWebRtcState(s => s.webrtc.sfus[sfuId]?.tracks[producerId]);
  const locallyPause = useLocallyPauseMediaTrack();
  const localToggle = () => {
    if(locallyPause.loading) {return;}
    locallyPause.execute(sfuId, producerId, !localPause);
  };
  const globallyPause = useGloballyPauseMediaStream();
  const globalToggle = () => {
    if(globallyPause.loading) {return;}
    globallyPause.execute(sfuId, producerId, !globalPause);
  };


    return <div>
      {track.kind === 'audio' ? '📞' : '🎥' }
      <span onClick={localToggle}>
        {locallyPause.loading
          ? '🔁' 
          : (localPause ? '⏸️' : '▶️') 
        }
      </span>
      <span onClick={globalToggle}>
        {globallyPause.loading
          ? '🔁' 
          : (globalPause ? '🚫' : '⭕') 
        }
      </span>
    </div>;

}
