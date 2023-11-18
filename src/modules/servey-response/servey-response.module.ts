import { ServeyResponse } from '@/modules/servey-response/entity/servey-response.entity';
import { ServeyResponseResolver } from '@/modules/servey-response/servey-response.resolver';
import { ServeyResponseService } from '@/modules/servey-response/servey-response.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ServeyResponse])],
  providers: [ServeyResponseResolver, ServeyResponseService],
  exports: [ServeyResponseService],
})
export class ServeyResponseModule {}
