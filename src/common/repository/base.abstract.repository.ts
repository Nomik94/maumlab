import { BaseInterfaceRepository } from '@/common/repository/base.interface.repository';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

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

  public async save(data: DeepPartial<T>): Promise<T> {
    return await this.entity.save(data);
  }

  public async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(options);
  }

  public async findByCondition(
    condition: FindOneOptions<T>,
  ): Promise<T> | undefined {
    return await this.entity.findOne(condition);
  }

  public async findOneById(id: any): Promise<T> | undefined {
    const option: FindOptionsWhere<T> = {
      id,
    };

    return await this.entity.findOneBy(option);
  }

  public async remove(data: T): Promise<T> {
    return await this.entity.remove(data);
  }
}
