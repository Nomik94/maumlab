import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from '@/modules/user/entity/user.entity';
import { UserRepositoryInterface } from '@/modules/user/interface/user.repository.interface';
import { CreateUserInput } from '@/modules/user/dto/create-user.input.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async createUser(input: CreateUserInput): Promise<User> {
    try {
      const userEntity: User = this.userRepository.create(input);
      return await this.userRepository.save(userEntity);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
