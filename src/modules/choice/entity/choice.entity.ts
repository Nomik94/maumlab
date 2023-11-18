import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Question } from '@/modules/question/entity/question.entity';

@Entity()
@ObjectType('Choice')
export class Choice {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  text: string;

  @Column({ default: 0 })
  @Field(() => Int)
  score: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  deletedAt?: Date;

  @ManyToOne(() => Question, (question) => question.choice)
  @Field(() => Int)
  question: Question;
}
