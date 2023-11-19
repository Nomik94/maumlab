import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { ResponseDetail } from '@/modules/completed-survey/entity/response-detail.entity';
import { ResponseDetailRepositoryInterface } from '@/modules/completed-survey/interface/response-detail.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ResponseDetailRepository
  extends BaseAbstractRepository<ResponseDetail>
  implements ResponseDetailRepositoryInterface
{
  constructor(
    @InjectRepository(ResponseDetail)
    private readonly responseDetailRepository: Repository<ResponseDetail>,
  ) {
    super(responseDetailRepository);
  }
}
