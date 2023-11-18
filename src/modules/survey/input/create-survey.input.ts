import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateSurveyInput {
  @IsString()
  @Field()
  title: string;
}
