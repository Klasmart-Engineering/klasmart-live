import { error } from "./responses/error"
import { json } from "./responses/json"
import { redirectProtocol } from "./responses/redirect"
import { statusText } from "./responses/statusText"

export default {
  async fetch(request: Request, { rooms, activityStreams, ENVIRONMENT }: CloudflareEnvironment): Promise<Response> {
    const { headers } = request
    try {
      const url = new URL(request.url)
      if (url.protocol === 'http:') { return redirectProtocol(url, 'https:') }

      const paths = url.pathname.split('/')

      if(paths[1] !== "api") { return statusText(501) }

      switch (paths[2]) {
        case "request":
          return json(request, 200, 2)
        case "headers":
          return json({...request.headers.entries()}, 200, 2)
        case "room":
          return fetchDurableObject(request, rooms, paths[3])
        case "activity":
          return fetchDurableObject(request, activityStreams, paths[3])
      }

      return statusText(404)
    } catch (e) {
      return error(headers, e, ENVIRONMENT === "dev")
    }

    //This should be unreachable
    return statusText(501)
  },
}

function fetchDurableObject(request: Request, namespace: DurableObjectNamespace, idParam?: string) {
  const id = idParam
    ? namespace.idFromString(idParam)
    : namespace.newUniqueId()
  const durableObject = namespace.get(id)
  return durableObject.fetch(request)
}