import { Request, Response } from "express";

export class UserController {
  public createRecoverPasswordToken = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email } = req.params;

      const userId = ""

    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ message: err.message });
      }
    }
  };

  public changeUserPassword = async(req: Request, res:Response): Promise<void> => {

  }
}
