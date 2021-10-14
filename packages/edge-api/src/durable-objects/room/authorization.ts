import { ClassState, DeviceID, pb } from 'kidsloop-live-state';

export function isAuthorized(request: pb.ClassRequest, state: ClassState, deviceId: DeviceID): boolean {
  
    const device = state.devices[deviceId];
    const user = state.users[device.userId];
  
    switch(request.command) {
      case 'endClass':
      case 'setContent':
      case 'rewardTrophyToAll':
      case 'rewardTrophyToUser':
      case 'setHost':
        return state.hostUserId === user.id;
      case 'setActvityStreamId':
      case 'sendChatMessage':
        return true;
      default:
        console.error(`Rejecting unknown command type '${request.command}'`);
        return false;
    }
  }