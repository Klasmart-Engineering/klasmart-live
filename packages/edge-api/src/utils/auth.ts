import { Context } from 'kidsloop-live-state';
import { statusText } from '../responses/statusText';
import { error, isError, ok, okOrUnderined, Result } from './result';
import { parse as parseCookies } from 'cookie';
import { jwtVerify, JWTVerifyOptions } from 'jose-browser-runtime/jwt/verify';
import { createRemoteJWKSet } from 'jose-browser-runtime/jwks/remote';
import { FlattenedJWSInput, GetKeyFunction, JWSHeaderParameters } from 'jose-browser-runtime/types';


type JWKS = GetKeyFunction<JWSHeaderParameters, FlattenedJWSInput>
const jwksStore: Record<string, undefined|JWKS> = {};

function getJWKS(urlString?: string): Result<JWKS,Response> {
  try {
    if(!urlString) { return error(statusText(500, 'JWKS Misconfiguration')); }

    const url = new URL(urlString);
    urlString = url.toString();

    let jwks = jwksStore[urlString];
    if(jwks) { return ok(jwks); }

    jwks = createRemoteJWKSet(url);
    jwksStore[urlString] = jwks;
    return ok(jwks);
  } catch (e) {
    console.error(e);
  }
  return error(statusText(500, 'JWKS Misconfiguration'));

}

export async function authenticate(request: Request, JWKSUrl?: string, options?: JWTVerifyOptions ): Promise<Result<Context, Response>> {
  const jwksResult = getJWKS(JWKSUrl);
  const jwks = okOrUnderined(jwksResult);
  if(isError(jwksResult)) { return jwksResult; }

  const { headers } = request;


  const cookieHeader = headers.get('Cookie');
  if (!cookieHeader) {
    return error(statusText(401));
  }

  const cookies = parseCookies(cookieHeader);
  const jwt = cookies['CF_Authorization'];

  if (!jwt) {
    return error(statusText(401));
  }

  try {
    const { payload } = await jwtVerify(jwt, jwks, options);
  
    if (typeof payload.email !== 'string') {
      return error(statusText(400));
    }

    const context: Context = {
      userId: payload.sub || 'unknown-user',
      name: payload.email || 'anonymous',
      isTeacher: false,
    };

    return ok(context);
  } catch(e) {
    return error(statusText(403));
  }

}