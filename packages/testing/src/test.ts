import { generateToken } from './auth';
import { jwtVerify, JWTVerifyOptions } from 'jose/jwt/verify';

async function main() {
  const { token, jwt } = await generateToken('', 0);

  console.log(jwt);

  const DEBUG_AUTH_SECRETS = {
    options: {
      issuer: 'calmid-debug',
      algorithms: ['HS512', 'HS384', 'HS256'],
    },
    secretOrPublicKey: 'iXtZx1D5AqEB0B9pfn+hRQiojeU83jjfoAijfSejamWFa==',
  };

  async function authenticate(jwt: string, options?: any) {
    const jwks = DEBUG_AUTH_SECRETS;

    try {
      const { payload } = await jwtVerify(jwt, jwks, options);

      const context = {
        userId: payload.sub || 'unknown-user',
        name:
          (payload.email as string) || (payload.name as string) || 'anonymous',
        isTeacher: (payload.teacher as boolean) || false,
      };
      console.log('Context', context);
    } catch (e) {
      console.error('Failed to verify token', e);
    }
  }

  process.exit(0);
}

main();
