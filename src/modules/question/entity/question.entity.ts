import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ServeyQuestion } from '@/modules/join-table/servey-question/entity/serveyQuestion.entity';
import { Choice } from '@/modules/choice/entity/choice.entity';

@Entity()
@ObjectType('Question')
export class Question {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  text: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  deletedAt?: Date;

  @OneToMany(() => ServeyQuestion, (serveyQuestion) => serveyQuestion.question)
  @Field(() => [ServeyQuestion])
  @JoinTable()
  serveyQuestion: ServeyQuestion[];

  @OneToMany(() => Choice, (choice) => choice.question)
  @Field(() => [Choice])
  choice: Choice[];
}
