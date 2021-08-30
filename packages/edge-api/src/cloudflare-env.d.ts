export { }

declare global {
  interface CloudflareEnvironment {
    ENVIRONMENT?: string
    activity?: DurableObjectNamespace
    rooms?: DurableObjectNamespace
  }
}
