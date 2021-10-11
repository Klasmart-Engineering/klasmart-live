import { IClassEvent, ClassRequest, RewardTrophyToUserRequest, SendChatMessageRequest, SetActivityStreamIdRequest, SetContentRequest, SetHostRequest } from '.';

export const convertRequestToEvent = (requestWrapper: ClassRequest, {userId}: {userId: string}): IClassEvent | undefined => {
    if (requestWrapper.type === undefined) {
      console.log('requestWrapper has no type. this should never happen');
      return;
  }
  const request = requestWrapper[requestWrapper.type];
  if (request === undefined || request === null) {
      console.log('request type and requestWrapper are out of sync. something went wrong generating the protobufs');
      return;
  }
  const baseEvent: IClassEvent = {
    id: requestWrapper.id,
  };
  switch(requestWrapper.type) {
    case 'endClass':
      return {
        ...baseEvent,
        classEnded: {
          timestamp: Date.now(),
        }
      };
    case 'setHost':
      return {
        ...baseEvent,
        hostChanged: {
          hostUserId: (request as SetHostRequest).hostUserId,
        }
      };
    case 'setContent':
      return {
        ...baseEvent,
        contentChanged: {
          content: (request as SetContentRequest).content,
        }
      };
    case 'sendChatMessage':
      return {
        ...baseEvent,
        newChatMessage: {
          chatMessage: {
            text: (request as SendChatMessageRequest).message,
            timestamp: Date.now(),
            userId,
          },
        }
      };
    case 'setActvityStreamId':
      return {
        ...baseEvent,
        actvityStreamIdChanged: {
          activityStreamId: (request as SetActivityStreamIdRequest).activityStreamId,
          deviceId: (request as SetActivityStreamIdRequest).deviceId,
        }
      };
    case 'rewardTrophyToUser':
      return {
        ...baseEvent,
        trophyRewardedToUser: {
          userId: (request as RewardTrophyToUserRequest).userId,
          trophy: (request as RewardTrophyToUserRequest).trophy,
        }
      };
    case 'rewardTrophyToAll':
      return {
        ...baseEvent,
        trophyRewardedToAll: {
          trophy: (request as RewardTrophyToUserRequest).trophy,
        }
      };
    default:
      console.log('request type and requestWrapper are out of sync. something went wrong generating the protobufs');
      return;
  }
};