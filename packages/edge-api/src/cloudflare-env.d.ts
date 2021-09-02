export { }

declare global {
  interface CloudflareEnvironment {
    ENVIRONMENT?: string
    JKWS_URL?: string
    JKWS_ISSUER?: string
    JKWS_AUDIENCE?: string

    activity?: DurableObjectNamespace
    room?: DurableObjectNamespace
    wstest?: DurableObjectNamespace
  }
}
