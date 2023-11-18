import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateServeyResponseInput {
  @IsNumber()
  @Field(() => Int)
  serveyId: number;

  @IsNumber()
  @Field(() => Int)
  questionId: number;

  @IsNumber()
  @Field(() => Int)
  choiceId: number;
}
