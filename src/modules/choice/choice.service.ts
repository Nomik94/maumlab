import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ChoiceRepositoryInterface } from '@/modules/choice/interface/choice.repository.interface';
import { CreateChoiceInput } from '@/modules/choice/input/create-choice.input';
import { Choice } from '@/modules/choice/entity/choice.entity';
import { UpdateChoiceInput } from '@/modules/choice/input/update-choice.input';
import { UpdateResult } from 'typeorm';
import { createDate } from '@/common/date';

@Injectable()
export class ChoiceService {
  constructor(
    @Inject('ChoiceRepositoryInterface')
    private readonly choiceRepository: ChoiceRepositoryInterface,
  ) {}

  async createChoice(input: CreateChoiceInput): Promise<Choice> {
    const { questionId, ...choice } = input;
    try {
      const choiceEntity: Choice = this.choiceRepository.create({
        ...choice,
        question: { id: questionId },
      });
      return await this.choiceRepository.save(choiceEntity);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAllChoice(): Promise<Choice[]> {
    try {
      return await this.choiceRepository.findAll();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOneByIdChoice(id: number): Promise<Choice> {
    const choice: Choice = await this.choiceRepository.findOneById(id);
    if (!choice) {
      throw new NotFoundException(`Choice with id:${id} not found`);
    }
    return choice;
  }

  async updateChoice(
    id: number,
    data: UpdateChoiceInput,
  ): Promise<UpdateResult> {
    try {
      return await this.choiceRepository.update(id, data);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async removeChoice(id: number): Promise<UpdateResult> {
    try {
      const deletedAt: Date = createDate();
      return await this.choiceRepository.update(id, { deletedAt });
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
