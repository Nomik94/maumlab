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
@ObjectType('Servey')
export class Servey {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  readonly id: number;

  @Column()
  @Field()
  readonly name: string;

  @Column({ default: 0 })
  @Field(() => Int)
  readonly completedCount: number;

  @CreateDateColumn()
  @Field()
  readonly createdAt: Date;

  @UpdateDateColumn()
  @Field()
  readonly updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  readonly deletedAt?: Date;

  @OneToMany(() => Question, (question) => question.servey)
  @Field(() => [Question])
  readonly question: Question[];
}
