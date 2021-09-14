export type Result<T,E> = Ok<T> | Error<E>

export type Ok<T> = { kind: 'ok', payload: T }

export type Error<T> = { kind: 'error', payload: T }


export function ok<T>(payload: T): Ok<T> {
    return { kind: 'ok', payload };
}

export function error<E>(payload: E): Error<E> {
    return { kind: 'error', payload };
}

export function isOk<T,E>(x: Result<T,E>): x is Ok<T> {
    return x.kind === 'ok';
}

export function isError<T,E>(x: Result<T,E>): x is Error<E> {
    return x.kind === 'error';
}
