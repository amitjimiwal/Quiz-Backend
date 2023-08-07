import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuiz } from "./dto/createQuiz.dto";

@Controller("quiz")
export class QuizController {
  constructor(private readonly quizservice: QuizService) {}
  @Get()
  getQuiz(): string {
    return this.quizservice.getQuiz();
  }

  @Post("/create")
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizdata: CreateQuiz) {
    return { data: quizdata };
  }
}
