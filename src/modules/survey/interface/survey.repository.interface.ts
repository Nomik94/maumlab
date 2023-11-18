import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { Survey } from '@/modules/survey/entity/survey.entity';

export interface SurveyRepositoryInterface
  extends BaseInterfaceRepository<Survey> {
  findRelationQuestion(): Promise<Survey[]>;
  findOneRelationQuestion(id: number): Promise<Survey>;
}
