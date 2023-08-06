import { Injectable } from '@nestjs/common';
// services are like the middlewares that will be getting the data from you like from database.
@Injectable()
export class UserService {
  getHelloUser(): string {
    return 'Hemmloo User!';
  }
  getAmitUser(): string {
    return ' hello amit user';
  }
}
