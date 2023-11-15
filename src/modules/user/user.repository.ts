import { Injectable } from '@nestjs/common';
import { BaseAbstractRepository } from '@/common/repository/base.abstract.repository';
import { User } from '@/modules/user/entity/user.entity';
import { UserRepositoryInterface } from '@/modules/user/interface/user.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository
  extends BaseAbstractRepository<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }
}
