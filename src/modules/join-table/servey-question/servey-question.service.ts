import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ServeyQuestionRepositoryInterface } from '@/modules/join-table/servey-question/interface/servey-question.repository.interface';
import { CreateServeyQuestionInput } from '@/modules/join-table/servey-question/input/create-servey-question.input';
import { ServeyQuestion } from '@/modules/join-table/servey-question/entity/serveyQuestion.entity';

@Injectable()
export class ServeyQuestionService {
  constructor(
    @Inject('ServeyQuestionRepositoryInterface')
    private readonly serveyQuestionRepository: ServeyQuestionRepositoryInterface,
  ) {}

  async createServeyQuestion(
    input: CreateServeyQuestionInput,
  ): Promise<ServeyQuestion> {
    try {
      const serveyQuestionEntity: ServeyQuestion =
        this.serveyQuestionRepository.create(input);
      return await this.serveyQuestionRepository.save(serveyQuestionEntity);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
