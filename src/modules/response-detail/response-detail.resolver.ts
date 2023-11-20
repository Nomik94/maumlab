import { ResponseDetail } from '@/modules/response-detail/entity/response-detail.entity';
import { CreateResponseInput } from '@/modules/response-detail/input/create-response.input';
import { UpdateResponsedetailInput } from '@/modules/response-detail/input/update-response-detail.input';
import { ResponseDetailService } from '@/modules/response-detail/response-detail.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ResponseDetailResolver {
  constructor(private readonly responseDetailService: ResponseDetailService) {}
  @Query(() => [ResponseDetail])
  getAllResponseDetail(): Promise<ResponseDetail[]> {
    return this.responseDetailService.findAllResponseDetail();
  }

  @Query(() => ResponseDetail)
  getByIdResponseDetail(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<ResponseDetail> {
    return this.responseDetailService.findOneByIdResponseDetial(id);
  }

  @Mutation(() => ResponseDetail)
  createRepsonseDetail(@Args('input') input: CreateResponseInput) {
    return this.responseDetailService.createResponseDetail(input);
  }

  @Mutation(() => String)
  async updateResponseDetail(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('input') input: UpdateResponsedetailInput,
  ): Promise<string> {
    await this.responseDetailService.updateResponseDetail(id, input);

    return `Success Update ResponseDetail id:${id}`;
  }

  @Mutation(() => String)
  async deleteResponseDetail(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<string> {
    await this.responseDetailService.removeResponseDetail(id);

    return `Success Delete ResponseDetail id:${id}`;
  }
}
