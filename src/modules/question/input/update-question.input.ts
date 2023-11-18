import { InputType, PartialType, PickType } from '@nestjs/graphql';
import { CreateQuestionInput } from '@/modules/question/input/create-question.input';

@InputType()
export class UpdateQuestionInput extends PartialType(
  PickType(CreateQuestionInput, ['text'] as const),
) {}
