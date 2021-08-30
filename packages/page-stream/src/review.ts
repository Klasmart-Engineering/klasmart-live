import { Replayer } from "rrweb";
import { ReviewStream } from "./review-stream";

new ReviewStream(
    `wss://${window.location.host}/api/activity/${window.location.hash.slice(1)}`,
    new Replayer([], { liveMode: true }),
)