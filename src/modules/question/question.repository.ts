import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '@/modules/question/entity/question.entity';
import { QuestionRepositoryInterface } from '@/modules/question/interface/question.repository.interface';

export class QuestionRepository
  extends BaseAbstractRepository<Question>
  implements QuestionRepositoryInterface
{
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {
    super(questionRepository);
  }
  async findOneRelationChoice(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id },
      relations: ['choice'],
    });
  }
}
