import { IActivityStreamIdChangedEvent, IClassEndedEvent, IClassMessage, IContentChangedEvent, IDeviceConnectedEvent, IDeviceDisconnectedEvent, IHostChangedEvent, IJoinEvent, INewChatMessageEvent, ITrophyRewardedToAllEvent, ITrophyRewardedToUserEvent } from '.';
import { newActivityStreamId, newDeviceId, newTimestamp, newUserId, newUserRole } from '../models';
import { ClassAction, classActions } from '../redux/class';
import { validateChatMessage, validateContent, validateDevice, validateState, validateTrophy } from './state';


export function messageToClassAction(message: IClassMessage): ClassAction | undefined {
    if(message.activityStreamIdChanged) {
        return activityStreamIdChangedAction(message.activityStreamIdChanged);
    }
    if(message.classEnded) {
        return classEndedAction(message.classEnded);
    }
    if(message.contentChanged) {
        return contentChangedAction(message.contentChanged);
    }
    if(message.deviceConnected) {
        return deviceConnectedAction(message.deviceConnected);
    }
    if(message.deviceDisconnected) {
        return deviceDisconnectedAction(message.deviceDisconnected);
    }
    if(message.hostChanged) {
        return hostChangedAction(message.hostChanged);
    }
    if(message.newChatMessage) {
        return newChatMessageAction(message.newChatMessage);
    }
    if(message.joinEvent) {
        return joinAction(message.joinEvent);
    }
    if(message.trophyRewardedToAll) {
        return trophyRewardedToAllAction(message.trophyRewardedToAll);
    }
    if(message.trophyRewardedToUser) {
        return trophyRewardedToUserAction(message.trophyRewardedToUser);
    }
    return undefined;
}

export function activityStreamIdChangedAction(event: IActivityStreamIdChangedEvent): ReturnType<typeof classActions.setActivityStreamId> | undefined {
    if(!event.deviceId) { console.error('IActivityStreamIdChangedEvent missing deviceId'); return; }
    
    return classActions.setActivityStreamId({
        deviceId: newDeviceId(event.deviceId),
        activityStreamId: event.activityStreamId ? newActivityStreamId(event.activityStreamId) : undefined,
    });    
}

export function classEndedAction(event: IClassEndedEvent): ReturnType<typeof classActions.endClass> | undefined {
    if(!event.timestamp) { console.error('IClassEndedEvent is missing timestamp'); return; }
    const timestamp = newTimestamp(event.timestamp)
    return classActions.endClass({timestamp});
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
    if(!event.hostDeviceId) { console.error('IHostChangedEvent is missing hostDeviceId'); return; }

    const hostDeviceId = newDeviceId(event.hostDeviceId);

    return classActions.setHost(hostDeviceId);
}

export function newChatMessageAction(event: INewChatMessageEvent): ReturnType<typeof classActions.addChatMessage> | undefined {
    if(!event.chatMessage) { console.error('INewChatMessageEvent is missing chatMessage'); return; }

    const chatMessage = validateChatMessage(event.chatMessage);
    if(!chatMessage) { return; }

    return classActions.addChatMessage(chatMessage);    
}

export function joinAction(event: IJoinEvent): ReturnType<typeof classActions.join> | undefined {
    if(!event.state) { console.error('ISetClassStateEvent is missing state'); return; }
    if(!event.deviceId) { console.error('ISetClassStateEvent is missing deviceId'); return; }
    const state = validateState(event.state);
    if(!state) { return; }
    return classActions.join({
        state,
        deviceId: newDeviceId(event.deviceId),
    });
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