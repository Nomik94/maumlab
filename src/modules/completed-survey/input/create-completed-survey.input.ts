import { CreateResponseInput } from '@/modules/completed-survey/input/create-response.input';
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateCompletedSurveyInput {
  @IsNumber()
  @Field(() => Int)
  surveyId: number;

  @Field(() => [CreateResponseInput])
  response: CreateResponseInput[];
}
