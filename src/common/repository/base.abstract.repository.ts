import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

interface HasId {
  id: number;
}
export abstract class BaseAbstractRepository<T extends HasId>
  implements BaseInterfaceRepository<T>
{
  private entity: Repository<T>;
  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public create(data: DeepPartial<T>): T {
    return this.entity.create(data);
  }

  public createLikeArray(data: DeepPartial<T[]>): T[] {
    return this.entity.create(data);
  }

  public async save(data: DeepPartial<T>): Promise<T> {
    return await this.entity.save(data);
  }

  public async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(options);
  }

  public async findOneByCondition(
    condition: FindOneOptions<T>,
  ): Promise<T> | null {
    return await this.entity.findOne(condition);
  }

  public async findOneById(id: number): Promise<T> | null {
    const option: FindOptionsWhere<T> = {
      id,
    } as FindOptionsWhere<T>;

    return await this.entity.findOneBy(option);
  }

  public async update(
    id: number,
    data: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return await this.entity.update(id, data);
  }
}
