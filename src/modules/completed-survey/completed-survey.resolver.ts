import { CompletedSurveyService } from '@/modules/completed-survey/completed-survey.service';
import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';
import { CreateCompletedSurveyInput } from '@/modules/completed-survey/input/create-completed-survey.input';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CompletedSurveyResolver {
  constructor(
    private readonly completedSurveyService: CompletedSurveyService,
  ) {}
  @Mutation(() => CompletedSurvey)
  async createCompletedSurvey(
    @Args('input') input: CreateCompletedSurveyInput,
  ): Promise<CompletedSurvey> {
    return this.completedSurveyService.createCompletedSurvey(input);
  }

  @Query(() => [CompletedSurvey])
  async getAllCompletedSurvey(): Promise<CompletedSurvey[]> {
    return this.completedSurveyService.findAllCompletedSurvey();
  }

  @Query(() => CompletedSurvey)
  async getByIdCompletedSurvey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<CompletedSurvey> {
    return this.completedSurveyService.findOneCompletedSurvey(id);
  }

  @Query(() => CompletedSurvey)
  async getRelationResponseDetail(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<CompletedSurvey> {
    return this.completedSurveyService.findOneAndRelationResponse(id);
  }
}
