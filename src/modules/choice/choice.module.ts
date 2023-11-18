import { Module } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { ChoiceResolver } from './choice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from '@/modules/choice/entity/choice.entity';
import { ChoiceRepository } from '@/modules/choice/choice.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Choice])],
  providers: [
    ChoiceService,
    ChoiceResolver,
    { provide: 'ChoiceRepositoryInterface', useClass: ChoiceRepository },
  ],
  exports: [ChoiceService],
})
export class ChoiceModule {}
