import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServeyQuestion } from '@/modules/join-table/servey-question/entity/serveyQuestion.entity';
import { ServeyQuestionRepositoryInterface } from '@/modules/join-table/servey-question/interface/servey-question.repository.interface';

export class ServeyQuestionRepository
  extends BaseAbstractRepository<ServeyQuestion>
  implements ServeyQuestionRepositoryInterface
{
  constructor(
    @InjectRepository(ServeyQuestion)
    private readonly serveyQuestionRepository: Repository<ServeyQuestion>,
  ) {
    super(serveyQuestionRepository);
  }
}
