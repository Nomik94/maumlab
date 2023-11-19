import { ResponseDetail } from '@/modules/completed-survey/entity/response-detail.entity';
import { Survey } from '@/modules/survey/entity/survey.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType('CompletedSurvey')
export class CompletedSurvey {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  readonly id: number;

  @ManyToOne(() => Survey, (survey) => survey.completedSurvey)
  @Field(() => Survey)
  readonly survey: Survey;

  @CreateDateColumn()
  @Field()
  readonly createdAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  readonly deletedAt?: Date;

  @OneToMany(
    () => ResponseDetail,
    (responseDetail) => responseDetail.completedSurvey,
  )
  @Field(() => [ResponseDetail])
  readonly responseDetail: ResponseDetail[];
}
