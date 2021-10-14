import { UserRole } from '../models';

export function isAllowedToBecomeHost(role: UserRole): boolean {
    switch(role.toLowerCase()){
        case 'teacher':
            return true;
        default:
            return false;
    }
}