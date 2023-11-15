import { Inject, Injectable } from '@nestjs/common';
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
    const userEntity = this.userRepository.create(input);
    const createdUser = await this.userRepository.save(userEntity);
    return this.mapEntityToModel(createdUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  private mapEntityToModel(entity: User): User {
    return { id: entity.id, age: entity.age, gender: entity.gender };
  }
}
