import { ContentType as PBContentType, IChatMessage, IClassState, IContent, IDevice, ITrophy } from '.';
import { Content, ContentType, newDeviceId, DeviceState, Trophy, TrophyType, newUserId, newWebRtcStreamId, newActivityStreamId, newTimestamp, ChatMessageState, ClassState } from '../models';


export function validateChatMessage({text,timestamp,userId}: IChatMessage): ChatMessageState | undefined {
    if(!text) { console.error('IChatMessage is missing text'); return; }
    if(!timestamp) { console.error('IChatMessage is missing timestamp'); return; }
    if(!userId) { console.error('IChatMessage is missing userId'); return; }

    return {
        userId: newUserId(userId),
        timestamp: newTimestamp(timestamp),
        text,
    };
}

export function validateContentType(content: PBContentType): ContentType | undefined {
    switch (content) {
        case PBContentType.Activity:
            return ContentType.Activity;
        case PBContentType.Audio:
            return ContentType.Audio;
        case PBContentType.Blank:
            return ContentType.Blank;
        case PBContentType.Camera:
            return ContentType.Camera;
        case PBContentType.Image:
            return ContentType.Image;
        case PBContentType.Screen:
            return ContentType.Screen;
        case PBContentType.Stream:
            return ContentType.Stream;
        case PBContentType.Video:
            return ContentType.Video;
        default:
            console.error('Unkown ContentType');
            return undefined;
    }
}

export function validateContent(content: IContent): Content | undefined {
    if (!content.type) { console.error('IContent is missing type'); return; }
    if (!content.contentLocation) { console.error('IContent is missing type'); return; }

    const type = validateContentType(content.type);
    if(!type) { return; }
    const contentLocation = content.contentLocation;
    return { type, contentLocation };
}

export function validateState(classState: IClassState): ClassState | undefined {
    throw new Error('Not implemented');
    // if (!classState.chatMessages) { console.error('IClassState is missing chatMessages'); return; }
    
    // const chatMessages: ChatMessage[] = classState.chatMessages.flatMap((m) => {
    //     const chatMessage = validateChatMessage(m);
    //     return chatMessage ? chatMessages : [];
    // });


    // return {
    //      chatMessages,
    // };
}

export function validateDevice({id, activityStreamId, userId, webRtcStreamIds}: IDevice): DeviceState | undefined {
    if(!id) { console.error('IDevice is missing id'); return; }
    if(!userId) { console.error('IDevice is missing userId'); return; }
    return {
        id: newDeviceId(userId),
        userId: newUserId(userId),
        activityStreamID: activityStreamId ? newActivityStreamId(activityStreamId) : undefined,
        webRTCStreamIDs: webRtcStreamIds?.map((id) => newWebRtcStreamId(id)) || []
    };
}

export function validateTrophy(trophy: ITrophy): Trophy | undefined {
    if (!trophy.timestamp) { console.error('ITrophy is missing trophy.timestamp'); return; }
    if (!trophy.type) { console.error('ITrophy is missing trophy.type'); return; }
    //TODO: Handle uint64
    const timestamp = trophy.timestamp;
    const type = trophy.type as TrophyType;
    return { timestamp, type };
}

