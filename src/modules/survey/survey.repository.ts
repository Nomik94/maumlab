import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { Survey } from '@/modules/survey/entity/survey.entity';
import { SurveyRepositoryInterface } from '@/modules/survey/interface/survey.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class SurveyRepository
  extends BaseAbstractRepository<Survey>
  implements SurveyRepositoryInterface
{
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
  ) {
    super(surveyRepository);
  }

  async findRelationQuestion(): Promise<Survey[]> {
    return this.surveyRepository
      .createQueryBuilder('survey')
      .leftJoinAndSelect('survey.question', 'question')
      .leftJoinAndSelect('question.choice', 'choice')
      .getMany();
  }

  async findOneRelationQuestion(id: number): Promise<Survey> {
    return this.surveyRepository
      .createQueryBuilder('survey')
      .leftJoinAndSelect('survey.question', 'question')
      .leftJoinAndSelect('question.choice', 'choice')
      .where('survey.id = :id', { id })
      .getOne();
  }
}
