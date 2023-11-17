import { Module } from '@nestjs/common';
import { ServeyResolver } from '@/modules/servey/servey.resolver';
import { ServeyService } from '@/modules/servey/servey.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { ServeyRepository } from '@/modules/servey/servey.repository';
import { ServeyQuestionModule } from '@/modules/join-table/servey-question/servey-question.module';

@Module({
  imports: [TypeOrmModule.forFeature([Servey]), ServeyQuestionModule],
  providers: [
    ServeyResolver,
    ServeyService,
    { provide: 'ServeyRepositoryInterface', useClass: ServeyRepository },
  ],
  exports: [ServeyService],
})
export class ServeyModule {}
