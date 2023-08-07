import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizService {
  getQuiz(): string {
    return "Now this  is from service of quiz";
  }
}
