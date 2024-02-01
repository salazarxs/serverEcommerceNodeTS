import * as jose from "jose";

export const GenerateJWT = async (tokenName: string) => {
  const alg = "HS256";
  const secretKey: Uint8Array = new TextEncoder().encode(process.env.JWT_TOKEN);

  const jwt = await new jose.SignJWT({ tokenName: tokenName })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("1h")
    .sign(secretKey);

  return jwt;
};

// type JwtStruct = `${string}.${string}.${string}`;

export const ValidateJWT = async (jwt: string) => {
  const secretKey: Uint8Array = new TextEncoder().encode(process.env.JWT_TOKEN);
  try {
    await jose.jwtVerify(jwt, secretKey, {
      issuer: "urn:example:issuer",
      audience: "urn:example:audience",
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
