import { CompletedSurveyRepository } from '@/modules/completed-survey/completed-survey.repository';
import { CompletedSurveyResolver } from '@/modules/completed-survey/completed-survey.resolver';
import { CompletedSurveyService } from '@/modules/completed-survey/completed-survey.service';
import { CompletedSurvey } from '@/modules/completed-survey/entity/completed-survey.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CompletedSurvey])],
  providers: [
    CompletedSurveyResolver,
    CompletedSurveyService,
    {
      provide: 'CompletedSurveyRepositoryInterface',
      useClass: CompletedSurveyRepository,
    },
  ],
  exports: [CompletedSurveyService],
})
export class CompletedSurveyModule {}
