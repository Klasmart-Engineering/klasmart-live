import { DeviceID, DeviceState, UserID, UserRole, UserState } from "../../models";
import { NewType } from "../../types";
export declare type UserDeviceID = NewType<string, 'UserDeviceID'>;
export declare const newUserDeviceId: (userId: UserID, deviceId: DeviceID) => UserDeviceID;
export interface UserDevice {
    id: UserDeviceID;
    user: UserState;
    device: DeviceState;
}
export declare const useUserDevices: (filterRole?: UserRole | undefined) => UserDevice[];
export declare const useHostUserDevice: () => {
    id: UserDeviceID;
    device: DeviceState;
    user: UserState;
} | undefined;
//# sourceMappingURL=sessions.d.ts.map