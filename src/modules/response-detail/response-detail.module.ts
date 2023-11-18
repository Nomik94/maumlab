import { ResponseDetail } from '@/modules/response-detail/entity/response-detail.entity';
import { ResponseDetailResolver } from '@/modules/response-detail/response-detail.resolver';
import { ResponseDetailService } from '@/modules/response-detail/response-detail.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseDetail])],
  providers: [ResponseDetailResolver, ResponseDetailService],
  exports: [ResponseDetailService],
})
export class ResponseDetailModule {}
