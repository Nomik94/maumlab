import { Survey } from '@/modules/survey/entity/survey.entity';
import { SurveyRepository } from '@/modules/survey/survey.repository';
import { SurveyResolver } from '@/modules/survey/survey.resolver';
import { SurveyService } from '@/modules/survey/survey.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  providers: [
    SurveyResolver,
    SurveyService,
    { provide: 'SurveyRepositoryInterface', useClass: SurveyRepository },
  ],
  exports: [SurveyService],
})
export class SurveyModule {}
