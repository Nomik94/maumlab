import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { ServeyRepositoryInterface } from '@/modules/servey/interface/servey.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ServeyRepository
  extends BaseAbstractRepository<Servey>
  implements ServeyRepositoryInterface
{
  constructor(
    @InjectRepository(Servey)
    private readonly serveyRepository: Repository<Servey>,
  ) {
    super(serveyRepository);
  }

  async findMappingQuestion(): Promise<Servey[]> {
    return this.serveyRepository
      .createQueryBuilder('servey')
      .leftJoinAndSelect('servey.serveyQuestion', 'serveyQuestion')
      .leftJoinAndSelect('serveyQuestion.question', 'question')
      .getMany();
  }

  async findOneMappingQuestion(id: number): Promise<Servey> {
    return this.serveyRepository
      .createQueryBuilder('servey')
      .leftJoinAndSelect('servey.serveyQuestion', 'serveyQuestion')
      .leftJoinAndSelect('serveyQuestion.question', 'question')
      .where('servey.id = :id', { id })
      .getOne();
  }
}
