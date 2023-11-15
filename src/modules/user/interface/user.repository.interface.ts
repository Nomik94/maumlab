import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import { User } from '@/modules/user/entity/user.entity';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<User> {}
