import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ServeyService } from '@/modules/servey/servey.service';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { CreateServeyInput } from '@/modules/servey/dto/create-servey.input.dto';
import { UpdateServeyInput } from '@/modules/servey/dto/update-servey.input.dto';
import { UpdateResult } from 'typeorm';

@Resolver()
export class ServeyResolver {
  constructor(private readonly serveyService: ServeyService) {}

  @Query(() => [Servey])
  async getAllServey(): Promise<Servey[]> {
    return this.serveyService.findAllServey();
  }

  @Query(() => Servey)
  async getByIdServey(@Args('id') id: number): Promise<Servey> {
    return this.serveyService.findOneByIdServey(id);
  }

  @Mutation(() => Servey)
  async createServey(@Args('input') input: CreateServeyInput): Promise<Servey> {
    return this.serveyService.createServey(input);
  }

  @Mutation(() => String)
  async updateServey(
    @Args('id') id: number,
    @Args('input') input: UpdateServeyInput,
  ): Promise<string> {
    await this.serveyService.updateServey(id, input);

    return `success Update id:${id}`;
  }

  @Mutation(() => String)
  async deleteServey(@Args('id') id: number): Promise<string> {
    await this.serveyService.removeServey(id);

    return `success Delete id:${id}`;
  }
}