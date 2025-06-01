import { Injectable } from '@nestjs/common';
import { CreateStriperDto } from './dto/create-striper.dto';
import { UpdateStriperDto } from './dto/update-striper.dto';

@Injectable()
export class StripersService {
  create(createStriperDto: CreateStriperDto) {
    return 'This action adds a new striper';
  }

  findAll() {
    return `This action returns all stripers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} striper`;
  }

  update(id: number, updateStriperDto: UpdateStriperDto) {
    return `This action updates a #${id} striper`;
  }

  remove(id: number) {
    return `This action removes a #${id} striper`;
  }
}
