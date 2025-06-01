import { Module } from '@nestjs/common';
import { StripersService } from './stripers.service';
import { StripersController } from './stripers.controller';

@Module({
  controllers: [StripersController],
  providers: [StripersService],
})
export class StripersModule {}
