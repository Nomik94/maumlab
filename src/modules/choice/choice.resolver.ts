import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChoiceService } from '@/modules/choice/choice.service';
import { Choice } from '@/modules/choice/entity/choice.entity';
import { CreateChoiceInput } from '@/modules/choice/input/create-choice.input';
import { UpdateChoiceInput } from '@/modules/choice/input/update-choice.input';

@Resolver()
export class ChoiceResolver {
  constructor(private readonly choiceService: ChoiceService) {}
  @Mutation(() => Choice)
  createChoice(@Args('input') input: CreateChoiceInput): Promise<Choice> {
    return this.choiceService.createChoice(input);
  }

  @Query(() => [Choice])
  getAllChoice(): Promise<Choice[]> {
    return this.choiceService.findAllChoice();
  }

  @Query(() => Choice)
  getByIdChoice(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Choice> {
    return this.choiceService.findOneByIdChoice(id);
  }

  @Mutation(() => String)
  async updateChoice(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('input')
    input: UpdateChoiceInput,
  ): Promise<string> {
    await this.choiceService.updateChoice(id, input);

    return `Success Update Choice id:${id}`;
  }

  @Mutation(() => String)
  async deleteChoice(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<string> {
    await this.choiceService.removeChoice(id);

    return `Success Delete Choice id:${id}`;
  }
}
