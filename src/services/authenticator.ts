import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userId } from "../types";

dotenv.config();

const { JWT_KEY } = process.env;

export class Authenticator {
  public generateToken = (payload: any): string => {
    return jwt.sign(payload as string, JWT_KEY as string, {
      expiresIn: 64600
    });
  };

  public getTokenData = (token: string): string => {
    return jwt.verify(token, JWT_KEY as string) as string;
  };
}
