import { IDevice, IParticipant } from 'kidsloop-live-serialization';
import { ID } from '../store';
/**
 * Fetches the devices for a given user
 */
export declare function getDevices(userId: ID, participants: {
    [k: string]: IParticipant;
}): {
    [k: string]: IDevice;
};
/**
 * Attempts to find the device with the given DeviceID for that user
 */
export declare function getDevice(userId: ID, deviceId: string | null | undefined, participants: {
    [k: string]: IParticipant;
}): IDevice;
//# sourceMappingURL=util.d.ts.map