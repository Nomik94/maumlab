import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateChoiceInput {
  @Field()
  @IsString()
  readonly text: string;

  @Field(() => Int)
  @IsNumber()
  readonly score: number;

  @Field(() => Int)
  @IsNumber()
  readonly questionId: number;
}
