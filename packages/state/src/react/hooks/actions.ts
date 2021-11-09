import { useContext } from "react";
import { useAsyncCallback } from "react-async-hook";
import { ActivityStreamID, Content, TrophyType, UserID } from "../../models";
import { IClassRequest } from "../../protobuf";
import NetworkContext from "../context";

export function useJoinClass() {
  const network = useContext(NetworkContext);
  const initWs = (url: string) => network.initWs(url);
  const { execute: joinClass, status } = useAsyncCallback(initWs, {
    onError: (e) => console.error(e),
  });
  return { joinClass, status };
}

export function useLeaveClass() {
  const network = useContext(NetworkContext);
  const close = (reason?: string) => network.close(4200, reason);
  const { execute: leaveClass, status } = useAsyncCallback(close);
  return { leaveClass, status };
}

export function useEndClass() {
  const { execute, status } = useNetworkAction(() => ({ endClass: {} }));
  return { endClass: execute, status };
}

export function useRewardTrophyToAll() {
  const { execute, status } = useNetworkAction((type: TrophyType) => ({
    rewardTrophyToAll: {
      trophy: {
        // TODO: Should this be set by the server?
        timestamp: Date.now(),
        type,
      },
    },
  }));
  return { rewardTrophyToAll: execute, status };
}

export function useRewardTrophyToUser() {
  const { execute, status } = useNetworkAction(
    (userId: UserID, type: TrophyType) => ({
      rewardTrophyToUser: {
        userId,
        trophy: {
          // TODO: Should this be set by the server?
          timestamp: Date.now(),
          type,
        },
      },
    })
  );
  return { rewardTrophyToUser: execute, status };
}

export function useSendChatMessage() {
  const { execute, status } = useNetworkAction((text: string) => ({
    sendChatMessage: {
      text,
    },
  }));
  return { sendChatMessage: execute, status };
}

export function useSetActvityStreamId() {
  const { execute, status } = useNetworkAction(
    (activityStreamId: ActivityStreamID) => ({
      setActvityStreamId: {
        activityStreamId,
      },
    })
  );
  return { setActvityStreamId: execute, status };
}

export function useSetContent() {
  const { execute, status } = useNetworkAction((content: Content) => ({
    setContent: {
      content,
    },
  }));
  return { setContent: execute, status };
}

export function useSetHost() {
  const { execute, status } = useNetworkAction((hostUserId: UserID) => ({
    setHost: { hostUserId },
  }));
  return { setHost: execute, status };
}

function useNetworkAction<Args extends any[] = any[]>(
  buildRequest: (...args: Args) => IClassRequest
) {
  const network = useContext(NetworkContext);
  const sendRequest = async (...args: Args) => {
    const request = buildRequest(...args);
    network.send(request);
  };
  return useAsyncCallback(sendRequest);
}
