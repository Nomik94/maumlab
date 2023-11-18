import { Inject, Injectable } from '@nestjs/common';
import { ChoiceRepositoryInterface } from '@/modules/choice/interface/choice.repository.interface';

@Injectable()
export class ChoiceService {
  constructor(
    @Inject('ChoiceRepositoryInterface')
    private readonly choiceRepository: ChoiceRepositoryInterface,
  ) {}
}
