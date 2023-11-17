import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { Servey } from '@/modules/servey/entity/servey.entity';

export interface ServeyRepositoryInterface
  extends BaseInterfaceRepository<Servey> {
  findMappingQuestion(): Promise<Servey[]>;
  findOneMappingQuestion(id: number): Promise<Servey>;
}
