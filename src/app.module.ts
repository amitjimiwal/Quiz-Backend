import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { UserService } from "./modules/user/user.service";
import { QuizModule } from "./modules/quiz/quiz.module";
import { QuizService } from "./modules/quiz/quiz.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeConfigDatabase from "./config/typeorm.config";

@Module({
  imports: [UserModule, QuizModule, TypeOrmModule.forRoot(typeConfigDatabase)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
