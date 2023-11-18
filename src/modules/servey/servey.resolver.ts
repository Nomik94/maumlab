import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ServeyService } from '@/modules/servey/servey.service';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { CreateServeyInput } from '@/modules/servey/input/create-servey.input';
import { UpdateServeyInput } from '@/modules/servey/input/update-servey.input';
import { Question } from '@/modules/question/entity/question.entity';
import { QuestionService } from '@/modules/question/question.service';
import { ServeyQuestionService } from '@/modules/join-table/servey-question/servey-question.service';

@Resolver()
export class ServeyResolver {
  constructor(
    private readonly serveyService: ServeyService,
    private readonly questionService: QuestionService,
    private readonly serveyQuestionService: ServeyQuestionService,
  ) {}

  @Query(() => [Servey])
  getAllServey(): Promise<Servey[]> {
    return this.serveyService.findAllServey();
  }

  @Query(() => [Servey])
  getAllMappingQuestionOfServey(): Promise<Servey[]> {
    return this.serveyService.findAllMappingQuestionOfServey();
  }

  @Query(() => Servey)
  getByIdServey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Servey> {
    return this.serveyService.findOneByIdServey(id);
  }

  @Query(() => Servey)
  getMappingQuestionOfServey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Servey> {
    return this.serveyService.findOneMappingQuestionOfServey(id);
  }

  @Mutation(() => Servey)
  createServey(@Args('input') input: CreateServeyInput): Promise<Servey> {
    return this.serveyService.createServey(input);
  }

  @Mutation(() => String)
  async mappingServeyQuestion(
    @Args({ name: 'serveyId', type: () => Int }) serveyId: number,
    @Args({ name: 'questionId', type: () => Int }) questionId: number,
  ): Promise<string> {
    const servey: Servey = await this.serveyService.findOneByIdServey(serveyId);
    const question: Question =
      await this.questionService.findOneByIdQuestion(questionId);
    await this.serveyQuestionService.createServeyQuestion({
      servey,
      question,
    });

    return `Success Mapping Servey id:${serveyId} and Question id:${questionId}`;
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
