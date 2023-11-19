import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';

export interface CompletedSurveyRepositoryInterface
  extends BaseInterfaceRepository<CompletedSurvey> {
  findOneAndRelationResponse(id: number): Promise<CompletedSurvey>;
}
