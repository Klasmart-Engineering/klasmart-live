import encodeUrl from 'encodeurl'

export function redirect(url: string, status = 301): Response {
    const Location = encodeUrl(url)
    return new Response(
        undefined,
        {
            status,
            headers: { Location },
        },
    )
}

export function redirectProtocol(url: URL, protocol: string): Response {
    url.protocol = protocol
    return redirect(url.toString())
}