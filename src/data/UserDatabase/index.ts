import { authenticationData } from "../../types";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUserByEmail = async (email: string) => {
    try {
      const result = await BaseDatabase.connection("lbn_user")
        .select("id")
        .where({ email });
      const id: authenticationData = { id: result[0] };
      return id;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
}
