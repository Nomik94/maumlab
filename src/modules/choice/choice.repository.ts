import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Choice } from '@/modules/choice/entity/choice.entity';
import { ChoiceRepositoryInterface } from '@/modules/choice/interface/choice.repository.interface';

export class ChoiceRepository
  extends BaseAbstractRepository<Choice>
  implements ChoiceRepositoryInterface
{
  constructor(
    @InjectRepository(Choice)
    private readonly choiceRepository: Repository<Choice>,
  ) {
    super(choiceRepository);
  }
}
