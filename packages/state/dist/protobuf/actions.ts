import { IActivityStreamIdChangedEvent, IClassEndedEvent, IContentChangedEvent, IDeviceConnectedEvent, IDeviceDisconnectedEvent, IHostChangedEvent, INewChatMessageEvent, ISetClassStateEvent, ITrophyRewardedToAllEvent, ITrophyRewardedToUserEvent } from '.';
import { newActivityStreamId, newDeviceId, newUserId, newUserRole } from '../models';
import { classActions } from '../redux/class';
import { validateChatMessage, validateContent, validateDevice, validateState, validateTrophy } from './state';

export function actvityStreamIdChangedAction(event: IActivityStreamIdChangedEvent): ReturnType<typeof classActions.setActivityStreamId> | undefined {
    if(!event.deviceId) { console.error('IActivityStreamIdChangedEvent missing deviceId'); return; }
    if(!event.activityStreamId) { console.error('IActivityStreamIdChangedEvent missing activityStreamId'); return; }
    
    return classActions.setActivityStreamId({
        deviceId: newDeviceId(event.deviceId),
        activityStreamId: newActivityStreamId(event.activityStreamId),
    });    
}

export function classEndedAction(event: IClassEndedEvent): ReturnType<typeof classActions.endClass> | undefined {
    //TODO: Utilize event.timestamp
    return classActions.endClass();
}

export function contentChangedAction(event: IContentChangedEvent): ReturnType<typeof classActions.setContent> | undefined {
    if(!event.content) { console.error('IContentChangedEvent is missing content'); return; }
    
    const content = validateContent(event.content);
    if(!content) { return; }

    return classActions.setContent(content);    
}

export function deviceConnectedAction(event: IDeviceConnectedEvent): ReturnType<typeof classActions.deviceConnect> | undefined {
    if(!event.name) { console.error('IDeviceConnectedEvent is missing name'); return; }
    if(!event.role) { console.error('IDeviceConnectedEvent is missing role'); return; }
    if(!event.device) { console.error('IDeviceConnectedEvent is missing device'); return; }
    
    const device = validateDevice(event.device);
    if(!device) { return; }

    return classActions.deviceConnect({
        name: event.name,
        role: newUserRole(event.role),
        device,
    });
}

export function deviceDisconnectedAction({deviceId}: IDeviceDisconnectedEvent): ReturnType<typeof classActions.deviceDisconnect> | undefined {
    if(!deviceId) { console.error('IDeviceDisconnectedEvent is missing deviceId'); return; }

    return classActions.deviceDisconnect({
        deviceId: newDeviceId(deviceId),
    });    
}

export function hostChangedAction(event: IHostChangedEvent): ReturnType<typeof classActions.setHost> | undefined {
    if(!event.hostUserId) { console.error('IHostChangedEvent is missing hostUserId'); return; }

    const hostUserId = newUserId(event.hostUserId);

    return classActions.setHost(hostUserId);
}

export function newChatMessageAction(event: INewChatMessageEvent): ReturnType<typeof classActions.addChatMessage> | undefined {
    if(!event.chatMessage) { console.error('INewChatMessageEvent is missing chatMessage'); return; }

    const chatMessage = validateChatMessage(event.chatMessage);
    if(!chatMessage) { return; }

    return classActions.addChatMessage(chatMessage);    
}

export function setRoomStateAction(event: ISetClassStateEvent): ReturnType<typeof classActions.setState> | undefined {
    if(!event.state) { console.error('ISetClassStateEvent is missing state'); return; }
    const state = validateState(event.state);
    if(!state) { return; }
    return classActions.setState(state);
}

export function trophyRewardedToAllAction(event: ITrophyRewardedToAllEvent): ReturnType<typeof classActions.rewardTrophyToAll> | undefined {
    if(!event.trophy) { console.error('ITrophyRewardedToAllEvent is missing trophy'); return; }

    const trophy = validateTrophy(event.trophy);
    if(!trophy) { return; }

    return classActions.rewardTrophyToAll({ trophy });
}

export function trophyRewardedToUserAction(event: ITrophyRewardedToUserEvent): ReturnType<typeof classActions.rewardTrophyToUser> | undefined {
    if(!event.userId) { console.error('ITrophyRewardedToAllEvent is missing userId'); return; }
    if(!event.trophy) { console.error('ITrophyRewardedToAllEvent is missing trophy'); return; }
    
    const trophy = validateTrophy(event.trophy);
    if(!trophy) { return; }

    return classActions.rewardTrophyToUser({
        userId: newUserId(event.userId),
        trophy,
    });
}