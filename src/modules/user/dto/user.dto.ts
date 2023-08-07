import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
