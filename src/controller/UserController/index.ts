import { Request, Response } from "express";
import { UserApplication } from "../../application/UserApplication";
import { UserDatabase } from "../../data/UserDatabase";

export class UserController {
  constructor(
    private userDatabase = new UserDatabase(),
    private userApplication = new UserApplication()
  ) {}

  public createRecoverPasswordToken = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { email } = req.body!;

      const token = await this.userApplication.isValidUser(email);

      res.status(200).send({ token });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ message: err.message });
      }
    }
  };

  public changeUserPassword = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { token } = req.query;
      const { password } = req.body;

      const userId = (await this.userApplication.changeUserPassword(
        password,
        token
      )) as string;

      res.status(200).send(userId);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ message: err.message });
      }
    }
  };
}
