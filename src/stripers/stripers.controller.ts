import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StripersService } from './stripers.service';
import { CreateStriperDto } from './dto/create-striper.dto';
import { UpdateStriperDto } from './dto/update-striper.dto';

@Controller('stripers')
export class StripersController {
  constructor(private readonly stripersService: StripersService) {}

  @Post()
  create(@Body() createStriperDto: CreateStriperDto) {
    return this.stripersService.create(createStriperDto);
  }

  @Get()
  findAll() {
    return this.stripersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stripersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStriperDto: UpdateStriperDto) {
    return this.stripersService.update(+id, updateStriperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stripersService.remove(+id);
  }
}
