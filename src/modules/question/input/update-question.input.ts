import { InputType, PartialType } from '@nestjs/graphql';
import { CreateQuestionInput } from '@/modules/question/input/create-question.input';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {}
