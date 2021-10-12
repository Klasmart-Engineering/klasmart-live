import { ClassRequest, IClassMessage, IClassRequest, IClassResponse } from '.';
import { DeviceID, UserID } from '../models';

export const convertCommandToEvent = (requestProperties: IClassRequest, userId: UserID, deviceId: DeviceID): IClassMessage | undefined => {
  const request = ClassRequest.create(requestProperties);
  if (!request.command) {
      console.log('request has no command. this should never happen');
      return;
  }

  const response: IClassResponse = { id: request.requestId };

    if(request.endClass) {
      return {
        response,
        classEnded: {
          timestamp: Date.now(),
        }
      };
    }
    else if(request.setHost) {
      return {
        response,
        hostChanged: {
          ...request.setHost,
        }
      };
    }
    else if(request.setContent) {
      return {
        response,
        contentChanged: {
          ...request.setContent,
        }
      };
    }
    else if(request.sendChatMessage) {
      return {
        response,
        newChatMessage: {
          chatMessage: {
            ...request.sendChatMessage,
            timestamp: Date.now(),
            userId,
          },
        }
      };
    }
    else if(request.setActvityStreamId) {
      return {
        response,
        actvityStreamIdChanged: {
          deviceId,
          ...request.setActvityStreamId,
        }
      };
    }
    else if(request.rewardTrophyToUser) {
      return {
        response,
        trophyRewardedToUser: {
          ...request.rewardTrophyToUser
        }
      };
    }
    else if(request.rewardTrophyToAll) {
      return {
        response,
        trophyRewardedToAll: {
          ...request.rewardTrophyToAll
        }
      };
    } else {
      console.log('Network Message and ClassRequest are out of sync. It is likely that the application must be updated to a newer protocol version');
      return;
  }
};