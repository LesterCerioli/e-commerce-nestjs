import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { StripersService } from './stripers.service';
import { CreateStriperDto } from './dto/create-striper.dto';
import { UpdateStriperDto } from './dto/update-striper.dto';
import { CreateChargeDto } from './dto/create-charge.dto';

@Controller('v1')
export class StripersController {
  constructor(private readonly stripersService: StripersService) {}

  @Post('charges')
  @HttpCode(HttpStatus.CREATED)
  async createCharge(@Body() createChargeDto: CreateChargeDto) {
    return this.stripersService.createCharge(createChargeDto);
  }

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
