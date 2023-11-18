import { Choice } from '@/modules/choice/entity/choice.entity';
import { Question } from '@/modules/question/entity/question.entity';
import { Servey } from '@/modules/servey/entity/servey.entity';
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
@ObjectType('Response')
export class ServeyResponse {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  readonly id: number;

  @ManyToOne(() => Choice, (choice) => choice.serveyResponse)
  @Field(() => [Choice])
  readonly choice: Choice[];

  @ManyToOne(() => Question, (question) => question.serveyResponse)
  @Field(() => Question)
  readonly question: Question;

  @ManyToOne(() => Servey, (servey) => servey.serveyResponse)
  @Field(() => Servey)
  readonly servey: Servey;

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
