import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { QuestionDTO } from "./dto/question.dto";
import { QuestionService } from "./question.service";

@Controller("question")
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Post("")
  @UsePipes(ValidationPipe)
  async saveQustion(@Body() question: QuestionDTO) {
    console.log(question);
    return await this.questionService.createQuestion(question);
  }
}
