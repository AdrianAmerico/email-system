import * as EmailValidator from "email-validator";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/authenticator";

export class UserApplication {
  constructor(
    private userDatabase = new UserDatabase(),
    private authentitacor = new Authenticator()
  ) {}
  public isValidUser = async (email: any): Promise<any> => {
    if (!email) {
      throw new Error("invalid email");
    }

    const isValidEmail = EmailValidator.validate(email);

    if (!isValidEmail) {
      throw new Error("invalid email");
    }
    const id = await this.userDatabase.findUserByEmail(email);

    const token = this.authentitacor.generateToken(id!);

    return token;
  };
}
