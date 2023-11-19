import { CompletedSurveyService } from '@/modules/completed-survey/completed-survey.service';
import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';
import { CreateCompletedSurveyInput } from '@/modules/completed-survey/input/create-completed-survey.input';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class CompletedSurveyResolver {
  constructor(
    private readonly completedSurveyService: CompletedSurveyService,
  ) {}
  @Mutation(() => CompletedSurvey)
  async createCompletedSurvey(
    @Args('input') input: CreateCompletedSurveyInput,
  ) {
    return this.completedSurveyService.createCompletedSurvey(input);
  }
}
