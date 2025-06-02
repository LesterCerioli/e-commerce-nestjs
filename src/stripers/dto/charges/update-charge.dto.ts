// update-charge.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateChargeDto } from './create-charge.dto';
import { IsString } from 'class-validator';

export class UpdateChargeDto extends PartialType(CreateChargeDto) {
  @IsString()
  id: string;
}