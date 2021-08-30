import * as EmailValidator from "email-validator";
import { UserDatabase } from "../../data/UserDatabase";
import { Authenticator } from "../../services/authenticator";
import transporter from "../../services/mailTransporter";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.NODEMAILER_USER);
export class UserApplication {
  constructor(
    private userDatabase = new UserDatabase(),
    private authenticator = new Authenticator()
  ) {}
  public isValidUser = async (email: any): Promise<string> => {
    if (!email) {
      throw new Error("invalid email");
    }

    const isValidEmail = EmailValidator.validate(email);

    if (!isValidEmail) {
      throw new Error("invalid email");
    }
    const id = await this.userDatabase.findUserByEmail(email);

    const token = this.authenticator.generateToken(id!);

    const mailInfo = await transporter.sendMail({
      from: `<${process.env.NODEMAILER_USER}>`,
      to: '1fnadrian1@gmail.com',
      subject: "Finalize seu cadastro",
      html: `
         <p>Clique no botão abaixo para recuperar sua senha</p>
         <a href="http://localhost:3003/user/change?token=${token}" target="_blank">Verificar Email</a>
      `,
      text: `
         Clique no link abaixo para concluir seu cadastro na nossa plataforma:
         www.fakelink.com
      `,
    });
    console.log(mailInfo);
    return token;
  };

  public changeUserPassword = async (
    password: any,
    token: any
  ): Promise<any> => {
    try {
      if (!password || !token) {
        throw new Error("invalid token or email");
      }

      const userId = this.authenticator.getTokenData(token);
      if (!userId) {
        throw new Error("user not found or token expired");
      }

      await this.userDatabase.changeUserPassword(userId, password);

      return userId;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
}
