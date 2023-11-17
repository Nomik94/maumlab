import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { ServeyQuestion } from '@/modules/join-table/servey-question/entity/serveyQuestion.entity';

export interface ServeyQuestionRepositoryInterface
  extends BaseInterfaceRepository<ServeyQuestion> {}
