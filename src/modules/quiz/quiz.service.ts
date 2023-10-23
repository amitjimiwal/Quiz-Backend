import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuiz } from "./dto/createQuiz.dto";
import { Quiz } from "./quiz.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>
  ) {}
  getQuiz(): string {
    return "Now this  is from service of quiz";
  }
  async getQuizByID(id) {
    return await this.quizRepository.findOne(id);
  }
  async createnewQuiz(quiz: CreateQuiz) {
    return await this.quizRepository.save(quiz);
  }
}
