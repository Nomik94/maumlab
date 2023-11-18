import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { Choice } from '@/modules/choice/entity/choice.entity';

export interface ChoiceRepositoryInterface
  extends BaseInterfaceRepository<Choice> {}
