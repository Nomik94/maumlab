import { Resolver } from '@nestjs/graphql';
import { ChoiceService } from '@/modules/choice/choice.service';

@Resolver()
export class ChoiceResolver {
  constructor(private readonly choiceService: ChoiceService) {}
}
