import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StripersService } from './stripers.service';
import { StripersController } from './stripers.controller';

@Module({
  imports: [ConfigModule],
  controllers: [StripersController],
  providers: [StripersService],
})
export class StripersModule {}
