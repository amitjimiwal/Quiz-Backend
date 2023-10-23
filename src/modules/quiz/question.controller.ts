import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { QuestionDTO } from "./dto/question.dto";
import { QuestionService } from "./question.service";
import { QuizService } from "./quiz.service";

@Controller("question")
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizservice: QuizService
  ) {}
  @Post("")
  @UsePipes(ValidationPipe)
  async saveQustion(@Body() question: QuestionDTO) {
    console.log(question);
    const quizd = this.quizservice.getQuizByID(question.id);
    return await this.questionService.createQuestion(question,quizd);
  }
}
