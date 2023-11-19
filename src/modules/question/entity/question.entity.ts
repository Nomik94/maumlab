import { Choice } from '@/modules/choice/entity/choice.entity';
import { ResponseDetail } from '@/modules/completed-survey/entity/response-detail.entity';
import { Survey } from '@/modules/survey/entity/survey.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType('Question')
export class Question {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  readonly id: number;

  @Column()
  @Field()
  readonly text: string;

  @CreateDateColumn()
  @Field()
  readonly createdAt: Date;

  @UpdateDateColumn()
  @Field()
  readonly updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  readonly deletedAt?: Date;

  @ManyToOne(() => Survey, (survey) => survey.question)
  @Field(() => Survey)
  readonly survey: Survey;

  @OneToMany(() => Choice, (choice) => choice.question)
  @Field(() => [Choice])
  readonly choice: Choice[];

  @OneToMany(() => ResponseDetail, (responseDetail) => responseDetail.question)
  @Field(() => [ResponseDetail])
  readonly responseDetail: ResponseDetail[];
}
