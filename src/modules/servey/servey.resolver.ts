import { Servey } from '@/modules/servey/entity/servey.entity';
import { CreateServeyInput } from '@/modules/servey/input/create-servey.input';
import { UpdateServeyInput } from '@/modules/servey/input/update-servey.input';
import { ServeyService } from '@/modules/servey/servey.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ServeyResolver {
  constructor(private readonly serveyService: ServeyService) {}

  @Query(() => [Servey])
  getAllServey(): Promise<Servey[]> {
    return this.serveyService.findAllServey();
  }

  @Query(() => [Servey])
  getAllRelationQuestionOfServey(): Promise<Servey[]> {
    return this.serveyService.findAllRelationQuestion();
  }

  @Query(() => Servey)
  getByIdServey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Servey> {
    return this.serveyService.findOneByIdServey(id);
  }

  @Query(() => Servey)
  getRelationQuestionOfServey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Servey> {
    return this.serveyService.findOneRelationQuestion(id);
  }

  @Mutation(() => Servey)
  createServey(@Args('input') input: CreateServeyInput): Promise<Servey> {
    return this.serveyService.createServey(input);
  }

  @Mutation(() => String)
  async updateServey(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('input') input: UpdateServeyInput,
  ): Promise<string> {
    await this.serveyService.updateServey(id, input);

    return `Success Update Servey id:${id}`;
  }

  @Mutation(() => String)
  async deleteServey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<string> {
    await this.serveyService.removeServey(id);

    return `Success Delete Servey id:${id}`;
  }
}
