/*
  Examples:

  const generateStringId = idGenerator(newDeviceId);
  console.log(generateStringId()) // "1"
  console.log(generateStringId()) // "2"

  Given:
  - a wrapping type DeviceID
  - a constructor newDeviceId: (s: string) => DeviceID

  const generateDeviceId = idGenerator(newDeviceId);
  console.log(generateDeviceId()) // "1"
  console.log(generateDeviceId()) // "2"

  Can also define a starting id:

  const generateDeviceId2 = idGenerator(newDeviceId, 10);
  console.log(generateDeviceId2()) // "10"
  console.log(generateDeviceId2()) // "11"
*/
export const idGenerator = <T extends string>(
  wrapper: (s: string) => T = (x: string) => x as T,
  id = 1
) =>
  (): T => wrapper(`${id++}`);