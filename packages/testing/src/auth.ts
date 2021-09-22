import { SignJWT } from 'jose/jwt/sign';
import { createSecretKey } from 'crypto';
import { v4 as uuid } from 'uuid';

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

const DEBUG_AUTH_OPTIONS = {
  options: {
    issuer: 'calmid-debug',
    algorithms: ['HS512', 'HS384', 'HS256'],
  },
  secretOrPublicKey: createSecretKey(
    Buffer.from('iXtZx1D5AqEB0B9pfn+hRQiojeU83jjfoAijfSejamWFa==')
  ),
};

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
      alg:
        DEBUG_AUTH_OPTIONS.options.algorithms[2] || 'Failed to find algorithm',
    })
    .setIssuedAt(token.iat)
    .setIssuer(DEBUG_AUTH_OPTIONS.options.issuer)
    .setSubject(userid)
    .setExpirationTime('2h')
    .sign(DEBUG_AUTH_OPTIONS.secretOrPublicKey!);
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
    iss: 'calmid-debug',
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
