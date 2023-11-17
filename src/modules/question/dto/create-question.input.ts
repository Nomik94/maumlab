import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateQuestionInput {
  @IsString()
  @Field()
  text: string;
}
