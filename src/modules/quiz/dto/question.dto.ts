import { IsNotEmpty, Length } from "class-validator";

export class QuestionDTO {
  @IsNotEmpty()
  @Length(4)
  question: string;

  @IsNotEmpty()
  id: number;
}
