import { InputType, PartialType } from '@nestjs/graphql';
import { CreateServeyInput } from '@/modules/servey/dto/create-servey.input.dto';

@InputType()
export class UpdateServeyInput extends PartialType(CreateServeyInput) {}
