import { debugResponse } from "../responses/debug";
import { json } from "../responses/json";
import { statusText } from "../responses/statusText";
import { websocketUpgrade } from "../responses/websocket";
import { parse as parseCookies } from "cookie";
import { createRemoteJWKSet } from "jose-browser-runtime/jwks/remote";
import { jwtVerify } from "jose-browser-runtime/jwt/verify";
import { Device } from "./device";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import {
  roomReducer,
  RootState,
  Actions,
  Context,
  ContextPayload,
} from "kidsloop-live-state";

type UserDevices = Map<number, Device>;

// move to auth.ts
// can we move all the auth stuff there too?
export interface Token {
  aud: string[];
  email: string;
  exp: number;
  iat: number;
  nbf: number;
  iss: string;
  type: string;
  identity_nonce: string;
  sub: string;
  country: string;
}

export class Room implements DurableObject {
  private clients = new Map<string, UserDevices>();
  private teachers = new Set<string>();

  private deviceId = 0;
  private fanOutDebounceTimeout = null;
  private previousState: RootState;

  public store: EnhancedStore;

  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
    private DEBUG = env.ENVIRONMENT === "dev",
    private JWKS = env.JKWS_URL
      ? createRemoteJWKSet(new URL(env.JKWS_URL))
      : undefined
  ) {
    this.store = configureStore({
      middleware: [],
      // Hooks
      // Trigger fanOutDebounceTimeout
      // Trigger Broadcast
      reducer: {
        room: roomReducer,
      },
    });
    this.previousState = this.store.getState();
  }

  get roomId(): string {
    return this.state.id.toString();
  }

  // move to auth.ts
  private async authenticate(jwt?: string): Promise<Token> {
    if (!jwt) {
      throw new Error("No JWT provided");
    }
    if (!this.JWKS) {
      throw new Error("JWT Decoding information not found");
    }

    const result = await jwtVerify(jwt, this.JWKS, {
      issuer: this.env.JKWS_ISSUER,
      audience: this.env.JKWS_AUDIENCE,
    });
    return result.payload as any as Token;
  }

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request;
    try {
      const cookieHeader = headers.get("Cookie");
      if (!cookieHeader) {
        return statusText(401);
      }
      const cookies = parseCookies(cookieHeader);

      const token = await this.authenticate(cookies["CF_Authorization"]);
      if (!token) {
        return statusText(403);
      }
      const { email } = token;
      if (typeof email !== "string") {
        return statusText(400);
      }

      if (headers.get("Upgrade") === "websocket") {
        const protocol = headers.get("Sec-WebSocket-Protocol");
        if (protocol === "live") {
          return this.accept(token);
        }
      }
      return this.status(request, token);
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG);
    }
  }

  private getUserDevices(userId: string): UserDevices {
    const user = this.clients.get(userId);
    if (user === undefined) {
      const newUser = new Map();
      this.clients.set(userId, newUser);
      return newUser;
    }
    return user;
  }

  private accept(token: Token): Response {
    const { response, ws } = websocketUpgrade("live");

    const userId = token.sub;
    const deviceId = this.deviceId++;
    const context = tokenToContext(token);
    const device = new Device(
      deviceId,
      context,
      ws,
      this,
      this.env.ENVIRONMENT === "dev"
    );
    const userDevices = this.getUserDevices(userId);
    // @TODO can we make the device id deterministic somehow?
    // Eg. If a user connects with their iPad, then disconnects and reconnects,
    // is there a way we can ensure that that device is consistently assigned
    // the same ID. Eg. Mac Address? Keeping an ID in local storage?
    userDevices.set(deviceId, device);
    const userJoinAction = {
      context,
      payload: {},
    };

    this.store.dispatch(Actions.userJoin(userJoinAction));

    const setDeviceAction = {
      context,
      payload: {
        deviceId,
      },
    };
    this.store.dispatch(Actions.setDevice(setDeviceAction));

    return response;
  }

  /**
   THIS MUST BE DELETED
  */
  private status(request: Request, auth: Token) {
    const clients = [...this.clients.entries()].map(
      ([id, devices]) =>
        `${id}: ${[...devices.entries()].map(
          ([id, device]) => `Device: ID ${id}\n`
        )}`
    );
    return json(
      { auth, clients, id: this.state.id.toString(), this: this, request },
      200,
      2
    );
  }

  public disconnectDevice(device: Device): void {
    const userDevices = this.getUserDevices(device.context.userId);
    userDevices.delete(device.deviceId);
  }
}

function tokenToContext(token: Token): Context {
  return {
    userId: token.sub,
    isTeacher: false,
    name: token.email,
  };
}

