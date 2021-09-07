export function json(x: unknown, status = 200, indent?: number): Response {
    return new Response(
        JSON.stringify(x, undefined, indent),
        {
            status,
            headers: { 'Content-Type': 'application/json' },
        },
    );
}