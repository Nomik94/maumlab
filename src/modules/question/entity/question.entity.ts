import { Choice } from '@/modules/choice/entity/choice.entity';
import { ServeyResponse } from '@/modules/servey-response/entity/servey-response.entity';
import { Servey } from '@/modules/servey/entity/servey.entity';
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

  @ManyToOne(() => Servey, (servey) => servey.question)
  @Field(() => Servey)
  readonly servey: Servey;

  @OneToMany(() => Choice, (choice) => choice.question)
  @Field(() => [Choice])
  readonly choice: Choice[];

  @OneToMany(() => ServeyResponse, (serveyResponse) => serveyResponse.question)
  @Field(() => [ServeyResponse])
  readonly serveyResponse: ServeyResponse[];
}
