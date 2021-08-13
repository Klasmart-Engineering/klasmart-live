export { }

declare global {
  interface CloudflareEnvironment {
    ENVIRONMENT?: string
    rooms: DurableObjectNamespace
    activityStreams: DurableObjectNamespace
  }
}
