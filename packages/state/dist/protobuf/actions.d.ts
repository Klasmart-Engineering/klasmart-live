import { IActivityStreamIdChangedEvent, IClassEndedEvent, IClassMessage, IContentChangedEvent, IDeviceConnectedEvent, IDeviceDisconnectedEvent, IHostChangedEvent, IJoinEvent, INewChatMessageEvent, ITrophyRewardedToAllEvent, ITrophyRewardedToUserEvent } from '.';
import { ClassAction, classActions } from '../redux/class';
export declare function messageToClassAction(message: IClassMessage): ClassAction | undefined;
export declare function actvityStreamIdChangedAction(event: IActivityStreamIdChangedEvent): ReturnType<typeof classActions.setActivityStreamId> | undefined;
export declare function classEndedAction(event: IClassEndedEvent): ReturnType<typeof classActions.endClass> | undefined;
export declare function contentChangedAction(event: IContentChangedEvent): ReturnType<typeof classActions.setContent> | undefined;
export declare function deviceConnectedAction(event: IDeviceConnectedEvent): ReturnType<typeof classActions.deviceConnect> | undefined;
export declare function deviceDisconnectedAction({ deviceId }: IDeviceDisconnectedEvent): ReturnType<typeof classActions.deviceDisconnect> | undefined;
export declare function hostChangedAction(event: IHostChangedEvent): ReturnType<typeof classActions.setHost> | undefined;
export declare function newChatMessageAction(event: INewChatMessageEvent): ReturnType<typeof classActions.addChatMessage> | undefined;
export declare function joinAction(event: IJoinEvent): ReturnType<typeof classActions.join> | undefined;
export declare function trophyRewardedToAllAction(event: ITrophyRewardedToAllEvent): ReturnType<typeof classActions.rewardTrophyToAll> | undefined;
export declare function trophyRewardedToUserAction(event: ITrophyRewardedToUserEvent): ReturnType<typeof classActions.rewardTrophyToUser> | undefined;
//# sourceMappingURL=actions.d.ts.map