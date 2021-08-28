import * as jwt from "jsonwebtoken";
import { authenticationData, payload } from "../types";
export class Authenticator {
  generateToken = (payload: authenticationData): string => {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "24h",
    });
  };

  getTokenData = (token: string): string => {
    const result = jwt.verify(token, process.env.JWT_KEY as string) as payload;
    const id = result.id.id;
    return id;
  };
}
