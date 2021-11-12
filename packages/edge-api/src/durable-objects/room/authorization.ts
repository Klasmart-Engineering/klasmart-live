import { ClassState, DeviceID, pb } from 'kidsloop-live-state/server';
import { Context } from './authentication';

export function isAuthorized(
    request: pb.ClassRequest,
    state: ClassState,
    context: Context,
    deviceId: DeviceID,
  ): boolean {
    const deivce = state.devices[deviceId];
    const user = state.users[context.userId];
  
    switch(request.command) {
      case 'endClass':
      case 'setContent':
      case 'rewardTrophyToAll':
      case 'rewardTrophyToUser':
      case 'setHost':
        if(!deivce) { return false; }
        return state.hostDeviceId === deivce.id;
      case 'setActvityStreamId':
      case 'sendChatMessage':
        return true;
      default:
        console.error(`Rejecting unknown command type '${request.command}'`);
        return false;
    }
  }