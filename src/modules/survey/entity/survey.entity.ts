import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';
import { Question } from '@/modules/question/entity/question.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType('Survey')
export class Survey {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  readonly id: number;

  @Column()
  @Field()
  readonly title: string;

  @Column()
  @Field()
  readonly content: string;

  @Column()
  @Field()
  readonly endMessage: string;

  @CreateDateColumn()
  @Field()
  readonly createdAt: Date;

  @UpdateDateColumn()
  @Field()
  readonly updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  readonly deletedAt?: Date;

  @OneToMany(() => Question, (question) => question.survey)
  @Field(() => [Question])
  readonly question: Question[];

  @OneToMany(() => CompletedSurvey, (completedSurvey) => completedSurvey.survey)
  @Field(() => [CompletedSurvey])
  readonly completedSurvey: CompletedSurvey;
}
