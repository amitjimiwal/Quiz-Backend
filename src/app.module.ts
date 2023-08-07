import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { UserService } from "./modules/user/user.service";
import { QuizModule } from "./modules/quiz/quiz.module";
import { QuizService } from "./modules/quiz/quiz.service";

@Module({
  imports: [UserModule, QuizModule],
  controllers: [AppController],
  providers: [AppService, UserService, QuizService]
})
export class AppModule {}
