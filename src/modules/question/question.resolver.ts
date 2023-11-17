import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Question } from '@/modules/question/entity/question.entity';
import { CreateQuestionInput } from '@/modules/question/dto/create-question.input';
import { QuestionService } from '@/modules/question/question.service';
import { UpdateQuestionInput } from '@/modules/question/dto/update-question.input';

@Resolver()
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}
  @Mutation(() => Question)
  async createQuestion(
    @Args('input') input: CreateQuestionInput,
  ): Promise<Question> {
    return await this.questionService.createQuestion(input);
  }

  @Query(() => [Question])
  async getAllQuestion(): Promise<Question[]> {
    return this.questionService.findAllQuestion();
  }

  @Query(() => Question)
  async getByIdQuestion(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Question> {
    return this.questionService.findOneByIdQuestion(id);
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

    return `Success Update Question id:${id}`;
  }
}
