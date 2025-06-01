import { IsNumber, IsString, IsNotEmpty, IsPositive, Length } from 'class-validator';
export class CreateChargeDto {
  @IsNumber()
  amount: number;
}