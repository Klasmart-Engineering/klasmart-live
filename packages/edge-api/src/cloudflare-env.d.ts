export { };

declare global {
  interface CloudflareEnvironment {
    // CloudflareEnvironment must match wrangler.toml
    ENVIRONMENT?: string
    JKWS_URL?: string
    JKWS_ISSUER?: string
    JKWS_AUDIENCE?: string

    activity?: DurableObjectNamespace
    room?: DurableObjectNamespace
    wstest?: DurableObjectNamespace
  }
}
