import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';
import { CreateCompletedSurveyInput } from '@/modules/completed-survey/input/create-completed-survey.input';
import { CompletedSurveyRepositoryInterface } from '@/modules/completed-survey/interface/completed-survey.repository.interface';
import {
  IResponseArray,
  ResponseItem,
} from '@/modules/completed-survey/interface/repsonse-array.interface';
import { ResponseDetailService } from '@/modules/response-detail/response-detail.service';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class CompletedSurveyService {
  constructor(
    @Inject('CompletedSurveyRepositoryInterface')
    private readonly completedSurveyRepository: CompletedSurveyRepositoryInterface,
    private readonly dataSource: DataSource,
    private readonly responseDetailService: ResponseDetailService,
  ) {}

  async createCompletedSurvey(
    input: CreateCompletedSurveyInput,
  ): Promise<CompletedSurvey> {
    const { surveyId, response } = JSON.parse(JSON.stringify(input));
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const completedSurveyEntity: CompletedSurvey =
        this.completedSurveyRepository.create({ survey: { id: surveyId } });

      const completedSurvey = await queryRunner.manager.save(
        completedSurveyEntity,
      );
      const completedSurveyId: number = completedSurvey.id;
      const responseArray: IResponseArray[] = response.map(
        (item: ResponseItem) => ({
          ...item,
          completedSurveyId,
        }),
      );
      await this.responseDetailService.createResponseDetailByCompletedSurvey(
        responseArray,
        queryRunner,
      );
      await queryRunner.commitTransaction();
      return completedSurvey;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(e.message);
    } finally {
      await queryRunner.release();
    }
  }

  async findAllCompletedSurvey(): Promise<CompletedSurvey[]> {
    try {
      return await this.completedSurveyRepository.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOneCompletedSurvey(id: number): Promise<CompletedSurvey> {
    const completedSurvey: CompletedSurvey =
      await this.completedSurveyRepository.findOneById(id);
    if (!completedSurvey) {
      throw new NotFoundException(`CompletedSurvey with id:${id} not found`);
    }
    return completedSurvey;
  }

  async findOneAndRelationResponse(id: number): Promise<CompletedSurvey> {
    const completedSurvey =
      await this.completedSurveyRepository.findOneAndRelationResponse(id);
    if (!completedSurvey) {
      throw new NotFoundException(`CompletedSurvey with id:${id} not found`);
    }
    return completedSurvey;
  }
}
