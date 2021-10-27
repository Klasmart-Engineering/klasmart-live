import { IChatMessage, IClassState, IContent, IDevice, ITrophy, IUser } from '.';
import { Content, ContentType, DeviceState, Trophy, ChatMessageState, ClassState, UserState } from '../models';
export declare function validateChatMessage({ text, timestamp, userId }: IChatMessage): ChatMessageState | undefined;
export declare function validateContentType(content: string): ContentType | undefined;
export declare function validateContent(content: IContent): Content | undefined;
/**
 * This function attempts to return a valid ClassState
 * In the case that it recieves an invalid state it prints an error describing the error
 * and then attempts to let provide a sensible default to allow the user to proceed despite the malformed state message
 *
 * @param classState
 * @returns
 */
export declare function validateState(classState: IClassState): ClassState | undefined;
export declare function validateUser(user: IUser): UserState | undefined;
export declare function validateDevice({ id, activityStreamId, userId, webRtcStreamIds }: IDevice): DeviceState | undefined;
export declare function validateTrophy(trophy: ITrophy): Trophy | undefined;
//# sourceMappingURL=state.d.ts.map