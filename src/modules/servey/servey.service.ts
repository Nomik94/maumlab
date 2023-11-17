import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ServeyRepositoryInterface } from '@/modules/servey/interface/servey.repository.interface';
import { CreateServeyInput } from '@/modules/servey/dto/create-servey.input';
import { Servey } from '@/modules/servey/entity/servey.entity';
import { UpdateResult } from 'typeorm';
import { UpdateServeyInput } from '@/modules/servey/dto/update-servey.input';
import { createDate } from '@/common/date';

@Injectable()
export class ServeyService {
  constructor(
    @Inject('ServeyRepositoryInterface')
    private readonly serveyRepository: ServeyRepositoryInterface,
  ) {}

  async createServey(input: CreateServeyInput): Promise<Servey> {
    try {
      const serveyEntity: Servey = this.serveyRepository.create(input);
      return await this.serveyRepository.save(serveyEntity);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAllServey(): Promise<Servey[]> {
    try {
      return this.serveyRepository.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOneByIdServey(id: number): Promise<Servey> {
    const servey: Servey = await this.serveyRepository.findOneById(id);
    if (!servey) {
      throw new NotFoundException('Not Found Servey');
    }
    return servey;
  }

  async updateServey(
    id: number,
    data: UpdateServeyInput,
  ): Promise<UpdateResult> {
    try {
      return await this.serveyRepository.update(id, data);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async removeServey(id: number): Promise<UpdateResult> {
    try {
      const deletedAt: Date = createDate();
      return await this.serveyRepository.update(id, { deletedAt });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
