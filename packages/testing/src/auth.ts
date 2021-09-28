import { KeyLike, SignJWT } from 'jose/jwt/sign';
import { v4 as uuid } from 'uuid';
import { JWK, parseJwk } from 'jose/jwk/parse';

let SIGNING_KEY: KeyLike;

export type JWT = {
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  sub: string;
  roomid: string;
  userid: string;
  name?: string;
  teacher?: boolean;
  materials?: unknown;
};

const DEBUG_AUTH_SECRETS: { options: { issuer: string }; jwk: JWK } = {
  options: {
    issuer: 'kidsloop-debug',
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

async function getKey() {
  if (SIGNING_KEY) return SIGNING_KEY;
  SIGNING_KEY = await parseJwk(DEBUG_AUTH_SECRETS.jwk);
  return SIGNING_KEY;
}

export async function signToken(token: JWT): Promise<string> {
  const { roomid, userid, name, teacher, materials } = token;
  const payload = {
    roomid,
    userid,
    name,
    teacher,
    materials,
  };
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({
      alg: DEBUG_AUTH_SECRETS.jwk.alg,
    })
    .setIssuedAt(token.iat)
    .setIssuer(DEBUG_AUTH_SECRETS.options.issuer)
    .setSubject(userid)
    .setExpirationTime('2h')
    .sign(await getKey());
  return jwt;
}

export async function generateToken(
  roomid: string,
  index: number
): Promise<{ token: JWT; jwt: string }> {
  const userid = uuid();
  const token: JWT = {
    aud: 'KidsLoop',
    exp: Date.now() + 7200,
    iat: Date.now(),
    iss: 'kidsloop-debug',
    sub: userid,
    roomid: roomid || '',
    userid,
    name: `Test User ${index}`,
    teacher: index === 0,
    materials: [],
  };

  const jwt = await signToken(token);
  return { token, jwt };
}
