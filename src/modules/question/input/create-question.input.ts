import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateQuestionInput {
  @IsString()
  @Field()
  text: string;

  @IsNumber()
  @Field(() => Int)
  serveyId: number;
}
