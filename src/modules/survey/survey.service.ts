import { createDate } from '@/common/date';
import { Survey } from '@/modules/survey/entity/survey.entity';
import { CreateSurveyInput } from '@/modules/survey/input/create-survey.input';
import { UpdateSurveyInput } from '@/modules/survey/input/update-survey.input';
import { SurveyRepositoryInterface } from '@/modules/survey/interface/survey.repository.interface';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';

@Injectable()
export class SurveyService {
  constructor(
    @Inject('SurveyRepositoryInterface')
    private readonly surveyRepository: SurveyRepositoryInterface,
  ) {}

  async createSurvey(input: CreateSurveyInput): Promise<Survey> {
    try {
      const surveyEntity: Survey = this.surveyRepository.create(input);
      return await this.surveyRepository.save(surveyEntity);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAllSurvey(): Promise<Survey[]> {
    try {
      return this.surveyRepository.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAllRelationQuestion(): Promise<Survey[]> {
    try {
      return this.surveyRepository.findRelationQuestion();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOneByIdSurvey(id: number): Promise<Survey> {
    const survey: Survey = await this.surveyRepository.findOneById(id);
    if (!survey) {
      throw new NotFoundException(`Survey with id:${id} not found`);
    }
    return survey;
  }

  async findOneRelationQuestion(id: number): Promise<Survey> {
    const survey: Survey =
      await this.surveyRepository.findOneRelationQuestion(id);
    if (!survey) {
      throw new NotFoundException(`Survey with id:${id} not found`);
    }
    return survey;
  }

  async updateSurvey(
    id: number,
    data: UpdateSurveyInput,
  ): Promise<UpdateResult> {
    try {
      return await this.surveyRepository.update(id, data);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async removeSurvey(id: number): Promise<UpdateResult> {
    try {
      const deletedAt: Date = createDate();
      return await this.surveyRepository.update(id, { deletedAt });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
