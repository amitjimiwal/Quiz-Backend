import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Quiz } from "./quiz.entity";

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar"
  })
  question: string;

  @ManyToOne((type) => Quiz, (quiz) => quiz.questions)
  @JoinTable()
  quiz: Quiz;
}
