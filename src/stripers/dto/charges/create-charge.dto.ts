import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateChargeDto {
  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsString()
  paymentSource: string;

  @IsString()
  @IsOptional()
  customerId: string;

  constructor() {
    if (this.amount > 1000000) {
      throw new Error('Amount exceds maximum limit charge');
    }
  }
}
