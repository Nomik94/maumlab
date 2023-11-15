import { Module } from '@nestjs/common';
import { UserResolver } from '@/modules/user/user.resolver';
import { UserService } from '@/modules/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@/modules/user/user.repository';
import { User } from '@/modules/user/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserResolver,
    UserService,
    { provide: 'UserRepositoryInterface', useClass: UserRepository },
  ],
  exports: [UserService],
})
export class UserModule {}
