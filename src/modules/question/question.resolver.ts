import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Question } from '@/modules/question/entity/question.entity';
import { CreateQuestionInput } from '@/modules/question/input/create-question.input';
import { QuestionService } from '@/modules/question/question.service';
import { UpdateQuestionInput } from '@/modules/question/input/update-question.input';

@Resolver()
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}
  @Query(() => [Question])
  getAllQuestion(): Promise<Question[]> {
    return this.questionService.findAllQuestion();
  }

  @Query(() => Question)
  getByIdQuestion(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Question> {
    return this.questionService.findOneByIdQuestion(id);
  }

  @Query(() => Question)
  getRelationChoice(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Question> {
    return this.questionService.findOneRelationChoice(id);
  }

  @Mutation(() => Question)
  createQuestion(@Args('input') input: CreateQuestionInput): Promise<Question> {
    return this.questionService.createQuestion(input);
  }

  @Mutation(() => String)
  async updateQuestion(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('input') input: UpdateQuestionInput,
  ): Promise<string> {
    await this.questionService.updateQuestion(id, input);

    return `Success Update Question id:${id}`;
  }

  @Mutation(() => String)
  async deleteQuestion(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<string> {
    await this.questionService.removeQuestion(id);

    return `Success Delete Question id:${id}`;
  }
}
