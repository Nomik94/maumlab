import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { QuestionRepositoryInterface } from '@/modules/question/interface/question.repository.interface';
import { CreateQuestionInput } from '@/modules/question/dto/create-question.input';
import { Question } from '@/modules/question/entity/question.entity';
import { UpdateQuestionInput } from '@/modules/question/dto/update-question.input';
import { createDate } from '@/common/date';
import { UpdateResult } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QuestionRepositoryInterface')
    private readonly questionRepository: QuestionRepositoryInterface,
  ) {}
  async createQuestion(input: CreateQuestionInput): Promise<Question> {
    try {
      const questionEntity: Question = this.questionRepository.create(input);
      return await this.questionRepository.save(questionEntity);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAllQuestion(): Promise<Question[]> {
    try {
      return await this.questionRepository.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOneByIdQuestion(id: number): Promise<Question> {
    const question: Question = await this.questionRepository.findOneById(id);
    if (!question) {
      throw new NotFoundException('Not Found Question');
    }
    return question;
  }

  async updateQuestion(
    id: number,
    data: UpdateQuestionInput,
  ): Promise<UpdateResult> {
    try {
      return await this.questionRepository.update(id, data);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async removeQuestion(id: number): Promise<UpdateResult> {
    try {
      const deletedAt: Date = createDate();
      return await this.questionRepository.update(id, { deletedAt });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
