import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { Question } from '@/modules/question/entity/question.entity';

export interface QuestionRepositoryInterface
  extends BaseInterfaceRepository<Question> {}
