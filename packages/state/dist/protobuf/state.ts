import { IChatMessage, IClassState, IContent, IDevice, ITrophy, IUser } from '.';
import { Content, ContentType, newDeviceId, DeviceState, Trophy, TrophyType, newUserId, newWebRtcStreamId, newActivityStreamId, newTimestamp, ChatMessageState, ClassState, DeviceID, UserState, newUserRole, UserID } from '../models';
import { values } from '../types';


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

export function validateContentType(content: string): ContentType | undefined {
    // In the case that string is not a member of the enum,
    // this function will return undefined
    // Due to casting content to 'as keyof typeof ContentType'
    // the contentType variable has been explicitly defined as Optional
    const contentType: ContentType | undefined = ContentType[content as keyof typeof ContentType];
    return contentType;
}

export function validateContent(content: IContent): Content | undefined {
    if (!content.type) { console.error('IContent is missing type'); return; }
    if (!content.contentLocation) { console.error('IContent is missing type'); return; }

    const type = validateContentType(content.type);
    if(!type) { console.error(`IContent has an invalid type '${content.type}'`); return; }
    const contentLocation = content.contentLocation;
    return { type, contentLocation };
}

/**
 * This function attempts to return a valid ClassState
 * In the case that it recieves an invalid state it prints an error describing the error
 * and then attempts to let provide a sensible default to allow the user to proceed despite the malformed state message
 * 
 * @param classState 
 * @returns 
 */
export function validateState(classState: IClassState): ClassState | undefined {
    
    const chatMessages: ChatMessageState[] = []
    if(classState.chatMessages) {
        classState.chatMessages.forEach((m) => {
            const validChatMessage = validateChatMessage(m);
            if(!validChatMessage) { console.error(`IClassState has an invalid chatMessage`); return; }
            chatMessages.push(validChatMessage)
        })
    } else {
        console.error(`IClassState is missing chatMessages`);
    }

    let content = { type: ContentType.Blank }
    if(classState.content) {
        const validContent = validateContent(classState.content) 
        if(validContent) {
            content = validContent 
        } else {
            console.error(`IClassState has an invalid content`);
        }
    } else {
        console.error(`IClassState is missing content`);
    }

    const devices: Record<DeviceID, DeviceState> = {}
    if (classState.devices) {
        Object.values(classState.devices).forEach((device) => {
            const validatedDevice = validateDevice(device)
            if(!validatedDevice) { console.error(`IClassState has invalid device`); return; }
            devices[validatedDevice.id] = validatedDevice
        });
    } else {
        console.error('IClassState is missing devices');
    }


    const users: Record<UserID, UserState> = {}
    if (classState.users) {
        Object.values(classState.users).forEach((user) => {
            const validUser = validateUser(user)
            if(!validUser) { console.error(`IClassState has invalid user`); return; }
            const priorDeviceCount = validUser.deviceIds.length
            validUser.deviceIds = validUser.deviceIds.filter((deviceId) => (deviceId in devices))
            if(validUser.deviceIds.length !== priorDeviceCount) { console.error("Removed unknown DeviceID from IUser"); }
            users[validUser.id] = validUser 
        });
    } else {
        console.error('IClassState is missing users');
    }


    for(const device of values(devices)) {
        if(!users.hasOwnProperty(device.userId)) {
            console.error(`Device(${device.id}) references unknown User(${device.userId})`)
        }
    }
    
    const classEndTime = classState.classEndedTime ? newTimestamp(classState.classEndedTime) : undefined
    const hostUserId = classState.hostUserId ? newUserId(classState.hostUserId) : undefined
    return {
         chatMessages,
         content,
         devices,
         users,
         classEndTime,
         hostUserId,
    };
}

export function validateUser(user: IUser): UserState | undefined {
    if(!user.id) { console.error('IUser is missing id'); return; }
    if(!user.deviceIds) { console.error('IUser is missing deviceIds'); return; }
    if(!user.name) { console.error('IUser is missing name'); return; }
    if(!user.role) { console.error('IUser is missing role'); return; }

    const trophies: Trophy[] = []
    for(const trophy of trophies) {
        const validTrophy = validateTrophy(trophy)
        if(validTrophy) { trophies.push(validTrophy) }
    }

    return {
        id: newUserId(user.id),
        deviceIds: user.deviceIds.map((id) => newDeviceId(id)),
        name: user.name,
        role: newUserRole(user.role),
        trophies,
    };
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

