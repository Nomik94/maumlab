import { CreateSurveyInput } from '@/modules/survey/input/create-survey.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSurveyInput extends PartialType(CreateSurveyInput) {}
