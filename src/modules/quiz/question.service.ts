import { Injectable } from "@nestjs/common";
import { Question } from "./question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionDTO } from "./dto/question.dto";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepository: Repository<Question>
  ) {}

  async createQuestion(question: QuestionDTO, quiz: Quiz): Promise<Question> {
    return await this.questionRepository.save({ question: question.question });
  }
}
