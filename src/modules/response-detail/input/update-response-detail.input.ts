import { CreateResponseDetailInput } from '@/modules/response-detail/input/create-response.input';
import { InputType, PickType } from '@nestjs/graphql';

@InputType()
export class UpdateResponsedetailInput extends PickType(
  CreateResponseDetailInput,
  ['choiceId'],
) {}
