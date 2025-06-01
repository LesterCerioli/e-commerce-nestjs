import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreateChargeDto } from './dto/create-charge.dto';
import { CreateStriperDto } from './dto/create-striper.dto';
import { UpdateStriperDto } from './dto/update-striper.dto';

@Injectable()
export class StripersService {
  private readonly stripe: Stripe;

  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_API_KEY'), {
      apiVersion: '2023-10-16',
    });
  }

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

  async createCharge(createChargeDto: CreateChargeDto): Promise<Stripe.Charge> {
    try {
      const charge = await this.stripe.charges.create({
        amount: createChargeDto.amount,
        currency: createChargeDto.currency,
        source: createChargeDto.source,
        description: 'Charge via NestJS app',
      });
      return charge;
    } catch (error) {
      console.error('Stripe charge creation failed:', error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
