import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';
import { CompletedSurveyRepositoryInterface } from '@/modules/completed-survey/interface/complted-survey.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class CompletedSurveyRepository
  extends BaseAbstractRepository<CompletedSurvey>
  implements CompletedSurveyRepositoryInterface
{
  constructor(
    @InjectRepository(CompletedSurvey)
    private readonly completedSurveyRepository: Repository<CompletedSurvey>,
  ) {
    super(completedSurveyRepository);
  }
}
