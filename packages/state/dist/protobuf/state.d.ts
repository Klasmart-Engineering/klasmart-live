import { IChatMessage, IClassState, IContent, IDevice, ITrophy } from '.';
import { Content, ContentType, DeviceState, Trophy, ChatMessageState, ClassState } from '../models';
export declare function validateChatMessage({ text, timestamp, userId }: IChatMessage): ChatMessageState | undefined;
export declare function validateContentType(content: string): ContentType | undefined;
export declare function validateContent(content: IContent): Content | undefined;
export declare function validateState(classState: IClassState): ClassState | undefined;
export declare function validateDevice({ id, activityStreamId, userId, webRtcStreamIds }: IDevice): DeviceState | undefined;
export declare function validateTrophy(trophy: ITrophy): Trophy | undefined;
//# sourceMappingURL=state.d.ts.map