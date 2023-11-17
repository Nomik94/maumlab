import { Module } from '@nestjs/common';
import { ServeyQuestionService } from './servey-question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeyQuestion } from '@/modules/join-table/servey-question/entity/serveyQuestion.entity';
import { ServeyQuestionRepository } from '@/modules/join-table/servey-question/servey-question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ServeyQuestion])],
  providers: [
    ServeyQuestionService,
    {
      provide: 'ServeyQuestionRepositoryInterface',
      useClass: ServeyQuestionRepository,
    },
  ],
  exports: [ServeyQuestionService],
})
export class ServeyQuestionModule {}
