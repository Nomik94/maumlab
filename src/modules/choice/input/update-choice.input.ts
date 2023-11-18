import { InputType, PartialType, PickType } from '@nestjs/graphql';
import { CreateChoiceInput } from '@/modules/choice/input/create-choice.input';

@InputType()
export class UpdateChoiceInput extends PartialType(
  PickType(CreateChoiceInput, ['text', 'score'] as const),
) {}
