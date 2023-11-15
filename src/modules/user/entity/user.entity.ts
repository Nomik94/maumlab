import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '@/common/types/gender.type';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

registerEnumType(Gender, { name: 'Gender' });
@Entity()
@ObjectType('User')
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  age: number;

  @Column({ type: 'enum', enum: Gender, default: Gender.MAN })
  @Field(() => Gender)
  gender: Gender;
}
