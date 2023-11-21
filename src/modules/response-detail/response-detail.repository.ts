import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { ResponseDetail } from '@/modules/response-detail/entity/response-detail.entity';
import { ResponseDetailRepositoryInterface } from '@/modules/response-detail/interface/response-detail.repository.interface';
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
  findAllRelation(): Promise<ResponseDetail[]> {
    return this.responseDetailRepository.find({
      relations: ['choice', 'question', 'completedSurvey'],
    });
  }
  findOneByIdRelation(id: number): Promise<ResponseDetail> {
    return this.responseDetailRepository.findOne({
      where: { id },
      relations: ['choice', 'question', 'completedSurvey'],
    });
  }
}
