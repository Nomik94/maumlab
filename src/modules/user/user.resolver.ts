import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '@/modules/user/user.service';
import { CreateUserInput } from '@/modules/user/dto/create-user.input.dto';
import { User } from '@/modules/user/entity/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return this.userService.createUser(input);
  }

  @Query(() => [User])
  async getUser(): Promise<User[]> {
    return this.userService.findAll();
  }
}
