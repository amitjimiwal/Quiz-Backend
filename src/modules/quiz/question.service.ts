import { Injectable } from "@nestjs/common";
import { Question } from "./question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionDTO } from "./dto/question.dto";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepository: Repository<Question>
  ) {}

  async createQuestion(question: QuestionDTO): Promise<Question> {
    return await this.questionRepository.save(question);
  }
}
