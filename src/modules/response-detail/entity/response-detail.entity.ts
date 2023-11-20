import { Choice } from '@/modules/choice/entity/choice.entity';
import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';
import { Question } from '@/modules/question/entity/question.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType('ResponseDetail')
export class ResponseDetail {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  readonly id: number;

  @ManyToOne(
    () => CompletedSurvey,
    (completedSurvey) => completedSurvey.responseDetail,
  )
  @Field(() => CompletedSurvey)
  readonly completedSurvey: CompletedSurvey;

  @ManyToOne(() => Choice, (choice) => choice.responseDetail)
  @Field(() => Choice)
  readonly choice: Choice;

  @ManyToOne(() => Question, (question) => question.responseDetail)
  @Field(() => Question)
  readonly question: Question;

  @CreateDateColumn()
  @Field()
  readonly createdAt: Date;

  @UpdateDateColumn()
  @Field()
  readonly updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  readonly deletedAt?: Date;
}
