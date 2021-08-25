export function statusText(status = 200, statusText?: string): Response {
  return new Response(
    undefined,
    {
      status,
      statusText,
    },
  )
}