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

@Entity()
@ObjectType('Servey')
export class Servey {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ default: 0 })
  @Field(() => Int)
  completedCount: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @Field({ nullable: true })
  deletedAt?: Date;

  @OneToMany(() => ServeyQuestion, (serveyQuestion) => serveyQuestion.servey)
  @Field(() => [ServeyQuestion])
  @JoinTable()
  serveyQuestion: ServeyQuestion[];
}
