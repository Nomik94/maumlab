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

  @OneToMany(() => ServeyQuestion, (serveyQuestion) => serveyQuestion.question)
  @Field(() => [ServeyQuestion])
  @JoinTable()
  readonly serveyQuestion: ServeyQuestion[];

  @OneToMany(() => Choice, (choice) => choice.question)
  @Field(() => [Choice])
  readonly choice: Choice[];
}
