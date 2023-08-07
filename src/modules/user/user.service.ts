import { Injectable } from "@nestjs/common";
import { user } from "./interface/user";
// services are like the middlewares that will be getting the data from you like from database.
@Injectable()
export class UserService {
  public users: user[] = [];
  getUser(email: string): user | string {
    const user = this.users.filter((user) => user.email === email);
    return user ? user[0] : "no  such user";
  }
  adduser(userinfo: user): string {
    this.users.push(userinfo);
    return "Successfully added new user";
  }
  getallUser() {
    return this.users;
  }
  deleteUser(email: string): string {
    const user = this.users.filter((user) => user.email === email);
    if (user) {
      const remaininguser = this.users.filter((user) => user.email !== email);
      this.users = remaininguser;
      return "Successfully deleted user";
    }
    return "No Such user exist";
  }
}
