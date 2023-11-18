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
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Question } from '@/modules/question/entity/question.entity';
import { ServeyResponse } from '@/modules/servey-response/entity/servey-response.entity';

@Entity()
@ObjectType('Choice')
export class Choice {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  readonly id: number;

  @Column()
  @Field()
  readonly text: string;

  @Column({ default: 0 })
  @Field(() => Int)
  readonly score: number;

  @CreateDateColumn()
  @Field()
  readonly createdAt: Date;

  @UpdateDateColumn()
  @Field()
  readonly updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  readonly deletedAt?: Date;

  @ManyToOne(() => Question, (question) => question.choice)
  @Field(() => Question)
  readonly question: Question;

  @OneToMany(() => ServeyResponse, (serveyResponse) => serveyResponse.choice)
  @Field(() => [ServeyResponse])
  readonly serveyResponse: ServeyResponse[];
}
