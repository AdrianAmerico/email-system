export class UserApplication {
  public getUserByEmail = async (email: any): Promise<string> => {
    if (!email) {
      throw new Error("invalid email");
      
    }
  };
}
