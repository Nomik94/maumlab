import { Survey } from '@/modules/survey/entity/survey.entity';
import { CreateSurveyInput } from '@/modules/survey/input/create-survey.input';
import { UpdateSurveyInput } from '@/modules/survey/input/update-survey.input';
import { SurveyService } from '@/modules/survey/survey.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class SurveyResolver {
  constructor(private readonly surveyService: SurveyService) {}

  @Query(() => [Survey])
  getAllSurvey(): Promise<Survey[]> {
    return this.surveyService.findAllSurvey();
  }

  @Query(() => [Survey])
  getAllRelationQuestionOfSurvey(): Promise<Survey[]> {
    return this.surveyService.findAllRelationQuestion();
  }

  @Query(() => Survey)
  getByIdSurvey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Survey> {
    return this.surveyService.findOneByIdSurvey(id);
  }

  @Query(() => Survey)
  getRelationQuestionOfSurvey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Survey> {
    return this.surveyService.findOneRelationQuestion(id);
  }

  @Mutation(() => Survey)
  createSurvey(@Args('input') input: CreateSurveyInput): Promise<Survey> {
    return this.surveyService.createSurvey(input);
  }

  @Mutation(() => String)
  async updateSurvey(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('input') input: UpdateSurveyInput,
  ): Promise<string> {
    await this.surveyService.updateSurvey(id, input);

    return `Success Update Survey id:${id}`;
  }

  @Mutation(() => String)
  async deleteSurvey(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<string> {
    await this.surveyService.removeSurvey(id);

    return `Success Delete Survey id:${id}`;
  }
}
