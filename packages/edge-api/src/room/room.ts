import { debugResponse } from "../responses/debug"
import { json } from "../responses/json"
import { statusText } from "../responses/statusText"
import { websocketUpgrade } from "../responses/websocket"
import { parse as parseCookies } from "cookie";
import { createRemoteJWKSet } from "jose-browser-runtime/jwks/remote"
import { jwtVerify, JWTVerifyResult } from "jose-browser-runtime/jwt/verify"
import { User } from "./user"
import { ChatMessage } from "./chatMessage"
import { Transport } from "./transport"

export class Room implements DurableObject {
  private clients = new Map<number, Transport>()

  public constructor(
    private state: DurableObjectState,
    private env: CloudflareEnvironment,
    public readonly id = state.id.toString(),
    private DEBUG = env.ENVIRONMENT === "dev",
    private JWKS = env.JKWS_URL ? createRemoteJWKSet(new URL(env.JKWS_URL)) : undefined
    ) {
    setInterval(() => {
      this.clients.forEach((client) => client.checkForTimeout(5000))
    },1000)
  }

  private async authenticate(jwt?: string) {
    if(!jwt) { return }
    if(!this.JWKS) { return }

    const result = await jwtVerify(jwt, this.JWKS, {
      issuer: this.env.JKWS_ISSUER,
      audience: this.env.JKWS_AUDIENCE,
    })
    return result
  }

  public async fetch(request: Request): Promise<Response> {
    const { headers } = request
    try {
      const cookieHeader = headers.get("Cookie")
      if(!cookieHeader) { return statusText(401) }
      const cookies = parseCookies(cookieHeader)

      const auth = await this.authenticate(cookies["CF_Authorization"])
      if(!auth) { return statusText(403) }
      const email = auth.payload.email
      if(typeof email !== "string") { return statusText(400) }


      if (headers.get('Upgrade') === 'websocket') {
        const protocol = headers.get('Sec-WebSocket-Protocol')
        if (protocol === "live") { return this.accept(email) }
      }
      return this.status(request, auth)
    } catch (e) {
      return debugResponse(headers, e, this.DEBUG)
    }
    // This should be unreachable
    return statusText(501)
  }

  private nextDeviceId = 1
  private accept(email: string): Response {
    const { response, ws } = websocketUpgrade("live")

    const deviceId = this.nextDeviceId++;
    const userId = this.initUser(email)
    const client = new Transport(deviceId, userId, ws, this.env, this)
    this.join(client)

    return response
  }

  private status(request: Request, auth: JWTVerifyResult) {
    const clients = [...this.clients.entries()].map(([id, client]) => `${id}: ${this.users.get(client.userId)?.name}`)
    return json({ auth, clients, id: this.state.id.toString(), this: this, request }, 200, 2)
  }

  private nextUserId = 1
  private readonly usersIds = new Map<string, number>()
  private readonly users = new Map<number, User>()
  private initUser(name: string, teacher = false): number {
    const existingId = this.usersIds.get(name)
    if(existingId !== undefined) { return existingId }
    
    const id = this.nextUserId++
    this.usersIds.set(name, id)
    this.users.set(id, { id, name, teacher })
    return id 
  }


  public join(client: Transport): void {
    if (this.clients.has(client.deviceId)) { return; }
    this.clients.set(client.deviceId, client)
  }

  public leave(client: Transport): void {
    const id = client.deviceId
    if (!this.clients.has(id)) { return; }
    this.clients.delete(id)
  }

  private readonly MAX_CHAT_MESSAGES = 1000
  private readonly chatMessages: ChatMessage[] = []
  public chatMessage(userId: number, text: string, timestamp?: number): void {
    this.chatMessages.push({
      userId,
      text,
      timestamp: timestamp || Date.now()
    })
    
    if(timestamp) {
      this.chatMessages.sort((a,b) => a.timestamp - b.timestamp)
    }

    while(this.chatMessages.length > this.MAX_CHAT_MESSAGES) {
      this.chatMessages.shift()
    }

    // Broadcast
  }
}