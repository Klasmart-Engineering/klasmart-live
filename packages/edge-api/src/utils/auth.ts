import { Context } from 'kidsloop-live-state';
import { statusText } from '../responses/statusText';
import { error, isError, ok, Result } from './result';
import { parse as parseCookies } from 'cookie';
import { jwtVerify, JWTVerifyOptions } from 'jose-browser-runtime/jwt/verify';
import { createRemoteJWKSet } from 'jose-browser-runtime/jwks/remote';
import { parseJwk } from 'jose-browser-runtime/jwk/parse';
import {
  FlattenedJWSInput,
  GetKeyFunction,
  JWK,
  JWSHeaderParameters,
  KeyLike,
} from 'jose-browser-runtime/types';

type JWKS = GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;
const jwksStore: Record<string, undefined | JWKS> = {};

const CLOUDFLARE_TOKEN_KEY = 'CF_Authorization';
const DEVELOPMENT_AUTH_TOKEN_KEY = 'Authorization';
const DEBUG_ISSUER = 'kidsloop-debug';
let SIGNING_KEY: KeyLike;

export type AuthOptions = {
  options: {
    issuer: string;
  };
  jwk: JWK;
};

type AuthConfig = JWKS | AuthOptions;

enum TokenType {
  Cloudflare,
  KidsLoop,
}

type TokenDecodeResult = {
  jwt: string;
  tokenType: TokenType;
};

const DEBUG_AUTH_SECRETS: AuthOptions = {
  options: {
    issuer: DEBUG_ISSUER,
  },
  jwk: {
    alg: 'HS256',
    ext: true,
    k:
      '-Io3UrkUPqvSjgwg2H8UB5O3ZugA_Z4l2kzsDdUL1EA2BMAJaoij6HwYyYzgL0K1HZEydGL4sgP3Sk1doLgUIQ',
    key_ops: ['sign', 'verify'],
    kty: 'oct',
  },
};

async function getJWKS(
  urlString?: string,
  env = 'production'
): Promise<Result<AuthConfig, Response>> {
  try {
    if (!urlString) {
      return error(statusText(500, 'JWKS Misconfiguration'));
    }

    let jwks = jwksStore[urlString];
    if (jwks) return ok(jwks);

    if (urlString === DEBUG_ISSUER && env === 'dev') {
      const key = await getKey();
      jwksStore[urlString] = key;
      return ok(key);
    }

    const url = new URL(urlString);

    jwks = createRemoteJWKSet(url);
    jwksStore[urlString] = jwks;
    return ok(jwks);
  } catch (e) {
    console.error(e);
  }
  return error(statusText(500, 'JWKS Misconfiguration'));
}

/**
 * Cloudflare always requires a Cloudflare issued JWT in order to authorize
 * access.
 *
 * If the request doesn't contain a Cloudflare JWT, but does include the
 * Cloudflare Service Authentication headers
 *  - `CF-Access-Client-Id`
 *  - `CF-Access-Client-Secret`
 * (and the service has been set up to accept service authentication tokens)
 * then it will automatically issue a minimal Cloudflare JWT.
 *
 * In the event that we use a custom token to perform authentication eg.
 * KidsLoop Token, then BOTH tokens will be present in the request
 *
 */
export function getAuthToken(
  { headers }: Request,
  env = 'production'
): Result<TokenDecodeResult, Response> {
  let response: TokenDecodeResult | null = null;
  if (env === 'dev') {
    let devToken = headers.get(DEVELOPMENT_AUTH_TOKEN_KEY);
    devToken = devToken ? devToken.split('Bearer ')[1] : null;
    if (devToken && devToken.length > 0) {
      response = { jwt: devToken, tokenType: TokenType.KidsLoop };
      return ok(response);
    }
  }

  const cookieHeader = headers.get('Cookie');
  if (cookieHeader) {
    const cookies = parseCookies(cookieHeader);
    const cf_jwt = cookies[CLOUDFLARE_TOKEN_KEY];
    if (cf_jwt) response = { jwt: cf_jwt, tokenType: TokenType.Cloudflare };
  }
  if (response === undefined || response === null)
    return error(statusText(401));
  return ok(response);
}

async function getKey() {
  if (SIGNING_KEY) return SIGNING_KEY;
  SIGNING_KEY = await parseJwk(DEBUG_AUTH_SECRETS.jwk);
  return SIGNING_KEY;
}

export async function authenticate(
  { jwt, tokenType }: TokenDecodeResult,
  JWKSUrl?: string,
  options?: JWTVerifyOptions,
  env?: string
): Promise<Result<Context, Response>> {
  let jwksUrl: string | undefined = undefined;
  let opts: JWTVerifyOptions | undefined = undefined;

  switch (tokenType) {
    case TokenType.Cloudflare:
      jwksUrl = JWKSUrl || '';
      opts = options || {};
      break;
    case TokenType.KidsLoop:
      jwksUrl = DEBUG_ISSUER;
      opts = { issuer: DEBUG_ISSUER };
      break;
    default:
    // unreachable
  }
  if (jwksUrl === undefined || opts === undefined)
    return error(statusText(500));

  const jwksResult = await getJWKS(jwksUrl, env);

  if (isError(jwksResult)) return jwksResult;

  const jwks: AuthConfig = jwksResult.payload;

  try {
    const { payload } = await jwtVerify(jwt, jwks, opts);
    console.log('Decoded payload', payload);

    const context: Context = {
      userId: payload.sub || 'unknown-user',
      name:
        (payload.email as string) || (payload.name as string) || 'anonymous',
      isTeacher: (payload.teacher as boolean) || false,
    };
    console.log('CONTEXT', context);

    return ok(context);
  } catch (e) {
    console.error('Token verification failed', e);
    return error(statusText(403));
  }
}
