import { DeviceID, pb, UserID } from 'kidsloop-live-state/server';

export const requestToMessage = (requestProperties: pb.IClassRequest, userId: UserID, deviceId: DeviceID): pb.IClassMessage | undefined => {
    const request = pb.ClassRequest.create(requestProperties);
    if (!request.command) {
      console.log('request has no command. this should never happen');
      return;
    }
  
    if (request.endClass) {
      return {
        classEnded: {
          timestamp: Date.now(),
        }
      };
    } else if (request.setHost) {
      return {
        hostChanged: {
          ...request.setHost,
        }
      };
    } else if (request.setContent) {
      return {
        contentChanged: {
          ...request.setContent,
        }
      };
    } else if (request.sendChatMessage) {
      return {
        newChatMessage: {
          chatMessage: {
            ...request.sendChatMessage,
            timestamp: Date.now(),
            userId,
          },
        }
      };
    } else if (request.setActivityStreamId) {
      return {
        activityStreamIdChanged: {
          deviceId,
          ...request.setActivityStreamId,
        }
      };
    } else if (request.rewardTrophyToUser) {
      return {
        trophyRewardedToUser: {
          ...request.rewardTrophyToUser
        }
      };
    } else if (request.rewardTrophyToAll) {
      return {
        trophyRewardedToAll: {
          ...request.rewardTrophyToAll
        }
      };
    } else {
      console.error('Network Message and ClassRequest are out of sync. It is likely that the application must be updated to a newer protocol version');
      return;
    }
  };