import { InputType, PartialType } from '@nestjs/graphql';
import { CreateQuestionInput } from '@/modules/question/dto/create-question.input';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {}
