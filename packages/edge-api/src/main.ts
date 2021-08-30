import { error } from "./responses/error"
import { json } from "./responses/json"
import { redirectProtocol } from "./responses/redirect"
import { statusText } from "./responses/statusText"
import MimeType from "whatwg-mimetype"

export default {
  async fetch(request: Request, env: CloudflareEnvironment): Promise<Response> {
    const { headers } = request
    try {
      const url = new URL(request.url)
      if (url.protocol === 'http:') { return redirectProtocol(url, 'https:') }

      const paths = url.pathname.split('/')

      switch(paths[1]) {
        case "api":
          return api(request, env, paths)
        case "h5p":
          url.host = "h5p.kidsloop.live"
          return pageStreamProxy(url.toString())
        default:
          return statusText(501)
      }
    } catch (e) {
      return error(headers, e, env.ENVIRONMENT === "dev")
    }

    //This should be unreachable
    return statusText(501)
  },
}

async function api(request: Request, env: CloudflareEnvironment, paths: string[]) {
  switch (paths[2]) {
    case "request":
      return json(request, 200, 2)
    case "room":
      return fetchDurableObject(request, env.rooms, paths[3])
    case "activity":
      return fetchDurableObject(request, env.activityStreams, paths[3])
  }

  return statusText(404)
}

async function pageStreamProxy(url: string) {
  const request = await fetch(url)
  
  const contentType = request.headers.get("Content-Type")
  if(!contentType) { return request }

  const mimeType = MimeType.parse(contentType)
  if(!mimeType || mimeType.essence !== "text/html") { return request }
  
  return new HTMLRewriter()
      .on("head", {
          element(e) {
              e.prepend(
                  "<script>alert('Hello, asd!')</script>",
                  {html: true}
              )
          }
      })
      .transform(request)
}

function fetchDurableObject(request: Request, namespace: DurableObjectNamespace, idParam?: string) {
  const id = idParam
    ? namespace.idFromString(idParam)
    : namespace.newUniqueId()
  const durableObject = namespace.get(id)
  return durableObject.fetch(request)
}
