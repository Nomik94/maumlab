import { Module } from '@nestjs/common';
import { QuestionResolver } from '@/modules/question/question.resolver';
import { QuestionService } from '@/modules/question/question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '@/modules/question/entity/question.entity';
import { QuestionRepository } from '@/modules/question/question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [
    QuestionResolver,
    QuestionService,
    { provide: 'QuestionRepositoryInterface', useClass: QuestionRepository },
  ],
  exports: [QuestionService],
})
export class QuestionModule {}
