import { IDevice, IParticipant } from "kidsloop-live-serialization";
import { ID } from "../store";
/**
 * A helper function to find whether or not an element of an array
 * exists within that array given the comparator function.
 *
 * This is just a shorthand to handle all the conditional logic
 */
export declare function findIndex<T>(cmp: (type: T) => boolean, arr?: T[] | null): number;
/**
 * Fetches the devices for a given user
 */
export declare function getDevices(userId: ID, participants: {
    [k: string]: IParticipant;
}): IDevice[];
/**
 * Attempts to find the device with the given DeviceID for that user
 */
export declare function getDevice(userId: ID, deviceId: string | null | undefined, participants: {
    [k: string]: IParticipant;
}): IDevice;
//# sourceMappingURL=util.d.ts.map