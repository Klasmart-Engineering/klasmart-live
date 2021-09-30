import pb from 'kidsloop-live-serialization';
import { v4 as uuid } from 'uuid';
import WebSocket from 'ws';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Client } from 'kidsloop-live-state';

import { JWT, generateToken } from './auth';
import { BASE_URL } from '.';

import { Context, Result } from './types';

const { roomReducer, Actions } = Client;

const HEARTBEAT_INTERVAL = 3500;

export class WebsocketClient {
  private _ws: WebSocket | null = null;
  private store: EnhancedStore;
  private url: string;
  private _token?: JWT;
  private _jwt?: string;

  private _results: Result[] = [];

  private hasCalledSetup = false;

  constructor(
    public index: number,
    private roomId: string,
    private ctx: Context
  ) {
    this.store = configureStore({
      middleware: [],
      reducer: {
        room: roomReducer,
      },
    });
    this.url = `${BASE_URL}/${roomId}`;
  }

  get state(): pb.IState {
    return this.store.getState().room;
  }

  get results(): Result[] {
    return this._results;
  }

  get readyState(): 0 | 1 | 2 | 3 | undefined {
    return this._ws?.readyState;
  }

  get token(): JWT {
    if (!this.hasCalledSetup)
      throw new Error(
        'You must call WebsocketClient.setup before trying to access any data'
      );
    return this._token!;
  }

  public send(bytes: Uint8Array): void {
    if (this._ws === null)
      console.error('Tried to send bytes to a null websocket');
    this._ws?.send(bytes);
  }

  public async setup(): Promise<void> {
    const { token, jwt } = await generateToken(this.roomId, this.index);
    this._token = token;
    this._jwt = jwt;
    this.initializeWebsocket();
    this.hasCalledSetup = true;
  }

  public initializeWebsocket(): void {
    this._ws = new WebSocket(this.url, ['live'], {
      headers: {
        Authorization: `Bearer ${this._jwt}`,
        'CF-Access-Client-Id': process.env.CF_CLIENT_ID,
        'CF-Access-Client-Secret': process.env.CF_CLIENT_SECRET,
      },
    });
    this._ws.binaryType = 'arraybuffer';
    this._ws.addEventListener('open', () => {
      setInterval(() => {
        const message = pb.Action.encode({
          id: uuid(),
          heartbeat: {},
        }).finish();
        if (this._ws?.readyState === 1) this._ws?.send(message);
      }, HEARTBEAT_INTERVAL);
    });

    this._ws.addEventListener('message', ({ data }) => {
      const bytes = new Uint8Array(data);
      try {
        const { changes } = pb.StateChanges.decode(bytes);
        if (!changes) return;
        for (const change of changes) {
          const update = new pb.StateDiff(change);
          // this is required to remove the internal protobuf data
          const tempObject = pb.StateDiff.toObject(update);
          const action = update.action;
          if (!action) continue;

          const payload = tempObject[action];
          this.store.dispatch(Actions[action](payload));

          this._results[this.ctx.currentScenario] = {
            scenario: this.ctx.currentScenario,
            name: this.ctx.scenarioTimings[this.ctx.currentScenario].name,
            time:
              new Date().getTime() -
              this.ctx.scenarioTimings[this.ctx.currentScenario].time,
          };
        }
      } catch (e) {
        // Most of these should be the message acknowledgements
        // These aren't necessary for this testing
      }
    });
    this._ws.addEventListener('error', (error) => {
      console.error('Error connecting to websocket:', error);
    });
  }

  public terminateWebsocket(): void {
    this._ws?.terminate();
    this._ws = null;
    this.ctx.disconnectedClients.add(this.index);
  }

  public addResults(results: Result): void {
    this.results[this.ctx.currentScenario] = results;
  }
}
