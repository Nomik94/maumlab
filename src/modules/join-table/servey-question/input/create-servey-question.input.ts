import { Field, InputType } from '@nestjs/graphql';
import { Question } from '@/modules/question/entity/question.entity';
import { Servey } from '@/modules/servey/entity/servey.entity';

@InputType()
export class CreateServeyQuestionInput {
  @Field(() => Servey)
  servey: Servey;

  @Field(() => Question)
  question: Question;
}
