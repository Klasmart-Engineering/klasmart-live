import { ChatMessageState } from '../../../ui';
import { useNetworkState } from '../useNetwork';

export function useMessages(): ChatMessageState[] {
  return useNetworkState().class.chatMessages;
}