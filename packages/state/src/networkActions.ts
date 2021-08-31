import { createAction } from "@reduxjs/toolkit"

export const setConnectionCount = createAction<number>('setConnectionCount')

export const setConnectionState = createAction<boolean>('setConnectionState')

export const setRoomId = createAction<string>('setRoomId')