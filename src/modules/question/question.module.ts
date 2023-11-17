import { Module } from '@nestjs/common';
import { QuestionResolver } from '@/modules/question/question.resolver';
import { QuestionService } from '@/modules/question/question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '@/modules/question/entity/question.entity';
import { QuestionRepository } from '@/modules/question/question.repository';
import { ServeyModule } from '@/modules/servey/servey.module';
import { ServeyQuestionModule } from '@/modules/join-table/servey-question/servey-question.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question]),
    ServeyModule,
    ServeyQuestionModule,
  ],
  providers: [
    QuestionResolver,
    QuestionService,
    { provide: 'QuestionRepositoryInterface', useClass: QuestionRepository },
  ],
  exports: [QuestionService],
})
export class QuestionModule {}
