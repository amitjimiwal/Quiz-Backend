import { IsNotEmpty, Length } from "class-validator";

export class CreateQuiz {
  @IsNotEmpty()
  @Length(2, 100)
  title: string;

  @IsNotEmpty()
  @Length(3)
  description: string;
}
