import { useContext, useState } from "react";
import { ActivityStreamID, Content, TrophyType, UserID } from "../../models";
import { IClassRequest } from "../../protobuf";
import NetworkContext from "../context";


export function useEndClass() {
    const { action, status } = useNetworkAction();
    return {
        endClass: () => action({ endClass: {} }), 
        status
    };
};

export function useRewardTrophyToAll() {
    const { action, status } = useNetworkAction();
    return {
        rewardTrophyToAll: (type: TrophyType) => action({
            rewardTrophyToAll: {
                trophy: {
                    // TODO: Should this be set by the server?
                    timestamp: Date.now(),
                    type,
                }
            }
        }), 
        status
    };
};

export function rewardTrophyToUser() {
    const { action, status } = useNetworkAction();
    return {
        rewardTrophyToAll: (userId: UserID, type: TrophyType) => action({
            rewardTrophyToUser: {
                userId,
                trophy: {
                    // TODO: Should this be set by the server?
                    timestamp: Date.now(),
                    type,
                }
            }
        }), 
        status
    };
};


export function useSendChatMessage() {
    const { action, status } = useNetworkAction();
    return {
        sendChatMessage: (text: string) => action({ sendChatMessage: { text } }), 
        status
    };
};


export function useSetActivityStreamId() {
    const { action, status } = useNetworkAction();
    return {
        setActivityStreamId: (activityStreamId: ActivityStreamID) => action({
            setActvityStreamId: {
                activityStreamId
            }
        }), 
        status
    };
};

export function useSetContent() {
    const { action, status } = useNetworkAction();
    return {
        setContent: (content: Content) => action({
            setContent: {
                content,
            }
        }), 
        status
    };
};

export function useSetHost() {
    const { action, status } = useNetworkAction();
    return {
        setHost: (hostUserId: UserID) => action({
            setHost: {
                hostUserId, 
            }
        }), 
        status
    };
};

export type ActionStatus = "pending" | "success" | "failure"

export function useNetworkAction() {
    const network = useContext(NetworkContext);
    // const mutex = useRef(false)
    const [status, setStatus] = useState<ActionStatus>("pending");
  
    const action = (request: IClassRequest) => {
      // if (mutex.current) { return }
      // mutex.current = true;
  
      setStatus("pending");
      network.send(request)
        .then(() => setStatus("success"))
        .catch((e) => {
          console.error(e);
          setStatus("failure");
        })
        // .finally(() => mutex.current = false)
    };
  
    return { action, status };

  }
  