import { QuestionModule } from '@/modules/question/question.module';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { ServeyRepository } from '@/modules/servey/servey.repository';
import { ServeyResolver } from '@/modules/servey/servey.resolver';
import { ServeyService } from '@/modules/servey/servey.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Servey]), QuestionModule],
  providers: [
    ServeyResolver,
    ServeyService,
    { provide: 'ServeyRepositoryInterface', useClass: ServeyRepository },
  ],
  exports: [ServeyService],
})
export class ServeyModule {}
