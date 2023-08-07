import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { UserService } from "./user.service";
import { user } from "./interface/user";
import { UserDTO } from "./dto/user.dto";
@Controller("/user")
export default class UserController {
  // This  is dependency Injection.
  constructor(private readonly userservice: UserService) {}
  @Get()
  getUser(@Body() { email }: { email: string }): string | user {
    return this.userservice.getUser(email);
  }
  @Post()
  @UsePipes(ValidationPipe)
  adduser(@Body() User: UserDTO) {
    return this.userservice.adduser(User);
  }
  @Get("/all")
  allUsers() {
    return this.userservice.getallUser();
  }
  @Post("/delete")
  deleteUser(@Body() { email }) {
    return this.userservice.deleteUser(email);
  }
}
