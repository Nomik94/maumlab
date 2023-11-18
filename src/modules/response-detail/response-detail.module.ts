import { ResponseDetail } from '@/modules/response-detail/entity/response-detail.entity';
import { ResponseDetailRepository } from '@/modules/response-detail/response-detail.repository';
import { ResponseDetailResolver } from '@/modules/response-detail/response-detail.resolver';
import { ResponseDetailService } from '@/modules/response-detail/response-detail.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseDetail])],
  providers: [
    ResponseDetailResolver,
    ResponseDetailService,
    {
      provide: 'ResponseDetailRepositoryInterface',
      useClass: ResponseDetailRepository,
    },
  ],
  exports: [ResponseDetailService],
})
export class ResponseDetailModule {}
