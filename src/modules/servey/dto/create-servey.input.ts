import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateServeyInput {
  @IsString()
  @Field()
  name: string;
}