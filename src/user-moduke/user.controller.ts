import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './interface/user';
@Controller('/user')
export default class UserController {
  constructor(private readonly userservice: UserService) {}
  @Get()
  getUser(@Body() { email }: { email: string }): string | user {
    return this.userservice.getUser(email);
  }
  @Post()
  adduser(@Body() User: user) {
    return this.userservice.adduser(User);
  }
  @Get('/all')
  allUsers() {
    return this.userservice.getallUser();
  }
  @Post('/delete')
  deleteUser(@Body() { email }) {
    return this.userservice.deleteUser(email);
  }
}
