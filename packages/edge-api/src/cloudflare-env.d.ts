export { }

declare global {
  interface CloudflareEnvironment {
    ENVIRONMENT?: string
    activity?: DurableObjectNamespace
    room?: DurableObjectNamespace
    wstest?: DurableObjectNamespace
  }
}
