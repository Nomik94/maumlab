import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ServeyRepositoryInterface } from '@/modules/servey/interface/servey.repository.interface';
import { CreateServeyInput } from '@/modules/servey/input/create-servey.input';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { DataSource, UpdateResult } from 'typeorm';
import { UpdateServeyInput } from '@/modules/servey/input/update-servey.input';
import { createDate } from '@/common/date';
import { QuestionService } from '@/modules/question/question.service';
import { ServeyQuestionService } from '@/modules/join-table/servey-question/servey-question.service';

@Injectable()
export class ServeyService {
  constructor(
    @Inject('ServeyRepositoryInterface')
    private readonly serveyRepository: ServeyRepositoryInterface,
    private readonly questionService: QuestionService,
    private readonly serveyQuestionService: ServeyQuestionService,
    private readonly dataSource: DataSource,
  ) {}

  async createServey(input: CreateServeyInput): Promise<Servey> {
    try {
      const serveyEntity: Servey = this.serveyRepository.create(input);
      return await this.serveyRepository.save(serveyEntity);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAllServey(): Promise<Servey[]> {
    try {
      return this.serveyRepository.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAllMappingQuestionOfServey(): Promise<Servey[]> {
    try {
      return this.serveyRepository.findMappingQuestion();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOneByIdServey(id: number): Promise<Servey> {
    const servey: Servey = await this.serveyRepository.findOneById(id);
    if (!servey) {
      throw new NotFoundException(`Servey with id:${id} not found`);
    }
    return servey;
  }

  async findOneMappingQuestionOfServey(id: number): Promise<Servey> {
    const servey: Servey =
      await this.serveyRepository.findOneMappingQuestion(id);
    if (!servey) {
      throw new NotFoundException(`Servey with id:${id} not found`);
    }
    return servey;
  }

  async updateServey(
    id: number,
    data: UpdateServeyInput,
  ): Promise<UpdateResult> {
    try {
      return await this.serveyRepository.update(id, data);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async removeServey(id: number): Promise<UpdateResult> {
    try {
      const deletedAt: Date = createDate();
      return await this.serveyRepository.update(id, { deletedAt });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
