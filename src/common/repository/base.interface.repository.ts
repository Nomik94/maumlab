import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface BaseInterfaceRepository<T> {
  create(data: DeepPartial<T>): T;
  save(data: DeepPartial<T>): Promise<T>;
  findOneById(id: unknown): Promise<T>;
  findOneByCondition(condition: FindOneOptions<T>): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  update(id: unknown, data: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
  softDelete(id: number): Promise<UpdateResult>;
}
