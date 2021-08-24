/**
 * A duplicate of the type found in `protobuf.d.ts`
 *
 * This is primarily due to some issues with having
 * enums delcared in .d.ts files
 */
export enum ContentType {
  Blank = 0,
  WebRTCStream = 1,
  ActivityStream = 2,
  H5P = 3,
  Image = 4,
  Video = 5,
  Audio = 6,
}
