import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { Question } from '@/modules/question/entity/question.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType('ServeyQuestion')
export class ServeyQuestion {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ManyToOne(() => Servey, (servey) => servey.id)
  @Field(() => Servey)
  servey: Servey;

  @ManyToOne(() => Question, (question) => question.id)
  @Field(() => Question)
  question: Question;
}
