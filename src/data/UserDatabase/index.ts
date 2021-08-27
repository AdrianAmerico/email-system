import { userId } from "../../types";
import { BaseDatabase } from "../BaseDatabase";

type id = {
  id: string;
};
export class UserDatabase extends BaseDatabase {
  public findUserByEmail = async (
    email: string
  ):Promise<any> => {
    try {
      const result = await BaseDatabase.connection("lbn_user")
        .select("id")
        .where({ email });
      const userId: userId = { id: result[0] };

      return userId.id as string;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
}
