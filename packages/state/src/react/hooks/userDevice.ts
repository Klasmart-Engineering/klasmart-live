import { DeviceID, DeviceState, UserID, UserRole, UserState } from "../../models";
import { NewType } from "../../types";
import { State } from "../../ui";
import { useNetworkState } from "./state";

export type UserDeviceID = NewType<string, 'UserDeviceID'>

// TODO: Consider changing this to a hash
export const newUserDeviceId = (userId: UserID, deviceId: DeviceID): UserDeviceID => JSON.stringify([userId, deviceId]) as UserDeviceID;

export interface UserDevice {
  id: UserDeviceID,
  user: UserState,
  device: DeviceState,
}

export const useUserDevices = (filterRole?: UserRole) => useNetworkState(state => {
  const userDevices: UserDevice[] = []
  for (const user of Object.values(state.class.users)) {
    if (filterRole !== undefined && user.role !== filterRole) { continue }
    
    for(const deviceId of user.deviceIds) {
      const device = state.class.devices[deviceId]
      if(!device) { continue }
      const id = newUserDeviceId(user.id, device.id)
      userDevices.push({ id, user, device })
    }
  }
  return userDevices;
})

const resolveUserDevice = (state: State, deviceId: DeviceID) => {    
    const device = state.class.devices[deviceId]
    if(!device) { return }

    const user = state.class.users[device.userId];
    if(!user) { return }

    return {
      id: newUserDeviceId(user.id, device.id),
      device,
      user,
    }
}

export const useHostUserDevice = () => useNetworkState(state => {
  if(!state.class.hostDeviceId) { return }
  return resolveUserDevice(state, state.class.hostDeviceId);
})

export const useLocalUserDevice = () => useNetworkState(state => {
  if(!state.network.myDeviceId) {return}
  return resolveUserDevice(state, state.network.myDeviceId);
})