import { Field, InputType, Int } from '@nestjs/graphql';
import { Gender } from '@/common/types/gender.type';

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  age: number;

  @Field(() => Gender)
  gender: Gender;
}
