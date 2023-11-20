import { createDate } from '@/common/date';
import { IResponseArray } from '@/modules/completed-survey/interface/repsonse-array.interface';
import { ResponseDetail } from '@/modules/response-detail/entity/response-detail.entity';
import { CreateResponseInput } from '@/modules/response-detail/input/create-response.input';
import { ResponseDetailRepositoryInterface } from '@/modules/response-detail/interface/response-detail.repository.interface';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { QueryRunner, UpdateResult } from 'typeorm';

@Injectable()
export class ResponseDetailService {
  constructor(
    @Inject('ResponseDetailRepositoryInterface')
    private readonly responseDetailRepository: ResponseDetailRepositoryInterface,
  ) {}

  async createResponseDetailByCompletedSurvey(
    responseArray: IResponseArray[],
    queryRunner: QueryRunner,
  ): Promise<void> {
    for (const data of responseArray) {
      const { questionId, completedSurveyId, choiceId } = data;
      const responseDetailEntity: ResponseDetail =
        this.responseDetailRepository.create({
          question: { id: questionId },
          choice: { id: choiceId },
          completedSurvey: { id: completedSurveyId },
        });
      await queryRunner.manager.save(responseDetailEntity);
    }
  }

  async createResponseDetail(input: CreateResponseInput) {
    const { questionId, completedSurveyId, choiceId } = input;
    const responseDetailEntity: ResponseDetail =
      this.responseDetailRepository.create({
        question: { id: questionId },
        choice: { id: choiceId },
        completedSurvey: { id: completedSurveyId },
      });
    return await this.responseDetailRepository.save(responseDetailEntity);
  }

  async findAllResponseDetail(): Promise<ResponseDetail[]> {
    try {
      return await this.responseDetailRepository.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOneByIdResponseDetial(id: number): Promise<ResponseDetail> {
    const responseDetail = await this.responseDetailRepository.findOneById(id);
    if (!responseDetail) {
      throw new NotFoundException(`ResponseDetail with id:${id} not found`);
    }
    return responseDetail;
  }

  async updateResponseDetail(id: number, data): Promise<UpdateResult> {
    const { choiceId } = data;
    try {
      return await this.responseDetailRepository.update(id, {
        choice: { id: choiceId },
      });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async removeResponseDetail(id: number): Promise<UpdateResult> {
    try {
      const deletedAt: Date = createDate();
      return await this.responseDetailRepository.update(id, { deletedAt });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
