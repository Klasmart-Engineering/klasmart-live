import { Context } from 'kidsloop-live-state';
import { statusText } from '../responses/statusText';
import { error, isError, ok, Result } from './result';
import { parse as parseCookies } from 'cookie';
import { jwtVerify, JWTVerifyOptions } from 'jose-browser-runtime/jwt/verify';
import { createRemoteJWKSet } from 'jose-browser-runtime/jwks/remote';
import {
  FlattenedJWSInput,
  GetKeyFunction,
  JWSHeaderParameters,
  KeyLike,
} from 'jose-browser-runtime/types';

type JWKS = GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>;
const jwksStore: Record<string, undefined | JWKS> = {};

const CLOUDFLARE_TOKEN_KEY = 'CF_Authorization';
const DEVELOPMENT_AUTH_TOKEN_KEY = 'Authorization';
const DEBUG_ISSUER = 'calmid-debug';

export type AuthOptions = {
  options: {
    issuer: string;
    algorithms: string[];
  };
  secretOrPublicKey: KeyLike;
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
    algorithms: ['HS512', 'HS384', 'HS256'],
  },
  // secretOrPublicKey: new Uint8Array(
  //   'iXtZx1D5AqEB0B9pfn+hRQiojeU83jjfoAijfSejamWFa=='
  // ),
  secretOrPublicKey: 'iXtZx1D5AqEB0B9pfn+hRQiojeU83jjfoAijfSejamWFa==',
};

function getJWKS(
  urlString?: string,
  env = 'production'
): Result<AuthConfig, Response> {
  try {
    if (!urlString) {
      return error(statusText(500, 'JWKS Misconfiguration'));
    }

    if (urlString === DEBUG_ISSUER && env === 'dev')
      return ok(DEBUG_AUTH_SECRETS);

    const url = new URL(urlString);
    urlString = url.toString();

    let jwks = jwksStore[urlString];
    if (jwks) return ok(jwks);

    jwks = createRemoteJWKSet(url);
    jwksStore[urlString] = jwks;
    return ok(jwks);
  } catch (e) {
    console.error(e);
  }
  return error(statusText(500, 'JWKS Misconfiguration'));
}

export function getAuthToken(
  { headers }: Request,
  env = 'production'
): Result<TokenDecodeResult, Response> {
  let response: TokenDecodeResult | null = null;
  if (env === 'dev') {
    console.log('Attempting to decode DEV token');
    let devToken = headers.get(DEVELOPMENT_AUTH_TOKEN_KEY);
    devToken = devToken ? devToken.split('Bearer ')[1] : null;
    if (devToken) response = { jwt: devToken, tokenType: TokenType.KidsLoop };
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

export async function authenticate(
  { jwt, tokenType }: TokenDecodeResult,
  JWKSUrl?: string,
  options?: JWTVerifyOptions,
  env?: string
): Promise<Result<Context, Response>> {
  const jwksUrl = tokenType === TokenType.Cloudflare ? JWKSUrl : DEBUG_ISSUER;
  const jwksResult = getJWKS(jwksUrl, env);

  if (isError(jwksResult)) return jwksResult;

  const jwks: AuthConfig = jwksResult.payload;

  try {
    const { payload } = await jwtVerify(jwt, jwks, options);

    const context: Context = {
      userId: payload.sub || 'unknown-user',
      name:
        (payload.email as string) || (payload.name as string) || 'anonymous',
      isTeacher: (payload.teacher as boolean) || false,
    };

    return ok(context);
  } catch (e) {
    return error(statusText(403));
  }
}
