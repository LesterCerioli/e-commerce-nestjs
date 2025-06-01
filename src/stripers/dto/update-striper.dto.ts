import { PartialType } from '@nestjs/mapped-types';
import { CreateStriperDto } from './create-striper.dto';

export class UpdateStriperDto extends PartialType(CreateStriperDto) {}
