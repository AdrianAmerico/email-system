import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public create = async (email: string): Promise<any> => {
    try {
      const userId = await BaseDatabase.connection("tabela")
        .where({ email })
        .select("id");
      return userId;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
}
