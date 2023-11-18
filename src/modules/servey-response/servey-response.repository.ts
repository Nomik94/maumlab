import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { ServeyResponse } from '@/modules/servey-response/entity/servey-response.entity';
import { ServeyResponseRepositoryInterface } from '@/modules/servey-response/interface/servey-response.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ServeyResponseRepository
  extends BaseAbstractRepository<ServeyResponse>
  implements ServeyResponseRepositoryInterface
{
  constructor(
    @InjectRepository(ServeyResponse)
    private readonly serveyResponseRepository: Repository<ServeyResponse>,
  ) {
    super(serveyResponseRepository);
  }
}
