import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export default class UserController {
  constructor(private readonly userservice: UserService) {}
  @Get()
  getHelloUser(): string {
    return this.userservice.getHelloUser();
  }
}
