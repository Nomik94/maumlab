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

  @OneToMany(() => ServeyQuestion, (serveyQuestion) => serveyQuestion.servey)
  @Field(() => [ServeyQuestion])
  @JoinTable()
  readonly serveyQuestion: ServeyQuestion[];
}
