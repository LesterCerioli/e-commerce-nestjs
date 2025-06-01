import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateChargeDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsString()
  @IsNotEmpty()
  source: string;
}
