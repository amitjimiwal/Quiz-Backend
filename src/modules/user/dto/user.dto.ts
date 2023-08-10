import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

// https://youtu.be/46tR82yZTa0
