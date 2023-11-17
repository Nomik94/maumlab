import { InputType, PartialType } from '@nestjs/graphql';
import { CreateServeyInput } from '@/modules/servey/dto/create-servey.input';

@InputType()
export class UpdateServeyInput extends PartialType(CreateServeyInput) {}
