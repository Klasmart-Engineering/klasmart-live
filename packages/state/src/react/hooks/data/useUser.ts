import { UserID } from '../../../models';
import { UserState } from '../../../ui';
import { useNetworkState } from '../useNetwork';

export function useUser(userId: UserID): UserState | undefined {
  return useNetworkState().class.users[userId];
}