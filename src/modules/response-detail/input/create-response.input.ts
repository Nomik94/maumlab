import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateResponseDetailInput {
  @IsNumber()
  @Field(() => Int)
  questionId: number;

  @IsNumber()
  @Field(() => Int)
  choiceId: number;
}

@InputType()
export class CreateResponseInput {
  @IsNumber()
  @Field(() => Int)
  questionId: number;

  @IsNumber()
  @Field(() => Int)
  choiceId: number;

  @IsNumber()
  @Field(() => Int)
  completedSurveyId: number;
}
