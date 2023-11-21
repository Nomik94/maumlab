import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { ResponseDetail } from '@/modules/response-detail/entity/response-detail.entity';

export interface ResponseDetailRepositoryInterface
  extends BaseInterfaceRepository<ResponseDetail> {
  findAllRelation(): Promise<ResponseDetail[]>;
  findOneByIdRelation(id: number): Promise<ResponseDetail>;
}
