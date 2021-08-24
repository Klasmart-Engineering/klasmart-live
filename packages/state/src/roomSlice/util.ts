import { IDevice, IParticipant } from "../../../serialization/src/protobuf";
import { ID } from "../store";

/**
 * A helper function to find whether or not an element of an array
 * exists within that array given the comparator function.
 *
 * This is just a shorthand to handle all the conditional logic
 */
 export function findIndex<T>(cmp: (type: T) => boolean, arr?: T[] | null): number {
    if (!arr) return -1;
    let index = arr.findIndex(cmp);
    if (index === undefined) index = -1;
    return index;
  }
  
  /**
   * Fetches the devices for a given user
   */
  export function getDevices(
    userId: ID,
    participants: { [k: string]: IParticipant },
  ): IDevice[] {
    const user = participants![userId];
    if (!user) {
      throw new Error(
        `Unable to find user with ID: ${userId} in the class participant list`,
      );
    }
    if (!user.devices) {
      user.devices = [];
    }
  
    return user.devices;
  }
  
  /**
   * Attempts to find the device with the given DeviceID for that user
   */
  export function getDevice(
    userId: ID,
    deviceId: string | null | undefined,
    participants: { [k: string]: IParticipant },
  ): IDevice {
    if (!deviceId) throw new Error('No device ID was provided');
  
    const devices = getDevices(userId, participants);
  
    const index = findIndex((d) => d.id === deviceId, devices);
    if (index < 0) {
      throw new Error(
        `Unable to find Device ID: '${deviceId}' in registered devices for user ${userId}`,
      );
    }
    return devices![index];
  }
  