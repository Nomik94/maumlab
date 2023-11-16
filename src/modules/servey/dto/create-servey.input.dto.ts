import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateServeyInput {
  @Field()
  name: string;
}
