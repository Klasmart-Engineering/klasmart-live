export { };

declare global {
  interface CloudflareEnvironment {
    // CloudflareEnvironment must match wrangler.toml
    ENVIRONMENT?: string
    JWKS_URL?: string
    JWKS_ISSUER?: string
    JWKS_AUDIENCE?: string

    activity?: DurableObjectNamespace
    room?: DurableObjectNamespace
    wstest?: DurableObjectNamespace
  }
}
