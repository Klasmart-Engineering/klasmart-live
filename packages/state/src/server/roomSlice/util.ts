import * as pb from '../../protobuf';
import { ID } from '../../';

/**
 * Fetches the devices for a given user
 */
export function getDevices(
  userId: ID,
  participants: { [k: string]: pb.IParticipant }
): { [k: string]: pb.IDevice } {
  const user = participants[userId];
  if (!user) {
    throw new Error(
      `Unable to find user with ID: ${userId} in the class participant list`
    );
  }
  if (!user.devices) {
    user.devices = {};
  }

  return user.devices;
}

/**
 * Attempts to find the device with the given DeviceID for that user
 */
export function getDevice(
  userId: ID,
  deviceId: string | null | undefined,
  participants: { [k: string]: pb.IParticipant }
): pb.IDevice {
  if (!deviceId) throw new Error('No device ID was provided');

  const devices = getDevices(userId, participants);

  const device = devices[deviceId];
  if (!device) {
    throw new Error(
      `Unable to find Device ID: '${deviceId}' in registered devices for user ${userId}`
    );
  }
  return device;
}
